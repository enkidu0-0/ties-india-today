import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  image: string;
  category: string;
  headline: string;
  subheading: string;
  author: string;
  timeAgo: string;
}

const HeroSection = ({
  image,
  category,
  headline,
  subheading,
  author,
  timeAgo,
}: HeroSectionProps) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={headline}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center space-y-4">
          <div className="inline-flex">
            <span className="text-xs font-bold tracking-wider uppercase text-accent border-l-2 border-accent pl-2">
              {category}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            {headline}
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {subheading}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-muted" />
              <span className="font-medium">{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{timeAgo}</span>
            </div>
          </div>

          <Button className="w-fit mt-4 bg-primary hover:bg-primary/90">
            Read Full Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
