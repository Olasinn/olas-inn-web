import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#limpieza", label: "Limpieza" },
  { href: "#reservas", label: "Reservas" },
  { href: "#faq", label: "FAQ" },
];

const WHATSAPP_NUMBER = "51987654321";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleConsultClick = () => {
    window.open("https://wa.link/sj9b05", "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-primary shadow-lg py-3" 
          : "bg-primary py-4"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img 
              src="/logo-olasinn.svg" 
              alt="Olas Inn" 
              className="h-12 md:h-14 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Outline style */}
          <div className="hidden sm:block">
            <button
              onClick={handleConsultClick}
              className="px-6 py-2.5 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-primary transition-all duration-300"
            >
              Consúltanos
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-white hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={handleConsultClick}
                className="mt-2 px-6 py-2.5 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-primary transition-all duration-300 w-fit"
              >
                Consúltanos
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
