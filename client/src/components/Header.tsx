import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      {/* Top Info Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4">
        <div className="container flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>(281) 536-2791</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>folcloricosymas@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>815 College Ave, South Houston, TX</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
            T
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary display-font">Trajes Típicos</h1>
            <p className="text-xs text-muted-foreground">Mexicanos</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
            Sobre Nosotros
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
            Productos
          </a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">
            Galeria
          </a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">
            Testimonios
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contacto
          </a>
        </div>

        <Button className="bg-primary hover:bg-primary/90 text-white">
          Explorar
        </Button>
      </nav>
    </header>
  );
}
