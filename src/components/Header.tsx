import { Search, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const navigationSections = [
    "India",
    "Politics",
    "Business",
    "Technology",
    "Culture",
    "Opinion",
    "Mumbai",
    "Delhi",
    "Bangalore",
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top Bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-xs">
          <div className="text-muted-foreground">
            {currentDate} | IST
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-6xl font-display font-bold text-center tracking-tight">
          Ties
        </h1>
        <p className="text-center text-xs text-muted-foreground mt-1 font-medium tracking-wide">
          INDIA'S PREMIER NEWS SOURCE
        </p>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-6 py-3 text-sm overflow-x-auto">
            {navigationSections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="font-medium hover:text-accent transition-colors whitespace-nowrap"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
