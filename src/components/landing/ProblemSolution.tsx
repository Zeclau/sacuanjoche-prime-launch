import { X, Check } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-24 sm:py-32 border-t border-border/40">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            El contraste
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Marketplace no vende casas de{" "}
            <span className="text-primary">$100,000.</span>
          </h2>
          <p className="text-balance mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Tus clientes de alto valor exigen una presentación premium.
            Te entregamos un subdominio exclusivo diseñado para convertir visitantes en compradores.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {/* Problema */}
          <div className="rounded-2xl border border-border bg-card/50 p-7 sm:p-8">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-8 w-8 rounded-full bg-destructive/15 text-destructive grid place-items-center">
                <X className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Antes</span>
            </div>
            <p className="font-mono text-sm sm:text-base text-muted-foreground break-all line-through decoration-destructive/60">
              facebook.com/marketplace/item/8472...
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><X className="h-4 w-4 text-destructive shrink-0 mt-0.5" /> Mezclado con miles de listados baratos</li>
              <li className="flex gap-2"><X className="h-4 w-4 text-destructive shrink-0 mt-0.5" /> Fotos comprimidas y mal presentadas</li>
              <li className="flex gap-2"><X className="h-4 w-4 text-destructive shrink-0 mt-0.5" /> Sin control sobre tu marca</li>
            </ul>
          </div>

          {/* Solución */}
          <div className="relative rounded-2xl border border-primary/40 bg-navy-soft p-7 sm:p-8 shadow-gold">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-8 w-8 rounded-full bg-secondary/15 text-secondary grid place-items-center">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-primary uppercase tracking-wide">Después</span>
            </div>
            <p className="font-mono text-sm sm:text-base text-foreground break-all">
              casalascolinas<span className="text-primary">.sacuanjoche.dev</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/85">
              <li className="flex gap-2"><Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" /> Subdominio único y memorable</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" /> Galería premium optimizada</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" /> Diseño pensado para convertir</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
