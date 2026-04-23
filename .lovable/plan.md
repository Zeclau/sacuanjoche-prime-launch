

# Sacuanjoche.dev — Landing Page Premium

Construiré una landing page de una sola sección scrollable, optimizada para móvil primero (estás viendo 360px), con estética de agencia tecnológica seria para inmobiliario de lujo.

## Sistema de diseño

**Paleta (HSL en `index.css`)**
- Azul Marino Profundo `#0A1628` → fondo principal
- Blanco puro `#FFFFFF` → texto sobre oscuro
- Gris Pizarra `#64748B` → texto secundario
- Dorado `#C9A961` → CTA principal, acentos, isotipo
- Verde Esmeralda `#10B981` → badges, WhatsApp, "éxito"

**Tipografía:** Inter (Google Fonts) — 300/400/500/600/700. Tracking apretado en H1, espaciado generoso (py-20 a py-32).

**Principios:** mucho whitespace, bordes 1px sutiles dorados, sin sombras pesadas, animaciones discretas (fade-up al hacer scroll).

## Estructura

```text
┌─ Navbar sticky (isotipo flor + "Sacuanjoche.dev")
│
├─ 1. HERO (min-h-screen, fondo imagen AI + overlay marino)
│     H1 "Eleva tu estatus..."
│     Subtítulo
│     [Ver un Demo] (dorado)  [WhatsApp] (outline esmeralda)
│
├─ 2. PROBLEMA vs SOLUCIÓN (fondo marino)
│     Layout 2 columnas: ❌ Marketplace  →  ✓ casalascolinas.sacuanjoche.dev
│     Mockup de URL en mono-font con badge dorado
│
├─ 3. CÓMO FUNCIONA (fondo blanco, contraste)
│     3 tarjetas con número grande dorado + icono lucide
│     Paso 1 Fotos · Paso 2 Construcción 48h · Paso 3 Leads WhatsApp
│
├─ 4. PRECIO (fondo marino, una sola tarjeta centrada)
│     Borde dorado, badge "Pago único" esmeralda
│     "$45 USD"  +  5 beneficios con check dorado
│     CTA grande dorado → WhatsApp
│
└─ 5. FOOTER (marino más oscuro, isotipo + tagline + año)

[Botón flotante WhatsApp esmeralda — bottom-right, sticky en toda la página]
```

## Activos a generar

1. **Imagen Hero AI** (Nano Banana Pro): "Luxury modern architecture villa at dusk, infinity pool, soft bokeh, deep navy blue tones, cinematic, ultra-blurred background, premium real estate photography" → `src/assets/hero-architecture.jpg`
2. **Logo flor** que subiste → copiar a `src/assets/logo-sacuanjoche.png` y usarlo en navbar (32px) y footer (40px).

## WhatsApp

- Número: **+505 7651-4498** → link `https://wa.me/50576514498?text=...`
- Mensajes pre-rellenados distintos por CTA:
  - Hero: "Hola, vi Sacuanjoche.dev y quiero ver un demo"
  - Precio: "Hola, quiero mi Single Property Web por $45"
  - Botón flotante: "Hola Sacuanjoche, me interesa una página para mi propiedad"
- Centralizado en `src/lib/whatsapp.ts`.

## Archivos a crear/editar

| Archivo | Acción |
|---|---|
| `index.html` | Preconnect Google Fonts + Inter, meta description SEO en español |
| `tailwind.config.ts` | Añadir `fontFamily.sans: ['Inter', ...]`, tokens de color semánticos |
| `src/index.css` | Reemplazar paleta HSL con marino/dorado/esmeralda, keyframes `fade-up` |
| `src/lib/whatsapp.ts` | Helper `waLink(message)` |
| `src/assets/hero-architecture.jpg` | Generar con AI Gateway |
| `src/assets/logo-sacuanjoche.png` | Copiar desde upload |
| `src/components/landing/Navbar.tsx` | Sticky, blur backdrop |
| `src/components/landing/Hero.tsx` | H1 + subtítulo + 2 CTAs + imagen background |
| `src/components/landing/ProblemSolution.tsx` | Contraste 2 col |
| `src/components/landing/HowItWorks.tsx` | 3 pasos |
| `src/components/landing/Pricing.tsx` | Tarjeta única premium |
| `src/components/landing/Footer.tsx` | Tagline + isotipo |
| `src/components/landing/StickyWhatsApp.tsx` | FAB esmeralda fixed |
| `src/pages/Index.tsx` | Compone todas las secciones |

## Performance móvil

- Imagen hero generada a 1280px y servida con `loading="eager"` + `decoding="async"`; el resto sin imágenes pesadas.
- Iconos vía `lucide-react` (ya instalado, tree-shakeable).
- Cero dependencias nuevas. Todo Tailwind utility classes.
- Sin animaciones JS — solo CSS `animate-fade-up` con `prefers-reduced-motion` respetado.

## QA antes de entregar

Verificaré en viewport 360px que:
- H1 no se corte ni desborde
- Los dos CTAs del hero apilen verticalmente con buen espacio
- La tarjeta de precio quepa con padding cómodo
- El FAB de WhatsApp no tape contenido del CTA

