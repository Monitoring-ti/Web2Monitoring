import type { Locale } from "@/i18n/config";

export const softImages = {
  cover: "/images/portada-faena.jpg",
  clients: "/images/soft/clientes.jpg",
  certs: "/images/soft/certificaciones.jpg",
} as const;

type OfficeFlag = "cl" | "pe";

export type SoftCopy = {
  nav: { href: string; label: string; cta?: boolean }[];
  hero: {
    tag: string;
    before: string;
    emphasis: string;
    after: string;
    lead: string;
    primary: string;
    secondary: string;
    imageAlt: string;
  };
  about: {
    tag: string;
    title: string;
    body: string;
    stats: { value: string; label: string }[];
    missionLabel: string;
    mission: string;
  };
  philosophy: {
    tag: string;
    title: string;
    subtitle: string;
    cards: { n: string; title: string; body: string }[];
    chips: string[];
    photos: { src: string; alt: string; caption: string }[];
    safety: string;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    items: { icon: string; title: string; points: string[] }[];
  };
  ia: {
    tag: string;
    title: string;
    subtitle: string;
    steps: { n: string; title: string; body: string }[];
    noteLead: string;
    note: string;
  };
  industries: {
    tag: string;
    title: string;
    miningTitle: string;
    mining: { label: string; text: string }[];
    otherTitle: string;
    other: string[];
  };
  cases: {
    tag: string;
    title: string;
    items: { k: string; title: string; body: string }[];
  };
  clients: { tag: string; title: string; alt: string };
  certs: { tag: string; title: string; subtitle: string; alt: string };
  contact: {
    tag: string;
    title: string;
    before: string;
    after: string;
    cta: string;
    offices: { flag: OfficeFlag; city: string; lines: string[] }[];
  };
  footerLine: string;
  footerSite: string;
};

const photos = {
  preparacion: "/images/soft/preparacion.jpg",
  paradas: "/images/soft/paradas.jpg",
  kpi: "/images/soft/kpi.jpg",
  terreno: "/images/soft/terreno.jpg",
};

