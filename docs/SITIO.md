# Monitoring — detalle del sitio web

Fecha de este inventario: 26 de octubre de 2026.  
Describe el código de `Web2Monitoring` tal como está en el repositorio. El español es la fuente editorial. El inglés en `/en` repite el mismo sentido.

## 1. Qué es

Sitio corporativo de **Monitoring SpA** (nombre corto Monitoring, nombre comercial Monitoring Consultora).

Ingeniería y consultoría en gestión de activos físicos, mantenimiento y confiabilidad. El mensaje de portada de la versión completa es **“Optimizando sus activos desde la primera jugada”**.

MMi se presenta como tecnología propia de Monitoring (“MMi by Monitoring”), aliada de los servicios. No reemplaza al especialista.

Razón social y datos de marca: `src/lib/site-config.ts`.  
Textos: `src/i18n/dictionaries/es.ts` y `en.ts`.

## 2. Estructura del sitio

El sitio tiene una sola presentación. La home resume la propuesta y las páginas propias deepen cada tema. No hay selector de versión ni preferencia guardada en el navegador.

| Pieza | Qué es | Dónde vive |
|---|---|---|
| Home | Resumen del relato: hero, clientes, desafíos, servicios, resultados, método, terreno, MMi y contacto | `src/components/pages/HomePage.tsx` y `src/components/sections/HomeNarrative.tsx` |
| Páginas | Servicios, MMi, industrias, casos, equipo, contacto y el menú Más | `src/lib/pages.ts` con `src/components/pages/ContentPage.tsx` |

El HTML inicial del servidor ya es el definitivo: no hay variante que se arme en el cliente, así que los buscadores ven exactamente lo que ve una persona.

Portada: `/images/portada-2.jpg` — planta industrial y piezas de ajedrez. El archivo trae una franja azul a la izquierda; el hero la recorta y muestra la planta y las piezas.

## 3. Stack y cómo se sirve

| Pieza | Valor |
|---|---|
| Framework | Next.js 15.5 (App Router), React 19, TypeScript 5.9 |
| Estilos | Tailwind CSS |
| Fuentes | Inter (texto) y Montserrat (títulos), vía `next/font` |
| Iconos | Lucide |
| Movimiento | Framer Motion en revelados. Contadores y flechas de MMi en el propio componente |
| Formularios | react-hook-form. El envío abre el correo del visitante |
| Imágenes | `next/image` con el optimizador activo en el hosting (`unoptimized` solo en la copia estática de GitHub Pages) |
| Barra final en URLs | Activada (`trailingSlash: true`). La redirección se resuelve en `src/middleware.ts`, no con la regla interna de Next |
| Idiomas | Español en `/`. Inglés con prefijo `/en` |
| Lint | ESLint 9 con configuración plana (`eslint.config.mjs`). `next lint` quedó deprecado en Next 15.5 |
| Puertas del build | `next build` valida tipos y pasa ESLint. Las dos excepciones (`ignoreBuildErrors`, `ignoreDuringBuilds`) están quitadas |
| Arranque | `npm run dev` (puerto 3000), `npm run build`, `npm start` |

Variables públicas:

| Variable | Uso | Si no se define |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canónica, sitemap, Open Graph, JSON-LD | `https://monitoring.lat` |
| `NEXT_PUBLIC_CLIENT_PORTAL_URL` | Botón del portal en `/acceso-cliente` | El código de ejemplo usa `https://sistema.monitoring.cl` |

`GITHUB_PAGES=true` activa exportación estática y el prefijo `/Web2Monitoring`. No hay ruta `/api/contact`. `robots.txt` igual niega `/api/`.

La CI de GitHub Pages construye la copia con `NEXT_PUBLIC_SITE_URL=https://monitoring-ti.github.io/Web2Monitoring`, así que esa copia se autocanoniza. No compite con el canónico porque se publica con `noindex, nofollow` y con `robots.txt` en `Disallow: /`: el flag se lee en `src/lib/config.ts` (`IS_STATIC_EXPORT`). Quitar el override de `NEXT_PUBLIC_SITE_URL` para que apunte a `https://monitoring.lat` requiere editar `.github/workflows/deploy.yml`, y ese cambio no se puede subir con el token actual de git, que no tiene el alcance `workflow`.

