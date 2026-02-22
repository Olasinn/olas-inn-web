import { Check, Sparkles } from "lucide-react";
import bathroomImage from "@/assets/bathroom-clean.jpg";
import lifestyleImage from "@/assets/lifestyle-family.jpg";

export const CleanlinessSection = () => {
  const cleaningPoints = [
    "Baño limpio y con agua caliente",
    "Servicio de limpieza cuando el cliente lo requiera",
    "Habitación ordenada y lista para descansar",
    "Áreas comunes cuidadas",
    "Tapete, jabón y toalla en tu habitación",
  ];

  return (
    <section id="limpieza" className="py-20 md:py-28 bg-primary">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-white/90">
                Prioridad máxima
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
              Limpieza que se nota
            </h2>

            <p className="text-white/70 text-lg mb-8">
              Sabemos que la higiene es lo primero que miras. Por eso nos
              aseguramos de que todo esté impecable cuando llegues.
            </p>

            <ul className="space-y-4">
              {cleaningPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-secondary" />
                  </span>
                  <span className="text-white/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="aspect-[3/4] overflow-hidden shadow-float max-w-md w-full">
              <img
                src={bathroomImage}
                alt="Baño impecablemente limpio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
