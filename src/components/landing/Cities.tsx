const zones = [
  { city: "Managua", area: "Capital y zonas residenciales, comerciales y periféricas" },
  { city: "Granada", area: "Ciudad colonial, alrededores y comunidades cercanas" },
  { city: "León", area: "Centro histórico, costa del Pacífico y zonas rurales" },
  { city: "Rivas & San Juan del Sur", area: "Playas, fincas y propiedades costeras del Pacífico Sur" },
  { city: "Costa Esmeralda & Tola", area: "Desarrollos turísticos y propiedades frente al mar" },
  { city: "Norte de Nicaragua", area: "Estelí, Matagalpa, Jinotega y zonas cafetaleras" },
  { city: "Caribe Nicaragüense", area: "Bluefields, Corn Island y la Costa Caribe" },
  { city: "Resto del país", area: "Masaya, Carazo, Chinandega, Boaco, Chontales y más" },
];

const Cities = () => {
  return (
    <section className="py-24 sm:py-32 border-t border-border/40 bg-navy-deep/40">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Cobertura nacional
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Trabajamos con agentes inmobiliarios de{" "}
            <span className="text-primary">todo Nicaragua.</span>
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
