import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Arquitectura de villa de lujo al atardecer"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              🇳🇮 Hecho en Nicaragua · Tecnología para Corredores Inmobiliarios
            </span>
          </div>

          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-foreground">
            Vende esa propiedad{" "}
            <span className="text-primary">antes que tu competencia</span>{" "}
            la muestre.
          </h1>

          <p className="text-balance mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Esto no es una página web más. Es una <strong className="text-foreground/90 font-medium">herramienta de venta</strong> diseñada
            para corredores nicaragüenses que están cansados de atender curiosos, perder fines de semana en visitas que no cierran,
            y ver propiedades premium estancadas durante meses en Encuentra24. Atrae compradores realmente calificados —incluyendo
            nicas en Miami, Costa Rica y España— y filtra a los curiosos antes de que te roben el tiempo.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#precio"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-primary text-primary-foreground font-semibold shadow-gold hover:bg-primary-glow transition-all"
            >
              Quiero vender más rápido
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink(WA_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md border border-secondary/60 text-foreground font-semibold hover:bg-secondary/10 hover:border-secondary transition-all"
            >
              <MessageCircle className="h-4 w-4 text-secondary" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
