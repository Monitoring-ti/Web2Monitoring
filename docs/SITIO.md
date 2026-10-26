# Monitoring — detalle del sitio web

Fecha de este inventario: 26 de octubre de 2026.  
Describe el código de `Web2Monitoring` tal como está en el repositorio. El español es la fuente editorial. El inglés en `/en` repite el mismo sentido.

## 1. Qué es

Sitio corporativo de **Monitoring SpA** (nombre corto Monitoring, nombre comercial Monitoring Consultora).

Ingeniería y consultoría en gestión de activos físicos, mantenimiento y confiabilidad. El mensaje de portada de la versión completa es **“Optimizando sus activos desde la primera jugada”**.

MMi se presenta como tecnología propia de Monitoring (“MMi by Monitoring”), aliada de los servicios. No reemplaza al especialista.

Razón social y datos de marca: `src/lib/site-config.ts`.  
Textos de la versión completa: `src/i18n/dictionaries/es.ts` y `en.ts`.  
Textos de la versión simple: `src/content/soft-site.ts`.

## 2. Dos versiones

El mismo sitio tiene dos presentaciones. El selector **Versión soft / Versión full** va en una franja fija al inicio de la cabecera. La elección se guarda en `localStorage` con la clave `monitoring-site-version`. Si no hay elección, se muestra la versión full.

| Versión | Qué es | Dónde vive |
|---|---|---|
| Full | Sitio de varias páginas: inicio, servicios, MMi, industrias, casos, equipo y el resto | `HomePage` con `SiteLayout`, más `src/lib/pages.ts` |
| Soft | Una sola página, clara, al estilo del HTML móvil de referencia | `src/components/pages/SoftHome.tsx` |

La versión soft solo reemplaza el inicio. No tiene URL propia. Quien llega a una página interna con soft guardado vuelve al inicio. Los buscadores ven la versión full: el HTML inicial del servidor es el de full y el cambio ocurre en el navegador.

La soft no reutiliza los textos de la full. Trae su propio relato: filosofía de riesgo, servicios en lista, MMI en cuatro pasos, industrias mineras y no mineras, casos sin las cifras de la full, logos, certificaciones de consultores y contacto por `mailto:`. Incluye afirmaciones que la full no publica (Monitoring Academy, vibración, aceite, termografía y servidor independiente de MMI). Esas frases quedan solo en la soft.

Portadas:

| Versión | Archivo | Qué se ve |
|---|---|---|
| Full | `/images/portada-2.jpg` | Planta industrial y piezas de ajedrez. El archivo trae una franja azul a la izquierda; el hero la recorta y muestra la planta y las piezas |
| Soft | `/images/portada-faena.jpg` | Collage del operador con casco frente a la faena |

Fotos de la soft: `public/images/soft/`.

## 3. Stack y cómo se sirve

| Pieza | Valor |
|---|---|
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Estilos | Tailwind CSS |
| Fuentes | Inter (texto) y Montserrat (títulos), vía `next/font` |
| Iconos | Lucide |
| Movimiento | Framer Motion en revelados. Contadores y flechas de MMi en el propio componente |
| Formularios | react-hook-form. El envío abre el correo del visitante |
| Imágenes | `next/image` con `unoptimized: true` |
| Barra final en URLs | Activada (`trailingSlash: true`) |
| Idiomas | Español en `/`. Inglés con prefijo `/en` |
| Arranque | `npm run dev` (puerto 3000), `npm run build`, `npm start` |

Variables públicas:

| Variable | Uso | Si no se define |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canónica, sitemap, Open Graph, JSON-LD | `https://monitoring.cl` |
| `NEXT_PUBLIC_CLIENT_PORTAL_URL` | Botón del portal en `/acceso-cliente` | El código de ejemplo usa `https://sistema.monitoring.cl` |

`GITHUB_PAGES=true` activa exportación estática y el prefijo `/Web2Monitoring`. No hay ruta `/api/contact`. `robots.txt` igual niega `/api/`.

## 4. Dominios

La canónica del build sigue siendo `NEXT_PUBLIC_SITE_URL`, con respaldo `https://monitoring.cl`.