### Optimizador de imágenes, barra final y caché

El sitio se sirve en Hostinger como **servidor Next.js**, no como export estático: por eso funcionan las redirecciones 301 del `middleware` y por eso puede usar el optimizador de imágenes de Next con `sharp` (viene en las `optionalDependencies` de Next y se instala solo en Linux). Con el optimizador activo, cada `<img>` declara su `srcset` y el navegador descarga la resolución que corresponde a cada pantalla, en vez de una sola imagen para todos los dispositivos.

Para que eso funcionara hubo que desactivar la redirección automática de barra final de Next (`skipTrailingSlashRedirect: true`). La regla interna de barra final captura cualquier ruta sin extensión, y `/_next/image` —la ruta del optimizador— no tiene extensión: cada imagen pagaba un 308 antes de servirse. Con esa regla desactivada, la barra final de las páginas se resuelve en `src/middleware.ts`, que ya controlaba las redirecciones de alias. El orden queda explícito: primero el 301 de los dominios alias (`monitoring.cl`, `.pe`, `.com.pe`) al canónico, después la 308 de barra final, y `/_next/` nunca se redirige.

El mismo `middleware` acorta la caché del HTML. Next sirve el contenido prerenderizado con `s-maxage=31536000`, o sea un año: la CDN del hosting guardaba cada página ese tiempo y, tras un despliegue, seguía entregando el contenido viejo tanto a los visitantes como a los rastreadores. Con `s-maxage=600` y `stale-while-revalidate=86400`, un push se ve en el sitio en diez minutos como máximo, sin depender de que alguien limpie la caché a mano. Las rutas internas de Next quedan fuera: `/_next/static` conserva su caché inmutable por hash y `/_next/image` la de `max-age=60` que el optimizador ya define.

## 4. Dominios

La canónica del build es `NEXT_PUBLIC_SITE_URL`, con respaldo `https://monitoring.lat`.

`src/middleware.ts` responde 301 hacia el canónico cuando la petición llega por `www.monitoring.lat`, `monitoring.cl`, `www.monitoring.cl`, `monitoring.pe`, `www.monitoring.pe`, `monitoring.com.pe` o `www.monitoring.com.pe`. Un despliegue nuevo reemplaza el sitio que esté en el dominio elegido. No se publica hasta confirmar dominio, canónica y sobrescritura.

## 4.1 Despliegue

Hay dos destinos y funcionan de forma distinta:

| Destino | Mecanismo | Estado |
|---|---|---|
| `monitoring.lat` (producción) | Hostinger toma `main` del repo, compila y reinicia la app Node | Funcionando. Un push a `main` actualiza el sitio en 1-2 minutos |
| `monitoring-ti.github.io/Web2Monitoring` (espejo) | GitHub Actions, build estático | Funcionando. Pages quedó habilitado el 2 de noviembre de 2026 con `build_type: workflow`; el job `build` y el `deploy` pasan |

El espejo es secondary: sale con `noindex` y `Disallow: /`, así que no compite con el canónico.

### Limitación del token de git

El token que usa el credencial manager es una OAuth App sin el alcance `workflow`. GitHub rechaza cualquier push que cree o modifique `.github/workflows/`. Por eso el override de `NEXT_PUBLIC_SITE_URL` en `deploy.yml` quedó pendiente: se aplicó un cambio equivalente por código (`IS_STATIC_EXPORT` en `src/lib/config.ts`), que es más fuerte porque el espejo sale entero con `noindex`.

Para editar ese archivo hay que hacerlo desde la interfaz de GitHub o con un token que tenga el alcance `workflow`.
## 5. Mapa de rutas

Todas las rutas internas existen en español y en inglés. Ejemplo: `/mmi/` y `/en/mmi/`.

