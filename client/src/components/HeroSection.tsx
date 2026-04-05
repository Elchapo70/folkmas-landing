import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663449751896/WHZ7Ku27XzqsuxCguksbc9/hero-trajes-tipicos-5Y2daoufURQWeM4DaMPTWM.webp')`,
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-2xl text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 display-font leading-tight">
          Celebra tu Herencia Mexicana
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Ropa Típica Mexicana y Vestidos Folklóricos Auténticos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
          >
            Explorar Colección
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/20 hover:bg-white/30 text-white border-white text-lg px-8 py-6"
          >
            Contactar
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
