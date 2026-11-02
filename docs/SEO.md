# SEO — Monitoring Web

Auditoría y guía de posicionamiento para el sitio en `monitoring.lat`.

## Estado actual (implementación técnica)

| Elemento | Estado | Ubicación |
|----------|--------|-----------|
| Título y descripción | ✅ | `src/lib/metadata.ts`, `src/lib/site-config.ts` |
| `metadataBase` | ✅ | `src/app/layout.tsx` |
| URL canónica home | ✅ | `src/lib/metadata.ts` |
| Open Graph (imagen, locale) | ✅ | Home + layout |
| Twitter Card | ✅ | `summary_large_image` |
| `robots.txt` | ✅ | `src/app/robots.ts` |
| `sitemap.xml` | ✅ | `src/app/sitemap.ts` |
| JSON-LD `@graph` | ✅ | `src/components/seo/JsonLd.tsx` |
| JSON-LD por página interna | ✅ | `src/app/[slug]/page.tsx` y `src/app/en/[slug]/page.tsx` |
| `lang="es"` | ✅ | `layout.tsx` + selector en `/en` |
| i18n ES (/) + EN (/en) | ✅ | `src/i18n/`, `LanguageSwitcher` |
| `hreflang` es ↔ en | ✅ | `src/lib/metadata.ts` |
| Alt en imágenes | ✅ | `src/data/images.ts` |
| Portal `/acceso-cliente` noindex | ✅ | metadata de página |
| `/api/` bloqueada en robots | ✅ | `robots.ts`. No existe ruta de contacto |
| Páginas internas en sitemap | ✅ | `src/lib/pages.ts` vía `sitemap.ts` |
| Rastreadores de IA declarados | ✅ | `src/app/robots.ts` |
| Índice de texto para asistentes | ✅ | `src/app/llms.txt/route.ts` |

## URLs indexables

| URL | Sitemap | Index |
|-----|---------|-------|
| `/` | Sí (prioridad 1.0) | Sí (`es`, predeterminado) |
| `/en` | Sí (prioridad 0.9) | Sí (`en`) |
| `/servicios`, `/mmi`, `/industrias`, `/casos`, `/equipo`, `/contacto` | Sí | Sí, y su par en `/en/...` |
| `/credibilidad`, `/diferenciadores`, `/actualidad`, `/biblioteca` | Sí | Sí, y su par en `/en/...` |
| `/acceso-cliente` | No | No (`noindex`, login) |

`/llms.txt` y `/robots.txt` no son páginas indexables. El sitio no tiene una variante alternativa del inicio: el HTML que ve una persona es el mismo que ve un buscador.

## Copia espejo de GitHub Pages

La CI publica una copia exportada del mismo sitio en `monitoring-ti.github.io/Web2Monitoring`. No es un canal indexable:

- Declara `canonical` y `sitemap` de `https://monitoring.lat`, así que Google consolida la señal en el canónico.
- Sale con `<meta name="robots" content="noindex, nofollow">` y con `robots.txt` en `Disallow: /`.
- El middleware no corre en una exportación estática, así que esa copia no aplica los 301 de los dominios alias.

El flag es `GITHUB_PAGES=true`, leído en `src/lib/config.ts` (`IS_STATIC_EXPORT`).

## Palabras clave objetivo

### Primarias (B2B industrial)

- gestión de activos Chile  
- confiabilidad operacional minería  
- ingeniería de mantenimiento SAP PM  
- consultora EPCM EPC operación  

### Secundarias (sectores gerencia)

- consultora minería Chile / LATAM  
- mantenimiento industrial celulosa  
- excelencia operacional planta industrial  

Oil & Gas no está entre las industrias publicadas.

### Marca

- Monitoring consultora  
- Monitoring gestión de activos  

## Mensajes alineados con gerencia (meta + H1)

| Campo | Contenido |
|-------|-----------|
| **Title** | Monitoring \| Gestión de activos (EN: Monitoring \| Asset management) |
| **Description** | Ingeniería en gestión de activos, mantenimiento y confiabilidad para minería, energía, celulosa y puertos. Santiago, Calama y Lima. soporte@monitoring.cl. |
| **H1** | Optimizando sus activos desde la primera jugada |
| **OG image** | `/images/hero-ajedrez-mineria.jpg` (no es la portada visible `portada-2.jpg`) |

La descripción de la home es un híbrido: primero la propuesta de valor y después el NAP, para caber en el recorte del snippet sin perder la señal local. La dirección completa y los teléfonos quedan en `/contacto`, en el pie y en el JSON-LD.

