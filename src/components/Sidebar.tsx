import { TrendingUp, Star, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Sidebar = () => {
  const mostPopular = [
    {
      rank: 1,
      title: "Modi Government Announces Major Infrastructure Push for 2025",
      category: "Politics",
    },
    {
      rank: 2,
      title: "Sensex Hits Record High Amid Tech Stock Rally",
      category: "Business",
    },
    {
      rank: 3,
      title: "India's Startup Ecosystem Attracts Record Foreign Investment",
      category: "Technology",
    },
    {
      rank: 4,
      title: "Mumbai's New Metro Line Opens to Commuters",
      category: "Mumbai",
    },
    {
      rank: 5,
      title: "Bollywood's Biggest Release This Diwali Weekend",
      category: "Culture",
    },
  ];

  const editorsPicks = [
    {
      title: "The Future of Indian Manufacturing",
      author: "Priya Sharma",
    },
    {
      title: "Understanding India's Digital Payment Revolution",
      author: "Rajesh Kumar",
    },
    {
      title: "Climate Change and the Indian Monsoon",
      author: "Anita Desai",
    },
  ];

  return (
    <aside className="space-y-8">
      {/* Most Popular */}
      <div className="border border-border p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-display font-bold">Most Popular</h3>
        </div>
        <ol className="space-y-4">
          {mostPopular.map((item) => (
            <li key={item.rank} className="flex gap-4 group cursor-pointer">
              <span className="text-2xl font-display font-bold text-muted-foreground/30 group-hover:text-accent transition-colors">
                {item.rank}
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium leading-tight group-hover:text-accent transition-colors mb-1">
                  {item.title}
                </p>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  {item.category}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Editor's Picks */}
      <div className="border border-border p-6">
        <div className="flex items-center gap-2 mb-6">
          <Star className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-display font-bold">Editor's Picks</h3>
        </div>
        <div className="space-y-5">
          {editorsPicks.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <p className="text-sm font-display font-semibold leading-tight mb-2 group-hover:text-accent transition-colors">
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground">By {item.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-secondary p-6">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-display font-bold">Daily Newsletter</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Get the day's top stories delivered to your inbox every morning
        </p>
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-background"
          />
          <Button className="w-full bg-primary hover:bg-primary/90">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Live Updates */}
      <div className="border-l-4 border-accent pl-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <h3 className="text-sm font-bold uppercase tracking-wide">Live Updates</h3>
        </div>
        <div className="space-y-3">
          <div className="text-sm">
            <p className="font-medium mb-1">Breaking: Delhi Metro Announces New Route</p>
            <span className="text-xs text-muted-foreground">2 minutes ago</span>
          </div>
          <div className="text-sm">
            <p className="font-medium mb-1">Cricket: India vs Australia - Live Score</p>
            <span className="text-xs text-muted-foreground">15 minutes ago</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