El 21 de octubre de 2026, `monitoring.lat` servía un build anterior de este Next.js y no incluía `/mmi`. Esta actualización de documentación no volvió a comprobar el hosting. Un despliegue nuevo reemplaza el sitio que esté en el dominio elegido. No se publica hasta confirmar dominio, canónica y sobrescritura.

## 5. Mapa de rutas

Todas las rutas internas existen en español y en inglés. Ejemplo: `/mmi/` y `/en/mmi/`.

| Ruta | Página | Qué muestra |
|---|---|---|
| `/` | Inicio full | Hero y cinta de clientes. En soft, la página única |
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
| `/robots.txt` | Robots | Permite `/`. Niega `/acceso-cliente` y `/api/` |

“Empresa” en el menú Más apunta al inicio.

La página MMi no muestra el banner de reunión. Contacto tampoco. El resto de páginas internas sí. El botón flotante “Agendar Reunión” aparece al bajar en el inicio de la versión full.

## 6. Cabecera, pie y móvil

Cabecera fija, con la franja del selector arriba.

- Logo `/logo.png` hacia el inicio. En el hero oscuro de escritorio el logo va en caja blanca; la franja del selector permanece blanca.
- Menú principal: Servicios, MMi, Industrias, Casos, Equipo, Contacto.
- Menú Más: Empresa, Credibilidad, Diferenciadores, Actualidad, Biblioteca.
- Idioma: ES / English, conservando la misma página.
- Acción de escritorio: “Solicitar Reunión” hacia `/contacto`.
- En móvil, las mismas entradas principales quedan en pastillas siempre visibles. Contacto va en naranja. El ícono de menú abre Más y “Solicitar Reunión”.

La soft tiene su propia cabecera, con anclas: Quiénes somos, Servicios, IA, Industrias, Clientes, Certificaciones y Contacto.

En pantallas chicas el hero de la full no ocupa toda la altura: texto, botones, cifras y foto bajan en columna. El cuerpo lleva `overflow-x-hidden`. El relleno de sección es más corto bajo `lg`.

Pie de la full: logo, los enlaces del menú, copyright del año en curso de Monitoring SpA y “Desarrollado por” con `ti.soporte@monitoring.cl`.

“Políticas de Privacidad” y “Condiciones de Servicio” apuntan a `#`. No hay URL de LinkedIn publicada.

## 7. Inicio full

### Hero

- Antetítulo: “Gestión de activos · Mantenimiento y confiabilidad”.
- Título: “Optimizando sus activos desde la primera jugada”.
- Texto: acompañamiento desde la preparación operacional del proyecto hasta la operación. Estrategia, confiabilidad, planificación e ingeniería de mantenimiento, con SAP PM/MM y analítica.
- Lema: “Los principales activos son los que te rodean.”
- Acciones: “Conozca nuestras soluciones” (va a Servicios) y “Conversemos sobre su operación” (va a Contacto).
- Cifras animadas al entrar en pantalla: **14** años, **+120** consultores, **+43** proyectos en distintas etapas. El conteo corre aunque el sistema pida menos movimiento; el cambio de escala no.
- Imagen: `/images/portada-2.jpg`. Texto alternativo: “Piezas de ajedrez sobre el tablero de una planta industrial”.

### Clientes

Título: “Experiencia que construye confianza”. Una cinta continua de logos. Se detiene al pasar el cursor y si el sistema pide menos movimiento.

Chile: Codelco, Sierra Gorda SCM, BHP, Kinross, Arauco, Agrosuper, FAMAE, Finning CAT, Ejército de Chile, Armada de Chile.

Perú: Newmont Yanacocha, Marcobre, Minsur, Antamina.

México: Equinox Gold, Newmont Peñasquito, First Majestic.

Esos logos no afirman un contrato vigente ni se asignan a un caso anónimo.

El inicio full no incluye el bloque MMi, las certificaciones ni el banner de reunión. Esos contenidos están en sus páginas.

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

Planificación, paradas y Monitoring Academy no tienen tarjeta en la full. La soft sí nombra planificación, confiabilidad y el portal Monitoring Academy dentro de sus listas.

## 11. MMi

Ruta `/mmi`. Marca visible: **MMi by Monitoring**.

Encabezado: “Del dato al diagnóstico. Con evidencia.” MMi relaciona la información técnica de cada contrato. Acciones: “Conocer cómo funciona” y “Solicitar demostración” (esta última va a Contacto).

