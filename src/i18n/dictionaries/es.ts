import type { Dictionary } from "../types";

export const es: Dictionary = {
  meta: {
    tagline: "Optimizando sus activos desde la primera jugada",
    taglineEn: "Optimize your assets in a single play",
    description:
      "Consultora especializada en gestión de activos, confiabilidad operacional e ingeniería de mantenimiento con SAP PM. Desde proyectos EPCM/EPC hasta la operación en minería, Oil&Gas, celulosa y energía.",
    title: "Monitoring | Optimizando sus activos desde la primera jugada",
    ogImageAlt: "Monitoring — ingenieros en planta minera, gestión de activos",
    keywords: [
      "gestión de activos",
      "confiabilidad operacional",
      "ingeniería de mantenimiento",
      "SAP PM",
      "EPCM",
      "EPC",
      "consultora minería Chile",
      "asset management",
      "mantenimiento industrial",
      "oil and gas",
      "celulosa",
      "excelencia operacional",
    ],
  },
  nav: {
    primary: [
      { label: "Servicios", href: "/servicios" },
      { label: "Industrias", href: "/industrias" },
      { label: "Casos", href: "/casos" },
      { label: "Equipo", href: "/equipo" },
      { label: "Contacto", href: "/contacto" },
    ],
    more: [
      { label: "Empresa", href: "/" },
      { label: "Credibilidad", href: "/credibilidad" },
      { label: "Diferenciadores", href: "/diferenciadores" },
      { label: "Actualidad", href: "/actualidad" },
      { label: "Biblioteca", href: "/biblioteca" },
    ],
  },
  header: {
    homeAria: "Monitoring — inicio",
    navAria: "Navegación principal",
    moreLabel: "Más",
    moreAria: "Más secciones del sitio",
    requestMeeting: "Solicitar Reunión",
    requestMeetingAria: "Solicitar reunión con un especialista",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mobileMenuAria: "Menú de navegación móvil",
  },
  footer: {
    navAria: "Navegación del pie de página",
    copyright: "Todos los derechos reservados.",
    privacy: "Políticas de Privacidad",
    terms: "Condiciones de Servicio",
    linkedinAria: "Perfil corporativo en LinkedIn de Monitoring",
  },
  floatingCta: {
    label: "Agendar Reunión",
    aria: "Agendar reunión rápida con un consultor",
  },
  hero: {
    aria: "Propuesta de valor principal",
    badge: "Optimize your assets in a single play",
    title: "Optimizando sus activos",
    titleHighlight: "desde la primera jugada",
    subtitle:
      "Definición de procesos y gestión de activos físicos desde proyectos EPCM/EPC hasta la operación. Confiabilidad, disponibilidad segura e ingeniería de mantenimiento con SAP PM.",
    motto: "Los principales activos son los que te rodean.",
    ctaPrimary: "Solicitar Reunión",
    ctaPrimaryAria: "Solicitar una reunión con un especialista de Monitoring",
    ctaSecondary: "Descargar Brochure",
    ctaSecondaryAria: "Descargar la presentación corporativa de Monitoring",
    metricsAria: "Métricas clave de confianza",
    metrics: [
      { value: "+20", label: "Años de experiencia" },
      { value: "+150", label: "Proyectos" },
      { value: "+40", label: "Profesionales senior" },
    ],
    clientsLabel: "Respaldado por operadores líderes en la región",
    clientPrefix: "Cliente",
    fieldLabel: "En terreno",
    fieldCaption: "Consultores con experiencia comprobable en faena",
    fieldBadge: "Presencia real, no stock",
  },
  credibility: {
    aria: "Resultados y credibilidad",
    eyebrow: "Trayectoria y Respaldo",
    title: "Confianza respaldada por resultados",
    listAria: "Métricas de desempeño de la consultora",
    kpis: [
      {
        value: 500,
        suffix: "+",
        label: "Proyectos ejecutados",
        description: "Soluciones de confiabilidad y excelencia operacional implementadas.",
      },
      {
        value: 20,
        suffix: "+",
        label: "Años de experiencia",
        description: "Trayectoria sólida liderando la optimización de activos en la región.",
      },
      {
        value: 15,
        suffix: "+",
        label: "Industrias atendidas",
        description: "Profundo conocimiento sectorial adaptado a cada desafío regulatorio.",
      },
      {
        value: 95,
        suffix: "%",
        label: "Satisfacción garantizada",
        description: "De nuestros clientes recomiendan nuestras metodologías de trabajo.",
      },
    ],
  },
  differentiators: {
    aria: "Diferenciadores de Monitoring",
    eyebrow: "Por qué Monitoring",
    title: "Lo que nos hace únicos",
    subtitle:
      "Más que consultoría: equipos en terreno, gestión del riesgo y compromiso con la solución final del cliente en cada etapa del ciclo de vida del activo.",
    items: [
      {
        title: "Compromiso con la solución",
        description:
          "Acompañamos desde el diagnóstico hasta la operación sostenida. Nuestro éxito se mide por el desempeño final de sus activos, no solo por la entrega del proyecto.",
        proof: "Metodología orientada a resultados medibles en faena.",
      },
      {
        title: "Equipos integrales y gestión segura del riesgo",
        description:
          "Trabajamos en equipos multidisciplinarios que integran ingeniería, operación y mantenimiento, con protocolos de seguridad alineados a la criticidad de cada activo.",
        proof: "Experiencia en entornos de alta criticidad: minería, energía e industria.",
      },
      {
        title: "Consultores con experiencia en terreno",
        description:
          "Profesionales con trayectoria comprobable en faena, certificaciones técnicas y dominio de procesos de mejora, gestión de activos y SAP PM.",
        proof: "+40 profesionales senior con presencia regional.",
      },
    ],
  },
  services: {
    aria: "Servicios y Capacidades de Monitoring",
    listAria: "Capacidades de la consultora",
    eyebrow: "Servicios destacados",
    title: "Del proyecto a la operación",
    subtitle:
      "Portafolio de especialidades para diagnosticar, estructurar y optimizar la gestión de activos físicos en industrias intensivas en capital.",
    items: [
      {
        id: "gestion-activos",
        title: "Gestión de Activos",
        description:
          "Optimización del ciclo de vida desde proyectos EPCM/EPC hasta la operación, alineada con ISO 55000 y la estrategia del negocio.",
        ctaText: "Ver capacidades",
        imageAlt: "Ciclo de vida del activo desde proyecto EPCM/EPC hasta operación",
      },
      {
        id: "confiabilidad",
        title: "Confiabilidad Operacional",
        description:
          "Mejora de disponibilidad y confiabilidad del proceso de forma segura, con metodologías RCM, RCA y análisis de riesgo.",
        ctaText: "Explorar soluciones",
        imageAlt: "Mantenimiento y confiabilidad en molino SAG industrial",
      },
      {
        id: "ingenieria-mantenimiento",
        title: "Ingeniería de Mantenimiento y SAP PM",
        description:
          "Soporte integral en procesos de ingeniería de mantenimiento, estructuración de planes y alineación con SAP PM.",
        ctaText: "Ver ingeniería",
        imageAlt: "Ingeniera usando tablet con datos de mantenimiento en terreno",
      },
      {
        id: "supply-chain",
        title: "Supply Chain",
        description:
          "Aseguramiento del soporte logístico y disponibilidad de repuestos críticos para evitar paradas costosas.",
        ctaText: "Optimizar cadena",
        imageAlt: "Bodega técnica con repuestos críticos identificados",
      },
      {
        id: "excelencia-operacional",
        title: "Excelencia Operacional",
        description:
          "Sistemas de gestión y mejora continua orientados a elevar la eficiencia y el OEE de su planta.",
        ctaText: "Elevar eficiencia",
        imageAlt: "Equipo revisando indicadores de excelencia operacional en planta",
      },
      {
        id: "transformacion-digital",
        title: "Transformación Digital",
        description:
          "Habilitación de datos, sensórica e inteligencia de negocios para la toma de decisiones operacionales óptimas.",
        ctaText: "Integrar datos",
        imageAlt: "Profesional revisando dashboard de KPIs en planta industrial",
      },
    ],
  },
  industries: {
    aria: "Industrias en las que operamos",
    listAria: "Sectores industriales atendidos",
    eyebrow: "Nuestros Sectores",
    title: "Clientes nacionales e internacionales",
    subtitle:
      "Enfocados en gran minería regional e industrias intensivas en activos: celulosa, Oil&Gas, electricidad y operaciones industriales de alta criticidad.",
    items: [
      {
        id: "mineria",
        name: "Minería",
        description:
          "Gran minería regional: flotas, plantas SAG/bolas, chancado y sistemas críticos de procesamiento.",
        imageAlt: "Operación de gran minería en Chile",
      },
      {
        id: "oil-gas",
        name: "Oil & Gas",
        description:
          "Refinerías, terminales, ductos y activos de alta criticidad con gestión integral de riesgo operacional.",
        imageAlt: "Instalación Oil & Gas con gestión de riesgo operacional",
      },
      {
        id: "celulosa",
        name: "Celulosa y Forestal",
        description:
          "Plantas de pulpa, líneas de producción continua y activos rotativos de alta disponibilidad.",
        imageAlt: "Planta de celulosa y producción continua",
      },
      {
        id: "energia",
        name: "Energía y Electricidad",
        description:
          "Generación hidráulica, térmica, eólica y transmisión eléctrica con enfoque en confiabilidad.",
        imageAlt: "Infraestructura de generación y transmisión eléctrica",
      },
      {
        id: "industrial",
        name: "Industria Intensiva en Activos",
        description:
          "Plantas químicas, manufactura pesada y procesos industriales con alto CAPEX y criticidad operacional.",
        imageAlt: "Planta industrial intensiva en activos",
      },
    ],
    ctaTitle: "¿Opera en alguno de estos sectores?",
    ctaSubtitle:
      "Descubra casos de estudio y soluciones metodológicas validadas para su línea de negocio.",
    ctaButton: "Hablar con un especialista",
    ctaAria: "Agendar una reunión para hablar sobre su industria",
  },
  cases: {
    aria: "Casos de estudio y éxito",
    listAria: "Casos de éxito desarrollados",
    eyebrow: "Demostración de Impacto",
    title: "Casos de éxito",
    subtitle:
      "Consulte cómo aplicamos ingeniería y rigurosidad técnica para resolver brechas operacionales complejas. Resultados medibles y auditados por nuestros propios clientes.",
    problemLabel: "Situación Inicial / Problema",
    diagnosisLabel: "Diagnóstico Técnico",
    implementationLabel: "Implementación y Solución",
    requestSimilar: "Solicitar caso similar",
    requestSimilarAria: "Solicitar caso similar a",
    share: "Compartir caso",
    shareAria: "Compartir caso",
    shareTitle: "Caso de éxito Monitoring",
    shareText: "Resultados medibles en gestión de activos y confiabilidad operacional.",
    shareCopied: "Enlace del caso copiado al portapapeles.",
    items: [
      {
        id: "caso-1",
        tag: "Confiabilidad",
        title: "Reducción de fallas críticas en planta concentradora",
        industry: "Minería de Cobre — Chile",
        problem:
          "Paradas no planificadas recurrentes en el sistema de molienda SAG, generando pérdidas operacionales estimadas en USD 350,000 por hora de inactividad.",
        diagnosis:
          "Análisis RCA determinó fatiga prematura de componentes por lubricación deficiente y desviaciones sistemáticas del plan de mantenimiento preventivo.",
        implementation:
          "Rediseño completo de la estrategia de lubricación e implantación de mantenimiento preventivo enfocado en confiabilidad (RCM) bajo la norma SAE JA1011.",
        result: {
          kpi: "-42%",
          kpiLabel: "Tasa de fallas mecánicas",
          description: "Disminución directa de paradas no programadas en los primeros 6 meses.",
        },
      },
      {
        id: "caso-2",
        tag: "Gestión de Activos",
        title: "Optimización del ciclo de vida en parque eólico de 150 MW",
        industry: "Energía Renovable — Colombia",
        problem:
          "Incremento acelerado en los costos de OPEX y envejecimiento prematuro de multiplicadoras sin un plan financiero sustentado.",
        diagnosis:
          "Falta de alineación estratégica entre las áreas de operación y finanzas; ausencia de modelos predictivos del comportamiento de falla del activo.",
        implementation:
          "Establecimiento del Plan Estratégico de Gestión de Activos (PEGA) alineado con ISO 55001 y desarrollo de políticas de reemplazo por riesgo técnico-económico.",
        result: {
          kpi: "+18%",
          kpiLabel: "Disponibilidad de turbinas",
          description: "Amortización de OPEX anual y extensión de la vida útil de componentes clave.",
        },
      },
      {
        id: "caso-3",
        tag: "Supply Chain",
        title: "Reducción de capital inmovilizado en repuestos críticos",
        industry: "Industrial / Manufactura — Perú",
        problem:
          "Exceso de inventario en bodega por un valor de USD 4.8M y, al mismo tiempo, quiebres de stock en componentes esenciales de alta rotación.",
        diagnosis:
          "Modelo de compras empírico sin categorización técnica de criticidad, rotación ni análisis de confiabilidad de proveedores.",
        implementation:
          "Aplicación de algoritmo de stock óptimo basado en confiabilidad (RBS) y reestructuración de acuerdos comerciales de entrega just-in-time.",
        result: {
          kpi: "-25%",
          kpiLabel: "Capital en inventario",
          description: "Liberación de flujo de caja manteniendo un nivel de servicio del 99.2% en bodega.",
        },
      },
    ],
  },
  team: {
    aria: "Equipo y presencia en terreno",
    eyebrow: "Presencia real",
    title: "Personas, equipos y faena",
    subtitle:
      "Mostramos a nuestros consultores, líderes y equipos en acción. Sin imágenes genéricas: la confianza se construye viendo quiénes están detrás de cada proyecto.",
    presence:
      "Presencia en Chile y la región, apoyando clientes nacionales e internacionales en minería, energía, Oil&Gas, celulosa e industria intensiva en activos.",
    galleryAlts: [
      "Planta de procesamiento minero en Chile",
      "Equipo integral en faena industrial",
      "Consultor senior en inspección de activos",
      "Cierre de servicio con cliente en planta",
      "Mantenimiento de equipo crítico en operación",
      "Transformación digital aplicada en terreno",
    ],
  },
  news: {
    aria: "Actualidad, newsletters y cierres de proyecto",
    eyebrow: "Actualidad",
    title: "Noticias y avances",
    subtitle:
      "Material para compartir con clientes: newsletters, cierres de servicio, cursos y novedades del equipo comercial. Actualización mensual.",
    viewLibrary: "Ver en biblioteca",
    typeLabels: {
      newsletter: "Newsletter",
      cierre: "Cierre de servicio",
      curso: "Curso",
      avance: "Avance",
    },
    items: [
      {
        id: "news-1",
        type: "newsletter",
        date: "Mayo 2026",
        title: "Avances en gestión de activos con clientes de minería",
        summary:
          "Resumen mensual de proyectos, metodologías aplicadas y aprendizajes compartidos con equipos de mantenimiento regional.",
        imageAlt: "Newsletter mensual Monitoring con avances de proyectos",
      },
      {
        id: "news-2",
        type: "cierre",
        date: "Abril 2026",
        title: "Cierre de servicio: optimización de confiabilidad en planta concentradora",
        summary:
          "Proyecto finalizado con mejoras en disponibilidad operacional en rango del 15–20% y reducción de paradas no planificadas.",
        imageAlt: "Cierre de servicio con cliente en planta industrial",
      },
      {
        id: "news-3",
        type: "curso",
        date: "Junio 2026",
        title: "Curso abierto: Ingeniería de mantenimiento y SAP PM integral",
        summary:
          "Programa técnico para líderes de mantenimiento que buscan estructurar procesos y alinear la operación con el sistema.",
        imageAlt: "Curso técnico de ingeniería de mantenimiento y SAP PM",
      },
    ],
  },
  library: {
    aria: "Biblioteca técnica y recursos de ingeniería",
    listAria: "Contenido técnico para descarga",
    filtersAria: "Filtros de biblioteca",
    eyebrow: "Conocimiento Compartido",
    title: "Biblioteca y descargas",
    subtitle:
      "Brochures, newsletters, whitepapers y guías técnicas para compartir con clientes y equipos internos.",
    filters: { all: "Ver Todo", corporate: "Corporativo" },
    typeLabels: {
      whitepaper: "Whitepaper",
      article: "Artículo Técnico",
      study: "Estudio Sectorial",
      guide: "Guía de Ingeniería",
      webinar: "Webinar Grabado",
      brochure: "Brochure",
      newsletter: "Newsletter",
    },
    preparing: "Preparando descarga...",
    downloadAria: "Descargar recurso",
    resources: [
      {
        id: "corp-1",
        type: "brochure",
        tag: "Corporativo",
        title: "Brochure Corporativo Monitoring 2026",
        description:
          "Presentación ejecutiva con servicios, diferenciadores, industrias atendidas y resultados en rangos aprobados.",
        leadMagnetName: "Descargar Brochure",
        corporate: true,
      },
      {
        id: "corp-2",
        type: "newsletter",
        tag: "Newsletter",
        title: "Newsletter Mayo 2026 — Avances con clientes",
        description:
          "Resumen mensual de proyectos, felicitaciones de clientes y novedades del equipo para compartir en reuniones comerciales.",
        leadMagnetName: "Descargar Newsletter",
        corporate: true,
      },
      {
        id: "res-1",
        type: "guide",
        tag: "Gestión de Activos",
        title: "Guía Técnica de Implementación ISO 55000",
        description:
          "Hoja de ruta para integrar la gestión del ciclo de vida físico con el control de OPEX de la organización.",
        leadMagnetName: "Descargar Guía ISO 55000",
      },
      {
        id: "res-2",
        type: "guide",
        tag: "Confiabilidad",
        title: "Checklist de Auditoría de Confiabilidad Operacional",
        description:
          "Autodiagnóstico con 45 puntos críticos para evaluar el estado actual de sus planes preventivos.",
        leadMagnetName: "Obtener Checklist",
      },
      {
        id: "res-3",
        type: "study",
        tag: "Gestión de Activos",
        title: "Estudio de Madurez de Gestión de Activos en Latinoamérica",
        description:
          "Datos agregados y benchmarking de confiabilidad en industrias mineras y energéticas de la región.",
        leadMagnetName: "Descargar Estudio",
      },
      {
        id: "res-5",
        type: "whitepaper",
        tag: "Confiabilidad",
        title: "RCM Aplicado: Del papel a la disponibilidad real",
        description:
          "Lecciones aprendidas en plantas concentradoras sobre mantenimiento centrado en confiabilidad.",
        leadMagnetName: "Descargar Whitepaper RCM",
      },
    ],
  },
  ctaBanner: {
    aria: "Llamada a la acción",
    eyebrow: "Próximo paso",
    title: "¿Necesita mejorar el desempeño de sus activos?",
    subtitle:
      "En 30 minutos le mostramos cómo otras operaciones en su industria han logrado resultados medibles. Sin compromiso. Con claridad.",
    primary: "Agendar Reunión Ahora",
    primaryAria: "Agendar una reunión gratuita con un especialista",
    secondary: "Solicitar Diagnóstico Gratuito",
    secondaryAria: "Solicitar un diagnóstico gratuito",
    footnote: "Sin costo. Sin compromiso. Respuesta en menos de 24 horas.",
  },
  contact: {
    aria: "Formulario de contacto y solicitud de reunión",
    formAria: "Formulario de contacto para agendar reunión comercial",
    eyebrow: "Contacto",
    title: "Comuníquenos sus requerimientos",
    subtitle:
      "Contacto inicial, agendamiento de reuniones o solicitud de material. Un ingeniero especialista de Monitoring responderá de forma confidencial.",
    responseTime: "Promesa de respuesta en menos de 24 horas hábiles.",
    confidentiality: "Acuerdo de confidencialidad estándar garantizado.",
    successTitle: "Solicitud recibida correctamente",
    successMessage:
      "Hemos recibido sus datos. Uno de nuestros ingenieros senior se comunicará con usted en el plazo acordado.",
    sendAnother: "Enviar otra solicitud",
    requirementLabel: "Tipo de requerimiento",
    requirementRequired: "Seleccione un tipo de requerimiento",
    nameLabel: "Nombre completo",
    nameRequired: "El nombre es obligatorio",
    namePlaceholder: "Ej. Juan González",
    companyLabel: "Empresa",
    companyRequired: "La empresa es obligatoria",
    companyPlaceholder: "Nombre empresa",
    roleLabel: "Cargo",
    rolePlaceholder: "Ej. Gerente de Mantenimiento",
    industryLabel: "Industria",
    phoneLabel: "Teléfono",
    phoneRequired: "El teléfono es obligatorio",
    phonePlaceholder: "Ej. +56 9 1234 5678",
    emailLabel: "Correo corporativo",
    emailRequired: "El correo es obligatorio",
    emailInvalid: "Formato de correo inválido",
    emailPlaceholder: "Ej. juan@empresa.com",
    messageLabel: "Mensaje / Requerimiento",
    messagePlaceholder: "Describa brevemente su desafío operacional o el material que necesita...",
    submit: "Enviar solicitud",
    submitAria: "Enviar formulario de contacto",
    processing: "Procesando...",
    submitError: "No se pudo enviar la solicitud.",
    requirementTypes: [
      { value: "reunion", label: "Agendar reunión comercial" },
      { value: "diagnostico", label: "Solicitar diagnóstico" },
      { value: "propuesta", label: "Solicitar propuesta" },
      { value: "descarga", label: "Descargar material / brochure" },
      { value: "otro", label: "Otro requerimiento" },
    ],
    industries: [
      "Minería",
      "Oil & Gas",
      "Celulosa / Forestal",
      "Energía / Electricidad",
      "Industrial",
      "Otro",
    ],
  },
  language: {
    switchTo: "English",
    current: "ES",
    aria: "Cambiar idioma a inglés",
  },
};
