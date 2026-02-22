import { MapPin, Mail, Phone } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-primary text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src="/logo-olasinn.svg" alt="Olas Inn" className="h-12 w-auto mb-4" />
            <p className="text-white/70 text-sm leading-relaxed">
              Hospedaje familiar en el km. 103 de la antigua Panamericana sur, en el balneario de Asia, Perú. Reservas anticipadas para el verano 2026.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#habitaciones" className="text-white/70 hover:text-white transition-colors">
                  Habitaciones
                </a>
              </li>
              <li>
                <a href="#limpieza" className="text-white/70 hover:text-white transition-colors">
                  Limpieza
                </a>
              </li>
              <li>
                <a href="#reservas" className="text-white/70 hover:text-white transition-colors">
                  Reservas
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-white/70">
                <MapPin className="w-4 h-4" />
                <span>El Rosario de Asia, Cañete</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4" />
                <span>WhatsApp: +51 946 299 030</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4" />
                <span>info@olasinn.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>
            © {new Date().getFullYear()} Olas Inn – Hospedaje Familiar. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>;
};