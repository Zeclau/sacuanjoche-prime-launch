import logo from "@/assets/logo-sacuanjoche.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-navy-deep py-14">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-5">
          <img
            src={logo}
            alt="Logo Sacuanjoche"
            width={48}
            height={48}
            loading="lazy"
            className="h-12 w-12 object-contain opacity-90"
          />
          <div>
            <p className="text-foreground font-semibold tracking-tight">
              Sacuanjoche<span className="text-primary">.dev</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              El socio tecnológico del corredor inmobiliario.
            </p>
          </div>
          <p className="text-xs text-muted-foreground/70 mt-4">
            © {new Date().getFullYear()} Sacuanjoche. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
