import { Facebook, Instagram, MessageCircle, Youtube, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 display-font">Trajes Tipicos</h3>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Preservando la tradicion mexicana desde 1985.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Music size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces Rapidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Calzado Folklorico
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Faldas de Ensayo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Trajes Charros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold">Telefono:</span>
                <br />
                (281) 536-2791
              </li>
              <li>
                <span className="font-semibold">Email:</span>
                <br />
                folcloricosymas@gmail.com
              </li>
              <li>
                <span className="font-semibold">Ubicacion:</span>
                <br />
                815 College Ave, South Houston, TX 77587
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/80">
            <p>
              &copy; 2026 Trajes Tipicos Mexicanos. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Politica de Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terminos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
