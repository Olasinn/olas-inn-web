import { Star } from "lucide-react";
import { TestimonialCard } from "@/components/TestimonialCard";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Se encuentra en una zona muy tranquila, cerca a restaurantes, bodegas y a pocos minutos de la playa. El personal es muy amable y atento. Sin duda volvería.",
      author: "Jessenia De la Cruz",
      trip: "",
      platform: "Google",
    },
    {
      quote:
        "El lugar es muy tranquilo, muy bueno para estar con la familia. También, amplio, acogedor y muy bonito. El trato ha sido muy amable y super. 100% recomendable.",
      author: "César Ruiz-Caro",
      trip: "",
      platform: "Booking",
    },
    {
      quote:
        "El hospedaje es bastante acogedor y Ursula es la mejor anfitriona. Un lugar familiar, un ambiente de pueblo bonito. Tiene una pequeña piscina para poder disfrutar una parrilla y acceso cercano a la playa.",
      author: "Nadia C.",
      trip: "",
      platform: "Tripadvisor",
    },
    {
      quote:
        "Todo tal como en las fotos!!! Ursula super amable, considerada... todo muy cerca!!! 10/10.",
      author: "Geraldine Paulett",
      trip: "",
      platform: "Booking",
    },
  ];

  const ratings = [
    { platform: "Google", score: "4,9", reviews: "Puntuación: de 0 a 5" },
    { platform: "Booking", score: "8,7", reviews: "Puntuación de 0 a 10" },
    { platform: "TripAdvisor", score: "5,0", reviews: "Puntuación de 0 a 5" },
  ];

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
            Lo que dicen los que ya vinieron
          </h2>
          <p className="text-white/70 text-lg">
            Familias y amigos que reservaron y pasaron un buen verano.
          </p>
        </div>

        {/* Ratings */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {ratings.map((rating, index) => (
            <div key={index} className="text-center bg-white/10 rounded-lg px-6 py-4">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
              <p className="font-display text-2xl font-bold text-white">{rating.score}</p>
              <p className="text-xs text-white/60">{rating.platform}</p>
              <p className="text-xs text-white/50">{rating.reviews}</p>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              trip={testimonial.trip}
              platform={testimonial.platform}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
