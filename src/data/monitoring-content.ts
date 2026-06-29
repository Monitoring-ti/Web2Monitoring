import { images } from "./images";

export const monitoringBrand = {
  name: "Monitoring",
  taglineEn: "Optimize your assets in a single play",
  taglineEs: "Optimizando sus activos desde la primera jugada",
  subtitle:
    "Definición de procesos y gestión de activos físicos desde proyectos EPCM/EPC hasta la operación. Confiabilidad, disponibilidad segura e ingeniería de mantenimiento con SAP PM.",
  motto: "Los principales activos son los que te rodean.",
  email: "contacto@monitoring.cl",
  phone: "+56 2 2345 6789",
};

export const trustMetrics = [
  { value: "+20", label: "Años de experiencia" },
  { value: "+150", label: "Proyectos" },
  { value: "+40", label: "Profesionales senior" },
  { value: "95%", label: "Satisfacción de clientes" },
];

export const clientLogos = ["Codelco", "Engie", "Colbún", "Anglo American", "SQM"];

export const differentiators = [
  {
    title: "Compromiso con la solución",
    description:
      "Acompañamos desde el diagnóstico hasta la operación sostenida. Nuestro éxito se mide por el desempeño final de sus activos.",
    proof: "Metodología orientada a resultados medibles en faena.",
  },
  {
    title: "Equipos integrales y gestión segura del riesgo",
    description:
      "Equipos multidisciplinarios que integran ingeniería, operación y mantenimiento con protocolos de seguridad alineados a la criticidad.",
    proof: "Experiencia en entornos de alta criticidad regional.",
  },
  {
    title: "Consultores con experiencia en terreno",
    description:
      "Trayectoria comprobable en faena, certificaciones técnicas y dominio de gestión de activos y SAP PM.",
    proof: "+40 profesionales senior con presencia regional.",
  },
];

export const services = [
  {
    title: "Gestión de Activos",
    description:
      "Optimización del ciclo de vida desde proyectos EPCM/EPC hasta la operación, alineada con ISO 55000.",
    image: images.servicios.gestionActivos.src,
    imageAlt: images.servicios.gestionActivos.alt,
  },
  {
    title: "Confiabilidad Operacional",
    description:
      "Mejora de disponibilidad y confiabilidad del proceso de forma segura, con RCM, RCA y análisis de riesgo.",
    image: images.servicios.confiabilidad.src,
    imageAlt: images.servicios.confiabilidad.alt,
  },
  {
    title: "Ingeniería de Mantenimiento y SAP PM",
    description:
      "Soporte integral en procesos de ingeniería de mantenimiento y alineación con SAP PM.",
    image: images.servicios.sapPm.src,
    imageAlt: images.servicios.sapPm.alt,
  },
  {
    title: "Supply Chain",
    description:
      "Aseguramiento logístico y disponibilidad de repuestos críticos para evitar paradas costosas.",
    image: images.servicios.supplyChain.src,
    imageAlt: images.servicios.supplyChain.alt,
  },
  {
    title: "Excelencia Operacional",
    description: "Sistemas de gestión y mejora continua orientados a elevar eficiencia y OEE.",
    image: images.servicios.excelencia.src,
    imageAlt: images.servicios.excelencia.alt,
  },
  {
    title: "Transformación Digital",
    description: "Datos, sensórica e inteligencia para decisiones operacionales óptimas.",
    image: images.servicios.digital.src,
    imageAlt: images.servicios.digital.alt,
  },
];

export const industries = [
  {
    name: "Minería",
    description: "Gran minería regional: plantas SAG, chancado y sistemas críticos.",
    image: images.industrias.mineria.src,
    imageAlt: images.industrias.mineria.alt,
  },
  {
    name: "Oil & Gas",
    description: "Refinerías, terminales y activos de alta criticidad operacional.",
    image: images.industrias.oilGas.src,
    imageAlt: images.industrias.oilGas.alt,
  },
  {
    name: "Celulosa y Forestal",
    description: "Plantas de pulpa y líneas de producción continua.",
    image: images.industrias.celulosa.src,
    imageAlt: images.industrias.celulosa.alt,
  },
  {
    name: "Energía y Electricidad",
    description: "Generación y transmisión con enfoque en confiabilidad.",
    image: images.industrias.energia.src,
    imageAlt: images.industrias.energia.alt,
  },
  {
    name: "Industria Intensiva",
    description: "Manufactura pesada y procesos con alto CAPEX.",
    image: images.industrias.industrial.src,
    imageAlt: images.industrias.industrial.alt,
  },
];

export const cases = [
  {
    tag: "Confiabilidad",
    title: "Reducción de fallas en planta concentradora",
    industry: "Minería de Cobre — Chile",
    kpi: "-42%",
    kpiLabel: "Tasa de fallas mecánicas",
    summary: "Rediseño de estrategia de lubricación e implantación de RCM bajo norma SAE JA1011.",
  },
  {
    tag: "Gestión de Activos",
    title: "Optimización de ciclo de vida en parque eólico",
    industry: "Energía Renovable — Colombia",
    kpi: "+18%",
    kpiLabel: "Disponibilidad de turbinas",
    summary: "PEGA alineado con ISO 55001 y políticas de reemplazo por riesgo técnico-económico.",
  },
  {
    tag: "Supply Chain",
    title: "Reducción de capital en repuestos críticos",
    industry: "Industrial — Perú",
    kpi: "-25%",
    kpiLabel: "Capital en inventario",
    summary: "Stock óptimo basado en confiabilidad (RBS) y acuerdos just-in-time.",
  },
];

export const fieldPhotos = images.galeria;

export const newsItems = [
  {
    id: "news-1",
    type: "newsletter" as const,
    date: "Mayo 2026",
    title: "Avances en gestión de activos con clientes de minería",
    summary:
      "Resumen mensual de proyectos, metodologías aplicadas y aprendizajes compartidos con equipos de mantenimiento regional.",
    image: images.actualidad.newsletter.src,
    imageAlt: images.actualidad.newsletter.alt,
  },
  {
    id: "news-2",
    type: "cierre" as const,
    date: "Abril 2026",
    title: "Cierre de servicio: optimización de confiabilidad en planta concentradora",
    summary:
      "Proyecto finalizado con mejoras en disponibilidad operacional en rango del 15–20% y reducción de paradas no planificadas.",
    image: images.actualidad.cierre.src,
    imageAlt: images.actualidad.cierre.alt,
  },
  {
    id: "news-3",
    type: "curso" as const,
    date: "Junio 2026",
    title: "Curso abierto: Ingeniería de mantenimiento y SAP PM integral",
    summary:
      "Programa técnico para líderes de mantenimiento que buscan estructurar procesos y alinear la operación con el sistema.",
    image: images.actualidad.curso.src,
    imageAlt: images.actualidad.curso.alt,
  },
];
