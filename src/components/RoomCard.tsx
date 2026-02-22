import { Check, Star } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
interface RoomCardProps {
  title: string;
  subtitle: string;
  features: string[];
  image: string;
  whatsappMessage: string;
  isFeatured?: boolean;
}
export const RoomCard = ({
  title,
  subtitle,
  features,
  image,
  whatsappMessage,
  isFeatured = false
}: RoomCardProps) => {
  return <div className="bg-card rounded-none overflow-hidden shadow-card transition-all duration-300 hover:shadow-float hover:-translate-y-1">
      <div className="overflow-hidden relative">
        {isFeatured && <div className="absolute top-3 left-3 z-10 bg-secondary/85 text-secondary-foreground px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 rounded-md">
            <Star className="w-4 h-4 fill-current" />
            Más popular
          </div>}
        <img src={image} alt={title} className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105" loading="lazy" />
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-primary mb-1 text-center">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">{subtitle}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{feature}</span>
            </li>)}
        </ul>

        <WhatsAppButton message={whatsappMessage} className="w-full">
          Quiero esta
        </WhatsAppButton>
      </div>
    </div>;
};