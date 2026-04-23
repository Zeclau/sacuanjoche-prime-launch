import { Filter, Globe2, Clock, TrendingUp, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Filter,
    title: "Filtra curiosos automáticamente",
    desc: "Quien llega a un sitio exclusivo de la propiedad ya viene con intención real. Llegan menos contactos, pero los que llegan sí compran.",
  },
  {
    icon: Globe2,
    title: "Atrae compradores en el extranjero",
    desc: "Un nica en Miami, Madrid o San José puede recorrer la casa desde el celular. Comparte un solo enlace y reciben todo: fotos, mapa, precio y WhatsApp.",
  },
  {
    icon: TrendingUp,
    title: "Posiciona propiedades premium",
    desc: "Tu casa de $200,000 deja de competir con apartamentos de C$ 800,000. Se presenta sola, con la jerarquía que merece.",
  },
  {
    icon: Clock,
    title: "Reduce tiempo en visitas perdidas",
    desc: "El comprador llega informado: ya vio fotos, distribución, ubicación y precio. Tus visitas se vuelven cierres, no recorridos.",
  },
  {
    icon: Users,
    title: "Te posiciona como corredor serio",
    desc: "Cuando el dueño ve su propiedad con su propio sitio web, no duda en renovarte la exclusividad. Tu marca personal sube de nivel.",
  },
  {
    icon: ShieldCheck,
    title: "Inversión, no gasto recurrente",
    desc: "Pago único. Una sola comisión cubre 50 veces lo invertido. Sin mensualidades, sin contratos, sin sorpresas.",
  },
];

const Features = () => {
  return (
    <section className="py-24 sm:py-32 border-t border-border/40">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Beneficios reales para tu negocio
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Menos curiosos.{" "}
            <span className="text-primary">Mejores compradores.</span>{" "}
            Cierres más rápidos.
          </h2>
          <p className="text-balance mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Esto no se trata de tener un sitio bonito. Se trata de vender la propiedad antes, mejor y a quien realmente puede comprarla.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card/60 p-7 hover:border-primary/40 transition-colors"
            >
              <span className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center mb-5">
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

export default Features;
