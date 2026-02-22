import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  trip: string;
  platform?: string;
}

export const TestimonialCard = ({ quote, author, trip, platform }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-none p-6 shadow-soft">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
        ))}
      </div>
      <blockquote className="text-foreground/90 mb-4 leading-relaxed text-sm">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="font-semibold text-primary text-sm">
            {author.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <div>
          <p className="font-medium text-foreground text-sm">{author}</p>
          <p className="text-xs text-muted-foreground">{trip}</p>
          {platform && (
            <p className="text-xs text-primary font-medium">{platform}</p>
          )}
        </div>
      </div>
    </div>
  );
};
