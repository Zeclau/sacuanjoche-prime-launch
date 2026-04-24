import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Vendí una casa de $185,000 en Las Colinas en 19 días. El comprador llegó desde Miami y dijo que la página le dio total confianza.",
    name: "María José R.",
    role: "Agente inmobiliaria independiente · Managua",
  },
  {
    quote: "Tenía la propiedad en Encuentra24 hace 7 meses sin ofertas serias. Con mi subdominio cerré en 6 semanas a precio completo.",
    name: "Carlos M.",
    role: "Re/Max Granada",
  },
  {
    quote: "Por fin algo que se ve como las páginas de agencias de Costa Rica, pero hecho aquí y al precio de aquí.",
    name: "Lucía A.",
    role: "Bienes Raíces León",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 sm:py-32 border-t border-border/40">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Agentes inmobiliarios que ya cerraron
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Resultados reales en el{" "}
            <span className="text-primary">mercado nica.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card p-7 flex flex-col"
            >
              <Quote className="h-6 w-6 text-primary/60 mb-4" />
              <blockquote className="text-sm sm:text-base text-foreground/90 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border/60">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