Las páginas internas no fijan su propio título completo: `src/app/layout.tsx` aplica la plantilla `%s | Monitoring`, así que el título final conserva la marca.

## JSON-LD

La home entrega un `@graph` con:

1. **Organization / ProfessionalService** — nombre legal, contacto,logan, direcciones de las tres oficinas, `areaServed`, `knowsAbout`, `hasOfferCatalog` con los seis servicios y `employee` con las cuatro personas de dirección
2. **WebSite** — sitio y `publisher` por `@id`
3. **ItemList** — las secciones del menú

Cada página interna añade:

- **WebPage** o **ContactPage** — en `/contacto` el tipo es `ContactPage`
- **BreadcrumbList** — Inicio y la sección actual
- **OfferCatalog** en `/servicios` y **SoftwareApplication** en `/mmi`

Para enriquecer en producción, agregar en `organizationNode()`:

```ts
sameAs: [
  "https://www.linkedin.com/company/monitoring", // URL real
],
```

## Checklist pre-lanzamiento

### Técnico

- [ ] `NEXT_PUBLIC_SITE_URL=https://monitoring.lat` en producción  
- [ ] Verificar `https://monitoring.lat/robots.txt`  
- [ ] Verificar `https://monitoring.lat/sitemap.xml`  
- [ ] Verificar `https://monitoring.lat/llms.txt`  
- [ ] Confirmar que `monitoring.cl` responde 301 hacia el canónico  
- [ ] Probar rich results: [Google Rich Results Test](https://search.google.com/test/rich-results)  
- [ ] Probar OG: [opengraph.xyz](https://www.opengraph.xyz/) o similar  
- [ ] Lighthouse SEO ≥ 90 en `/`  

### Search Console

- [ ] Verificar propiedad del dominio  
- [ ] Enviar sitemap: `https://monitoring.lat/sitemap.xml`  
- [ ] Solicitar indexación de `/`  
- [ ] Monitorear cobertura y errores  

### Contenido

- [ ] Casos de éxito con rangos aprobados por NDA  
- [ ] PDFs reales en biblioteca (brochure, newsletters)  
- [ ] Actualidad mensual (señal de frescura)  
- [ ] Teléfono y email correctos en footer y JSON-LD  

### Conversión (métricas gerencia)

- [ ] GA4: eventos `meeting_requested`, `download_brochure`, `form_submit`  
- [ ] UTM en campañas LinkedIn / email  
- [ ] El formulario abre `mailto:soporte@monitoring.cl`. No hay CRM ni `/api/contact`  

## Métricas de éxito (12 meses — gerencia)

| KPI | Fuente |
|-----|--------|
| Contactos calificados / mes | Correos llegados a soporte@monitoring.cl |
| Reuniones desde web | Evento CTA principal |
| Tráfico orgánico | Search Console |
| Impresiones marca "Monitoring" | Search Console + Analytics |
| Posición keywords sectoriales | Search Console |

## Mejoras futuras

1. ~~**i18n** — `/en` con `hreflang` es ↔ en~~ ✅ Implementado  
2. ~~**JSON-LD por página** — `WebPage`, `ContactPage` y `BreadcrumbList`~~ ✅ Implementado  
3. ~~**Rastreadores de IA** — reglas explícitas en `robots.txt` y `llms.txt`~~ ✅ Implementado  
4. ~~**H1 en páginas internas**~~ Implementado  
5. ~~**`sameAs` de LinkedIn**~~ Implementado  
6. ~~**Peso de imágenes** — WebP, logo y favicon optimizados~~ Implementado  
7. **Blog / actualidad** — URLs propias indexables (`/actualidad/[slug]`)  
8. **Casos** — páginas `/casos/[slug]` compartibles e indexables  
9. **FAQ schema** — bloque preguntas frecuentes en home  
10. **LocalBusiness** — si se publica dirección física de oficina  
11. **Páginas por industria y por sede** — `/industrias/mineria`, `/contacto/santiago`  

## Plan de posicionamiento

Estado medido el 1 de noviembre de 2026, con el sitio publicado en `monitoring.lat`.

### Lo que ya está resuelto

No hace falta volver a tocar nada de esto:

- `canonical`, `hreflang` es↔en, Open Graph y Twitter Card
- `robots.txt` con reglas explícitas para 10 rastreadores de IA, y `/llms.txt`
- `sitemap.xml` con las 22 URLs públicas, con barra final y fecha de contenido estable
- JSON-LD `@graph` en la home y en cada página interna
- Dominio canónico con 301 desde `monitoring.cl`, `.pe` y `.com.pe`
- La copia espejo de GitHub Pages sale con `noindex`

### Lo que se corrigió en esta ronda

| Corrección | Antes | Ahora |
|---|---|---|
| H1 en páginas internas | 8 de 10 sin H1 | 1 H1 por página |
| Sitemap vs canonical | URLs sin barra final | Coinciden con la canonical |
| `sameAs` | Sin perfiles oficiales | LinkedIn declarado |
| `lastModified` del sitemap | Hora del build | Fecha de contenido fija |
| Peso de `public/` | 3,3 MB | ~1,1 MB |
| `logo.png` (precargado en cada página) | 104 KB, 1868×576 | 33 KB, 560 px |
| Favicon `logo-circular.svg` | 253 KB | 21 KB |
| `apple-touch-icon` | El logo horizontal, deformado | Ícono cuadrado de 180 px |

### Lo que falta, por impacto

#### 1. Indexación y medición — bloqueante, requiere tu acceso

Sin esto no hay forma de saber qué funciona ni de pedir reindexación:

- **Google Search Console**: verificar `monitoring.lat`, enviar el sitemap e inspeccionar las URLs. Es el paso que más rápido rinde.
- **Bing Webmaster Tools**: se importa desde GSC, cuesta un clic.
- **GA4** con eventos `contacto_enviado`, `cta_solicitar_reunion`, `cambio_idioma` y `descarga_biblioteca`. Sin esto no se mide CTR ni conversión por página.
- **Pedir reindexación** de las URLs viejas de `.cl` que ahora devuelven 301.

#### 2. Contenido — multiplicador de páginas posicionables

Hoy el sitio tiene 22 URLs. Cada URL adicional bien enfocada es una búsqueda más que se puede disputar:

- **Recuperar `/empresa/`**: está indexada en Google con contenido único (la misión, el perfil de la empresa, los consultores reconocidos) y hoy responde 404. O se recrea, o se deja un 301 hacia una página equivalente.
- **Una URL por caso** (`/casos/[slug]`): hoy los 6 casos viven en una sola página. Cada caso compite por una búsqueda de cola larga distinta ("RCM en molienda", "disponibilidad de palas").
- **Una URL por nota** (`/actualidad/[slug]`): 3 notas sin dirección propia.
- **FAQ schema** (`FAQPage`) con preguntas reales de gerencia de planta. Da resultado enriquecido y ocupa espacio en el resultado.
- **Biblioteca con archivos reales**: hoy 6 botones que no descargan nada.
- **Páginas por industria y por sede**: `/industrias/mineria`, `/industrias/celulosa`, `/contacto/santiago`, `/contacto/calama`, `/contacto/lima`. "Consultoría minera Santiago" es una búsqueda local con su propia URL.

#### 3. Autoridad y coherencia de datos

- **Backlinks**: ya hay referencias en `divisionminera.cl`, `arounddeal`, `signalhire` y LinkedIn. Falta un plan sostenido: directorios del sector, asociaciones de mantenimiento, y que los sitios que enlazan a `monitoring.cl` se actualicen a `monitoring.lat`.
- **NAP coherente**: hay cifras que no cuadran entre el sitio y los directorios. El sitio dice "14 años" y "+120 consultores"; LinkedIn dice "Fundada 2013" y "51-200 empleados". Fijar una cifra única.
- **Perfiles oficiales**: `sameAs` declara solo LinkedIn. Sumar los que existan.

#### 4. Técnico menor

- **`srcset` en las imágenes**: `images.unoptimized` está en `true`, así que no hay variantes responsive y un móvil descarga la imagen de escritorio. Se puede activando el optimizador de Next en producción (exige que `sharp` funcione en el hosting) o pre-generando anchos.
- **`manifest.webmanifest`** para instalación en móvil.
- **Prueba de resultados enriquecidos** con Rich Results Test antes de publicar.

### Orden sugerido

1. Search Console + enviar sitemap (día 1, sin costo)
2. Publicar esta ronda de correcciones técnicas
3. GA4 con los cuatro eventos (día 1)
4. `/empresa/` recuperada o con 301 (semana 1)
5. FAQ schema y biblioteca real (semana 2)
6. Páginas por caso y por industria (mes 1-2)
7. Plan de backlinks sostenido (mes 2 en adelante)
## Verificación local

Tras `npm run build && npm start`:

```
http://localhost:3000/robots.txt
http://localhost:3000/sitemap.xml
http://localhost:3000/llms.txt
```

View source en `/` → buscar `application/ld+json`.
