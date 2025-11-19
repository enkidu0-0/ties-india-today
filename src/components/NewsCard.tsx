import { Clock } from "lucide-react";

interface NewsCardProps {
  image: string;
  category: string;
  headline: string;
  excerpt: string;
  author: string;
  timeAgo: string;
}

const NewsCard = ({
  image,
  category,
  headline,
  excerpt,
  author,
  timeAgo,
}: NewsCardProps) => {
  return (
    <article className="group cursor-pointer">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden mb-4">
        <img
          src={image}
          alt={headline}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Category */}
      <div className="text-xs font-bold tracking-wider uppercase text-accent mb-2">
        {category}
      </div>

      {/* Headline */}
      <h3 className="text-xl font-display font-bold leading-tight mb-2 group-hover:text-accent transition-colors">
        {headline}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">
        {excerpt}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="font-medium">{author}</span>
        <span>•</span>
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>{timeAgo}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
