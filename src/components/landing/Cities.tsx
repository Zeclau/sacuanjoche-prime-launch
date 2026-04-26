const zones = [
  { city: "Ciudad de Guatemala", area: "Capital de Guatemala, zonas residenciales, comerciales y exclusivas" },
  { city: "San Salvador", area: "Capital de El Salvador, zona rosa, escalón y áreas premium" },
  { city: "Tegucigalpa", area: "Capital de Honduras, colonias residenciales y desarrollos turísticos" },
  { city: "Managua", area: "Capital de Nicaragua, zonas residenciales, comerciales y costeras" },
  { city: "San José", area: "Capital de Costa Rica, Escazú, Santa Ana y Valle Central" },
  { city: "Ciudad de Panamá", area: "Capital de Panamá, Punta Pacífica, Costa del Este y áreas premium" },
];

const Cities = () => {
  return (
    <section className="py-24 sm:py-32 border-t border-border/40 bg-navy-deep/40">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Cobertura internacional
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Trabajamos con agentes inmobiliarios de{" "}
            <span className="text-primary">toda Centroamérica.</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {zones.map((z) => (
            <div
              key={z.city}
              className="rounded-xl border border-border bg-card/40 p-6 hover:bg-card/70 hover:border-primary/30 transition-all"
            >
              <p className="text-lg font-semibold text-foreground">{z.city}</p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{z.area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cities;
