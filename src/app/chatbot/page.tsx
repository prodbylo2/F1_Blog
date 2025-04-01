import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

export default function ChatbotPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">F1 Chatbot</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chat with our AI-powered Formula 1 expert to get answers to all your F1 questions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl text-blue-900">Ask anything about Formula 1</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600 mb-6">
                Our F1 expert can answer questions about drivers, teams, race results, technical regulations, and more.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-auto py-3 px-4 border-blue-200">
                  <span className="text-left">Who is the current F1 world champion?</span>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-3 px-4 border-blue-200">
                  <span className="text-left">Explain DRS and how it works</span>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-3 px-4 border-blue-200">
                  <span className="text-left">What are the biggest F1 rule changes for 2025?</span>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-3 px-4 border-blue-200">
                  <span className="text-left">Which circuit has the most overtaking opportunities?</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-12 w-12 border-2 border-blue-200">
                  <div className="bg-blue-600 text-white flex items-center justify-center w-full h-full text-lg font-bold">
                    F1
                  </div>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-blue-900">F1 Expert</h3>
                  <p className="text-sm text-gray-500">Ready to answer your questions</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Chat messages */}
                <div className="flex gap-4">
                  <Avatar className="h-8 w-8 mt-1">
                    <div className="bg-gray-200 text-gray-600 flex items-center justify-center w-full h-full text-sm font-bold">
                      U
                    </div>
                  </Avatar>
                  <div className="flex-1 bg-gray-100 rounded-lg p-4">
                    <p>Who won the Monaco Grand Prix this year?</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Avatar className="h-8 w-8 mt-1">
                    <div className="bg-blue-600 text-white flex items-center justify-center w-full h-full text-sm font-bold">
                      F1
                    </div>
                  </Avatar>
                  <div className="flex-1 bg-blue-50 rounded-lg p-4">
                    <p>Lewis Hamilton won the 2025 Monaco Grand Prix after a thrilling battle with Max Verstappen. Hamilton started from pole position and managed to hold off Verstappen despite intense pressure in the closing laps. Charles Leclerc finished third for Ferrari at his home race.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Avatar className="h-8 w-8 mt-1">
                    <div className="bg-gray-200 text-gray-600 flex items-center justify-center w-full h-full text-sm font-bold">
                      U
                    </div>
                  </Avatar>
                  <div className="flex-1 bg-gray-100 rounded-lg p-4">
                    <p>What was Hamilton's winning strategy?</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Avatar className="h-8 w-8 mt-1">
                    <div className="bg-blue-600 text-white flex items-center justify-center w-full h-full text-sm font-bold">
                      F1
                    </div>
                  </Avatar>
                  <div className="flex-1 bg-blue-50 rounded-lg p-4">
                    <p>Hamilton's winning strategy at Monaco was a one-stop strategy, starting on the soft tires and switching to the hard compound on lap 32. The Mercedes team timed the pit stop perfectly, giving Hamilton just enough of a gap to exit ahead of Verstappen who had pitted a lap earlier. Hamilton then masterfully managed his tire wear for the remaining laps, keeping Verstappen at bay on the narrow streets of Monaco where overtaking is notoriously difficult.</p>
                  </div>
                </div>
              </div>

              {/* Chat input */}
              <div className="mt-6 relative">
                <input 
                  type="text" 
                  placeholder="Type your F1 question here..." 
                  className="w-full p-4 pr-24 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700">
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Popular F1 Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="ghost" className="h-auto py-3 flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 mb-2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v8"/>
                    <path d="m8.5 14 7-4"/>
                  </svg>
                  <span>Race Results</span>
                </Button>
                
                <Button variant="ghost" className="h-auto py-3 flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 mb-2">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                    <circle cx="7" cy="17" r="2"/>
                    <path d="M9 17h6"/>
                    <circle cx="17" cy="17" r="2"/>
                  </svg>
                  <span>Cars & Tech</span>
                </Button>
                
                <Button variant="ghost" className="h-auto py-3 flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 mb-2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span>Drivers & Teams</span>
                </Button>
                
                <Button variant="ghost" className="h-auto py-3 flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 mb-2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                  </svg>
                  <span>Rules & Regulations</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