const es: SoftCopy = {
  nav: [
    { href: "#nosotros", label: "Quiénes somos" },
    { href: "#servicios", label: "Servicios" },
    { href: "#ia", label: "IA" },
    { href: "#industrias", label: "Industrias" },
    { href: "#clientes", label: "Clientes" },
    { href: "#certificaciones", label: "Certificaciones" },
    { href: "#contacto", label: "Contacto", cta: true },
  ],
  hero: {
    tag: "Gestión de activos físicos",
    before: "Ingeniería y consultoría de Gestión de activos que ",
    emphasis: "operan seguros",
    after: " y con continuidad operativa",
    lead: "Respuesta técnica, logística, humana y financiera a cada proyecto de nuestros clientes en minería e industria.",
    primary: "Ver servicios",
    secondary: "Contáctenos",
    imageAlt: "Operador minero con casco y chaleco reflectante frente a una mina",
  },
  about: {
    tag: "Quiénes somos",
    title: "Líderes en la gestión de activos físicos",
    body: "Somos una empresa de ingeniería y consultoría con respuesta técnica, logística, humana y financiera a todo proyecto que nuestros clientes requieran. Nuestro capital humano cuenta con certificaciones y está respaldado por aplicaciones de planificación, confiabilidad y reportabilidad.",
    stats: [
      { value: "+120", label: "consultores" },
      { value: "14", label: "años de trayectoria" },
    ],
    missionLabel: "Nuestra misión",
    mission:
      "«Ser un socio estratégico de nuestros clientes, que aporte valor a su cadena de gestión de activos, integrando las mejores herramientas presentes en el mercado».",
  },
  philosophy: {
    tag: "Filosofía de trabajo",
    title: "Medir el Riesgo en todo el proceso para obtener buenos resultados",
    subtitle:
      "Nos orientamos al negocio de nuestros clientes para implementar soluciones en cualquier proceso productivo, con metodologías estándares y certificadas.",
    cards: [
      {
        n: "1",
        title: "Seguridad",
        body: "Evaluamos equipos, sistemas y componentes que puedan afectar la seguridad de las personas, ya sea por su falla o por las propias intervenciones de mantenimiento.",
      },
      {
        n: "2",
        title: "Costos",
        body: "Evaluación de costos unitarios y presupuestos de mantenimiento a nivel OPEX y CAPEX: vida útil, renovación de equipos y reparación de componentes.",
      },
      {
        n: "3",
        title: "Continuidad operacional",
        body: "Metodologías RCM certificadas, alineadas con el plan de detenciones, que previenen o minimizan las fallas que impactan el plan productivo.",
      },
      {
        n: "4",
        title: "Riesgo de negocio",
        body: "Entendimiento de fallas catastróficas de muy baja probabilidad que ponen en riesgo la continuidad del negocio.",
      },
    ],
    chips: [
      "Seguridad",
      "Costos Operacionales",
      "Flujos de Operación",
      "Reputacionales",
      "Legales",
      "Ambientales",
    ],
    photos: [
      {
        src: photos.preparacion,
        alt: "Ingenieros con casco, lentes, chaleco y guantes junto a una correa transportadora",
        caption: "Preparación operacional",
      },
      {
        src: photos.paradas,
        alt: "Técnico aplicando bloqueo y etiquetado en un panel eléctrico",
        caption: "Optimización de Planes de Mantenimiento y Paradas de Planta",
      },
      {
        src: photos.kpi,
        alt: "Equipo de ingenieros con casco y chaleco en una mina a rajo abierto",
        caption: "Mejora de procesos con IA y estandarización de KPI",
      },
      {
        src: photos.terreno,
        alt: "Ingeniero inspeccionando equipos con cámara termográfica a distancia segura",
        caption: "Entrenamiento, Coaching y Mentoring en Terreno",
      },
    ],
    safety:
      "Ninguna intervención se realiza sin equipo de protección personal, respirador cuando corresponde, bloqueo de energías y análisis de riesgo.",
  },
  services: {
    tag: "Servicios y entregables",
    title: "Soluciones en gestión de activos",
    subtitle:
      "Cubrimos todo el ciclo de vida de los activos: desde la estrategia y el diseño hasta la operación y el reemplazo.",
    items: [
      {
        icon: "E",
        title: "Estrategia",
        points: [
          "Operational Readiness (proyectos)",
          "Estrategia de gestión de activos físicos",
          "Governance de mantenimiento y de activos",
          "Abastecimiento estratégico y modelos de reparables",
          "Governance de integridad de activos",
        ],
      },
      {
        icon: "M",
        title: "Mantenimiento",
        points: [
          "Diagnóstico, criticidad y análisis de riesgo",
          "Planes de mantenimiento",
          "Procesos y estructura organizacional",
          "API: integridad mecánica",
          "Análisis de productividad",
        ],
      },
      {
        icon: "C",
        title: "Cadena de abastecimiento",
        points: [
          "Diagnóstico y criticidad de componentes",
          "Desarrollo e implementación de procesos",
          "Análisis de contratos, internalización y externalización",
          "Gestión de inventarios",
          "Conservación de componentes críticos",
        ],
      },
      {
        icon: "S",
        title: "Sistemas",
        points: [
          "SAP: implementación y soporte PM/MM",
          "Integración con procesos, ERP y dashboards",
          "Optimización de datos maestros y carga",
          "RAM Analysis",
        ],
      },
      {
        icon: "P",
        title: "Planificación y confiabilidad",
        points: [
          "Planificación y programación",
          "Capacitación en confiabilidad, RCM/FMECA, planificación y paradas de planta en el portal Monitoring Academy",
        ],
      },
      {
        icon: "A",
        title: "Analítica, dashboards e IA",
        points: [
          "Optimización de frecuencia de paradas, planes y hojas de ruta",
          "Estandarización de Indicadores y tableros automatizados",
          "Mejora de procesos de mantenimiento con IA",
        ],
      },
    ],
  },
  ia: {
    tag: "Inteligencia artificial",
    title: "MMI · Monitoring Maintenance Intelligence",
    subtitle:
      "La IA propia de Monitoring, presente en nuestros productos y servicios. Automatiza el análisis de los procesos de mantenimiento y libera a los especialistas para decidir.",
    steps: [
      {
        n: "01",
        title: "Clasificar y priorizar",
        body: "Avisos y órdenes de trabajo ordenados por criticidad y riesgo.",
      },
      {
        n: "02",
        title: "Preparar análisis",
        body: "Borradores de FMECA y RCM que el ingeniero valida.",
      },
      {
        n: "03",
        title: "Interpretar condición",
        body: "Vibración, aceite y termografía con alertas tempranas.",
      },
      {
        n: "04",
        title: "Consultar conocimiento",
        body: "Asistente sobre manuales, estándares e historial de fallas.",
      },
    ],
    noteLead: "Muy importante:",
    note: " MMI entrega confiabilidad en el manejo de los datos del cliente porque opera en un servidor independiente, a diferencia de las IA comerciales de mercado. La IA propone y el especialista decide.",
  },
  industries: {
    tag: "Alcance",
    title: "Industrias que acompañamos",
    miningTitle: "Minería",
    mining: [
      {
        label: "Mina:",
        text: " rajo abierto y subterránea; perforación, carguío, transporte y equipos auxiliares",
      },
      {
        label: "Plantas:",
        text: " chancado, concentradoras, hidrometalurgia, fundición, relaves, desaladoras",
      },
      {
        label: "Transporte:",
        text: " concentraductos y mineroductos, estaciones de bombeo, correas transportadoras",
      },
      { label: "Puerto:", text: " plantas de filtros y shiploader" },
    ],
    otherTitle: "No minería",
    other: ["Energía", "Celulosa", "Puertos", "Industrial"],
  },
  cases: {
    tag: "Casos de negocio",
    title: "Resultados en la operación de nuestros clientes",
    items: [
      {
        k: "Operational Readiness",
        title: "Proyectos de inversión minera",
        body: "Ingeniería temprana según el estándar del cliente: modelos de confiabilidad, criticidad de equipos, RCM y planes de mantenimiento.",
      },
      {
        k: "Planificación de planta y paradas",
        title: "Planificación detallada en terreno",
        body: "Metodología de seguridad en el trabajo, planificación y programación detallada, con un equipo desplegado en terreno.",
      },
      {
        k: "Confiabilidad y mejora continua",
        title: "Mina, planta y servicios",
        body: "Coaching continuo, análisis de causa raíz y FMECA en equipos críticos para aumentar disponibilidad y reducir fallas recurrentes.",
      },
      {
        k: "Estrategia de mantenimiento",
        title: "Optimización de frecuencias",
        body: "Análisis RCM, FMECA y RAM para optimizar paradas mayores y disponibilidad en planta concentradora.",
      },
    ],
  },
  clients: {
    tag: "Clientes",
    title: "Confían en nosotros en Chile, Perú y México",
    alt: "Logos de clientes de Monitoring en Chile, Perú y México",
  },
  certs: {
    tag: "Certificaciones y acreditaciones",
    title: "Certificación de nuestros consultores",
    subtitle:
      "Nuestro equipo cuenta con certificaciones internacionales en gestión de activos, confiabilidad, mejora de procesos y sistemas.",
    alt: "Certificaciones: AMP, IAM, CMRP SMRP, SAP HANA, Lean Institute Chile y PMM Enterprise Certification ISO 55001",
  },
  contact: {
    tag: "Contacto",
    title: "Hablemos de sus activos",
    before: "Escríbanos a ",
    after: " o visítenos en cualquiera de nuestras oficinas.",
    cta: "Escribir a Monitoring",
    offices: [
      {
        flag: "cl",
        city: "Santiago, Chile",
        lines: ["Antonio Varas 303, Of. 410", "Providencia, Santiago", "+56 2 2235 3090"],
      },
      {
        flag: "pe",
        city: "Lima, Perú",
        lines: ["Av. José Pardo 601, Of. 1002", "Miraflores, Lima", "+51 904 854 456"],
      },
      {
        flag: "cl",
        city: "Calama, Chile",
        lines: ["Bartolomé Vivar 1580, Of. 501, Torre B", "Calama, Antofagasta", "+56 2 2725 0546"],
      },
    ],
  },
  footerLine: "© Monitoring SpA · Gestión de Activos",
  footerSite: "www.monitoring.cl · soporte@monitoring.cl",
};