| Ruta | Página | Qué muestra |
|---|---|---|
| `/` | Inicio | Hero, cinta de clientes y ocho bloques de relato |
| `/servicios` | Servicios | Seis grupos. Transformación Digital enlaza a MMi |
| `/mmi` | MMi by Monitoring | Página del aliado tecnológico, con flujo, ejemplo y pasos |
| `/industrias` | Industrias | Minería, puertos, celulosa, energía, industria |
| `/casos` | Casos | Seis casos, con estimaciones marcadas como tales |
| `/equipo` | Equipo | Galería, certificaciones de consultores y las cuatro personas de dirección |
| `/contacto` | Contacto | Oficinas, correo y formulario que abre `mailto:` |
| `/credibilidad` | Credibilidad | Cuatro cifras. Menú “Más”. Sin logos de certificación |
| `/diferenciadores` | Diferenciadores | Cuatro rasgos. Menú “Más” |
| `/actualidad` | Actualidad | Tres notas. Menú “Más” |
| `/biblioteca` | Biblioteca | Listado de descargas. Menú “Más” |
| `/en` y `/en/...` | Las mismas páginas en inglés | |
| `/acceso-cliente` | Portal | `noindex`. Sin enlace en el menú público |
| `/sitemap.xml` | Sitemap | Home, `/en` y las diez páginas internas en ambos idiomas |
| `/robots.txt` | Robots | Permite `/`. Niega `/acceso-cliente` y `/api/`. Reglas explícitas para rastreadores de IA |
| `/llms.txt` | Índice de texto | Servicios, industrias, certificaciones, oficinas, dirección y el mapa de URLs en ambos idiomas |

“Empresa” en el menú Más apunta al inicio.

La página MMi no muestra el banner de reunión. Contacto tampoco. El resto de páginas internas sí. El botón flotante “Agendar Reunión” aparece al bajar en el inicio.

## 6. Cabecera, pie y móvil

Cabecera fija.

- Logo `/logo.png` hacia el inicio. En el hero oscuro de escritorio el logo va en caja blanca.
- Menú principal: Servicios, MMi, Industrias, Casos, Equipo, Contacto.
- Menú Más: Empresa, Credibilidad, Diferenciadores, Actualidad, Biblioteca.
- Idioma: ES / English, conservando la misma página.
- Acción de escritorio: “Solicitar Reunión” hacia `/contacto`.
- En móvil, las mismas entradas principales quedan en pastillas siempre visibles. Contacto va en naranja. El ícono de menú abre Más y “Solicitar Reunión”.

En pantallas chicas el hero no ocupa toda la altura: texto, botones, cifras y foto bajan en columna. El cuerpo lleva `overflow-x-hidden`. El relleno de sección es más corto bajo `lg`.

Pie: logo, los enlaces del menú, copyright del año en curso de Monitoring SpA y “Desarrollado por” con `ti.soporte@monitoring.cl`.

No hay enlaces a “Políticas de Privacidad” ni a “Condiciones de Servicio”. No hay URL de LinkedIn publicada.

## 7. Inicio

### Hero

- Antetítulo: “Gestión de activos · Mantenimiento y confiabilidad”.
- Título: “Optimizando sus activos desde la primera jugada”.
- Texto: acompañamiento desde la preparación operacional del proyecto hasta la operación. Estrategia, confiabilidad, planificación e ingeniería de mantenimiento, con SAP PM/MM y analítica.
- Lema: “Los principales activos son los que te rodea.”
- Acciones: “Conozca nuestras soluciones” (baja a `#servicios`) y “Conversemos sobre su operación” (baja a `#contacto`). Ambas apuntan a bloques de la misma home.
- Imagen: `/images/portada-2.jpg`. Texto alternativo: “Piezas de ajedrez sobre el tablero de una planta industrial”.

El hero ya no lleva las cifras animadas: 14 años, +120 consultores y +43 proyectos viven en `/credibilidad`, con el conteo al verse.

### Clientes

Título: “Experiencia que construye confianza”. Una cinta continua de logos. Se detiene al pasar el cursor y si el sistema pide menos movimiento.

Chile: Codelco, Sierra Gorda SCM, BHP, Kinross, Arauco, Agrosuper, FAMAE, Finning CAT, Ejército de Chile, Armada de Chile.

Perú: Newmont Yanacocha, Marcobre, Minsur, Antamina.

