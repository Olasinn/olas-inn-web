import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message: string;
  variant?: "primary" | "secondary" | "floating";
  children: React.ReactNode;
  className?: string;
}

const WHATSAPP_LINK = "https://wa.link/sj9b05";

export const WhatsAppButton = ({
  message,
  variant = "primary",
  children,
  className = "",
}: WhatsAppButtonProps) => {
  const whatsappUrl = WHATSAPP_LINK;

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]";

  const variants = {
    primary:
      "px-6 py-4 rounded-full shadow-card hover:shadow-float",
    secondary:
      "px-5 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90",
    floating:
      "fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-white text-[#25D366] shadow-float hover:bg-gray-100",
  };

  // Only add default colors if no custom className with bg- is provided
  const hasCustomBg = className.includes("bg-");
  const defaultColors = hasCustomBg ? "" : "bg-primary text-primary-foreground";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${defaultColors} ${className}`}
    >
      <MessageCircle className={`${variant === "floating" ? "w-7 h-7 text-[#25D366]" : "w-5 h-5"}`} />
      {variant !== "floating" && <span>{children}</span>}
    </a>
  );
};

export const FloatingWhatsApp = () => {
  return (
    <WhatsAppButton
      variant="floating"
      message="Hola, vengo por la web de Olas Inn. Quiero consultar disponibilidad para [FECHA] para [X] personas. ¿Qué opciones tienen?"
    >
      WhatsApp
    </WhatsAppButton>
  );
};
