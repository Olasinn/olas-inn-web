import { Camera, MapPin, FileText } from "lucide-react";
import { TrustCard } from "@/components/TrustCard";

export const ZeroSurprisesSection = () => {
  const trustPoints = [
    {
      icon: Camera,
      title: "Te mostramos todo",
      description: "Fotos reales + detalle de la habitación. Si quieres también tenemos vídeos."
    },
    {
      icon: MapPin,
      title: "Ubicación exacta",
      description: "Te enviamos nuestra ubicación exacta para que llegues sin problemas."
    },
    {
      icon: FileText,
      title: "Te lo dejamos claro",
      description: "Reglas, condiciones, servicios y precios por escrito. Sin letra pequeña."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-4">
            Aquí no reservas a ciegas
          </h2>
          <p className="text-muted-foreground text-lg">
            Sabemos que reservar por internet da desconfianza. Por eso te damos
            toda la información que necesitas antes de separar.
          </p>
        </div>

        {/* Trust cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <TrustCard 
              key={index} 
              icon={point.icon} 
              title={point.title} 
              description={point.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
