import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "¿Por qué pagar por esto si puedo publicar gratis en Encuentra24 o Marketplace?",
    a: "Esos sitios te ponen al lado de cientos de propiedades genéricas y filtran tus leads por precio, no por intención. Una página exclusiva posiciona tu propiedad como única, transmite seriedad y atrae al comprador que ya decidió comprar — no al que está paseando.",
  },
  {
    q: "¿Esto realmente me va a ayudar a vender más rápido?",
    a: "Sí, porque cambia la conversación. En vez de mandar 8 fotos por WhatsApp y rogar una visita, mandás un link profesional. El cliente llega informado, con el precio claro y la ubicación entendida. Vos dejás de perder sábados enseñando casas a curiosos.",
  },
  {
    q: "¿Cuánto trabajo tengo que hacer yo?",
    a: "Cero técnico. Nos pasás fotos, precio, ubicación y descripción por WhatsApp. En 48 horas tenés tu link listo para compartir con clientes, en redes o en tu firma de correo. No tocás código, no aprendés herramientas.",
  },
  {
    q: "¿Funciona para cualquier propiedad o solo para casas de lujo?",
    a: " No, nuestra herramienta funciona perfectamente para todo tipo de propiedades, desde terrenos básicos hasta casas de cualquier rango de precio.",
  },
  {
    q: "¿Qué incluye exactamente por $49.99 y cuánto tarda?",
    a: "Página exclusiva con tu propiedad, hasta 20 fotos, mapa, descripción optimizada, botón directo a tu WhatsApp y dominio tipo tucasa.sacuanjoche.dev. Lista en 48 horas hábiles. Pago único — sin mensualidad, sin letra chica.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 sm:py-32 border-t border-border/40 bg-navy-deep/40">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Lo que todo agente inmobiliario{" "}
            <span className="text-primary">pregunta antes.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card/60 px-5 data-[state=open]:border-primary/40 transition-colors"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-14 text-center rounded-2xl border border-primary/30 bg-primary/5 p-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-balance mb-3">
            Entonces… ¿cuántos sábados más vas a perder enseñando tu propiedad a curiosos?
          </h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            Por menos de lo que cobrás por una visita perdida, tenés una herramienta que trabaja por vos 24/7.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href={waLink(WA_MESSAGES.pricing)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Quiero mi página por $49.99
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
