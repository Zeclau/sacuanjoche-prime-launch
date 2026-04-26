import { Check, MessageCircle } from "lucide-react";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

const benefits = [
  "Diseño 100% adaptable a móviles",
  "Galería premium de fotos optimizada",
  "Enlace directo a tu WhatsApp",
  "Subdominio profesional incluido",
  "Alojamiento y mantenimiento incluidos",
];

const Pricing = () => {
  return (
    <section id="precio" className="py-24 sm:py-32 border-t border-border/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Precio único · Sin mensualidades
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Una inversión que paga{" "}
            <span className="text-primary">una sola comisión.</span>
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative rounded-2xl border border-primary/40 bg-card p-8 sm:p-10 shadow-elegant">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wide uppercase">
                Oferta de lanzamiento
              </span>
            </div>

            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Herramienta de Venta Exclusiva
            </h3>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-base text-muted-foreground line-through decoration-destructive/70">
                $60 USD
              </span>
              <span className="text-xs text-muted-foreground/70 line-through decoration-destructive/60">
                2,220 C$
              </span>
            </div>

            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-5xl sm:text-6xl font-semibold text-foreground tabular-nums">
                $49.99
              </span>
              <span className="text-base text-muted-foreground">USD</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground tabular-nums">≈ 1,845 C$ · Pago único, sin mensualidades</p>

            <div className="my-7 h-px bg-border" />

            <ul className="space-y-3.5">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-foreground/90">
                  <span className="h-5 w-5 rounded-full bg-primary/15 grid place-items-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <a
              href={waLink(WA_MESSAGES.pricing)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-primary text-primary-foreground font-semibold shadow-gold hover:bg-primary-glow transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              Quiero mi página hoy
            </a>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Entrega en 48 horas · Sin contratos
            </p>
            <p className="mt-2 text-center text-[11px] text-muted-foreground/80 leading-relaxed">
              Pagos seguros vía <span className="text-foreground/80 font-medium">Kash</span> y las principales
              tarjetas de crédito en toda Centroamérica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
