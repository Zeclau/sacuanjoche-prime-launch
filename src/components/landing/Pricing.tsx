import { Check, Globe, MessageCircle, QrCode, type LucideIcon } from "lucide-react";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  price: string;
  note: string;
  eyebrow: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  featured: boolean;
  cta: string;
  accent?: string;
  extraIcon?: LucideIcon;
};

const plans: Plan[] = [
  {
    name: "Plan Impulso",
    price: "$29.99",
    note: "USD · Pago único",
    eyebrow: "Ideal para publicar rápido",
    description:
      "La opción ágil para presentar una propiedad con una presencia digital clara y profesional.",
    features: [
      "Sitio web en subdominio sacuanjoche.dev",
      "Galería multimedia optimizada",
      "Mapa interactivo",
      "Botón directo a WhatsApp",
      "Entrega en 48h",
    ],
    icon: MessageCircle,
    featured: false,
    cta: "Quiero el Plan Impulso",
  },
  {
    name: "Plan Premium",
    price: "$79.99",
    note: "USD · Pago único",
    eyebrow: "Para agentes que quieren elevar su marca",
    description:
      "Una presentación más sólida para propiedades premium, branding limpio y mejor conversión en campo.",
    features: [
      "Todo lo del Plan Impulso",
      "Dominio propio (.com)",
      "Marca blanca (sin logos de la agencia)",
      "Código QR para rótulos físicos",
    ],
    icon: Globe,
    featured: true,
    cta: "Quiero el Plan Premium",
    accent: "Más solicitado",
    extraIcon: QrCode,
  },
];

const Pricing = () => {
  return (
    <section id="precio" className="border-t border-border/40 bg-navy/40 py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Planes de venta · Pago único
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
            Elige el nivel de presencia digital que mejor acompaña
            <span className="text-primary"> tu estrategia comercial.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
            Dos opciones claras para agentes y brokers que quieren presentar propiedades con una imagen más limpia,
            moderna y enfocada en conversión.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const ExtraIcon = plan.extraIcon;

            return (
              <article
                key={plan.name}
                className={cn(
                  "relative flex h-full flex-col rounded-xl border bg-card p-8 shadow-elegant transition-all sm:p-10",
                  plan.featured
                    ? "border-primary/50 ring-1 ring-primary/25"
                    : "border-border/80"
                )}
              >
                {plan.accent ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow-gold">
                      {plan.accent}
                    </span>
                  </div>
                ) : null}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{plan.eyebrow}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-foreground">{plan.name}</h3>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

                <div className="mt-8">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">{plan.price}</span>
                    <span className="pb-2 text-sm text-muted-foreground">{plan.note}</span>
                  </div>
                </div>

                <div className="my-7 h-px bg-border" />

                <ul className="space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-foreground/90">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15">
                        <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {ExtraIcon ? (
                  <div className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-muted-foreground">
                    <ExtraIcon className="h-3.5 w-3.5 text-primary" />
                    Incluye material listo para rótulos físicos
                  </div>
                ) : null}

                <a
                  href={waLink(`${WA_MESSAGES.pricing} · ${plan.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-4 font-semibold transition-all",
                    plan.featured
                      ? "bg-primary text-primary-foreground shadow-gold hover:bg-primary-glow"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  <MessageCircle className="h-4 w-4" />
                  {plan.cta}
                </a>

                <p className="mt-4 text-center text-xs text-muted-foreground">Pago único · Sin mensualidades</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
