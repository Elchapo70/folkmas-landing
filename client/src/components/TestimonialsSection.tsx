import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María G.",
    text: "¡Excelente calidad! Mi hija se vio hermosa en su graduación con el traje que compré aquí. El servicio fue excepcional y la entrega fue rápida.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  },
  {
    id: 2,
    name: "Carmen R.",
    text: "Los botines folklóricos son auténticos y muy cómodos. Perfectos para mis presentaciones de danza. He comprado varias veces y nunca me decepcionan.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carmen",
  },
  {
    id: 3,
    name: "Juan M.",
    text: "Servicio excepcional y atención al detalle. Recomiendo ampliamente a Trajes Típicos Mexicanos. Encontré exactamente lo que buscaba.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
  },
  {
    id: 4,
    name: "Rosa T.",
    text: "Desde hace años compro aquí. La calidad nunca decepciona y los precios son justos. Es mi tienda de confianza para eventos especiales.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rosa",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-muted to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 display-font text-primary">
            Lo que Nuestros Clientes Dicen
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de 22,000 clientes satisfechos en todo el país nos confían sus momentos especiales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-shadow bg-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2 display-font">22K+</div>
            <p className="text-muted-foreground">Clientes Satisfechos</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary mb-2 display-font">4.9★</div>
            <p className="text-muted-foreground">Calificación Promedio</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2 display-font">35+</div>
            <p className="text-muted-foreground">Años de Experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
