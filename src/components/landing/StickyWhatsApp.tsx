import { MessageCircle } from "lucide-react";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

const StickyWhatsApp = () => {
  return (
    <a
      href={waLink(WA_MESSAGES.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-secondary text-secondary-foreground shadow-elegant hover:scale-105 active:scale-95 transition-transform"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
      <span className="absolute inset-0 rounded-full ring-4 ring-secondary/30 animate-pulse pointer-events-none" />
    </a>
  );
};

export default StickyWhatsApp;
