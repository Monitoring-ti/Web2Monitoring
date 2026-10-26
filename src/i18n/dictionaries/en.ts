import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    tagline: "Optimizing your assets from the first move",
    description:
      "Engineering and consulting in physical asset management, maintenance, and reliability. More than 120 consultants and 14 years in mining, energy, pulp, ports, and industry.",
    title: "Monitoring | Optimizing your assets from the first move",
    ogImageAlt: "Monitoring — engineers at a mining plant, asset management",
    keywords: [
      "asset management",
      "operational reliability",
      "maintenance engineering",
      "SAP PM",
      "EPCM",
      "EPC",
      "mining consulting Chile",
      "asset management consulting",
      "industrial maintenance",
      "pulp and paper",
      "ports",
      "operational excellence",
      "MMi",
      "maintenance intelligence",
    ],
  },
  nav: {
    primary: [
      { label: "Services", href: "/servicios" },
      { label: "MMi", href: "/mmi" },
      { label: "Industries", href: "/industrias" },
      { label: "Cases", href: "/casos" },
      { label: "Team", href: "/equipo" },
      { label: "Contact", href: "/contacto" },
    ],
    more: [
      { label: "Company", href: "/" },
      { label: "Credibility", href: "/credibilidad" },
      { label: "Differentiators", href: "/diferenciadores" },
      { label: "News", href: "/actualidad" },
      { label: "Library", href: "/biblioteca" },
    ],
  },
  header: {
    homeAria: "Monitoring — home",
    navAria: "Main navigation",
    moreLabel: "More",
    moreAria: "More site sections",
    requestMeeting: "Request Meeting",
    requestMeetingAria: "Request a meeting with a specialist",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mobileMenuAria: "Mobile navigation menu",
  },
  footer: {
    navAria: "Footer navigation",
    copyright: "All rights reserved.",
    developedBy: "Developed by",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    linkedinAria: "Monitoring corporate LinkedIn profile",
  },
  floatingCta: {
    label: "Schedule Meeting",
    aria: "Quickly schedule a meeting with a consultant",
  },
  hero: {
    aria: "Main value proposition",
    badge: "Asset management · Maintenance and reliability",
    title: "Optimizing your assets",
    titleHighlight: "from the first move",
    subtitle:
      "We support our clients from the operational readiness of their projects through the management of assets in operation. We integrate strategy, reliability, planning, and maintenance engineering, with SAP PM/MM support and analytics to inform decisions and improve availability.",
    motto: "Your greatest assets are the people around you.",
    ctaPrimary: "Explore our solutions",
    ctaPrimaryAria: "Explore Monitoring solutions",
    ctaSecondary: "Let's talk about your operation",
    ctaSecondaryAria: "Talk with Monitoring about your operation",
    metricsAria: "Key trust metrics",
    metrics: [
      { value: "14", label: "Years in the market" },
      { value: "+120", label: "Consultants" },
      { value: "+43", label: "Projects at different stages" },
    ],
    fieldLabel: "The move",
    fieldCaption: "Assets in operation, with the decision in view",
    fieldBadge: "The operation, not a portrait",
  },
  credibility: {
    aria: "Results and credibility",
    eyebrow: "Track Record",
    title: "Trust backed by results",
    listAria: "Consulting firm performance metrics",
    kpis: [
      {
        value: 14,
        suffix: "",
        label: "Years in the market",
        description: "Years supporting asset management, maintenance, and reliability.",
      },
      {
        value: 120,
        suffix: "+",
        label: "Consultants",
        description: "Professionals who deliver the services.",
      },
      {
        value: 43,
        suffix: "+",
        label: "Projects at different stages",
        description: "Initiatives underway and at different stages. Not a count of closed projects.",
      },
      {
        value: 3,
        suffix: "",
        label: "Countries with clients",
        description: "Clients in Chile, Peru, and Mexico.",
      },
    ],
    credentialsTitle: "Certifications",
    credentialsNote:
      "These are certifications and training held by our consultants. They do not mean the company is ISO 55001 certified or an SAP partner.",
    credentials: [
      { id: "amp-iam", name: "Asset Management Professional and Institute of Asset Management membership" },
      { id: "smrp", name: "SMRP CMRP Certified" },
      { id: "sap-hana", name: "SAP HANA" },
      { id: "lean", name: "Lean Institute Chile" },
      { id: "pmm", name: "PMM Enterprise Certification ISO 55001" },
    ],
  },
  clients: {
    aria: "Our clients",
    eyebrow: "Our clients",
    title: "Experience that builds trust",
    subtitle:
      "We have supported mining companies and organizations in other sectors through their asset management, maintenance, and reliability challenges.",
  },
  differentiators: {
    aria: "Monitoring differentiators",
    eyebrow: "Why Monitoring",
    title: "What sets us apart",
    subtitle:
      "More than consulting: field teams, risk management, and commitment to the client's final outcome at every stage of the asset lifecycle.",
    items: [
      {
        title: "Commitment to the solution",
        description:
          "We support you from diagnosis through sustained operations. Our success is measured by the final performance of your assets, not just project delivery.",
        proof: "Methodology focused on measurable results in the field.",
      },
      {
        title: "Integrated teams and safe risk management",
        description:
          "Multidisciplinary teams integrating engineering, operations, and maintenance with safety protocols aligned to each asset's criticality.",
        proof: "Experience in high-criticality environments: mining, energy, and industry.",
      },
      {
        title: "Consultants with field experience",
        description:
          "Professionals with proven on-site track records, technical certifications, and expertise in improvement processes, asset management, and SAP PM.",
        proof: "More than 120 consultants with field and project experience.",
      },
      {
        title: "Proprietary technology applied to maintenance",
        description:
          "Our engineering and field experience is complemented by MMi, a capability developed by Monitoring to work on real technical information and turn it into operational knowledge.",
        proof: "MMi by Monitoring — intelligence with evidence, not generic software.",
      },
    ],
  },
  services: {
    aria: "Monitoring services and capabilities",
    listAria: "Consulting capabilities",
    eyebrow: "Featured services",
    title: "From project to operations",
    subtitle:
      "Portfolio of specialties to diagnose, structure, and optimize physical asset management in capital-intensive industries.",
    items: [
      {
        id: "gestion-activos",
        title: "Asset Management",
        description:
          "Physical asset strategy, operational readiness, governance, strategic sourcing, and integrity, from project through operations.",
        ctaText: "View capabilities",
        imageAlt: "Asset lifecycle from EPCM/EPC project through operations",
      },
      {
        id: "confiabilidad",
        title: "Operational Reliability",
        description:
          "Safe improvement of process availability and reliability using RCM, RCA, and risk analysis methodologies.",
        ctaText: "Explore solutions",
        imageAlt: "Maintenance and reliability at an industrial SAG mill",
      },
      {
        id: "ingenieria-mantenimiento",
        title: "Maintenance Engineering & SAP PM",
        description:
          "Comprehensive support in maintenance engineering processes, plan structuring, and SAP PM alignment.",
        ctaText: "View engineering",
        imageAlt: "Machine hall for maintenance engineering",
      },
      {
        id: "supply-chain",
        title: "Supply Chain",
        description:
          "Logistics assurance and critical spare parts availability to prevent costly downtime.",
        ctaText: "Optimize supply chain",
        imageAlt: "Technical warehouse with identified critical spare parts",
      },
      {
        id: "excelencia-operacional",
        title: "Operational Excellence",
        description:
          "Management systems and continuous improvement focused on raising efficiency and plant OEE.",
        ctaText: "Raise efficiency",
        imageAlt: "Mining operation indicators on an analytics screen",
      },
      {
        id: "transformacion-digital",
        title: "Digital Transformation",
        description:
          "Data, sensing, and business intelligence to enable optimal operational decision-making. MMi is the concrete application of that transformation to maintenance processes.",
        ctaText: "Discover MMi",
        imageAlt: "Analytics for maintenance, reliability, and supply chain",
        ctaHref: "/mmi",
        callout: {
          title: "MMi — Maintenance Intelligence",
          description:
            "Proprietary technology applied to organizing, analyzing, and tracing technical knowledge.",
        },
      },
    ],
  },
  industries: {
    aria: "Industries we serve",
    listAria: "Industrial sectors served",
    eyebrow: "Our sectors",
    title: "Industries where we support the operation",
    subtitle:
      "Mining is our main sector. We also support energy, pulp, port, and industrial operations in asset management, maintenance, and reliability.",
    items: [
      {
        id: "mineria",
        name: "Mining",
        description:
          "Open pit and underground: drilling, loading, and haulage; crushing, concentrators, hydrometallurgy, smelting, tailings, and fire systems.",
        imageAlt: "Large-scale mining operation in Chile",
      },
      {
        id: "puertos",
        name: "Ports",
        description: "Filter plants, shiploaders, fire systems, and desalination plants.",
        imageAlt: "Industrial logistics operation",
      },
      {
        id: "celulosa",
        name: "Pulp and Forestry",
        description:
          "Asset management, maintenance, and reliability in pulp mills and forestry operations.",
        imageAlt: "Pulp mill and continuous production line",
      },
      {
        id: "energia",
        name: "Energy and Power",
        description:
          "Asset management, maintenance, and reliability in energy and power operations.",
        imageAlt: "Power generation and transmission infrastructure",
      },
      {
        id: "industrial",
        name: "Asset-Intensive Industry",
        description:
          "Asset management, maintenance, and reliability in capital-intensive industrial plants.",
        imageAlt: "Asset-intensive industrial plant",
      },
    ],
    ctaTitle: "Does your operation sit in one of these sectors?",
    ctaSubtitle:
      "Let's talk about your asset challenge and how to address it in your industry.",
    ctaButton: "Talk to a specialist",
    ctaAria: "Schedule a meeting to discuss your industry",
  },
  cases: {
    aria: "Case studies and success stories",
    listAria: "Developed success cases",
    eyebrow: "Proven Impact",
    title: "Success stories",
    subtitle:
      "Results from operations we have supported. Estimates are kept distinct from results already observed.",
    problemLabel: "Initial Situation / Problem",
    diagnosisLabel: "Technical Diagnosis",
    implementationLabel: "Implementation & Solution",
    requestSimilar: "Request similar case",
    requestSimilarAria: "Request a case similar to",
    share: "Share case",
    shareAria: "Share case",
    shareTitle: "Monitoring success story",
    shareText: "Measurable results in asset management and operational reliability.",
    shareCopied: "Case link copied to clipboard.",
    items: [
      {
        id: "operational-readiness",
        tag: "Operational Readiness",
        title: "Operational readiness for underground ore transport",
        industry: "Mining · Ore transport",
        problem:
          "Implement the corporate operational readiness standard for an investment project moving 4 million tonnes per month, with 40 main pieces of equipment.",
        diagnosis:
          "The scope includes crushers, conveyors, screens, and fire systems, among other equipment.",
        implementation:
          "Deliverables against the corporate standard, using in-house tools for the models.",
        result: {
          kpi: "40",
          kpiLabel: "Main equipment items",
          description:
            "Reliability and availability model, criticality ranking, and maintenance plans with labor, services, spares, equipment, and infrastructure.",
        },
      },
      {
        id: "planificacion",
        tag: "Planning",
        title: "Plant and shutdown planning",
        industry: "Mining · Underground mine and plant",
        problem:
          "Improve resource planning, extend planning horizons, raise adherence to weekly schedules, and reduce planned downtime.",
        diagnosis: "Field coverage was required across all production processes.",
        implementation:
          "Detailed planning and scheduling, SWE methodology, and field follow-up, with 49 consultants.",
        result: {
          kpi: "21 days",
          kpiLabel: "Detailed planning",
          description: "A 21-day detailed planning horizon, with 49 consultants in the field.",
        },
      },
      {
        id: "confiabilidad",
        tag: "Reliability",
        title: "Reliability and continuous improvement",
        industry: "Mining · Mine, plant, and services",
        problem:
          "Improve failure analysis, increase mean time between failures and availability, and reduce recurring failures.",
        diagnosis:
          "Continuous reliability and mechanical integrity service for 14 months, with 10 consultants.",
        implementation:
          "Coaching, training, root-cause analysis, and FMECA on critical equipment in every area.",
        result: {
          kpi: "91.9%",
          kpiLabel: "Shovel availability",
          description:
            "Up from 78.3%. Mean time between failures moved from 24.3 to 34.6 hours. In crushing, control-related failures are eliminated. For haul trucks, in-pit stops from mechanical failures fell by 6%.",
        },
      },
      {
        id: "estrategia-molienda",
        tag: "Maintenance strategy",
        title: "Shutdown frequency in grinding",
        industry: "Mining · Concentrator plant",
        problem:
          "Optimize the frequency of major shutdowns and set the maintenance plans for the process.",
        diagnosis:
          "RCM and FMECA by criticality, with cost, availability (RAM), and labor projections.",
        implementation:
          "Major mill shutdown frequencies are changed, and plans, routines, and projections are developed in line with the business.",
        result: {
          kpi: "2.4%",
          kpiLabel: "Grinding availability",
          description:
            "Availability increase in grinding, after the frequency change and the maintenance plans.",
        },
      },
      {
        id: "frecuencia-pdp",
        tag: "Analytics",
        title: "Plant shutdown frequency",
        industry: "Planned maintenance",
        problem: "Identify the maintenance frequency that offers the highest availability potential.",
        diagnosis:
          "Scenario evaluation with data from January 2018 to April 2025, comparing planned and unplanned maintenance.",
        implementation:
          "Extension of the interval between maintenance events from 32 days to 7 weeks, within the scenarios evaluated.",
        result: {
          kpi: "3.56%",
          kpiLabel: "Estimated potential",
          description:
            "This is an estimate, not a benefit already realized. The potential is on the order of USD 35 million per year, with an estimated risk of -1.44% and a 90% confidence interval.",
        },
      },
      {
        id: "reportabilidad",
        tag: "Reporting",
        title: "From manual exports to a single data set",
        industry: "SAP · Power BI",
        problem:
          "Each weekly close depended on manual SAP exports, spreadsheet consolidation, and a report that arrived late.",
        diagnosis:
          "The bottlenecks were in IW29, IW37N, and IW39, and in the manual cross-checking of pivot tables.",
        implementation:
          "Dashboards on ERP data in Power BI, pivot tables by area, a self-contained HTML report, and an executive email with the Excel file attached.",
        result: {
          kpi: "Power BI",
          kpiLabel: "Reports for decisions",
          description:
            "Reports ready for decisions, built from ERP data.",
        },
      },
    ],
  },
  team: {
    aria: "Our team",
    eyebrow: "Our team",
    title: "Specialized knowledge that supports our solutions",
    subtitle:
      "Our consultants hold certifications and specialized training in asset management, maintenance, and reliability, so they can address each operation's challenges with technical rigor.",
    presence: "Offices in Santiago, Calama, and Lima. Clients in Chile, Peru, and Mexico.",
    peopleTitle: "Leadership",
    people: [
      {
        name: "Marcelo Marambio D.",
        role: "Consulting Director – General Manager",
        email: "marcelo.marambio@monitoring.cl",
        phone: "+56 9 8248 1201",
      },
      {
        name: "Oscar Quezada R.",
        role: "Operations Manager",
        email: "oscar.quezada@monitoring.cl",
        phone: "+56 9 5372 2609",
      },
      {
        name: "Alejandro Opitz S.",
        role: "Operations Manager",
        email: "alejandro.opitz@monitoring.cl",
        phone: "+56 9 8553 8044",
      },
      {
        name: "Jorge Torres P.",
        role: "Commercial and Support Manager",
        email: "jorge.torres@monitoring.cl",
        phone: "+56 9 7951 7453",
      },
    ],
    galleryAlts: [
      "Open pit with a haul truck",
      "Industrial rolling mill in operation",
      "Machine hall and plant strategy",
      "Process plant with an engineering layout",
      "Wind farm and electrical substation",
      "Maintenance analytics over a mining operation",
    ],
  },
  news: {
    aria: "News, newsletters, and project closures",
    eyebrow: "News",
    title: "News and updates",
    subtitle:
      "Material to share with clients: newsletters, service closures, courses, and commercial team updates. Monthly refresh.",
    viewLibrary: "View in library",
    typeLabels: {
      newsletter: "Newsletter",
      cierre: "Service closure",
      curso: "Course",
      avance: "Update",
    },
    items: [
      {
        id: "news-1",
        type: "newsletter",
        date: "May 2026",
        title: "Asset management advances with mining clients",
        summary:
          "Monthly summary of projects, applied methodologies, and learnings shared with regional maintenance teams.",
        imageAlt: "Monitoring monthly newsletter with project updates",
      },
      {
        id: "news-2",
        type: "cierre",
        date: "April 2026",
        title: "Service closure: reliability optimization at concentrator plant",
        summary:
          "Closure of the reliability service at a concentrator plant.",
        imageAlt: "Process plant at the close of the shift",
      },
      {
        id: "news-3",
        type: "curso",
        date: "June 2026",
        title: "Open course: Maintenance engineering and integrated SAP PM",
        summary:
          "Technical program for maintenance leaders seeking to structure processes and align operations with the system.",
        imageAlt: "Technical course on maintenance engineering and SAP PM",
      },
    ],
  },
  library: {
    aria: "Technical library and engineering resources",
    listAria: "Downloadable technical content",
    filtersAria: "Library filters",
    eyebrow: "Shared Knowledge",
    title: "Library & downloads",
    subtitle:
      "Brochures, newsletters, whitepapers, and technical guides to share with clients and internal teams.",
    filters: { all: "View All", corporate: "Corporate" },
    typeLabels: {
      whitepaper: "Whitepaper",
      article: "Technical Article",
      study: "Sector Study",
      guide: "Engineering Guide",
      webinar: "Recorded Webinar",
      brochure: "Brochure",
      newsletter: "Newsletter",
    },
    preparing: "Preparing download...",
    downloadAria: "Download resource",
    resources: [
      {
        id: "corp-1",
        type: "brochure",
        tag: "Corporate",
        title: "Monitoring Corporate Brochure 2026",
        description:
          "Monitoring services, differentiators, industries served, and results.",
        leadMagnetName: "Download Brochure",
        corporate: true,
      },
      {
        id: "corp-2",
        type: "newsletter",
        tag: "Newsletter",
        title: "May 2026 Newsletter — Client advances",
        description:
          "Monthly summary of projects, client acknowledgments, and team news to share in commercial meetings.",
        leadMagnetName: "Download Newsletter",
        corporate: true,
      },
      {
        id: "res-1",
        type: "guide",
        tag: "Asset Management",
        title: "ISO 55000 Implementation Technical Guide",
        description:
          "Roadmap to integrate physical lifecycle management with organizational OPEX control.",
        leadMagnetName: "Download ISO 55000 Guide",
      },
      {
        id: "res-2",
        type: "guide",
        tag: "Reliability",
        title: "Operational Reliability Audit Checklist",
        description:
          "Self-assessment with 45 critical points to evaluate the current state of your preventive plans.",
        leadMagnetName: "Get Checklist",
      },
      {
        id: "res-3",
        type: "study",
        tag: "Asset Management",
        title: "Asset Management Maturity Study in Latin America",
        description:
          "Aggregated data and reliability benchmarking in mining and energy industries across the region.",
        leadMagnetName: "Download Study",
      },
      {
        id: "res-5",
        type: "whitepaper",
        tag: "Reliability",
        title: "Applied RCM: From paper to real availability",
        description:
          "Lessons learned at concentrator plants on reliability-centered maintenance.",
        leadMagnetName: "Download RCM Whitepaper",
      },
    ],
  },
  ctaBanner: {
    aria: "Call to action",
    eyebrow: "Next step",
    title: "Need to improve your asset performance?",
    subtitle:
      "In 30 minutes we show you how other operations in your industry have achieved measurable results. No commitment. Full clarity.",
    primary: "Schedule Meeting Now",
    primaryAria: "Schedule a free meeting with a specialist",
    secondary: "Request Free Assessment",
    secondaryAria: "Request a free diagnostic assessment",
    footnote: "No cost. No commitment. Response within 24 hours.",
  },
  contact: {
    aria: "Contact form and meeting request",
    formAria: "Contact form to schedule a commercial meeting",
    eyebrow: "Contact",
    title: "Let's talk about your next operational challenge",
    subtitle: "Turn your assets and data into competitive advantages.",
    body: "Whether you need to optimize your maintenance plan, implement SAP, or automate your analytics, our team of specialist engineers is ready to review your case and design a tailored solution.",
    responseTitle: "Guaranteed response",
    responseTime: "A specialist will contact you within 24 business hours.",
    confidentialityTitle: "Absolute confidentiality",
    confidentiality: "Your information and the details of your operation are protected.",
    officesTitle: "Offices",
    offices: [
      {
        city: "Santiago, Chile",
        address: "Antonio Varas 303, Of. 410, Providencia.",
        phone: "+56 2 2235 3090",
      },
      {
        city: "Calama, Chile",
        address: "Bartolomé Vivar 1580, Of. 501, Torre B.",
        phone: "+56 2 2725 0546",
      },
      {
        city: "Lima, Peru",
        address: "Av. José Pardo 601, Of. 1002, Miraflores.",
        phone: "+51 904 854 456",
      },
    ],
    successTitle: "Message ready to send",
    successMessage:
      "Your email app opened with the form details. Send that message so it reaches soporte@monitoring.cl.",
    sendAnother: "Send another request",
    requirementLabel: "Requirement type",
    requirementRequired: "Please select a requirement type",
    nameLabel: "Full name",
    nameRequired: "Name is required",
    namePlaceholder: "e.g. John Smith",
    companyLabel: "Company",
    companyRequired: "Company is required",
    companyPlaceholder: "Company name",
    roleLabel: "Role",
    rolePlaceholder: "e.g. Maintenance Manager",
    industryLabel: "Industry",
    phoneLabel: "Phone",
    phoneRequired: "Phone is required",
    phonePlaceholder: "e.g. +56 9 1234 5678",
    emailLabel: "Corporate email",
    emailRequired: "Email is required",
    emailInvalid: "Invalid email format",
    emailNotHuman: "Use a person's email address. Automated and temporary addresses are not accepted.",
    emailPlaceholder: "e.g. john@company.com",
    messageLabel: "Message / Requirement",
    messagePlaceholder: "Briefly describe your operational challenge or the material you need...",
    submit: "Submit request",
    submitAria: "Submit contact form",
    processing: "Processing...",
    submitError: "Could not submit the request.",
    requirementTypes: [
      { value: "reunion", label: "Schedule commercial meeting" },
      { value: "diagnostico", label: "Request assessment" },
      { value: "propuesta", label: "Request proposal" },
      { value: "descarga", label: "Download material / brochure" },
      { value: "otro", label: "Other requirement" },
    ],
    industries: [
      "Mining",
      "Ports",
      "Pulp & Paper / Forestry",
      "Energy / Power",
      "Industrial",
      "Other",
    ],
  },
  language: {
    switchTo: "Español",
    current: "EN",
    aria: "Switch language to Spanish",
  },
  mmi: {
    aria: "MMi by Monitoring, technological ally for maintenance knowledge",
    brand: "MMi by Monitoring",
    home: {
      aria: "MMi by Monitoring, technology developed from our experience",
      eyebrow: "Technology developed from our experience",
      title: "MMi by Monitoring",
      subtitle:
        "Our technological ally for structuring maintenance knowledge and delivering context with evidence.",
      quote:
        "Technology does not replace experience. It lets experience work with better information.",
      cta: "Discover MMi",
      ctaAria: "Discover MMi by Monitoring",
    },
    hero: {
      eyebrow: "Intelligence for maintenance and reliability",
      title: "From data to diagnosis.",
      titleHighlight: "With evidence.",
      subtitle:
        "MMi connects the technical information of each contract to find findings, explain hypotheses, and guide verification.",
      formula: "Information kept separate by contract · Results with sources and traceability",
      ctaPrimary: "See how it works",
      ctaPrimaryAria: "See how MMi works",
      ctaSecondary: "Request a demo",
      ctaSecondaryAria: "Request an MMi demonstration",
    },
    flow: {
      aria: "Plans, work orders, and FMECA pass through MMi and come out as a verifiable finding",
      sources: ["Plans", "Work orders", "FMECA"],
      result: "Verifiable finding",
      resultDetail: "Evidence and verification",
      caption: "Plans + work orders + FMECA → MMi → Verifiable finding",
    },
    example: {
      eyebrow: "What an analysis looks like",
      title: "A technical question, a finding, and what still needs confirmation",
      subtitle:
        "Demonstration example with fictional data. It shows the analysis format, not a client case.",
      badge: "Demonstration example · fictional data",
      kind: "Recurring failures",
      question: "What evidence exists about recurring failures of the CTS-DCH pump?",
      confidenceLabel: "Confidence",
      confidence: "Medium",
      confidenceNote:
        "The recurrence is in the work orders. The cause has no measurement that confirms it.",
      executionLabel: "Run",
      execution: "DEMO-2026-014",
      openDemo: "Open demonstration",
      panels: [
        {
          title: "Finding",
          text: "The asset history shows three low-flow events in 11 months, with the same operating description. The work orders do not close a root cause.",
        },
        {
          title: "Evidence",
          text: "WO-1842. March 2025. Low flow and rising bearing temperature. The filter was cleaned. Partial result.",
        },
        {
          title: "Hypothesis",
          text: "A suction flow restriction is a possible explanation and is not yet confirmed. Replacing the seal is not enough to sustain that cause.",
        },
        {
          title: "Verification",
          text: "Measure differential pressure in stable operation and inspect the suction, filter, and suction valve before closing a cause.",
        },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "From a technical question to a verifiable analysis",
      subtitle:
        "Five steps, in order. MMi organizes the available evidence. The specialist keeps the decision.",
      items: [
        {
          title: "Select the context",
          text: "Contract, work order structure, assets, and the document corpus authorized for that scope.",
        },
        {
          title: "Ask the question",
          text: "A concrete technical question, the kind a reliability engineer would ask.",
        },
        {
          title: "Retrieve the evidence",
          text: "Plans, work orders, manuals, history, and related FMECA or RCM records.",
        },
        {
          title: "Analyze relationships",
          text: "Recurrences, discrepancies, and coverage across those sources, with separate criteria.",
        },
        {
          title: "Deliver the analysis",
          text: "Findings, sources, hypotheses, confidence, gaps, and checks for the team to review.",
        },
      ],
    },
    principles: [
      "Same contract, same scope, and an authorized corpus",
      "It does not invent missing evidence",
      "The specialist keeps the decision",
    ],
    problem: {
      eyebrow: "Core idea",
      title: "An allied technological capability",
      lead: "MMi strengthens maintenance, reliability, asset management, and engineering services. It organizes technical information, connects background, finds evidence, and accelerates analysis.",
      notReplaceLabel: "It does not replace",
      notReplace: [
        "Field experience",
        "Maintenance engineering",
        "RCM / FMECA / RCA methodologies",
        "SAP PM / EAM / CMMS",
        "Expert analysis",
        "Specialized consulting",
      ],
      worksWith:
        "Organize technical information, connect background, find evidence, and accelerate analysis.",
      notThisLabel: "The proposition is not",
      notThis: "Monitoring has a new application.",
      thisIsLabel: "The proposition is",
      thisIs:
        "Monitoring combines technical experience, methodologies, and proprietary technology to make better decisions with evidence.",
    },
    ally: {
      eyebrow: "Strategic ally",
      title: "A layer that strengthens what we already do",
      subtitle:
        "MMi sits alongside experience, engineering, methodologies, and field knowledge. It does not replace the specialist: it gives them better context.",
      layers: [
        "Monitoring experience",
        "Engineering",
        "Methodologies",
        "Field knowledge",
      ],
      boxTitle: "MMi by Monitoring",
      boxSubtitle: "Intelligence + Evidence",
      outcome: "Better context for maintenance decisions",
      specialistNote: "MMi does not replace the specialist. It delivers better context.",
    },
    sources: {
      eyebrow: "What information it uses",
      title: "It works on real technical information",
      subtitle:
        "MMi organizes and relates this information while preserving provenance and documentary evidence.",
      items: [
        "Work orders",
        "Service orders",
        "Manuals",
        "Procedures",
        "Maintenance plans",
        "FMECA",
        "Technical reports",
        "History records",
        "Inspections",
        "Operational spreadsheets",
        "Equipment documentation",
        "Failure records",
        "Maintenance background",
      ],
    },
    capabilities: {
      eyebrow: "How it organizes knowledge",
      title: "Intelligence that works alongside our specialists",
      subtitle:
        "Technical experience remains at the center. MMi turns scattered information into organized, relatable, and traceable knowledge.",
      items: [
        {
          title: "Organize",
          description: "Integrates information from different sources and formats.",
        },
        {
          title: "Relate",
          description: "Connects assets, documents, work orders, failures, plans, and background.",
        },
        {
          title: "Analyze",
          description: "Makes it possible to review large volumes of information in a structured way.",
        },
        {
          title: "Verify",
          description: "Keeps traceability to documents, versions, and sources.",
        },
      ],
    },
    differentials: {
      eyebrow: "What sets it apart",
      title: "Not just document search",
      subtitle: "MMi is not limited to finding files. It can discover, compare, organize, relate, and verify.",
      items: [
        {
          title: "Discover",
          description: "Identify what information exists inside a folder or document set.",
        },
        {
          title: "Compare",
          description:
            "Determine whether information is new, duplicated, a new version, or potentially conflicting.",
        },
        {
          title: "Organize",
          description: "Group by system, equipment, document type, period, and technical context.",
        },
        {
          title: "Relate",
          description: "Connect asset, components, failures, work orders, FMECA, plans, and documents.",
        },
        {
          title: "Verify",
          description: "Keep evidence pointing back to the source used.",
        },
      ],
    },
    specialists: {
      eyebrow: "Digital specialists",
      title: "Support to organize and interpret information",
      subtitle:
        "These specialized capabilities act as support. They do not replace Monitoring professionals.",
      coordinator: "MMi Coordinator",
      roles: ["Maintenance", "Reliability", "FMECA-RCM"],
      verifier: "Evidence verifier",
      functionTitle: "Their role is to",
      functions: [
        "Organize information",
        "Detect relationships",
        "Identify background",
        "Prepare summaries",
        "Locate evidence",
        "Reduce review time",
      ],
      note: "They do not replace Monitoring professionals.",
    },
    services: {
      eyebrow: "MMi + Monitoring services",
      title: "A direct relationship with what we already deliver",
      subtitle:
        "MMi complements asset management, engineering, reliability, FMECA/RCM, diagnosis, and digital transformation.",
      contributesLabel: "It contributes",
      items: [
        {
          title: "Asset Management + MMi",
          description:
            "Consolidates asset information, technical documentation, and historical background.",
          contributes: [
            "Technical context",
            "Traceability",
            "Related documentation",
            "Identification of current information",
          ],
        },
        {
          title: "Maintenance Engineering + MMi",
          description:
            "Organizes and reviews plans, procedures, history, work orders, and technical documentation.",
          contributes: [
            "Relationships between tasks and assets",
            "Document review",
            "Evidence search",
            "Background comparison",
          ],
        },
        {
          title: "Reliability + MMi",
          description: "Relates failures, work orders, reports, FMECA, plans, and procedures.",
          contributes: [
            "Pattern identification",
            "Background search",
            "Relationships between events",
            "Evidence for analysis",
          ],
        },
        {
          title: "FMECA / RCM + MMi",
          description:
            "Organizes documentation associated with failure modes, effects, tasks, equipment, and history.",
          contributes: [
            "Context",
            "Related information",
            "Documentary evidence",
            "Analysis traceability",
          ],
        },
        {
          title: "Maintenance diagnosis + MMi",
          description: "Brings together scattered background before a diagnosis begins.",
          contributes: [
            "Document summary",
            "Assets involved",
            "Available history",
            "Related documents",
            "Missing information",
          ],
        },
      ],
      digitalTitle: "Digital Transformation + MMi",
      digitalLead:
        "MMi is a concrete application of digital transformation to maintenance processes. It does not digitize for the sake of digitizing.",
      digitalChain: ["Files", "Information", "Context", "Knowledge", "Decision"],
    },
    evidence: {
      eyebrow: "How it reaches evidence",
      title: "Human experience + operational intelligence",
      subtitle:
        "Monitoring specialists, methodologies, field experience, and MMi combine to decide on a stronger basis.",
      chain: [
        "More context",
        "Greater traceability",
        "Less time searching for information",
        "A better basis for decisions",
      ],
      closing:
        "MMi does not replace what Monitoring does. It amplifies what Monitoring already knows how to do.",
    },
    demo: {
      eyebrow: "Illustrative case",
      title: "From scattered folders to a diagnosis with evidence",
      subtitle:
        "An illustration of how MMi prepares the ground for a specialist, without replacing their technical judgment.",
      context:
        "Before a maintenance diagnosis, information is often spread across work orders, spreadsheets, reports, FMECA, and equipment folders, with no explicit relationship between them.",
      steps: [
        {
          title: "Discover",
          text: "Identifies which background exists and what sits outside the documentary scope.",
        },
        {
          title: "Organize",
          text: "Groups by system, asset, document type, and period, preserving versions.",
        },
        {
          title: "Relate",
          text: "Connects asset, components, failures, work orders, FMECA, plans, and supporting documents.",
        },
        {
          title: "Verify",
          text: "Leaves traceability to the original source so the specialist can validate each finding.",
        },
      ],
      result:
        "The specialist starts the analysis with context, relationships, and evidence — not with a manual file hunt.",
    },
    cta: {
      title: "See how MMi works alongside our specialists",
      subtitle:
        "MMi by Monitoring complements our maintenance, reliability, and engineering services by organizing documentation, history, and operational records.",
      primary: "Request a demo",
      primaryAria: "Request an MMi demonstration",
      secondary: "Talk with a specialist",
      secondaryAria: "Talk with a Monitoring specialist",
      principle:
        "MMi does not replace what Monitoring does. It amplifies what Monitoring already knows how to do.",
    },
  },
};
