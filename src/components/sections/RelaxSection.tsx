import { Zap } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import kartodromoImage from "@/assets/kartodromo.jpg";

export const RelaxSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 aspect-video overflow-hidden shadow-float">
            <img
              src={kartodromoImage}
              alt="Kartódromo de Asia - Beneficio exclusivo para huéspedes"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Beneficio exclusivo
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-6">
              Acelera tu verano
            </h2>

            <p className="text-muted-foreground text-lg">
              Por ser huésped de Olas Inn, tienes un beneficio exclusivo en el
              Kartódromo de Asia. Recibe precios preferentes en tus carreras.
              Pregunta en nuestra recepción.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