México: Equinox Gold, Newmont Peñasquito, First Majestic.

Esos logos no afirmar un contrato vigente ni se asignan a un caso anónimo.

### Desafíos, servicios, resultados, método, terreno, MMi y contacto

Después del hero y la cinta de clientes, la home encadena siete bloques más, en `src/components/sections/HomeNarrative.tsx`:

| Bloque | Qué muestra | Destino |
|---|---|---|
| Desafíos | Cinco situaciones de la operación: disponibilidad, fallas recurrentes, planificación, repuestos e información | Enlaces a `/servicios#confiabilidad`, `/casos#confiabilidad`, `/casos#planificacion`, `/servicios#supply-chain` y `/casos#reportabilidad` |
| Servicios | Las seis especialidades, con su descripción y la acción de cada tarjeta | `/servicios` y sus anclas |
| Resultados destacados | Cuatro casos: `operational-readiness`, `planificacion`, `confiabilidad` y `estrategia-molienda` | `/casos#id` |
| Forma de trabajo | Diagnóstico, propuesta, implementación y seguimiento | — |
| Experiencia en terreno | Tres fotos de galería, las cuatro personas de dirección y el enlace al equipo | `/equipo` |
| Capacidad tecnológica | Bloque oscuro con el flujo de MMi | `/mmi` |
| Invitación a conversar | Cierre con el botón a contacto y el correo general | `/contacto` |

Las certificaciones de consultores siguen únicamente en `/equipo`. La home no lleva el banner de reunión.

## 8. Credibilidad

Ruta `/credibilidad`. Título: “Confianza respaldada por resultados”. Solo las cuatro cifras, con conteo al verse.

| Cifra | Rótulo | Alcance en el texto |
|---|---|---|
| 14 | Años de trayectoria | Acompañando gestión de activos, mantenimiento y confiabilidad |
| 120+ | Consultores | Profesionales que desarrollan los servicios |
| 43+ | Proyectos en distintas etapas | Iniciativas en curso y en distintas etapas. No es un recuento de proyectos cerrados |
| 3 | Países con clientes | Chile, Perú y México |

## 9. Diferenciadores

Título: “Lo que nos hace únicos”.

1. Compromiso con la solución.
2. Equipos integrales y gestión segura del riesgo.
3. Consultores con experiencia en terreno.
4. Tecnología propia aplicada al mantenimiento, con MMi.

## 10. Servicios

Título: “Del proyecto a la operación”. Seis tarjetas en `/servicios`, en una columna en el teléfono.

| Id | Nombre | Qué dice la tarjeta |
|---|---|---|
| `gestion-activos` | Gestión de Activos | Estrategia de activos físicos, operational readiness, gobernanza, abastecimiento estratégico e integridad |
| `confiabilidad` | Confiabilidad Operacional | Disponibilidad y confiabilidad del proceso, con RCM, RCA y análisis de riesgo |
| `ingenieria-mantenimiento` | Ingeniería de Mantenimiento y SAP PM | Procesos, planes y alineación con SAP PM |
| `supply-chain` | Supply Chain | Repuestos críticos y soporte logístico. La foto recorta el panel azul de la izquierda |
| `excelencia-operacional` | Excelencia Operacional | Sistemas de gestión, mejora continua y OEE |
| `transformacion-digital` | Transformación Digital | Datos, sensórica e inteligencia. Recuadro “MMi — Inteligencia de Mantenimiento”. La acción es “Conocer MMi” |

Planificación, paradas y Monitoring Academy no tienen tarjeta propia en `/servicios`.

## 11. MMi

Ruta `/mmi`. Marca visible: **MMi by Monitoring**.

Encabezado: “Del dato al diagnóstico. Con evidencia.” MMi relaciona la información técnica de cada contrato. Acciones: “Conocer cómo funciona” y “Solicitar demostración” (esta última va a Contacto).

Al lado, un diagrama animado: Planes, Órdenes y FMECA entran a MMi y salen como “Hallazgo verificable”. Se mueven puntos sobre las líneas, el anillo y un pulso del nodo. El texto no cambia de tamaño.

