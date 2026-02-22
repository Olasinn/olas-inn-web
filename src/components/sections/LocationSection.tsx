import { MapPin } from "lucide-react";

export const LocationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-primary" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-6">
            Ubicación confirmada
          </h2>

          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Para cuidar tu tranquilidad, te compartimos por WhatsApp: pin
            exacto, referencias y la distancia real a la playa.
          </p>

          <div className="bg-card rounded-lg p-8 border border-border/50 shadow-card">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-display text-2xl font-semibold text-primary">
                  El Rosario
                </p>
                <p className="text-sm text-muted-foreground">Playa</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-primary">
                  Asia
                </p>
                <p className="text-sm text-muted-foreground">
                  Balneario turístico
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-primary">
                  Km. 103
                </p>
                <p className="text-sm text-muted-foreground">
                  Antigua Panam. sur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
