import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">F1 Analytics</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into detailed statistics, performance metrics, and technical analysis from the world of Formula 1.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-blue-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Driver Standings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">2025 Season</p>
              <p className="text-sm opacity-80 mt-2">Updated after Monaco GP</p>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-700 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Team Standings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">Constructor Points</p>
              <p className="text-sm opacity-80 mt-2">Top team: Red Bull Racing</p>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-800 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Race Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">Performance Metrics</p>
              <p className="text-sm opacity-80 mt-2">Lap times, pit stops, and more</p>
            </CardContent>
          </Card>
        </div>

        {/* Driver Standings Table */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">2025 Driver Standings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="py-3 px-4 text-left border-b">Position</th>
                    <th className="py-3 px-4 text-left border-b">Driver</th>
                    <th className="py-3 px-4 text-left border-b">Team</th>
                    <th className="py-3 px-4 text-left border-b">Points</th>
                    <th className="py-3 px-4 text-left border-b">Wins</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">1</td>
                    <td className="py-3 px-4 border-b font-medium">Max Verstappen</td>
                    <td className="py-3 px-4 border-b">Red Bull Racing</td>
                    <td className="py-3 px-4 border-b">156</td>
                    <td className="py-3 px-4 border-b">4</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">2</td>
                    <td className="py-3 px-4 border-b font-medium">Lewis Hamilton</td>
                    <td className="py-3 px-4 border-b">Mercedes</td>
                    <td className="py-3 px-4 border-b">143</td>
                    <td className="py-3 px-4 border-b">3</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">3</td>
                    <td className="py-3 px-4 border-b font-medium">Charles Leclerc</td>
                    <td className="py-3 px-4 border-b">Ferrari</td>
                    <td className="py-3 px-4 border-b">129</td>
                    <td className="py-3 px-4 border-b">2</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">4</td>
                    <td className="py-3 px-4 border-b font-medium">Lando Norris</td>
                    <td className="py-3 px-4 border-b">McLaren</td>
                    <td className="py-3 px-4 border-b">112</td>
                    <td className="py-3 px-4 border-b">1</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">5</td>
                    <td className="py-3 px-4 border-b font-medium">Carlos Sainz</td>
                    <td className="py-3 px-4 border-b">Ferrari</td>
                    <td className="py-3 px-4 border-b">98</td>
                    <td className="py-3 px-4 border-b">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Lap Time Comparison</CardTitle>
            </CardHeader>
            <CardContent className="h-64 flex items-center justify-center bg-gray-100 rounded">
              <p className="text-gray-500 text-center">
                [Interactive Lap Time Chart]<br />
                <span className="text-sm">Compare driver performance across different circuits</span>
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Team Performance Trends</CardTitle>
            </CardHeader>
            <CardContent className="h-64 flex items-center justify-center bg-gray-100 rounded">
              <p className="text-gray-500 text-center">
                [Team Performance Graph]<br />
                <span className="text-sm">Track team progress throughout the season</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technical Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">Technical Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Aerodynamic Efficiency</h3>
                <p className="text-gray-600 mb-4">Analysis of downforce vs. drag coefficients across teams</p>
                <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-gray-500 text-sm">[Aerodynamic Comparison Chart]</p>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Power Unit Performance</h3>
                <p className="text-gray-600 mb-4">Comparative analysis of engine performance metrics</p>
                <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-gray-500 text-sm">[Power Unit Performance Chart]</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
