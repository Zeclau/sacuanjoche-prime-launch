export const WHATSAPP_NUMBER = "50576514498";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  hero: "Hola Sacuanjoche, vi su web y quiero ver un demo de una Single Property Website.",
  pricing: "Hola Sacuanjoche, quiero mi Single Property Web por $45 USD.",
  floating: "Hola Sacuanjoche, me interesa una página exclusiva para mi propiedad.",
};