Después, el ejemplo demostrativo con datos ficticios de la bomba CTS-DCH, la orden OT-1842, confianza Media y la ejecución DEMO-2026-014. Los cuatro textos (hallazgo, evidencia, hipótesis y verificación) están siempre visibles. Entre ellos solo bajan flechas, para que la página no crezca ni se desplace. El enlace “Abrir demostración” sale a `https://mmi.monitoring.lat/demostracion`.

Los cinco pasos (“Cómo funciona”) permanecen en pantalla. Uno se destaca cada 2,2 segundos. Con menos movimiento, no rota el destaque.

El resto de la página, en orden: idea central, aliado, fuentes, capacidades, diferencial, especialistas, cruce con servicios, evidencia, ilustración de carpetas a diagnóstico y cierre. No lleva el banner genérico de reunión.

Principio publicado: “MMi no reemplaza lo que Monitoring hace. Amplifica lo que Monitoring sabe hacer.”

La propuesta no es “Monitoring tiene una nueva aplicación”. Es que Monitoring combina experiencia, metodologías y tecnología propia para decidir con evidencia.

Estas capacidades están redactadas en el sitio. Falta la validación comercial de que cada una se puede ofrecer así. El sitio no afirma que MMi corra en un servidor independiente ni que interprete vibración, aceite o termografía.

## 12. Industrias

Título: “Industrias donde acompañamos la operación”. La minería es el sector principal. Energía, celulosa, puertos e industria se nombran en gestión de activos, mantenimiento y confiabilidad.

| Sector | Alcance publicado |
|---|---|
| Minería | Rajo abierto y subterránea; perforación, carguío y transporte; chancado, concentradoras, hidrometalurgia, fundición, relaves y sistemas contra incendio |
| Puertos | Plantas de filtros, shiploaders, sistemas contra incendio y desaladoras |
| Celulosa y Forestal | Gestión de activos, mantenimiento y confiabilidad en ese sector. Sin equipos inventados |
| Energía y Electricidad | Igual |
| Industria intensiva en activos | Igual |

Oil & Gas no está en el sitio.

## 13. Casos

Título: “Casos de éxito”. Subtítulo: las estimaciones se distinguen de los resultados ya observados. Si el caso no nombra al cliente, el sitio tampoco.

| Caso | Dato que se muestra | Precaución |
|---|---|---|
| Preparación operacional de un transporte de mineral subterráneo | 40 equipos principales. 4 millones de toneladas mensuales. Entregables de confiabilidad, criticidad y planes con recursos | El 43+ de proyectos no es el resultado de este caso |
| Planificación de planta y paradas | Horizonte de planificación detallada de 21 días. 49 consultores. Metodología SWE | No se publica la cifra que mezclaba “24 horas” y “21,5 días” |
| Confiabilidad y mejora continua | Palas: disponibilidad de 78,3 % a 91,9 %. TMEF de 24,3 a 34,6 horas. 14 meses, 10 consultores. En CAEX, las caídas en terreno por fallas mecánicas disminuyeron un 6 % | |
| Frecuencia de detenciones en molienda | Incremento de 2,4 % de disponibilidad en molienda, tras RCM, FMECA y RAM | |
| Frecuencia de paradas de planta | Potencial estimado de 3,56 %. Orden de 35 millones de dólares al año. Riesgo estimado de −1,44 %. Intervalo de confianza del 90 % | Es estimación, no un ahorro ya logrado |
| De exportaciones manuales a un dato único | Power BI, HTML y correo ejecutivo a partir de SAP (IW29, IW37N, IW39) | Sin horas ahorradas ni retorno |

## 14. Equipo, certificaciones y oficinas

Dirección en `/equipo`:

| Persona | Cargo | Teléfono | Correo |
|---|---|---|---|
| Marcelo Marambio D. | Dirección de Consultoría – Gerente general | +56 9 8248 1201 | marcelo.marambio@monitoring.cl |
| Oscar Quezada R. | Gerente de operaciones | +56 9 5372 2609 | oscar.quezada@monitoring.cl |
| Alejandro Opitz S. | Gerente de operaciones | +56 9 8553 8044 | alejandro.opitz@monitoring.cl |
| Jorge Torres P. | Gerente comercial y soporte | +56 9 7951 7453 | jorge.torres@monitoring.cl |

