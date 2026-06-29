# Web2Monitoring

Sitio web corporativo y galería de estilos para **Monitoring Consultora** — consultora de gestión de activos, confiabilidad operacional e ingeniería de mantenimiento (EPCM/EPC, SAP PM).

## URLs locales

| Ruta | Descripción |
|------|-------------|
| `/` | Landing comercial en español (predeterminado) |
| `/en` | Landing comercial en inglés |
| `/estilos` | Galería de 15 demos en 3 grupos |
| `/estilos/[variant]` | Demo de estilo individual |
| `/acceso-cliente` | Portal de clientes |
| `/api/contact` | Endpoint formulario de contacto |

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
│   ├── page.tsx            # Home (metadata + JSON-LD)
│   ├── layout.tsx          # Layout global y metadataBase
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   ├── estilos/            # Demos de diseño (noindex)
│   └── acceso-cliente/     # Login portal (noindex)
├── components/
│   ├── sections/           # Secciones de la landing
│   ├── demo/               # Landing temática para /estilos
│   ├── pages/              # Páginas cliente (HomePage)
│   └── seo/                # JSON-LD
├── data/
│   ├── images.ts           # Rutas y alt de imágenes
│   └── monitoring-content.ts
└── lib/
    ├── site-config.ts      # Config SEO y marca
    ├── metadata.ts         # Metadata home con hreflang
    ├── locale-path.ts      # Rutas por idioma
    ├── themes.ts           # 15 temas en 3 grupos
    └── nav.ts              # Navegación (demos)
src/i18n/
├── dictionaries/es.ts      # Español (predeterminado)
├── dictionaries/en.ts      # Inglés
└── get-dictionary.ts
public/
└── images/                 # Fotos optimizadas para web
```

## Contenido y secciones (landing)

1. Hero — tagline y propuesta EPCM/EPC  
2. Credibilidad — métricas  
3. Diferenciadores  
4. Servicios (6)  
5. Industrias (minería, Oil&Gas, celulosa, energía, industrial)  
6. Casos de éxito  
7. Equipo y faena  
8. Actualidad (newsletter, cierres, cursos)  
9. Biblioteca / descargas  
10. Contacto  

## Galería de estilos (presentación cliente)

**3 grupos × 5 estilos = 15 versiones** en `/estilos`:

| Grupo | Estilos |
|-------|---------|
| 1 — Autoridad y confianza | corporativo, minimalista, moderno, premium, institucional |
| 2 — Ingeniería y terreno | geometrico, blueprint, industrial, organico, vintage |
| 3 — Innovación | tecnologico, neon-tech, data-platform, creativo, ludico |

Las demos tienen navegación **anterior / siguiente** y atajos de teclado ← →.

## Imágenes

Rutas centralizadas en `src/data/images.ts`. Archivos en `public/images/`.

Para reemplazar una imagen: sustituir el archivo en `public/images/` manteniendo el mismo nombre, o actualizar la ruta en `images.ts`.

## SEO

Documentación detallada: **[docs/SEO.md](docs/SEO.md)**

### Implementado en código

- `metadataBase` y URLs canónicas  
- `robots.txt` y `sitemap.xml`  
- Open Graph y Twitter Card con imagen hero  
- JSON-LD (`ProfessionalService` + `WebSite`) en home  
- Demos `/estilos/*` con `noindex` (no compiten con la landing)  
- `lang="es"`, keywords, descripciones por página  
- Textos `alt` en imágenes vía `images.ts`  

### Pendiente en producción (operativo)

- [ ] Configurar `NEXT_PUBLIC_SITE_URL` en hosting  
- [ ] Google Search Console + envío de sitemap  
- [ ] Google Analytics 4 o alternativa  
- [ ] LinkedIn corporativo en `sameAs` (JSON-LD)  
- Versión en inglés en `/en` con selector de idioma en el header  
- `hreflang` es ↔ en en metadata  
- [ ] Conectar formulario a CRM / correo transaccional  

## Despliegue

Compatible con Vercel, Node standalone o cualquier host que soporte Next.js 14.

```bash
npm run build
npm start
```

Dominio sugerido: `https://monitoring.cl`

## Licencia

Proyecto privado — Monitoring Consultora Ltda.
