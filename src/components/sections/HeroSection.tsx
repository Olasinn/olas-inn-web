import heroBeach from "@/assets/hero-beach-2.jpg";
import heroPool from "@/assets/hero-pool.jpg";

export const HeroSection = () => {
  const handleCTAClick = () => {
    window.open("https://wa.link/sj9b05", "_blank");
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background - Full beach image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBeach}
          alt="Playa El Rosario"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1">
            {/* Micro-trust badge */}
            <p className="text-white/80 text-sm md:text-base mb-4">
              Reservas anticipadas abiertas
            </p>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6">
              Este verano, ven a
              <br />
              Asia <span className="italic text-secondary">sin sorpresas</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-lg">
              Tenemos habitaciones: matrimoniales, triples y mini departamentos con vista al mar. Estamos en Asia en la playa el Rosario.
            </p>

            {/* Trust bullets */}
            <ul className="space-y-3 mb-10">
              {[
                "Fotos reales (y video si lo pides)",
                "Limpieza y orden desde que entras",
                "Confirmas todo antes de reservar",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button - Red */}
            <button
              onClick={handleCTAClick}
              className="px-8 py-3.5 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#cb3737' }}
            >
              Ver disponibilidad
            </button>
          </div>

          {/* Right Column - Pool Image - Rectangular, no frame */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={heroPool}
              alt="Piscina de Olas Inn"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto shadow-2xl object-cover"
              style={{ aspectRatio: '4/5' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
