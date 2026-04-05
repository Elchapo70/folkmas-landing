import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Bordado Tradicional",
    category: "Detalles",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449751896/WHZ7Ku27XzqsuxCguksbc9/gallery-embroidery-detail-WDMcnE2uJQpEUraPajC7yZ.webp",
    description: "Detalle del bordado tradicional mexicano con hilos de oro y plata",
  },
  {
    id: 2,
    title: "Vestido Tradicional",
    category: "Ropa",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449751896/WHZ7Ku27XzqsuxCguksbc9/gallery-traditional-dress-QMv5vPEYwtMWhfu3KmaPhb.webp",
    description: "Huipil bordado con patrones florales tradicionales",
  },
  {
    id: 3,
    title: "Traje Charro",
    category: "Ropa",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449751896/WHZ7Ku27XzqsuxCguksbc9/gallery-charro-suit-FiiVFXnCpCZbnxjf9VWLzG.webp",
    description: "Traje charro negro con bordados en oro y plata",
  },
  {
    id: 4,
    title: "Danza Folklorica",
    category: "Eventos",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449751896/WHZ7Ku27XzqsuxCguksbc9/gallery-folk-dance-KPqgKgMWfJMhAbeEaGf7DG.webp",
    description: "Presentacion de danza folklorica en trajes tradicionales",
  },
  {
    id: 5,
    title: "Celebracion Cultural",
    category: "Eventos",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449751896/WHZ7Ku27XzqsuxCguksbc9/gallery-event-celebration-QwYZFGhsckSWeRX69qxE45.webp",
    description: "Evento cultural con familias en trajes folkloricos",
  },
  {
    id: 6,
    title: "Ceremonia de Graduacion",
    category: "Eventos",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663449751896/WHZ7Ku27XzqsuxCguksbc9/gallery-graduation-ceremony-5Sv2Qpt3qBhd8TbnuyhDsk.webp",
    description: "Estudiantes en trajes folkloricos en ceremonia de graduacion",
  },
];

const categories = ["Todos", "Ropa", "Detalles", "Eventos"];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 display-font text-primary">
            Galeria de Imagenes
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra coleccion de trajes tipicos mexicanos y eventos culturales
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-primary hover:bg-primary/90 text-white"
                  : "border-border hover:border-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 border-0"
              onClick={() => setSelectedImageIndex(index)}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-foreground mb-1">{image.title}</h3>
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
              >
                <X size={32} />
              </button>

              {/* Image */}
              <img
                src={filteredImages[selectedImageIndex].image}
                alt={filteredImages[selectedImageIndex].title}
                className="w-full h-auto rounded-lg"
              />

              {/* Image Info */}
              <div className="mt-4 text-white text-center">
                <h3 className="text-2xl font-bold mb-2 display-font">
                  {filteredImages[selectedImageIndex].title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {filteredImages[selectedImageIndex].description}
                </p>
                <p className="text-sm text-gray-400">
                  {selectedImageIndex + 1} de {filteredImages.length}
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePrevious}
                  className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
