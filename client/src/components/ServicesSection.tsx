import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footprints, Shirt, Sparkles, Heart } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Calzado Folklórico",
    description: "Botines, zapatos y botas adelita con bordados tradicionales en oro y plata. Diseñados para comodidad y autenticidad.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449751896/WHZ7Ku27XzqsuxCguksbc9/product-folklorico-shoes-HtnGY2DCEdu7DNj7QXZS74.webp",
    icon: Footprints,
    color: "from-primary/20 to-primary/5",
    accentColor: "text-primary",
  },
  {
    id: 2,
    title: "Faldas de Ensayo",
    description: "Faldas de práctica en múltiples colores vibrantes. Perfectas para ensayos de danza folklórica con telas de calidad.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449751896/WHZ7Ku27XzqsuxCguksbc9/product-practice-skirts-Zaazi9byVJBSqUbnHVH4Pz.webp",
    icon: Shirt,
    color: "from-secondary/20 to-secondary/5",
    accentColor: "text-secondary",
  },
  {
    id: 3,
    title: "Trajes Charros",
    description: "Trajes tradicionales mexicanos para hombres con bordados finos y detalles auténticos. Perfectos para eventos especiales.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449751896/WHZ7Ku27XzqsuxCguksbc9/cultural-celebration-LUGqAWgMd3onAjsrtSVoUk.webp",
    icon: Sparkles,
    color: "from-accent/20 to-accent/5",
    accentColor: "text-accent",
  },
  {
    id: 4,
    title: "Accesorios Folklóricos",
    description: "Huaraches, rebozos, sombreros y joyería tradicional para completar tu atuendo folklórico con elegancia.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449751896/WHZ7Ku27XzqsuxCguksbc9/cultural-celebration-LUGqAWgMd3onAjsrtSVoUk.webp",
    icon: Heart,
    color: "from-primary/20 to-secondary/5",
    accentColor: "text-primary",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 display-font text-primary">
            Nuestros Productos
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra colección de ropa típica mexicana y vestidos folklóricos auténticos, cuidadosamente seleccionados para ti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 group"
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden h-64 md:h-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>

                  {/* Content */}
                  <div className={`bg-gradient-to-br ${service.color} p-8 flex flex-col justify-between`}>
                    <div>
                      <div className={`${service.accentColor} mb-4`}>
                        <Icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground display-font">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      Más Información
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            ¿No encuentras lo que buscas?
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg"
          >
            Ver Catálogo Completo en WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
