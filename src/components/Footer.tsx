import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const siteNavigation = ["India", "Politics", "Business", "Technology", "Culture", "Opinion"];
  const moreSections = ["Mumbai", "Delhi", "Bangalore", "Sports", "Entertainment", "Health"];
  const resources = ["About Ties", "Contact Us", "Careers", "Advertise with Us", "Media Kit"];
  const legal = ["Terms of Service", "Privacy Policy", "Cookie Policy", "Help Center", "Accessibility"];

  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Logo & Tagline */}
        <div className="text-center mb-12 pb-8 border-b border-border">
          <h2 className="text-4xl font-display font-bold mb-2">Ties</h2>
          <p className="text-sm text-muted-foreground">India's Premier News Source</p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="font-display font-bold mb-4">Site Navigation</h3>
            <ul className="space-y-2 text-sm">
              {siteNavigation.map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-display font-bold mb-4">More Sections</h3>
            <ul className="space-y-2 text-sm">
              {moreSections.map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-display font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {resources.map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-display font-bold mb-4">Legal & Support</h3>
            <ul className="space-y-2 text-sm">
              {legal.map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Apps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-border">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          {/* Made in India Badge */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium">🇮🇳 Made in India</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2024 Ties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
