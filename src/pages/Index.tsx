import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsCard from "@/components/NewsCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

import heroImage from "@/assets/hero-parliament.jpg";
import mumbaiImage from "@/assets/mumbai-skyline.jpg";
import techImage from "@/assets/tech-startup.jpg";
import stockImage from "@/assets/stock-market.jpg";
import cultureImage from "@/assets/festival-culture.jpg";
import metroImage from "@/assets/delhi-metro.jpg";

const Index = () => {
  const topStories = [
    {
      image: techImage,
      category: "Technology",
      headline: "India's Tech Giants Unveil AI Innovation Hub in Bangalore",
      excerpt:
        "Major technology companies announce collaborative initiative to accelerate artificial intelligence research and development in India, creating thousands of new jobs.",
      author: "Priya Sharma",
      timeAgo: "3 hours ago",
    },
    {
      image: mumbaiImage,
      category: "Mumbai",
      headline: "Mumbai's Infrastructure Transformation Progresses Ahead of Schedule",
      excerpt:
        "The city's ambitious coastal road project reaches major milestone, promising to reduce commute times and ease traffic congestion across the metropolis.",
      author: "Rajesh Kumar",
      timeAgo: "5 hours ago",
    },
    {
      image: stockImage,
      category: "Business",
      headline: "Sensex Surges Past 75,000 Mark Amid Global Market Rally",
      excerpt:
        "Indian stock markets reach historic highs as investors respond positively to quarterly earnings and positive economic indicators from key sectors.",
      author: "Anita Desai",
      timeAgo: "6 hours ago",
    },
    {
      image: cultureImage,
      category: "Culture",
      headline: "Diwali Celebrations: India Embraces Traditional Values with Modern Twist",
      excerpt:
        "This year's festival of lights sees a perfect blend of time-honored traditions and contemporary eco-friendly practices across major cities.",
      author: "Vikram Singh",
      timeAgo: "8 hours ago",
    },
    {
      image: metroImage,
      category: "Delhi",
      headline: "Delhi Metro's New Purple Line Extension Opens to Commuters",
      excerpt:
        "The capital's metro network expands further with new stations connecting previously underserved areas, expected to benefit millions of daily commuters.",
      author: "Meera Kapoor",
      timeAgo: "10 hours ago",
    },
    {
      image: techImage,
      category: "Technology",
      headline: "Indian Startups Secure Record ₹50,000 Crore in Q4 Funding",
      excerpt:
        "The country's startup ecosystem continues its impressive growth trajectory with record-breaking investments in fintech, e-commerce, and SaaS sectors.",
      author: "Arjun Mehta",
      timeAgo: "12 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection
          image={heroImage}
          category="Politics"
          headline="Parliament Passes Historic Infrastructure Bill with Cross-Party Support"
          subheading="The landmark legislation promises to transform India's transportation network with ₹10 lakh crore investment over five years, creating millions of jobs and connecting tier-2 cities."
          author="Kavita Krishnan"
          timeAgo="1 hour ago"
        />

        {/* Top Stories Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
                <h2 className="text-2xl font-display font-bold">Top Stories</h2>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  Latest Updates
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {topStories.map((story, index) => (
                  <NewsCard key={index} {...story} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </section>

        {/* India Section */}
        <section className="container mx-auto px-4 py-12 border-t border-border">
          <div className="mb-8 pb-4 border-b border-border">
            <h2 className="text-2xl font-display font-bold">India</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {topStories.slice(0, 3).map((story, index) => (
              <NewsCard key={index} {...story} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
