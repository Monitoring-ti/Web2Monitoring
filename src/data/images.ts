/** Rutas de imágenes en /public/images. La portada es el collage de faena. */

export const images = {
  hero: {
    src: "/images/portada-2.jpg",
    alt: "Piezas de ajedrez sobre el tablero de una planta industrial",
  },
  lider: {
    src: "/images/ajedrez-proceso.jpg",
    alt: "Planta de proceso con trazado de ingeniería",
  },
  equipo: {
    src: "/images/ajedrez-planta.jpg",
    alt: "Sala de máquinas industriales",
  },
  faena: {
    src: "/images/ajedrez-planta.jpg",
    alt: "Correas y equipos de planta, sin personal",
  },
  portal: {
    src: "/images/analitica-pantalla.jpg",
    alt: "Pantalla de analítica de mantenimiento y confiabilidad",
  },
  galeria: [
    { src: "/images/hero-ajedrez-mineria.jpg", alt: "Rajo minero con camión de extracción" },
    { src: "/images/ajedrez-acero.jpg", alt: "Laminador industrial en operación" },
    { src: "/images/ajedrez-planta.jpg", alt: "Sala de máquinas y estrategia en planta" },
    { src: "/images/ajedrez-proceso.jpg", alt: "Planta de proceso con trazado de ingeniería" },
    { src: "/images/ajedrez-energia.jpg", alt: "Parque eólico y subestación eléctrica" },
    { src: "/images/analitica-pantalla.jpg", alt: "Analítica de mantenimiento sobre una faena minera" },
  ],
  servicios: {
    gestionActivos: {
      src: "/images/ajedrez-proceso.jpg",
      alt: "Planta de proceso y ciclo de vida del activo",
    },
    confiabilidad: {
      src: "/images/ajedrez-acero.jpg",
      alt: "Laminador y equipo crítico en operación",
    },
    sapPm: {
      src: "/images/ajedrez-planta.jpg",
      alt: "Sala de máquinas para ingeniería de mantenimiento",
    },
    supplyChain: {
      src: "/images/ajedrez-optimizacion.jpg",
      alt: "Correas, estanques y flujo de materiales en planta",
    },
    excelencia: {
      src: "/images/analitica-pantalla.jpg",
      alt: "Indicadores de operación minera en una pantalla de analítica",
    },
    digital: {
      src: "/images/analitica-mineria.jpg",
      alt: "Analítica de mantenimiento, confiabilidad y cadena de suministro",
    },
  },
  industrias: {
    mineria: {
      src: "/images/hero-ajedrez-mineria.jpg",
      alt: "Rajo abierto con camión de extracción",
    },
    oilGas: {
      src: "/images/ajedrez-proceso.jpg",
      alt: "Planta de proceso industrial",
    },
    celulosa: {
      src: "/images/industria-celulosa.jpg",
      alt: "Línea de producción de celulosa y forestal industrial",
    },
    energia: {
      src: "/images/ajedrez-energia.jpg",
      alt: "Parque eólico, líneas y subestación eléctrica",
    },
    industrial: {
      src: "/images/ajedrez-acero.jpg",
      alt: "Laminador industrial intensivo en activos",
    },
  },
  actualidad: {
    newsletter: {
      src: "/images/analitica-pantalla.jpg",
      alt: "Analítica de una operación minera",
    },
    cierre: {
      src: "/images/ajedrez-proceso.jpg",
      alt: "Planta de proceso al cierre de la jornada",
    },
    curso: {
      src: "/images/analitica-mineria.jpg",
      alt: "Esquema de ingeniería de mantenimiento y confiabilidad",
    },
  },
} as const;