La galería es de faena. No son retratos de estas cuatro personas. La foto de celulosa sigue mostrando una persona; el resto de escenas de ajedrez no.

En la misma página hay una cinta de certificaciones de consultores: Asset Management Professional e IAM, SMRP CMRP, SAP HANA, Lean Institute Chile y PMM Enterprise Certification ISO 55001. El diccionario guarda la nota de que no equivalen a una certificación ISO 55001 de la empresa ni a una alianza con SAP. Esa nota no se dibuja en la página.

Oficinas, también en Contacto:

| Sede | Dirección | Teléfono |
|---|---|---|
| Santiago, Chile | Antonio Varas 303, Of. 410, Providencia | +56 2 2235 3090 |
| Calama, Chile | Bartolomé Vivar 1580, Of. 501, Torre B | +56 2 2725 0546 |
| Lima, Perú | Av. José Pardo 601, Of. 1002, Miraflores | +51 904 854 456 |

Correo general: `soporte@monitoring.cl`.  
Correo de desarrollo en el pie: `ti.soporte@monitoring.cl`.

La misión “ser un socio estratégico…” no se publica como bloque.

## 15. Contacto

Título: “Conversemos sobre su próximo desafío operativo”.  
Subtítulo: “Transforme sus activos y datos en ventajas competitivas.”

El cuerpo habla de plan de mantenimiento, SAP, analítica y una solución a medida. Dos avisos: respuesta de un especialista en menos de 24 horas hábiles, y confidencialidad de la operación.

El formulario pide tipo de requerimiento, nombre, empresa, cargo, industria, teléfono, correo y mensaje. Rechaza correos automáticos o temporales. Hay un campo oculto contra envíos automáticos. Al enviar, abre el programa de correo del visitante con el mensaje dirigido a `soporte@monitoring.cl`. No hay servidor de correo ni `/api/contact`.

Tipos: agendar reunión, solicitar diagnóstico, solicitar propuesta, descargar material, otro.

Industrias del selector: Minería, Puertos, Celulosa / Forestal, Energía / Electricidad, Industrial, Otro.

## 16. Actualidad y biblioteca

Estas dos páginas no deben leerse como un registro confirmado de publicaciones. Son piezas editoriales del sitio.

Actualidad:

- “Avances en gestión de activos con clientes de minería” — mayo 2026.
- “Cierre de servicio: optimización de confiabilidad en planta concentradora” — abril 2026. Sin porcentaje inventado.
- “Curso abierto: Ingeniería de mantenimiento y SAP PM integral” — junio 2026.

Biblioteca, sin archivos reales detrás del botón:

- Brochure Corporativo Monitoring 2026
- Newsletter Mayo 2026
- Guía Técnica de Implementación ISO 55000
- Checklist de Auditoría de Confiabilidad Operacional
- Estudio de Madurez de Gestión de Activos en Latinoamérica
- RCM Aplicado: Del papel a la disponibilidad real

## 17. Portal de clientes

`/acceso-cliente` no se indexa y no está en el menú. Muestra el logo y enlaza al sistema en `NEXT_PUBLIC_CLIENT_PORTAL_URL`.

## 18. Identidad visual en el código

Paleta aplicada, alineada con `DESIGN.md` y `tailwind.config.ts`:

| Token | Color | Uso |
|---|---|---|
| `primary` | `#332A83` | Índigo. Títulos, botones principales y pie de algunos bloques |
| `accent` | `#F09321` | Naranja. Botones, pastilla de Contacto, flechas del ejemplo |
| `celeste` | `#36A9DF` | Acentos del flujo MMi y del degradado del hero |
| `fondo-claro` | `#EEF0F8` | Fondos claros alternos |
| `tinta` / `navy` | `#1A1B2E` | Texto principal y pie |
| `muted` | `#5B6070` | Texto secundario |
| `surface` | `#F8FAFC` | Fondos alternos |
| `border` | `#E2E8F0` | Bordes |

