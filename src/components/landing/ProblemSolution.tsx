import { X, Check, CheckCircle2 } from "lucide-react";

const intro = [
  "Deja de competir con apartamentos de $ 20,000",
  "Llegan menos contactos, pero los que llegan sí compran",
  "El dueño ve seriedad y te renueva la exclusividad",
  "Recuperas tus fines de semana",
];

const ProblemSolution = () => {
  return (
    <section className="py-24 sm:py-32 border-t border-border/40">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            El problema real
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Tu propiedad de $150,000 merece más que{" "}
            <span className="text-primary">un anuncio entre 8,000 más.</span>
          </h2>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {intro.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm sm:text-[0.95rem] text-foreground/85">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
            <p className="font-mono text-xs sm:text-base text-muted-foreground break-all line-through decoration-destructive/60">
              encuentra24.com/guatemala/bienes-raices/...
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><X className="h-4 w-4 text-destructive shrink-0 mt-0.5" /> Mezclado con miles de listados baratos de la Ciudad</li>
              <li className="flex gap-2"><X className="h-4 w-4 text-destructive shrink-0 mt-0.5" /> Fotos comprimidas, sin contexto de la zona</li>
              <li className="flex gap-2"><X className="h-4 w-4 text-destructive shrink-0 mt-0.5" /> Tu nombre escondido bajo el de la plataforma</li>
              <li className="flex gap-2"><X className="h-4 w-4 text-destructive shrink-0 mt-0.5" /> Compite con casas de $ 20,000 al lado</li>
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
            <p className="font-mono text-xs sm:text-base text-foreground break-all">
              villalascolinas<span className="text-primary">.sacuanjoche.dev</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/85">
              <li className="flex gap-2"><Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" /> Subdominio único y memorable para tu cliente</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" /> Galería premium optimizada para WhatsApp NI</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" /> Mapa con referencias locales</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" /> Precio en USD y conversión a córdobas automática</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
