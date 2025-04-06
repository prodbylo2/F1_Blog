import sqlite3
import requests
import time
import os
from datetime import datetime
from typing import Optional, Dict, Any

# === CONFIGURATION ===
DB_NAME = "f1_data_2000_2025.db"
BASE_URL = "http://api.jolpi.ca/ergast/f1"
HEADERS = {"Accept": "application/json"}

# === STEP 1: CREATE DATABASE AND TABLES ===

def init_db():
    if os.path.exists(DB_NAME):
        print(f"Database '{DB_NAME}' already exists. Connecting...")
    else:
        print(f"Creating database '{DB_NAME}'...")

    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()

    # Create race_results table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS race_results (
        season INTEGER,
        round INTEGER,
        race_name TEXT,
        race_date TEXT,
        driver_id TEXT,
        driver_name TEXT,
        constructor TEXT,
        grid INTEGER,
        position INTEGER,
        points REAL
    )
    ''')

    conn.commit()
    return conn, cursor

# === STEP 2: FETCH DATA FROM API ===

def fetch_json(url: str, max_retries: int = 5) -> Optional[Dict[str, Any]]:
    retry_count = 0
    base_delay = 1  # Start with 1 second delay

    while retry_count < max_retries:
        try:
            response = requests.get(url, headers=HEADERS)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.HTTPError as e:
            if e.response.status_code == 429:  # Rate limit exceeded
                retry_delay = base_delay * (2 ** retry_count)  # Exponential backoff
                print(f"Rate limit exceeded. Waiting {retry_delay} seconds...")
                time.sleep(retry_delay)
                retry_count += 1
                continue
            print(f"HTTP Error: {e}")
        except requests.RequestException as e:
            print(f"Error fetching data: {e}")
        return None
    
    print(f"Max retries ({max_retries}) exceeded. Skipping URL: {url}")
    return None

# === STEP 3: PARSE AND STORE DATA ===

def race_exists(cursor, season: int, round_num: int) -> bool:
    cursor.execute(
        'SELECT COUNT(*) FROM race_results WHERE season = ? AND round = ?',
        (season, round_num)
    )
    return cursor.fetchone()[0] > 0

def store_race_results(cursor, season_data):
    races = season_data.get('MRData', {}).get('RaceTable', {}).get('Races', [])
    for race in races:
        race_name = race.get('raceName')
        race_date = race.get('date')
        round_num = int(race.get('round'))
        season = int(race.get('season'))

        for result in race.get('Results', []):
            driver = result.get('Driver', {})
            constructor = result.get('Constructor', {}).get('name', 'Unknown')
            driver_name = f"{driver.get('givenName')} {driver.get('familyName')}"
            driver_id = driver.get('driverId')

            position = int(result.get('position')) if result.get('position').isdigit() else None
            grid = int(result.get('grid', 0))
            points = float(result.get('points', 0.0))

            cursor.execute('''
            INSERT INTO race_results (
                season, round, race_name, race_date,
                driver_id, driver_name, constructor,
                grid, position, points
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                season, round_num, race_name, race_date,
                driver_id, driver_name, constructor,
                grid, position, points
            ))

# === STEP 4: MAIN LOGIC ===

def main():
    conn, cursor = init_db()
    current_year = datetime.now().year

    for season in range(2000, current_year + 1):
        print(f"\nFetching races for {season}...")
        season_url = f"{BASE_URL}/{season}.json"
        season_data = fetch_json(season_url)
        if not season_data:
            continue

        races = season_data.get('MRData', {}).get('RaceTable', {}).get('Races', [])
        for race in races:
            round_num = int(race.get('round'))
            
            # Skip if we already have this race's data
            if race_exists(cursor, season, round_num):
                print(f"  → Skipping {season} Round {round_num} (already in database)")
                continue

            print(f"  → Fetching results for {season} Round {round_num}...", end=' ')
            race_url = f"{BASE_URL}/{season}/{round_num}/results.json"
            result_data = fetch_json(race_url)

            if result_data:
                store_race_results(cursor, result_data)
                conn.commit()
                print("Done.")
            else:
                print("Failed.")

            # Adaptive rate limiting
            time.sleep(2)  # More conservative rate limit

    print("\n✅ All data fetched and stored successfully.")
    conn.close()

if __name__ == "__main__":
    main()
