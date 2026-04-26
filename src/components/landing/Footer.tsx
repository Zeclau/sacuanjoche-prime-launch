import logo from "@/assets/logo-sacuanjoche.png";
import { Mail } from "lucide-react";

const CONTACT_EMAIL = "Sacuanjoche.dev.ventas@outlook.com";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-navy-deep py-14">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-5">
          <img
            src={logo}
            alt="Logo Sacuanjoche"
            width={56}
            height={56}
            loading="lazy"
            className="h-14 w-14 object-contain opacity-95"
          />
          <div>
            <p className="text-foreground font-semibold tracking-tight text-lg">
              Sacuanjoche<span className="text-primary">.dev</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Agencia centroamericana de tecnología inmobiliaria. Socio digital de agentes y brokerages
              de alto nivel —Keller Williams, RE/MAX, Century 21 e independientes— en Guatemala,
              El Salvador, Honduras, Nicaragua, Costa Rica y Panamá.
            </p>
            <p className="mt-2 text-xs text-muted-foreground/80">
              🇬🇹 🇸🇻 🇭🇳 🇳🇮 🇨🇷 🇵🇦 · Sede en Managua, operando para toda Centroamérica
            </p>
          </div>
          <blockquote className="mt-4 max-w-md border-l-2 border-primary/50 pl-4 text-left">
            <p className="text-sm italic text-foreground/80 leading-relaxed">
              "Las personas no compran propiedades, compran decisiones bien presentadas."
            </p>
            <footer className="mt-1.5 text-xs text-muted-foreground not-italic">— Tom Ferry</footer>
          </blockquote>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            {CONTACT_EMAIL}
          </a>

          <p className="text-xs text-muted-foreground/70 mt-4">
            © {new Date().getFullYear()} Sacuanjoche.dev · Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
