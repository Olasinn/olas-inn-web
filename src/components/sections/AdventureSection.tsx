import { Bike } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import adventureImage from "@/assets/adventure-atv.jpg";

export const AdventureSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f4efe5]">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Bike className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Beneficio exclusivo
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-6">
              Aventura sobre ruedas
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Recorre la playa al atardecer o súbete a las lomas de Asia para
              ver los mejores paisajes y miradores. Pregunta los horarios y
              disponibilidad.
            </p>

            <WhatsAppButton 
              message="Hola, vengo por la web de Olas Inn. Quiero saber más sobre la aventura en cuatrimotos."
              className="bg-[#cb3737] text-white hover:bg-[#b53030]"
            >
              Ver disponibilidad
            </WhatsAppButton>
          </div>

          {/* Image */}
          <div className="aspect-video overflow-hidden shadow-float">
            <img
              src={adventureImage}
              alt="Aventura en cuatrimotos en la playa de Asia"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