const en: SoftCopy = {
  nav: [
    { href: "#nosotros", label: "Who we are" },
    { href: "#servicios", label: "Services" },
    { href: "#ia", label: "AI" },
    { href: "#industrias", label: "Industries" },
    { href: "#clientes", label: "Clients" },
    { href: "#certificaciones", label: "Certifications" },
    { href: "#contacto", label: "Contact", cta: true },
  ],
  hero: {
    tag: "Physical asset management",
    before: "Engineering and consulting for assets that ",
    emphasis: "operate safely",
    after: " and with operational continuity",
    lead: "A technical, logistics, human and financial response for every client project in mining and industry.",
    primary: "View services",
    secondary: "Contact us",
    imageAlt: "Mining operator in hard hat and high-visibility vest overlooking a mine",
  },
  about: {
    tag: "Who we are",
    title: "Leaders in physical asset management",
    body: "We are an engineering and consulting firm with a technical, logistics, human and financial response for every project our clients require. Our people hold certifications and are supported by planning, reliability and reporting applications.",
    stats: [
      { value: "+120", label: "consultants" },
      { value: "14", label: "years of experience" },
    ],
    missionLabel: "Our mission",
    mission:
      "“To be a strategic partner for our clients, adding value across their asset-management chain by integrating the best tools available in the market.”",
  },
  philosophy: {
    tag: "How we work",
    title: "Measure risk throughout the process to get sound results",
    subtitle:
      "We align with our clients’ business to implement solutions in any production process, using standard and certified methodologies.",
    cards: [
      {
        n: "1",
        title: "Safety",
        body: "We assess equipment, systems and components that can affect people’s safety, either through failure or through the maintenance work itself.",
      },
      {
        n: "2",
        title: "Cost",
        body: "Unit-cost and maintenance-budget assessment at OPEX and CAPEX level: useful life, equipment renewal and component repair.",
      },
      {
        n: "3",
        title: "Operational continuity",
        body: "Certified RCM methods, aligned with the shutdown plan, that prevent or reduce failures which affect the production plan.",
      },
      {
        n: "4",
        title: "Business risk",
        body: "Understanding of very low-probability catastrophic failures that put business continuity at risk.",
      },
    ],
    chips: [
      "Safety",
      "Operating costs",
      "Operating flows",
      "Reputation",
      "Legal",
      "Environmental",
    ],
    photos: [
      {
        src: photos.preparacion,
        alt: "Engineers in hard hats, glasses, vests and gloves beside a conveyor",
        caption: "Operational readiness",
      },
      {
        src: photos.paradas,
        alt: "Technician applying lockout and tagout on an electrical panel",
        caption: "Maintenance-plan and plant-shutdown optimization",
      },
      {
        src: photos.kpi,
        alt: "Engineering team in hard hats and vests at an open pit",
        caption: "Process improvement with AI and KPI standardization",
      },
      {
        src: photos.terreno,
        alt: "Engineer inspecting equipment with a thermal camera from a safe distance",
        caption: "Field training, coaching and mentoring",
      },
    ],
    safety:
      "No intervention is carried out without personal protective equipment, a respirator when required, energy lockout and a risk analysis.",
  },
  services: {
    tag: "Services and deliverables",
    title: "Asset-management solutions",
    subtitle: "We cover the full asset life cycle, from strategy and design through operation and replacement.",
    items: [
      {
        icon: "E",
        title: "Strategy",
        points: [
          "Operational readiness (projects)",
          "Physical asset-management strategy",
          "Maintenance and asset governance",
          "Strategic supply and repairable models",
          "Asset-integrity governance",
        ],
      },
      {
        icon: "M",
        title: "Maintenance",
        points: [
          "Diagnosis, criticality and risk analysis",
          "Maintenance plans",
          "Processes and organizational structure",
          "API: mechanical integrity",
          "Productivity analysis",
        ],
      },
      {
        icon: "C",
        title: "Supply chain",
        points: [
          "Component diagnosis and criticality",
          "Process design and implementation",
          "Contract analysis, insourcing and outsourcing",
          "Inventory management",
          "Preservation of critical components",
        ],
      },
      {
        icon: "S",
        title: "Systems",
        points: [
          "SAP: PM/MM implementation and support",
          "Integration with processes, ERP and dashboards",
          "Master-data optimization and loading",
          "RAM analysis",
        ],
      },
      {
        icon: "P",
        title: "Planning and reliability",
        points: [
          "Planning and scheduling",
          "Training in reliability, RCM/FMECA, planning and plant shutdowns on the Monitoring Academy portal",
        ],
      },
      {
        icon: "A",
        title: "Analytics, dashboards and AI",
        points: [
          "Shutdown-frequency, plan and route optimization",
          "Indicator standardization and automated dashboards",
          "Maintenance-process improvement with AI",
        ],
      },
    ],
  },
  ia: {
    tag: "Artificial intelligence",
    title: "MMI · Monitoring Maintenance Intelligence",
    subtitle:
      "Monitoring’s own AI, present in our products and services. It automates maintenance-process analysis and frees specialists to decide.",
    steps: [
      {
        n: "01",
        title: "Classify and prioritize",
        body: "Notifications and work orders ordered by criticality and risk.",
      },
      {
        n: "02",
        title: "Prepare the analysis",
        body: "FMECA and RCM drafts that the engineer validates.",
      },
      {
        n: "03",
        title: "Interpret condition",
        body: "Vibration, oil and thermography with early alerts.",
      },
      {
        n: "04",
        title: "Consult knowledge",
        body: "An assistant over manuals, standards and failure history.",
      },
    ],
    noteLead: "Important:",
    note: " MMI keeps client data reliable because it runs on an independent server, unlike commercial AI products. The AI proposes and the specialist decides.",
  },
  industries: {
    tag: "Scope",
    title: "Industries we support",
    miningTitle: "Mining",
    mining: [
      {
        label: "Mine:",
        text: " open pit and underground; drilling, loading, haulage and auxiliary equipment",
      },
      {
        label: "Plants:",
        text: " crushing, concentrators, hydrometallurgy, smelting, tailings, desalination",
      },
      {
        label: "Transport:",
        text: " concentrate and ore pipelines, pump stations, conveyors",
      },
      { label: "Port:", text: " filter plants and shiploaders" },
    ],
    otherTitle: "Beyond mining",
    other: ["Energy", "Pulp", "Ports", "Industry"],
  },
  cases: {
    tag: "Business cases",
    title: "Results in our clients’ operations",
    items: [
      {
        k: "Operational readiness",
        title: "Mining investment projects",
        body: "Early engineering to the client’s standard: reliability models, equipment criticality, RCM and maintenance plans.",
      },
      {
        k: "Plant and shutdown planning",
        title: "Detailed planning in the field",
        body: "Work-safety method, detailed planning and scheduling, with a team deployed on site.",
      },
      {
        k: "Reliability and continuous improvement",
        title: "Mine, plant and services",
        body: "Ongoing coaching, root-cause analysis and FMECA on critical equipment to raise availability and reduce recurring failures.",
      },
      {
        k: "Maintenance strategy",
        title: "Frequency optimization",
        body: "RCM, FMECA and RAM analysis to optimize major shutdowns and availability in a concentrator plant.",
      },
    ],
  },
  clients: {
    tag: "Clients",
    title: "Trusted in Chile, Peru and Mexico",
    alt: "Monitoring client logos in Chile, Peru and Mexico",
  },
  certs: {
    tag: "Certifications and accreditations",
    title: "Our consultants’ certifications",
    subtitle:
      "Our team holds international certifications in asset management, reliability, process improvement and systems.",
    alt: "Certifications: AMP, IAM, CMRP SMRP, SAP HANA, Lean Institute Chile and PMM Enterprise Certification ISO 55001",
  },
  contact: {
    tag: "Contact",
    title: "Let’s talk about your assets",
    before: "Write to ",
    after: " or visit any of our offices.",
    cta: "Write to Monitoring",
    offices: es.contact.offices,
  },
  footerLine: "© Monitoring SpA · Asset management",
  footerSite: "www.monitoring.cl · soporte@monitoring.cl",
};

export function getSoftCopy(locale: Locale): SoftCopy {
  return locale === "en" ? en : es;
}
