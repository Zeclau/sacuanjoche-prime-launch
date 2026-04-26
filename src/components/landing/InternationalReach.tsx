import { Globe, Languages, Plane, MessageSquare } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

const points = [
  {
    icon: Languages,
    title: "Multilingüe nativo",
    desc: "Inglés, español y más, con traducciones nativas y terminología técnica del sector inmobiliario centroamericano.",
  },
  {
    icon: Plane,
    title: "Atrae extranjeros a tu país",
    desc: "Inversionistas de EE.UU., Europa y Latinoamérica buscando playa, retiro o segunda vivienda. Tu propiedad les habla en su idioma.",
  },
  {
    icon: MessageSquare,
    title: "Cierra desde otro continente",
    desc: "Información clara, ficha técnica y WhatsApp directo. El cliente internacional decide sin intermediarios ni traducciones improvisadas.",
  },
];

const InternationalReach = () => {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 border-t border-border/40 overflow-hidden"
    >
      {/* fondo sutil dorado */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, hsl(var(--gold)) 0%, transparent 60%), radial-gradient(50% 40% at 10% 90%, hsl(var(--gold)) 0%, transparent 60%)",
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
              Valor agregado
            </span>
          </div>

          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Expande tu mercado:{" "}
            <span className="text-primary">atrae inversionistas extranjeros</span>
          </h2>

          <p className="text-balance mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            No pierdas comisiones de alto valor por la barrera del idioma. Entrégale al
            cliente internacional la información exacta que necesita, en su idioma natal,
            y cierra la venta más rápido. Centroamerica atrae cada vez más extranjeros buscando
            playa, retiro o inversión — tu propiedad merece hablarles directamente.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group rounded-2xl border border-border bg-card/60 p-7 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-500 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${150 + i * 120}ms` }}
            >
              <span className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center mb-5 group-hover:bg-primary/15 transition-colors">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </span>
              <h3 className="text-lg font-semibold leading-snug">{title}</h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Lista compacta de idiomas / origen */}
        <div
          className={`mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-opacity duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "550ms" }}
        >
          <span className="text-primary/80">Idiomas disponibles:</span>
          <span>Español</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>English</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>Français</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>Italiano</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>+ a pedido</span>
        </div>
      </div>
    </section>
  );
};

export default InternationalReach;
