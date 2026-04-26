import { Sparkles, Flag, TrendingUp, Award } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

const stats = [
  {
    icon: Flag,
    title: "Pioneros en Nicaragua",
    desc: "Somos la primera empresa nicaragüense especializada en single property websites para el sector inmobiliario.",
  },
  {
    icon: Award,
    title: "Estándar global",
    desc: "Una herramienta usada por agentes de alto nivel en Miami, Dubái, Madrid y Los Ángeles para vender propiedades premium.",
  },
  {
    icon: TrendingUp,
    title: "Ventaja competitiva real",
    desc: "Mientras otros siguen publicando en marketplaces saturados, tú presentas tus propiedades como lo hacen las grandes ligas.",
  },
];

const Innovation = () => {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 border-t border-border/40 overflow-hidden"
    >
      {/* fondo sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          background:
            "radial-gradient(55% 45% at 20% 15%, hsl(var(--gold)) 0%, transparent 60%), radial-gradient(45% 40% at 90% 85%, hsl(var(--gold)) 0%, transparent 60%)",
        }}
      />

      <div className="container relative">
        <div
          className={`max-w-3xl transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 mb-5">
            <Sparkles className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
            <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-medium">
              Innovación
            </span>
          </div>

          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Agrega innovación a tu{" "}
            <span className="text-primary">modelo de negocio</span>
          </h2>

          <p className="text-balance mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Somos la primera empresa nicaragüense en desarrollar{" "}
            <span className="text-foreground font-medium">single property websites</span>,
            una herramienta que ha demostrado ser clave para los agentes inmobiliarios
            de alto nivel en el mercado global.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {stats.map(({ icon: Icon, title, desc }, i) => (
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
      </div>
    </section>
  );
};

export default Innovation;
