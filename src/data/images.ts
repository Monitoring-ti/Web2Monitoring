/** Rutas de imágenes en /public/images — generadas desde el set de gerencia */

export const images = {
  hero: {
    src: "/images/hero-faena-mineria.jpg",
    alt: "Ingenieros Monitoring en planta concentradora minera, Chile",
  },
  lider: {
    src: "/images/lider-tecnico-terreno.jpg",
    alt: "Líder técnico senior revisando datos en terreno industrial",
  },
  equipo: {
    src: "/images/equipo-multidisciplinario.jpg",
    alt: "Equipo multidisciplinario trabajando en faena con planos y tablet",
  },
  faena: {
    src: "/images/faena-logistica-terreno.jpg",
    alt: "Profesionales en operación logística e industrial en terreno",
  },
  portal: {
    src: "/images/servicio-transformacion-digital.jpg",
    alt: "Profesional revisando dashboard de KPIs en planta industrial",
  },
  galeria: [
    { src: "/images/hero-faena-mineria.jpg", alt: "Planta de procesamiento minero en Chile" },
    { src: "/images/equipo-multidisciplinario.jpg", alt: "Equipo integral en faena industrial" },
    { src: "/images/lider-tecnico-terreno.jpg", alt: "Consultor senior en inspección de activos" },
    { src: "/images/cierre-servicio-cliente.jpg", alt: "Cierre de servicio con cliente en planta" },
    { src: "/images/servicio-confiabilidad.jpg", alt: "Mantenimiento de equipo crítico en operación" },
    { src: "/images/galeria-faena-tech.jpg", alt: "Transformación digital aplicada en terreno" },
  ],
  servicios: {
    gestionActivos: {
      src: "/images/servicio-gestion-activos.jpg",
      alt: "Ciclo de vida del activo desde proyecto EPCM/EPC hasta operación",
    },
    confiabilidad: {
      src: "/images/servicio-confiabilidad.jpg",
      alt: "Mantenimiento y confiabilidad en molino SAG industrial",
    },
    sapPm: {
      src: "/images/servicio-sap-pm.jpg",
      alt: "Ingeniera usando tablet con datos de mantenimiento en terreno",
    },
    supplyChain: {
      src: "/images/servicio-supply-chain.jpg",
      alt: "Bodega técnica con repuestos críticos identificados",
    },
    excelencia: {
      src: "/images/servicio-excelencia-operacional.jpg",
      alt: "Sala de control con dashboards de operación minera",
    },
    digital: {
      src: "/images/servicio-transformacion-digital.jpg",
      alt: "Análisis de KPIs y datos operacionales en planta",
    },
  },
  industrias: {
    mineria: {
      src: "/images/industria-mineria.jpg",
      alt: "Gran minería del cobre — planta de procesamiento regional",
    },
    oilGas: {
      src: "/images/industria-oil-gas.jpg",
      alt: "Instalación Oil & Gas con personal en protocolos de seguridad",
    },
    celulosa: {
      src: "/images/industria-celulosa.jpg",
      alt: "Línea de producción de celulosa y forestal industrial",
    },
    energia: {
      src: "/images/industria-energia.jpg",
      alt: "Parque eólico y generación de energía renovable",
    },
    industrial: {
      src: "/images/servicio-confiabilidad.jpg",
      alt: "Industria intensiva en activos — mantenimiento de equipos críticos",
    },
  },
  actualidad: {
    newsletter: {
      src: "/images/newsletter-avance.jpg",
      alt: "Equipo técnico revisando avances de proyecto con tablet",
    },
    cierre: {
      src: "/images/cierre-servicio-cliente.jpg",
      alt: "Cierre profesional de servicio con cliente en planta",
    },
    curso: {
      src: "/images/curso-sap-pm.jpg",
      alt: "Capacitación en gestión de mantenimiento con SAP PM",
    },
  },
} as const;
