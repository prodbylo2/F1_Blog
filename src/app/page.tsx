import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden flex items-center transition-colors duration-300" style={{ background: `linear-gradient(to right, var(--gradient-from), var(--gradient-to))` }}>
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated racing lines */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i}
                className="absolute h-1 bg-white rounded-full animate-[race_5s_linear_infinite]" 
                style={{
                  width: `${Math.random() * 300 + 100}px`,
                  top: `${Math.random() * 100}%`,
                  left: `-300px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 3 + 3}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold animate-[fadeIn_1s_ease-in] transition-colors duration-300" style={{ color: `var(--hero-heading-text)` }}>
              G-FORCE <span className="transition-colors duration-300" style={{ color: `var(--hero-heading-accent)` }}>F1 BLOG</span>
            </h1>
            <p className="text-xl md:text-2xl animate-[fadeIn_1s_ease-in_0.3s_both]">
              Your ultimate destination for Formula 1 news, analytics, and discussions
            </p>
            <div className="flex gap-4 animate-[fadeIn_1s_ease-in_0.6s_both]">
              <Button asChild size="lg" className="transition-colors duration-300 hover:opacity-90" style={{ backgroundColor: `var(--hero-primary-bg)`, color: `var(--hero-primary-text)` }}>
                <Link href="/news">Latest News</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="transition-colors duration-300 hover:bg-white/10" style={{ borderColor: `var(--hero-outline-border)`, color: `var(--hero-outline-text)` }}>
                <Link href="/analytics">View Analytics</Link>
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center animate-[fadeIn_1s_ease-in_0.9s_both]">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 rounded-full border-4" style={{ borderColor: `var(--hero-logo-border)` }}></div>
              <div className="absolute inset-4 rounded-full border-4" style={{ borderColor: `var(--hero-logo-border)` }}></div>
              <div className="absolute inset-8 rounded-full border-4" style={{ borderColor: `var(--hero-logo-border)` }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full w-32 h-32 flex items-center justify-center" style={{ backgroundColor: `var(--hero-logo-bg)` }}>
                  <span className="text-4xl font-bold transition-colors duration-300" style={{ color: `var(--hero-logo-text)` }}>F1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 transition-colors duration-300" style={{ background: `var(--section-bg)` }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300" style={{ color: `var(--heading-color)` }}>Explore Formula 1 Like Never Before</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{ background: `var(--card-bg)`, borderColor: `var(--card-border)` }}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: `var(--icon-bg)` }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: `var(--icon-color)` }}>
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
                    <path d="M18 14h-8"/>
                    <path d="M15 18h-5"/>
                    <path d="M10 6h8v4h-8V6Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300" style={{ color: `var(--heading-color)` }}>Latest News</h3>
                <p className="transition-colors duration-300" style={{ color: `var(--text-color)` }}>Stay updated with the latest news, race results, and driver updates from the F1 world.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{ background: `var(--card-bg)`, borderColor: `var(--card-border)` }}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: `var(--icon-bg)` }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: `var(--icon-color)` }}>
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300" style={{ color: `var(--heading-color)` }}>In-depth Analytics</h3>
                <p className="transition-colors duration-300" style={{ color: `var(--text-color)` }}>Explore detailed performance analytics, race statistics, and technical breakdowns.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{ background: `var(--card-bg)`, borderColor: `var(--card-border)` }}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: `var(--icon-bg)` }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: `var(--icon-color)` }}>
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300" style={{ color: `var(--heading-color)` }}>F1 Chatbot</h3>
                <p className="transition-colors duration-300" style={{ color: `var(--text-color)` }}>Chat with our AI-powered F1 expert to get answers to all your Formula 1 questions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 transition-colors duration-300" style={{ background: `var(--section-alt-bg)` }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 transition-colors duration-300" style={{ color: `var(--heading-color)` }}>Ready to Dive Into the World of Formula 1?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto transition-colors duration-300" style={{ color: `var(--text-color)` }}>Explore our comprehensive coverage of races, drivers, teams, and technology.</p>
          <Button asChild size="lg" className="transition-colors duration-300" style={{ backgroundColor: `var(--primary)`, color: `var(--primary-foreground)` }}>
            <Link href="/news">Start Exploring</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
