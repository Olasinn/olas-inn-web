import { Calendar, AlertCircle, Clock } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const BookingSection = () => {
  return (
    <section id="reservas" className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Temporada 2025–2026
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Reservas anticipadas verano 2025–2026
            </h2>
            <p className="text-muted-foreground text-lg">
              Fechas desde 20 dic 2025 hasta Semana Santa 2026.
            </p>
          </div>

          {/* Scarcity box */}
          <div className="bg-card rounded-2xl p-8 border border-accent/20 shadow-card mb-10">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Cupos limitados
                </h3>
                <p className="text-muted-foreground">
                  Tenemos pocas habitaciones y la demanda en verano es alta.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground text-sm">
                    Fines de semana
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Se agotan primero
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground text-sm">
                    Feriados
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Alta demanda
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground text-sm">
                    Depósito
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Info por WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <WhatsAppButton
              message="Hola, vengo por la web de Olas Inn. Quiero consultar disponibilidad para [FECHA] para [X] personas. ¿Qué opciones tienen?"
              className="text-lg px-8 py-5"
            >
              Consultar disponibilidad
            </WhatsAppButton>
            <p className="text-sm text-muted-foreground mt-4">
              Te digo qué queda disponible hoy y cuánto se separa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
