import logo from "@/assets/logo-sacuanjoche.png";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-navy-deep/70 border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="Logo Sacuanjoche"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span className="text-foreground font-semibold tracking-tight text-base">
            Sacuanjoche<span className="text-primary">.dev</span>
          </span>
        </a>

        <a
          href={waLink(WA_MESSAGES.floating)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
        >
          Contacto
        </a>
      </div>
    </header>
  );
};

export default Navbar;