El hero usa un degradado de azul muy oscuro, índigo y celeste. Tipografía: Montserrat en títulos, Inter en cuerpo.

Logos propios:

- `/logo.png` en cabecera y pie
- `/logo-circular.svg` como favicon

Fotos de secciones en `public/images/`. Logos de clientes en `public/images/clients/`. Credenciales en `public/images/credentials/`. Todo en WebP salvo la imagen social, que queda en JPEG porque `og:image` no acepta WebP. El inventario de imágenes está en `src/data/images.ts` y `src/data/presentation.ts`.

La imagen social de Open Graph sigue siendo `/images/hero-ajedrez-mineria.jpg`. No es la portada visible.

## 19. SEO

- Título por defecto: “Monitoring | Optimizando sus activos desde la primera jugada”. La home usa título absoluto, “Monitoring | Gestión de activos” y “Monitoring | Asset management” en inglés.
- Descripción de `site-config`: minería, energía, celulosa, puertos e industria. La de la home es un híbrido: propuesta de valor primero y NAP al final, dentro del recorte del snippet.
- `hreflang` entre español e inglés.
- JSON-LD con `@graph` en la home y en cada página interna. La home agrupa `Organization`, `ProfessionalService`, `WebSite` y un `ItemList` de navegación. Las páginas internas suman `WebPage` o `ContactPage`, `BreadcrumbList` y, según la ruta, `OfferCatalog` en `/servicios` o `SoftwareApplication` en `/mmi`.
- Sitemap con las rutas públicas. Sin `/acceso-cliente`.
- `robots.txt` con reglas explícitas para los rastreadores de IA y `/llms.txt` como índice de texto.
- Un solo `h1` por página. El título de cada página interna es su `h1`; los subtítulos de sección son `h2`.
- `sameAs` declara el perfil oficial de LinkedIn.
- El `sitemap` usa barra final, la misma forma que la canonical, y una fecha de contenido fija en vez de la hora del build.
- Más notas en `docs/SEO.md`.

## 20. Seguridad de dependencias

El sitio se actualizó de Next.js 14.2.35 a 15.5.28 y de React 18 a 19.2 en octubre de 2026, por los avisos de seguridad que afectaban al hosting propio. `npm audit` bajó de 27 avisos (1 crítico) a 16.

Los 16 que quedan son de herramientas de construcción, no del sitio en ejecución:

| Aviso | Paquete | Riesgo | Por qué no se aplica al sitio |
|---|---|---|---|
| 1 alta | `postcss` dentro de `next@15.5.28` | XSS al serializar CSS y lectura de `.map` | Solo actúa al compilar. Se corrige en Next 16 |
| 15 moderadas | `minimatch` en la cadena de ESLint | DoS con patrones glob-crafted | Solo actúa en `npm run lint`, con configuración propia. No entra en el bundle |

Forzar `minimatch@11` con `overrides` los borra del reporte, pero rompe el lint: `@eslint/eslintrc` lo importa como CommonJS y la versión 11 es ESM puro. Se dejó el árbol estable.

Las rutas que quedan quedan corregidas al subir a Next 16, que exige Node 20.9+, renombra `middleware.ts` a `proxy.ts` y elimina `next lint`.

## 21. Qué falta cerrar

- Publicar solo con confirmación de dominio, canónica y sobrescritura. La canónica es `https://monitoring.lat`; `monitoring.cl` responde con 301 hacia ella.
- Mostrar en `/equipo` la nota de que las certificaciones son de consultores, si se quiere que el visitante la lea. Hoy está en el diccionario y no en la página.
- Decidir si la imagen social debe pasar a `portada-2.jpg`.
- Confirmar archivo del brochure y retirar descargas que no existen.
- Poner URL real de LinkedIn en el JSON-LD.
- Validar con Monitoring cada capacidad de MMi antes de tratarla como oferta cerrada.
- Decidir si Monitoring Academy, la condición de equipos y el servidor independiente de MMI son afirmaciones publicables.
- Planificar la subida a Next 16 cuando toque, para cerrar el aviso alto de `postcss`.
