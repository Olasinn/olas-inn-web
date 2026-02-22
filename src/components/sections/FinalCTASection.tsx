import { WhatsAppButton } from "@/components/WhatsAppButton";

export const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-6">
            Asegura tu verano en Asia{" "}
            <span className="italic text-secondary">sin estrés</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10">
            Dime cuántas personas y qué fechas buscas. Te respondo de inmediato.
          </p>

          <WhatsAppButton 
            message="Hola, vengo por la web de Olas Inn. Quiero consultar disponibilidad para [FECHA] para [X] personas. ¿Qué opciones tienen (Matrimonial/Triple/Mini dpto)?" 
            className="text-lg px-10 py-5 bg-[#cb3737] text-white hover:bg-[#b53030] !rounded-full"
          >
            Quiero reservar
          </WhatsAppButton>

          <p className="text-sm text-muted-foreground mt-4">
            Respuesta rápida. Sin compromiso.
          </p>
        </div>
      </div>
    </section>
  );
};
