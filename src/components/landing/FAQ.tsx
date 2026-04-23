import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cómo pago los $45 USD desde Nicaragua?",
    a: "Aceptamos transferencia bancaria local (BAC, LAFISE, BANPRO), depósito en córdobas al tipo de cambio oficial, o efectivo en Managua. También recibimos Zelle y PayPal para corredores que ya manejan cuenta en el extranjero.",
  },
  {
    q: "¿La página queda a mi nombre o al de Sacuanjoche?",
    a: "Tu propiedad aparece en un subdominio del tipo tucasa.sacuanjoche.dev. El contenido, fotos y datos del corredor son 100% tuyos. Puedes solicitar baja en cualquier momento sin costo.",
  },
  {
    q: "¿Funciona si mi cliente está en Estados Unidos o Costa Rica?",
    a: "Sí, está optimizado precisamente para eso. Los servidores están en una CDN global, así que carga rápido desde Miami, Madrid o San José igual que desde Managua.",
  },
  {
    q: "¿Qué pasa si vendo la casa rápido?",
    a: "Mejor para vos. La página queda activa todo el tiempo que la necesités sin mensualidades. Si querés bajarla, nos avisás y la archivamos. Si querés cambiarla por otra propiedad, son solo $25 USD adicionales.",
  },
  {
    q: "¿Hacen las fotos también?",
    a: "Por ahora no. Trabajamos con las fotos que vos nos pasés. Te recomendamos fotógrafos inmobiliarios en Managua y Granada con los que ya hemos colaborado si necesitás ese servicio aparte.",
  },
  {
    q: "¿Por qué el nombre Sacuanjoche?",
    a: "Es la flor nacional de Nicaragua. Como agencia 100% nica, queríamos un nombre que reflejara de dónde venimos y a quién servimos: el corredor inmobiliario nicaragüense.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 sm:py-32 border-t border-border/40 bg-navy-deep/40">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Todo lo que necesitás{" "}
            <span className="text-primary">saber.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card/60 px-5 data-[state=open]:border-primary/40 transition-colors"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
