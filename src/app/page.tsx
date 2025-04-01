import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 flex items-center">
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
            <h1 className="text-5xl md:text-6xl font-bold animate-[fadeIn_1s_ease-in]">
              G-FORCE <span className="text-blue-300">F1 BLOG</span>
            </h1>
            <p className="text-xl md:text-2xl animate-[fadeIn_1s_ease-in_0.3s_both]">
              Your ultimate destination for Formula 1 news, analytics, and discussions
            </p>
            <div className="flex gap-4 animate-[fadeIn_1s_ease-in_0.6s_both]">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                <Link href="/news">Latest News</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/analytics">View Analytics</Link>
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center animate-[fadeIn_1s_ease-in_0.9s_both]">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border-4 border-white/50 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-8 rounded-full border-4 border-white/70 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 rounded-full w-32 h-32 flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-900">F1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Explore Formula 1 Like Never Before</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
                    <path d="M18 14h-8"/>
                    <path d="M15 18h-5"/>
                    <path d="M10 6h8v4h-8V6Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">Latest News</h3>
                <p className="text-gray-600">Stay updated with the latest news, race results, and driver updates from the F1 world.</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">In-depth Analytics</h3>
                <p className="text-gray-600">Explore detailed performance analytics, race statistics, and technical breakdowns.</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">F1 Chatbot</h3>
                <p className="text-gray-600">Chat with our AI-powered F1 expert to get answers to all your Formula 1 questions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Ready to Dive Into the World of Formula 1?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Explore our comprehensive coverage of races, drivers, teams, and technology.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/news">Start Exploring</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
