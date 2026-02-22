import { FAQAccordion } from "@/components/FAQAccordion";

export const FAQSection = () => {
  const faqItems = [
    {
      question: "¿Cómo sé que es real y no me engañan?",
      answer:
        "Te mostramos fotos reales, te enviamos video de la habitación si lo pides, y te compartimos la ubicación exacta por WhatsApp antes de que pagues nada. Además, todo queda por escrito (WhatsApp + correo) para que tengas respaldo.",
    },
    {
      question: "¿Me envían fotos o video actual?",
      answer:
        "Sí. Si quieres ver el estado actual de la habitación o las instalaciones, solo pídelo por WhatsApp y te enviamos fotos o video.",
    },
    {
      question: "¿Todas las habitaciones tienen baño privado y agua caliente?",
      answer:
        "Sí. Todas nuestras habitaciones (Matrimonial, Triple y Mini departamento) tienen baño propio y agua caliente las 24 horas.",
    },
    {
      question: "¿Cuánto cuesta y cuánto es el depósito?",
      answer:
        "El precio varía según el tipo de habitación y tus fechas. Para reservar, se abona el 50% del total como depósito y, ya en el hospedaje al momento del check-in, se paga el 50% restante. Escríbenos por WhatsApp con tus fechas y te enviamos el precio exacto y el monto del depósito para bloquear tu habitación.",
    },
    {
      question: "¿Cuál es la política de cancelación?",
      answer:
        "Te enviamos las condiciones completas de cancelación por WhatsApp y correo al momento de reservar. Todo queda por escrito para tu tranquilidad.",
    },
    {
      question: "¿A qué hora es el check-in y check-out?",
      answer:
        "El check-in es a las 2:00 PM y el check-out es a las 12:00 del mediodía.",
    },
    {
      question: "¿El Mini departamento tiene todo para cocinar?",
      answer:
        "Sí. Incluye cocina, refrigerador, microondas y menaje básico (ollas, platos, cubiertos, vasos). Solo traes los ingredientes.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Las dudas más comunes antes de reservar.
            </p>
          </div>

          {/* FAQ Accordion */}
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
};
