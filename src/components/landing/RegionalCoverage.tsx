import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

const countries = [
  { flag: "🇬🇹", name: "Guatemala" },
  { flag: "🇸🇻", name: "El Salvador" },
  { flag: "🇭🇳", name: "Honduras" },
  { flag: "🇳🇮", name: "Nicaragua" },
  { flag: "🇨🇷", name: "Costa Rica" },
  { flag: "🇵🇦", name: "Panamá" },
];

const RegionalCoverage = () => {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="relative py-16 sm:py-20 border-t border-border/40 bg-navy-deep/60 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40 [background:radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.10),transparent_70%)]" />
      <div className="container">
        <div ref={ref} className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Cobertura regional
          </p>
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Con la confianza de los mejores{" "}
            <span className="text-primary">profesionales inmobiliarios</span> de la región.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {countries.map((c) => (
            <div
              key={c.name}
              className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card/40 px-3 py-5 hover:bg-card/70 hover:border-primary/40 transition-all"
            >
              <span className="text-3xl sm:text-4xl transition-transform group-hover:scale-110" aria-hidden>
                {c.flag}
              </span>
              <span className="text-xs sm:text-sm font-medium text-foreground/85 text-center">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalCoverage;
