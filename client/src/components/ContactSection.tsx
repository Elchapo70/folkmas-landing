import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Mensaje enviado! Nos pondremos en contacto pronto.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    if (!formData.name || !formData.message) {
      toast.error("Por favor completa tu nombre y mensaje");
      return;
    }
    const message = `Nombre: ${formData.name}%0AEmail: ${formData.email}%0AAsunto: ${formData.subject}%0AMensaje: ${formData.message}`;
    window.open(`https://wa.me/12815362791?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 display-font text-primary">
            Contactanos
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tienes preguntas? Nos encantaria escucharte. Completa el formulario y nos pondremos en contacto pronto.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center hover:shadow-lg transition-shadow">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Telefono</h3>
            <p className="text-muted-foreground">(281) 536-2791</p>
            <p className="text-xs text-muted-foreground mt-1">Llamadas y WhatsApp</p>
            <Button
              onClick={() => window.open('https://wa.me/12815362791?text=Hola%20Trajes%20Tipicos%20Mexicanos%2C%20me%20gustaria%20obtener%20mas%20informacion%20sobre%20sus%20productos.', '_blank')}
              className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle size={16} className="mr-2" />
              Enviar por WhatsApp
            </Button>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 text-center hover:shadow-lg transition-shadow">
            <Mail className="w-8 h-8 text-secondary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-muted-foreground">folcloricosymas@gmail.com</p>
            <p className="text-xs text-muted-foreground mt-1">Respuesta en 24 horas</p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 text-center hover:shadow-lg transition-shadow">
            <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Ubicacion</h3>
            <p className="text-muted-foreground">815 College Ave</p>
            <p className="text-xs text-muted-foreground mt-1">South Houston, TX 77587</p>
          </Card>
        </div>

        {/* WhatsApp Quick Contact */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <p className="text-muted-foreground mb-4 font-semibold">O contactanos directamente por WhatsApp:</p>
          <Button
            onClick={() => window.open('https://wa.me/12815362791?text=Hola%20Trajes%20Tipicos%20Mexicanos%2C%20me%20gustaria%20obtener%20mas%20informacion%20sobre%20sus%20productos.', '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-semibold"
          >
            <MessageCircle size={20} className="mr-2" />
            Abrir WhatsApp
          </Button>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto p-8 border-2 border-primary/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-semibold mb-2 block">
                  Nombre Completo *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="border-border focus:ring-primary"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground font-semibold mb-2 block">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="border-border focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone" className="text-foreground font-semibold mb-2 block">
                  Telefono (Opcional)
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className="border-border focus:ring-primary"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-foreground font-semibold mb-2 block">
                  Asunto *
                </Label>
                <Select value={formData.subject} onValueChange={handleSubjectChange}>
                  <SelectTrigger className="border-border focus:ring-primary">
                    <SelectValue placeholder="Selecciona un asunto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consulta">Consulta General</SelectItem>
                    <SelectItem value="pedido">Pedido/Compra</SelectItem>
                    <SelectItem value="evento">Evento Especial</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground font-semibold mb-2 block">
                Mensaje *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuentanos como podemos ayudarte..."
                rows={6}
                className="border-border focus:ring-primary resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold"
              >
                {isSubmitting ? "Enviando..." : "Enviar por Email"}
              </Button>
              <Button
                type="button"
                onClick={handleWhatsAppClick}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-semibold"
              >
                <MessageCircle size={18} className="mr-2" />
                Enviar por WhatsApp
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
