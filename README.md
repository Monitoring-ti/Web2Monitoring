# Web2Monitoring

Sitio web corporativo para **Monitoring Consultora** — consultora de gestión de activos, confiabilidad operacional e ingeniería de mantenimiento.

Hay dos presentaciones en el mismo inicio: **Versión full** (varias páginas) y **Versión soft** (una página). El selector queda arriba y la elección se recuerda en el navegador. El detalle está en **[docs/SITIO.md](docs/SITIO.md)**.

## URLs locales

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio en español. Full: hero y clientes. Soft: página única |
| `/en` | El mismo inicio en inglés |
| `/servicios`, `/mmi`, `/industrias`, `/casos`, `/equipo`, `/contacto` | Páginas de la versión full |
| `/credibilidad`, `/diferenciadores`, `/actualidad`, `/biblioteca` | Páginas del menú Más |
| `/en/...` | Las mismas páginas en inglés |
| `/acceso-cliente` | Portal de clientes (sin enlace público, noindex) |

El formulario de contacto abre el correo del visitante hacia `soporte@monitoring.cl`. No hay API de envío.

## Requisitos

- Node.js 18+
- npm

## Instalación y desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Variables de entorno

Crear `.env.local` (ver `.env.example`):

```env
NEXT_PUBLIC_SITE_URL=https://monitoring.cl
NEXT_PUBLIC_CLIENT_PORTAL_URL=https://sistema.monitoring.cl
```

| Variable | Uso |
|----------|-----|
| `NEXT_PUBLIC_SITE_URL` | URL canónica, sitemap, Open Graph, JSON-LD |
| `NEXT_PUBLIC_CLIENT_PORTAL_URL` | Enlace al sistema interno de clientes |

## Estructura del proyecto

```
src/
├── app/                    # Rutas Next.js App Router
│   ├── page.tsx            # Home ES (metadata + JSON-LD)
│   ├── en/page.tsx         # Home EN
│   ├── [slug]/page.tsx     # Páginas internas ES
│   ├── layout.tsx          # Layout global, metadataBase y selector de versión
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   └── acceso-cliente/     # Portal (noindex)
├── components/
│   ├── sections/           # Secciones de la versión full
│   ├── pages/              # HomePage, SoftHome, ContentPage
│   ├── layout/             # Cabecera, pie y selector soft/full
│   └── seo/                # JSON-LD
├── content/soft-site.ts    # Textos de la versión soft
├── context/SiteVersion.tsx # Preferencia soft o full
├── data/images.ts          # Rutas y alt de imágenes de la full
└── lib/                    # Marca, metadata, rutas por idioma
src/i18n/dictionaries/      # Español e inglés de la versión full
public/images/              # Fotos, portadas, clientes y credenciales
```

## Contenido

Inicio full: hero (“Optimizando sus activos desde la primera jugada”) y cinta de clientes. Portada: `public/images/portada-2.jpg`.

El resto vive en páginas propias. Industrias: minería, energía, celulosa, puertos e industria. Las certificaciones de consultores están en `/equipo`, no en el inicio.

## Imágenes

Rutas de la versión full en `src/data/images.ts`. Archivos en `public/images/`. La portada soft es `public/images/portada-faena.jpg`.

Los archivos JPEG sueltos en `public/` (subidas originales) se ignoran en git; solo se versionan las copias renombradas en `public/images/`.

## SEO

Documentación detallada: **[docs/SEO.md](docs/SEO.md)**

### Implementado en código

- `metadataBase` y URLs canónicas  
- `robots.txt` y `sitemap.xml`  
- Open Graph y Twitter Card. La imagen social sigue siendo `/images/hero-ajedrez-mineria.jpg`
- JSON-LD (`ProfessionalService` + `WebSite`) en home  
- i18n: español (`/`) e inglés (`/en`) con `hreflang`  
- `lang="es"`, keywords, descripciones por página  
- Textos `alt` en imágenes vía `images.ts`  

### Pendiente en producción (operativo)

- [ ] Configurar `NEXT_PUBLIC_SITE_URL` en hosting  
- [ ] Google Search Console + envío de sitemap  
- [ ] Google Analytics 4 o alternativa  
- [ ] LinkedIn corporativo en `sameAs` (JSON-LD)  
- [ ] El contacto abre `mailto:`. No hay buzón automático del sitio

## Despliegue

Compatible con Vercel, Node standalone o cualquier host que soporte Next.js 14.

```bash
npm run build
npm start
```

Dominio sugerido: `https://monitoring.cl`

## Licencia

Proyecto privado — Monitoring SpA. Desarrollado por ti.soporte@monitoring.cl.
