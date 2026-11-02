# Web2Monitoring

Sitio web corporativo para **Monitoring Consultora** — consultora de gestión de activos, confiabilidad operacional e ingeniería de mantenimiento.

El sitio tiene una sola presentación, en español (`/`) e inglés (`/en`), con las secciones de la home y el detalle en páginas propias. El inventario completo está en **[docs/SITIO.md](docs/SITIO.md)**.

## URLs locales

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio en español |
| `/en` | El mismo inicio en inglés |
| `/servicios`, `/mmi`, `/industrias`, `/casos`, `/equipo`, `/contacto` | Páginas de contenido |
| `/credibilidad`, `/diferenciadores`, `/actualidad`, `/biblioteca` | Páginas del menú Más |
| `/en/...` | Las mismas páginas en inglés |
| `/llms.txt` | Índice en texto plano del sitio para buscadores y asistentes |
| `/acceso-cliente` | Portal de clientes (sin enlace público, noindex) |

El formulario de contacto abre el correo del visitante hacia `soporte@monitoring.cl`. No hay API de envío.

## Requisitos

- Node.js 18+
- npm

## Instalación y desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # ESLint 9, configuración plana
npm run build    # valida tipos y ejecuta ESLint
npm start
```

Stack: Next.js 15.5 (App Router), React 19, TypeScript 5.9, Tailwind CSS, ESLint 9.

## Variables de entorno

Crear `.env.local` (ver `.env.example`):

```env
NEXT_PUBLIC_SITE_URL=https://monitoring.lat
NEXT_PUBLIC_CLIENT_PORTAL_URL=https://sistema.monitoring.cl
```

| Variable | Uso |
|----------|-----|
| `NEXT_PUBLIC_SITE_URL` | URL canónica, sitemap, Open Graph, JSON-LD. Respaldo en código: `https://monitoring.lat` |
| `NEXT_PUBLIC_CLIENT_PORTAL_URL` | Enlace al sistema interno de clientes |

## Estructura del proyecto

```
src/
├── app/                    # Rutas Next.js App Router
│   ├── page.tsx            # Home ES (metadata + JSON-LD)
│   ├── en/page.tsx         # Home EN
│   ├── [slug]/page.tsx     # Páginas internas ES
│   ├── layout.tsx          # Layout global, metadataBase y plantilla de títulos
│   ├── llms.txt/route.ts   # Índice de texto plano
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   └── acceso-cliente/     # Portal (noindex)
├── components/
│   ├── sections/           # Bloques de la home y de las páginas
│   ├── pages/              # HomePage y ContentPage
│   ├── layout/             # Cabecera y pie
│   └── seo/                # JSON-LD
├── context/LocaleProvider.tsx # Diccionario e idioma activo
├── data/images.ts          # Rutas y alt de imágenes
└── lib/                    # Marca, metadata, rutas por idioma, llms.txt
src/i18n/dictionaries/      # Español e inglés
public/images/              # Fotos, portadas, clientes y credenciales
eslint.config.mjs           # ESLint 9 en configuración plana
src/middleware.ts           # 301 de los dominios alias al canónico
```

## Contenido

La home encadena nueve bloques: hero, cinta de clientes, desafíos, servicios, resultados destacados, forma de trabajo, experiencia en terreno, capacidad tecnológica (MMi) e invitación a contacto. Portada: `public/images/portada-2.webp`.

El resto vive en páginas propias. Industrias: minería, energía, celulosa, puertos e industria. Las certificaciones de consultores están en `/equipo`, no en la home.

## Imágenes

Rutas en `src/data/images.ts` y `src/data/presentation.ts`. Archivos en `public/images/`.

Todas las fotos y logos están en **WebP**. La única excepción es `/images/hero-ajedrez-mineria.jpg`, que se mantiene en JPEG porque es la imagen social (`og:image`) y ni Facebook ni LinkedIn aceptan WebP ahí.

Los archivos JPEG sueltos en `public/` (subidas originales) se ignoran en git; solo se versionan las copias renombradas en `public/images/`.

## SEO

Documentación detallada y plan de posicionamiento: **[docs/SEO.md](docs/SEO.md)**

### Implementado en código

- `metadataBase` y URLs canónicas  
- `robots.txt` y `sitemap.xml` con barra final y fecha de contenido estable  
- Open Graph y Twitter Card. La imagen social sigue siendo `/images/hero-ajedrez-mineria.jpg`
- JSON-LD con `@graph` en la home y en cada página interna: `Organization`, `ProfessionalService`, `WebSite`, `WebPage`, `ContactPage`, `BreadcrumbList`, `OfferCatalog` y `SoftwareApplication`  
- `sameAs` con el perfil oficial de LinkedIn  
- Un solo `h1` por página, incluida cada página interna  
- i18n: español (`/`) e inglés (`/en`) con `hreflang`  
- `lang="es"`, keywords, descripciones por página  
- Texto `alt` en imágenes vía `images.ts`  
- `robots.txt` con reglas explícitas para rastreadores de IA y `/llms.txt` para asistentes

### Pendiente en producción (operativo)

- [ ] Configurar `NEXT_PUBLIC_SITE_URL` en hosting  
- [ ] Google Search Console + envío de sitemap  
- [ ] Google Analytics 4 o alternativa  
- [ ] LinkedIn corporativo en `sameAs` (JSON-LD)  
- [ ] El contacto abre `mailto:`. No hay buzón automático del sitio

## Despliegue

Compatible con Vercel, Node standalone o cualquier host que soporte Next.js 15.

```bash
npm run build
npm start
```

Dominio canónico: `https://monitoring.lat`. `monitoring.cl`, `monitoring.pe` y `monitoring.com.pe` responden con 301 hacia el canónico; el redirect vive en `src/middleware.ts`.

La CI de GitHub Pages publica una copia espejo con `GITHUB_PAGES=true`: declara la canónica de `monitoring.lat` y sale con `noindex` para no competir con el sitio principal.

## Licencia

Proyecto privado — Monitoring SpA. Desarrollado por ti.soporte@monitoring.cl.
