import { RoomCard } from "@/components/RoomCard";
import roomMatrimonial from "@/assets/room-matrimonial.jpg";
import roomTriple from "@/assets/room-triple.jpg";
import roomMinidpto from "@/assets/room-minidpto.jpg";

export const RoomsSection = () => {
  const rooms = [
    {
      title: "Matrimonial",
      subtitle: "Para parejas / escapada tranquila",
      features: ["1 cama de 2 plazas", "Baño privado", "Agua caliente", "Tv con cable local"],
      image: roomMatrimonial,
      whatsappMessage: "Hola, quiero consultar la Habitación Matrimonial para [FECHA], somos [X]. ¿Disponibilidad y condiciones?",
      isFeatured: false
    },
    {
      title: "Triple",
      subtitle: "Ideal para 3–4 (familia o amigos)",
      features: ["1 cama de 2 plazas", "2 camas de plaza y media", "Baño privado", "Agua caliente"],
      image: roomTriple,
      whatsappMessage: "Hola, quiero consultar la Habitación Triple para [FECHA], somos [X]. ¿Disponibilidad y condiciones?",
      isFeatured: false
    },
    {
      title: "Mini departamento",
      subtitle: "Para que estés más cómodo",
      features: ["3 camas + 1 sofá cama", "Cocina + refri + microondas", "Baño privado + agua caliente", "Balcón con vista al mar"],
      image: roomMinidpto,
      whatsappMessage: "Hola, quiero consultar el Mini departamento para [FECHA], somos [X]. ¿Disponibilidad y condiciones?",
      isFeatured: true
    }
  ];

  return (
    <section id="habitaciones" className="py-20 md:py-28 bg-primary">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
            Elige tu tipo de habitación
          </h2>
          <p className="text-white/70 text-lg">
            Te pasamos precio, depósito y disponibilidad según tus fechas.
          </p>
        </div>

        {/* Room cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room, index) => (
            <RoomCard
              key={index}
              title={room.title}
              subtitle={room.subtitle}
              features={room.features}
              image={room.image}
              whatsappMessage={room.whatsappMessage}
              isFeatured={room.isFeatured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
