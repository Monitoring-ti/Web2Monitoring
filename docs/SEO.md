# SEO — Monitoring Web

Auditoría y guía de posicionamiento para la landing en `monitoring.cl`.

## Estado actual (implementación técnica)

| Elemento | Estado | Ubicación |
|----------|--------|-----------|
| Título y descripción | ✅ | `src/lib/site-config.ts`, `src/app/page.tsx` |
| `metadataBase` | ✅ | `src/app/layout.tsx` |
| URL canónica home | ✅ | `src/app/page.tsx` |
| Open Graph (imagen, locale) | ✅ | Home + layout |
| Twitter Card | ✅ | `summary_large_image` |
| `robots.txt` | ✅ | `src/app/robots.ts` |
| `sitemap.xml` | ✅ | `src/app/sitemap.ts` |
| JSON-LD Organization | ✅ | `src/components/seo/JsonLd.tsx` |
| JSON-LD WebSite | ✅ | Home |
| `lang="es"` | ✅ | `layout.tsx` + selector en `/en` |
| i18n ES (/) + EN (/en) | ✅ | `src/i18n/`, `LanguageSwitcher` |
| `hreflang` es ↔ en | ✅ | `src/lib/metadata.ts` |
| Alt en imágenes | ✅ | `src/data/images.ts` |
| Portal `/acceso-cliente` noindex | ✅ | metadata de página |
| `/api/` bloqueada en robots | ✅ | `robots.ts`. No existe ruta de contacto |
| Páginas internas en sitemap | ✅ | `src/lib/pages.ts` vía `sitemap.ts` |

## URLs indexables

| URL | Sitemap | Index |
|-----|---------|-------|
| `/` | Sí (prioridad 1.0) | Sí (`es`, predeterminado). El HTML indexable es la versión full |
| `/en` | Sí (prioridad 0.9) | Sí (`en`) |
| `/servicios`, `/mmi`, `/industrias`, `/casos`, `/equipo`, `/contacto` | Sí | Sí, y su par en `/en/...` |
| `/credibilidad`, `/diferenciadores`, `/actualidad`, `/biblioteca` | Sí | Sí, y su par en `/en/...` |
| `/acceso-cliente` | No | No (`noindex`, login) |

La versión soft no tiene URL. Es una preferencia del navegador sobre el inicio.

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
| **Title** | Monitoring \| Optimizando sus activos desde la primera jugada |
| **Description** | Consultora de ingeniería en gestión de activos físicos, mantenimiento y confiabilidad. Minería, energía, celulosa, puertos e industria. |
| **H1** | Optimizando sus activos desde la primera jugada |
| **OG image** | `/images/hero-ajedrez-mineria.jpg` (no es la portada visible `portada-2.jpg`) |

## JSON-LD

La home incluye:

1. **ProfessionalService** — nombre legal, contacto, áreas de servicio, slogan  
2. **WebSite** — sitio y publisher  

Para enriquecer en producción, agregar en `organizationJsonLd()`:

```ts
sameAs: [
  "https://www.linkedin.com/company/monitoring", // URL real
],
```

## Checklist pre-lanzamiento

### Técnico

- [ ] `NEXT_PUBLIC_SITE_URL=https://monitoring.cl` en producción  
- [ ] Verificar `https://monitoring.cl/robots.txt`  
- [ ] Verificar `https://monitoring.cl/sitemap.xml`  
- [ ] Probar rich results: [Google Rich Results Test](https://search.google.com/test/rich-results)  
- [ ] Probar OG: [opengraph.xyz](https://www.opengraph.xyz/) o similar  
- [ ] Lighthouse SEO ≥ 90 en `/`  

### Search Console

- [ ] Verificar propiedad del dominio  
- [ ] Enviar sitemap: `https://monitoring.cl/sitemap.xml`  
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
2. **Blog / actualidad** — URLs propias indexables (`/actualidad/[slug]`)  
3. **Casos** — páginas `/casos/[slug]` compartibles e indexables  
4. **FAQ schema** — bloque preguntas frecuentes en home  
5. **LocalBusiness** — si se publica dirección física de oficina  

## Verificación local

Tras `npm run build && npm start`:

```
http://localhost:3000/robots.txt
http://localhost:3000/sitemap.xml
```

View source en `/` → buscar `application/ld+json`.
