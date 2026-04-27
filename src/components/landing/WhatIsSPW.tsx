import { Globe, Target, Award, Users, ImageIcon, Megaphone } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

const benefits = [
  {
    icon: Target,
    title: "Eliminación de la competencia",
    desc: "Al no haber otros listados en el sitio, la atención del cliente se centra al 100% en su propiedad.",
  },
  {
    icon: Award,
    title: "Posicionamiento de marca",
    desc: "Proyecta una imagen de exclusividad y profesionalismo que genera confianza inmediata en propietarios y compradores.",
  },
  {
    icon: Users,
    title: "Generación de leads de calidad",
    desc: "Formularios de contacto integrados y optimizados para capturar prospectos interesados específicamente en ese inmueble.",
  },
  {
    icon: ImageIcon,
    title: "Optimización multimedia",
    desc: "Espacio ilimitado para fotografías en alta resolución, videos cinematográficos y tours virtuales sin las restricciones de los portales masivos.",
  },
  {
    icon: Megaphone,
    title: "Efectividad en redes sociales",
    desc: "Facilita campañas de publicidad dirigida (Facebook/Instagram Ads), llevando el tráfico a una página de aterrizaje diseñada para convertir.",
  },
];

const WhatIsSPW = () => {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section
      ref={ref}
      id="que-es-spw"
      className="relative py-24 sm:py-32 border-t border-border/40 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          background:
            "radial-gradient(50% 40% at 80% 20%, hsl(var(--primary)) 0%, transparent 60%)",
        }}
      />

      <div className="container relative">
        <div
          className={`max-w-3xl transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 mb-5">
            <Globe className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
            <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-medium">
              Concepto
            </span>
          </div>

          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            ¿Qué son las{" "}
            <span className="text-primary">Single Property Websites</span>?
          </h2>

          <p className="text-balance mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Una Single Property Website es una plataforma digital exclusiva diseñada
            para promocionar una sola propiedad de manera individualizada, eliminando
            las distracciones de los portales inmobiliarios tradicionales.
          </p>

          <p className="text-balance mt-4 text-base text-muted-foreground leading-relaxed">
            A diferencia de un listado común, este sitio web actúa como un{" "}
            <span className="text-foreground font-medium">brochure interactivo de lujo</span>{" "}
            que permite al potencial comprador sumergirse en la experiencia de la
            propiedad a través de contenido multimedia de alta calidad, recorridos
            en 3D y descripciones detalladas, todo bajo un dominio personalizado
            (ej. <span className="text-foreground">www.tupropiedad.com</span>).
          </p>
        </div>

        <div
          className={`mt-14 max-w-3xl transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6">
            Beneficios clave para agentes e inmobiliarias
          </h3>

          <Accordion
            type="single"
            collapsible
            className="rounded-2xl border border-border bg-card/60 px-5 sm:px-6"
          >
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <AccordionItem
                key={title}
                value={`b-${i}`}
                className="border-border/60 last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left hover:no-underline">
                  <span className="flex items-center gap-3">
                    <span className="h-9 w-9 shrink-0 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center">
                      <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                    </span>
                    <span className="text-base sm:text-lg font-medium">
                      {title}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-12 pr-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {desc}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p
          className={`mt-12 max-w-3xl text-balance text-base sm:text-lg text-muted-foreground leading-relaxed transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          En <span className="text-foreground font-semibold">Sacuanjoche</span>,
          transformamos cada listado en una experiencia digital única. No solo
          vendemos propiedades; creamos el escenario digital perfecto para que su
          inmueble destaque en el mercado.
        </p>
      </div>
    </section>
  );
};

export default WhatIsSPW;
