import { Camera, Code2, MessageSquareText } from "lucide-react";

const steps = [
  {
    icon: Camera,
    n: "01",
    title: "Nos envías las fotos y el precio",
    desc: "Comparte tus mejores tomas y los detalles clave de la propiedad por WhatsApp. Sin formularios largos.",
  },
  {
    icon: Code2,
    n: "02",
    title: "Construimos tu página exclusiva en 48h",
    desc: "Diseñamos un Single Property Website con tu propio subdominio, optimizado para móvil y velocidad.",
  },
  {
    icon: MessageSquareText,
    n: "03",
    title: "Recibes leads directos a tu WhatsApp",
    desc: "Cada visitante interesado te contacta directamente. Tú cierras la venta sin intermediarios.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 sm:py-32 border-t border-border/40 bg-navy-deep/40">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Cómo funciona
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            De fotos a leads en{" "}
            <span className="text-primary">tres pasos.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {steps.map(({ icon: Icon, n, title, desc }) => (
            <div
              key={n}
              className="group relative rounded-2xl border border-border bg-card p-7 sm:p-8 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                </span>
                <span className="text-2xl font-light text-primary/40 tabular-nums">{n}</span>
              </div>
              <h3 className="text-xl font-semibold leading-snug">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
