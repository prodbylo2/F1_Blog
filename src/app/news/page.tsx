import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function NewsPage() {
  // Mock news data
  const newsItems = [
    {
      id: 1,
      title: "Hamilton Secures Pole Position at Monaco GP",
      excerpt: "Lewis Hamilton delivered a stunning lap to secure pole position for the Monaco Grand Prix, outpacing Max Verstappen by just 0.084 seconds.",
      date: "April 1, 2025",
      author: "Michael Roberts",
      category: "Race Weekend",
      imageUrl: "https://placehold.co/600x400/blue/white?text=Monaco+GP"
    },
    {
      id: 2,
      title: "Ferrari Unveils Major Upgrade Package for Spanish GP",
      excerpt: "Ferrari has brought a comprehensive upgrade package to Barcelona, featuring a redesigned floor and new front wing concept aimed at improving performance.",
      date: "March 28, 2025",
      author: "Sarah Johnson",
      category: "Team Updates",
      imageUrl: "https://placehold.co/600x400/red/white?text=Ferrari+Upgrades"
    },
    {
      id: 3,
      title: "Aston Martin Signs Rising Star for 2026 Season",
      excerpt: "Aston Martin has announced the signing of promising young talent from Formula 2, securing their driver lineup for the new regulation era beginning in 2026.",
      date: "March 25, 2025",
      author: "James Wilson",
      category: "Driver Market",
      imageUrl: "https://placehold.co/600x400/darkgreen/white?text=Aston+Martin"
    },
    {
      id: 4,
      title: "FIA Introduces New Safety Measures Following Incident Review",
      excerpt: "The FIA has announced new safety protocols to be implemented immediately following a comprehensive review of recent on-track incidents.",
      date: "March 20, 2025",
      author: "Elena Rodriguez",
      category: "Regulations",
      imageUrl: "https://placehold.co/600x400/gray/white?text=FIA+Safety"
    },
    {
      id: 5,
      title: "Red Bull Dominates Practice Sessions in Australia",
      excerpt: "Max Verstappen and Sergio Perez topped the timesheets in both practice sessions, showing impressive pace ahead of qualifying at Albert Park.",
      date: "March 15, 2025",
      author: "David Chen",
      category: "Race Weekend",
      imageUrl: "https://placehold.co/600x400/darkblue/white?text=Red+Bull"
    },
    {
      id: 6,
      title: "McLaren Celebrates 60 Years in Formula 1 with Special Livery",
      excerpt: "McLaren will run a special anniversary livery at the British Grand Prix to commemorate 60 years of racing excellence in Formula 1.",
      date: "March 10, 2025",
      author: "Thomas Wright",
      category: "Team Updates",
      imageUrl: "https://placehold.co/600x400/orange/white?text=McLaren+60"
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Latest F1 News</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, race results, and team updates from the world of Formula 1.
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16 bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image 
                src={newsItems[0].imageUrl}
                alt={newsItems[0].title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="text-sm font-semibold text-blue-600 mb-2">{newsItems[0].category}</div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">{newsItems[0].title}</h2>
              <p className="text-gray-600 mb-6">{newsItems[0].excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{newsItems[0].date}</span>
                <span className="mx-2">•</span>
                <span>By {newsItems[0].author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(1).map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image 
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <CardHeader className="pb-2">
                <div className="text-sm font-semibold text-blue-600 mb-1">{item.category}</div>
                <CardTitle className="text-xl text-blue-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{item.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="text-sm text-gray-500 pt-0">
                <div className="flex items-center">
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {item.author}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
