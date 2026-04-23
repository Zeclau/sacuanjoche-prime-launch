import { Smartphone, Gauge, MapPin, Globe2, Search, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile-first para Nicaragua",
    desc: "El 87% de tus prospectos navega desde el celular. Cargamos en menos de 2 segundos incluso en redes 3G del interior.",
  },
  {
    icon: Globe2,
    title: "Pensado para el nica en el extranjero",
    desc: "Diseñado para que tu cliente en Miami, Costa Rica o Madrid vea la propiedad como si estuviera ahí.",
  },
  {
    icon: MapPin,
    title: "Referencias locales reales",
    desc: "Mapa con puntos cercanos: Galerías Santo Domingo, Pellas, Metrocentro, kilómetros de Carretera Masaya.",
  },
  {
    icon: Gauge,
    title: "Velocidad de competencia mundial",
    desc: "Hostimg en CDN global. Tu página rinde igual que la de un agente en Beverly Hills.",
  },
  {
    icon: Search,
    title: "SEO local optimizado",
    desc: "Aparece en Google cuando alguien busca 'casa en venta Las Colinas' o 'apartamento Carretera Masaya'.",
  },
  {
    icon: ShieldCheck,
    title: "Sin contratos, sin sorpresas",
    desc: "Pago único en USD por transferencia, BAC, LAFISE o efectivo. Tu página queda registrada a tu nombre.",
  },
];

const Features = () => {
  return (
    <section className="py-24 sm:py-32 border-t border-border/40">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Diseñado para Nicaragua
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Tecnología internacional,{" "}
            <span className="text-primary">contexto local.</span>
          </h2>
          <p className="text-balance mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            No copiamos plantillas extranjeras. Cada detalle está pensado para cómo se compra y se vende propiedad de lujo en Nicaragua.
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
