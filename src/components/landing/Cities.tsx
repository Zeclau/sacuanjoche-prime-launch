const zones = [
  { city: "Managua", area: "Las Colinas · Santo Domingo · Carretera Masaya" },
  { city: "Granada", area: "Casco histórico · Mombacho · Laguna de Apoyo" },
  { city: "León", area: "Centro colonial · Las Peñitas · Poneloya" },
  { city: "San Juan del Sur", area: "Playa Marsella · Hermosa · Tola" },
  { city: "Costa Esmeralda", area: "Rancho Santana · Iguana · Aurora" },
  { city: "Estelí & Matagalpa", area: "Fincas cafetaleras · casas de montaña" },
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
            Trabajamos con corredores de{" "}
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