Al lado, un diagrama animado: Planes, Órdenes y FMECA entran a MMi y salen como “Hallazgo verificable”. Se mueven puntos sobre las líneas, el anillo y un pulso del nodo. El texto no cambia de tamaño.

Después, el ejemplo demostrativo con datos ficticios de la bomba CTS-DCH, la orden OT-1842, confianza Media y la ejecución DEMO-2026-014. Los cuatro textos (hallazgo, evidencia, hipótesis y verificación) están siempre visibles. Entre ellos solo bajan flechas, para que la página no crezca ni se desplace. El enlace “Abrir demostración” sale a `https://mmi.monitoring.lat/demostracion`.

Los cinco pasos (“Cómo funciona”) permanecen en pantalla. Uno se destaca cada 2,2 segundos. Con menos movimiento, no rota el destaque.

El resto de la página, en orden: idea central, aliado, fuentes, capacidades, diferencial, especialistas, cruce con servicios, evidencia, ilustración de carpetas a diagnóstico y cierre. No lleva el banner genérico de reunión.

Principio publicado: “MMi no reemplaza lo que Monitoring hace. Amplifica lo que Monitoring sabe hacer.”

La propuesta no es “Monitoring tiene una nueva aplicación”. Es que Monitoring combina experiencia, metodologías y tecnología propia para decidir con evidencia.

Estas capacidades están redactadas en el sitio. Falta la validación comercial de que cada una se puede ofrecer así. La full no dice que MMi corra en un servidor independiente ni que interprete vibración, aceite o termografía. Eso está solo en la soft.

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

La misión “ser un socio estratégico…” está en la versión soft, no como bloque de la full.

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
| `primary` | `#332A83` | Índigo. Títulos, botones de la soft, pie de algunos bloques |
| `accent` | `#F09321` | Naranja. Botones, pastilla de Contacto, flechas del ejemplo |
| `celeste` | `#36A9DF` | Acentos del flujo MMi y del degradado del hero |
| `fondo-claro` | `#EEF0F8` | Fondos de la soft |
| `tinta` / `navy` | `#1A1B2E` | Texto y pie de la soft |
| `muted` | `#5B6070` | Texto secundario |
| `surface` | `#F8FAFC` | Fondos alternos |
| `border` | `#E2E8F0` | Bordes |

El hero de la full usa un degradado de azul muy oscuro, índigo y celeste. Tipografía: Montserrat en títulos, Inter en cuerpo.

Logos propios:

- `/logo.png` en cabecera y pie
- `/logo-circular.svg` como favicon

Fotos de secciones en `public/images/`. Logos de clientes en `public/images/clients/`. Credenciales en `public/images/credentials/`. El inventario de la full está en `src/data/images.ts` y `src/data/presentation.ts`.

La imagen social de Open Graph sigue siendo `/images/hero-ajedrez-mineria.jpg`. No es la portada visible.

## 19. SEO

- Título por defecto: “Monitoring | Optimizando sus activos desde la primera jugada”.
- Descripción de `site-config`: minería, energía, celulosa, puertos e industria. La de la home añade trayectoria y consultores, e incluye “MMi”.
- `hreflang` entre español e inglés.
- JSON-LD `ProfessionalService` y `WebSite` en la home.
- Sitemap con las rutas públicas. Sin `/acceso-cliente`.
- Más notas en `docs/SEO.md`.

## 20. Qué falta cerrar

- Decidir si la canónica de un despliegue en `monitoring.lat` es `.lat` o sigue siendo `.cl`, y publicar solo con confirmación de sobrescritura.
- Mostrar en `/equipo` la nota de que las certificaciones son de consultores, si se quiere que el visitante la lea. Hoy está en el diccionario y no en la página.
- Decidir si la imagen social debe pasar a `portada-2.jpg`.
- Confirmar archivo del brochure y retirar descargas que no existen.
- Poner URL real de LinkedIn, privacidad y condiciones, o quitar esos enlaces.
- Validar con Monitoring cada capacidad de MMi antes de tratarla como oferta cerrada.
- Revisar si las afirmaciones exclusivas de la soft (Academy, condición de equipos, servidor independiente) deben quedarse ahí.
