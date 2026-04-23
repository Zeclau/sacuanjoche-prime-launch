const stats = [
  { k: "100%", v: "Equipo nicaragüense" },
  { k: "48h", v: "Tiempo de entrega" },
  { k: "$49.99", v: "Pago único en USD" },
  { k: "24/7", v: "Soporte por WhatsApp" },
];

const TrustStrip = () => {
  return (
    <section className="border-t border-border/40 bg-navy-deep/60 py-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.v}>
              <p className="text-2xl sm:text-3xl font-semibold text-primary tabular-nums">{s.k}</p>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
