import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type CurrencyCode = "NIO" | "CRC" | "HNL" | "GTQ";

const flags: { code: CurrencyCode; flag: string; label: string; animal: string; animalLabel: string }[] = [
  { code: "GTQ", flag: "🇬🇹", label: "Guatemala", animal: "🦜", animalLabel: "Quetzal" },
  { code: "HNL", flag: "🇭🇳", label: "Honduras", animal: "🦅", animalLabel: "Guacamaya" },
  { code: "NIO", flag: "🇳🇮", label: "Nicaragua", animal: "🐦", animalLabel: "Guardabarranco" },
  { code: "CRC", flag: "🇨🇷", label: "Costa Rica", animal: "🦥", animalLabel: "Perezoso" },
];

type Price = { current: string; original: string; suffix: string };

type PlanPricing = {
  USD: Price;
} & Record<CurrencyCode, Price>;

const basicPricing: PlanPricing = {
  USD: { current: "$34.99", original: "$40.00", suffix: "USD" },
  NIO: { current: "C$ 1,290", original: "C$ 1,475", suffix: "NIO" },
  CRC: { current: "₡ 16,025", original: "₡ 20,500", suffix: "CRC" },
  HNL: { current: "L 935", original: "L 990", suffix: "HNL" },
  GTQ: { current: "Q 268", original: "Q 310", suffix: "GTQ" },
};

const premiumPricing: PlanPricing = {
  USD: { current: "$94.99", original: "$120.00", suffix: "USD" },
  NIO: { current: "C$ 3,499", original: "C$ 4,400", suffix: "NIO" },
  CRC: { current: "₡ 43,499", original: "₡ 61,000", suffix: "CRC" },
  HNL: { current: "L 2,535", original: "L 3,000", suffix: "HNL" },
  GTQ: { current: "Q 726", original: "Q 930", suffix: "GTQ" },
};

const basicBenefits = [
  "Sitio web en subdominio",
  "Galería de fotos optimizada",
  "Botón directo a WhatsApp",
  "Mapa interactivo de ubicación",
  "Entrega rápida en 48 hrs",
];

const premiumBenefits = [
  "Todo lo del Plan Básico",
  "Dominio web propio (.com)",
  "Marca blanca (sin nuestros logos)",
  "Código QR para rótulos físicos",
  "Analíticas de rastreo (Meta / Google)",
];

type PlanCardProps = {
  name: string;
  tagline: string;
  pricing: PlanPricing;
  benefits: string[];
  active: CurrencyCode | null;
  onToggle: (c: CurrencyCode) => void;
  highlight?: boolean;
  badge?: string;
  ctaMessage: string;
};

const PlanCard = ({
  name,
  tagline,
  pricing,
  benefits,
  active,
  onToggle,
  highlight,
  badge,
  ctaMessage,
}: PlanCardProps) => {
  const price = active ? pricing[active] : pricing.USD;
  const [hovered, setHovered] = useState<CurrencyCode | null>(null);
  const visibleAnimalCode = hovered ?? active;
  const visibleAnimal = visibleAnimalCode
    ? flags.find((f) => f.code === visibleAnimalCode)
    : null;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-card p-8 sm:p-10 shadow-elegant flex flex-col",
        highlight ? "border-primary/50" : "border-border"
      )}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wide uppercase whitespace-nowrap">
            {badge}
          </span>
        </div>
      )}

      {/* Currency toggle */}
      <div className="mt-2 mb-6 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
          Ver en moneda local
        </span>
        <div
          role="group"
          aria-label="Seleccionar moneda local"
          className="flex items-center gap-2"
        >
          {flags.map((c) => {
            const isActive = active === c.code;
            return (
              <button
                key={c.code}
                type="button"
                onClick={() => onToggle(c.code)}
                aria-pressed={isActive}
                aria-label={`${c.label} (${c.code})`}
                title={`${c.label} · ${c.code}`}
                className={cn(
                  "h-9 w-9 rounded-full grid place-items-center text-lg leading-none transition-all border",
                  "hover:scale-105 active:scale-95",
                  isActive
                    ? "opacity-100 border-primary ring-2 ring-primary/40 bg-primary/10"
                    : "opacity-50 hover:opacity-90 border-border bg-background/40"
                )}
              >
                <span aria-hidden>{c.flag}</span>
              </button>
            );
          })}
        </div>
      </div>

      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {name}
      </h3>
      <p className="mt-1 text-xs text-muted-foreground/80">{tagline}</p>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-base text-muted-foreground line-through decoration-destructive/70 transition-all">
          {price.original}
        </span>
      </div>

      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-5xl sm:text-6xl font-semibold text-foreground tabular-nums transition-all">
          {price.current}
        </span>
        <span className="text-base text-muted-foreground">{price.suffix}</span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        Pago único, sin mensualidades
      </p>

      <div className="my-7 h-px bg-border" />

      <ul className="space-y-3.5 flex-1">
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
        href={waLink(ctaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md font-semibold transition-all",
          highlight
            ? "bg-primary text-primary-foreground shadow-gold hover:bg-primary-glow"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        )}
      >
        <MessageCircle className="h-4 w-4" />
        Quiero este plan
      </a>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Entrega en 48 horas · Sin contratos
      </p>
    </div>
  );
};

const Pricing = () => {
  const [active, setActive] = useState<CurrencyCode | null>(null);
  const handleToggle = (code: CurrencyCode) =>
    setActive((prev) => (prev === code ? null : code));

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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PlanCard
            name="Plan Impulso"
            tagline="Lo esencial para vender más rápido"
            pricing={basicPricing}
            benefits={basicBenefits}
            active={active}
            onToggle={handleToggle}
            ctaMessage={WA_MESSAGES.pricing}
          />
          <PlanCard
            name="Plan Premium"
            tagline="Marca blanca y herramientas profesionales"
            pricing={premiumPricing}
            benefits={premiumBenefits}
            active={active}
            onToggle={handleToggle}
            highlight
            badge="Más popular"
            ctaMessage={WA_MESSAGES.pricing}
          />
        </div>

        <p className="mt-8 text-center text-[11px] text-muted-foreground/80 leading-relaxed max-w-md mx-auto">
          Pagos seguros vía{" "}
          <span className="text-foreground/80 font-medium">Kash</span> para las
          principales tarjetas de crédito en toda Centroamérica.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
