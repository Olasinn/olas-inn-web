import { MessageCircle, FileText, CreditCard } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const HowToBookSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      step: "1",
      title: "Escríbenos por WhatsApp",
      description: "Cuéntanos cuántos son, qué fechas buscas y qué tipo de habitación te interesa.",
    },
    {
      icon: FileText,
      step: "2",
      title: "Disponibilidad + condiciones",
      description: "Precio, depósito, reglas y todo por escrito. Sin sorpresas.",
    },
    {
      icon: CreditCard,
      step: "3",
      title: "Bloqueas tu fecha con depósito",
      description: "Una vez que confirmas, tu fecha queda separada.",
    },
  ];

  return (
    <section id="reservas" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-4">
              Reserva en 3 simples pasos
            </h2>
            <p className="text-muted-foreground text-lg">
              Todo por WhatsApp y correo. Rápido y sin complicaciones.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <WhatsAppButton 
              message="Hola, vengo por la web de Olas Inn. Quiero consultar disponibilidad para [FECHA] para [X] personas. ¿Qué opciones tienen?"
              className="bg-[#cb3737] text-white hover:bg-[#b53030]"
            >
              Ver disponibilidad
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};
