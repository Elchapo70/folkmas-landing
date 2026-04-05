import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-muted">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 display-font text-primary">
            Nuestra Historia
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Preservando la tradición mexicana desde 1985
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Desde 1985, <span className="font-bold text-primary">Trajes Típicos Mexicanos</span> se dedica a preservar y celebrar la rica tradición de la vestimenta folklórica mexicana. Con más de 35 años de experiencia, ofrecemos ropa auténtica y de alta calidad para celebraciones, festivales y eventos especiales.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Cada prenda es cuidadosamente seleccionada y confeccionada para garantizar que lleves la tradición mexicana con orgullo y elegancia. Nuestro compromiso es mantener viva la cultura y permitir que cada generación celebre sus raíces.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 bg-white border-2 border-accent hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Años de Experiencia</p>
            </Card>
            <Card className="p-6 bg-white border-2 border-primary hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-secondary mb-2">22K+</div>
              <p className="text-sm text-muted-foreground">Clientes Satisfechos</p>
            </Card>
            <Card className="p-6 bg-white border-2 border-secondary hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Auténtico</p>
            </Card>
            <Card className="p-6 bg-white border-2 border-primary/50 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">✓</div>
              <p className="text-sm text-muted-foreground">Garantía de Calidad</p>
            </Card>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:shadow-lg transition-shadow">
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Ubicación</h3>
            <p className="text-sm text-muted-foreground">
              815 College Ave<br />
              South Houston, TX 77587
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:shadow-lg transition-shadow">
            <Phone className="w-8 h-8 text-secondary mb-4" />
            <h3 className="font-bold text-lg mb-2">Teléfono</h3>
            <p className="text-sm text-muted-foreground">
              (281) 536-2791<br />
              <span className="text-xs">Llamadas y WhatsApp</span>
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:shadow-lg transition-shadow">
            <Mail className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">
              folcloricosymas@gmail.com<br />
              <span className="text-xs">Respuesta en 24 horas</span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
