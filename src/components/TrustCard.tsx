import { LucideIcon } from "lucide-react";

interface TrustCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const TrustCard = ({
  icon: Icon,
  title,
  description
}: TrustCardProps) => {
  return (
    <div className="p-8 text-center">
      <div className="w-14 h-14 rounded-lg bg-primary/10 mb-5 flex items-center justify-center mx-auto">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-display text-xl font-semibold text-primary mb-3">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
