import { Camera, Code2, MessageSquareText } from "lucide-react";

const steps = [
  {
    icon: Camera,
    n: "01",
    title: "Cuéntanos de la propiedad",
    desc: "Por WhatsApp nos pasas fotos, precio y detalles. Diez minutos de tu tiempo. Nada de formularios eternos.",
  },
  {
    icon: Code2,
    n: "02",
    title: "Te entregamos el escaparate en 48h",
    desc: "Recibes un enlace exclusivo, listo para enviar a clientes serios, publicar en tus redes y compartir con nicas en el extranjero.",
  },
  {
    icon: MessageSquareText,
    n: "03",
    title: "Te llegan compradores calificados",
    desc: "Quien te escribe ya vio todo. Tú dejas de explicar lo básico y empiezas a negociar el cierre.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 sm:py-32 border-t border-border/40 bg-navy-deep/40">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Así de simple
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Tú no haces nada técnico.{" "}
            <span className="text-primary">Nosotros nos encargamos.</span>
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
