import { Globe2, Languages, Plane } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const languages = [
  { code: "ES", label: "Español" },
  { code: "EN", label: "English" },
  { code: "FR", label: "Français" },
  { code: "DE", label: "Deutsch" },
  { code: "IT", label: "Italiano" },
  { code: "PT", label: "Português" },
];

const InternationalReach = () => {
  const header = useReveal<HTMLDivElement>();
  const card = useReveal<HTMLDivElement>(0.2);
  const chips = useReveal<HTMLDivElement>(0.2);

  return (
    <section className="relative py-24 sm:py-32 border-t border-border/40 overflow-hidden">
      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-drift" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl animate-drift" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="container">
        <div
          ref={header.ref}
          className={`reveal ${header.visible ? "is-visible" : ""} max-w-2xl`}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Valor agregado · Alcance global
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Expande tu mercado:{" "}
            <span className="text-primary">atrae inversionistas extranjeros</span>
          </h2>
          <p className="text-balance mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Cada landing page incluye <span className="text-foreground font-medium">soporte multilingüe nativo</span> con
            traducciones técnicas del sector inmobiliario. No pierdas comisiones de alto valor por la
            barrera del idioma: entrégale al cliente internacional la información exacta que necesita,
            en su idioma natal, y cierra la venta más rápido.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6 items-stretch">
          {/* Main card */}
          <div
            ref={card.ref}
            className={`reveal ${card.visible ? "is-visible" : ""} lg:col-span-3 rounded-2xl border border-border bg-card/60 p-8 sm:p-10 backdrop-blur-sm`}
            style={{ transitionDelay: "80ms" }}
          >
            <div className="flex items-start gap-5">
              <span className="shrink-0 h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center">
                <Globe2 className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold leading-snug">
                  Una propiedad. Un enlace. Múltiples idiomas.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Tu página detecta el idioma del visitante y le presenta la propiedad como si
                  estuviera hecha solo para él. Compradores de Estados Unidos, Europa o Centroamérica
                  ven precios, distribución y ubicación sin tener que traducir nada.
                </p>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border/70 bg-background/40 p-5">
                <div className="flex items-center gap-3">
                  <Languages className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  <h4 className="text-sm font-semibold">Traducción técnica real</h4>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Términos del rubro: escritura, dominio, varas², zonificación. No traducciones automáticas torpes.
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/40 p-5">
                <div className="flex items-center gap-3">
                  <Plane className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  <h4 className="text-sm font-semibold">Atrae extranjeros a Nicaragua</h4>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Inversionistas de todo el mundo buscan propiedades en San Juan del Sur, Granada, León y Managua. Aparece preparado.
                </p>
              </div>
            </div>
          </div>

          {/* Languages chips */}
          <div
            ref={chips.ref}
            className={`reveal ${chips.visible ? "is-visible" : ""} lg:col-span-2 rounded-2xl border border-border bg-card/60 p-8 flex flex-col`}
            style={{ transitionDelay: "160ms" }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Idiomas disponibles
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {languages.map((lang) => (
                <span
                  key={lang.code}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 text-sm transition-colors hover:border-primary/50 hover:bg-primary/10"
                >
                  <span className="text-primary font-semibold tracking-wider text-xs">{lang.code}</span>
                  <span className="text-muted-foreground">{lang.label}</span>
                </span>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">¿Necesitas otro idioma?</span>{" "}
                Lo agregamos según el perfil del comprador objetivo de tu propiedad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalReach;
