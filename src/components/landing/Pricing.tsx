import { Check, Globe, MessageCircle, QrCode } from "lucide-react";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Plan Impulso",
    price: "$29.99",
    note: "USD · Pago único",
    eyebrow: "Ideal para publicar rápido",
    description: "La opción ágil para presentar una propiedad con una presencia digital clara y profesional.",
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
    description: "Una presentación más sólida para propiedades premium, branding limpio y mejor conversión en campo.",
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
    <section id="precio" className="py-24 sm:py-32 border-t border-border/40 bg-navy/40">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
            Planes de venta · Pago único
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-foreground">
            Elige el nivel de presencia digital que mejor acompaña{
