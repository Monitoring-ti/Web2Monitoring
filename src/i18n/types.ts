export interface NavItem {
  label: string;
  href: string;
}

export interface Dictionary {
  meta: {
    tagline: string;
    taglineEn?: string;
    description: string;
    title: string;
    ogImageAlt: string;
    keywords: string[];
  };
  nav: {
    items: NavItem[];
  };
  header: {
    homeAria: string;
    navAria: string;
    demoStyles: string;
    clientAccess: string;
    requestMeeting: string;
    requestMeetingAria: string;
    openMenu: string;
    closeMenu: string;
    mobileMenuAria: string;
  };
  footer: {
    navAria: string;
    clientPortal: string;
    copyright: string;
    privacy: string;
    terms: string;
    linkedinAria: string;
  };
  floatingCta: {
    label: string;
    aria: string;
  };
  hero: {
    aria: string;
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    motto: string;
    ctaPrimary: string;
    ctaPrimaryAria: string;
    ctaSecondary: string;
    ctaSecondaryAria: string;
    metricsAria: string;
    metrics: { value: string; label: string }[];
    clientsLabel: string;
    clientPrefix: string;
    fieldLabel: string;
    fieldCaption: string;
    fieldBadge: string;
  };
  credibility: {
    aria: string;
    eyebrow: string;
    title: string;
    listAria: string;
    kpis: { value: number; suffix: string; label: string; description: string }[];
  };
  differentiators: {
    aria: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string; proof: string }[];
  };
  services: {
    aria: string;
    listAria: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
      ctaText: string;
      imageAlt: string;
    }[];
  };
  industries: {
    aria: string;
    listAria: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      name: string;
      description: string;
      imageAlt: string;
    }[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    ctaAria: string;
  };
  cases: {
    aria: string;
    listAria: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    problemLabel: string;
    diagnosisLabel: string;
    implementationLabel: string;
    requestSimilar: string;
    requestSimilarAria: string;
    share: string;
    shareAria: string;
    shareTitle: string;
    shareText: string;
    shareCopied: string;
    items: {
      id: string;
      tag: string;
      title: string;
      industry: string;
      problem: string;
      diagnosis: string;
      implementation: string;
      result: { kpi: string; kpiLabel: string; description: string };
    }[];
  };
  team: {
    aria: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    presence: string;
    galleryAlts: string[];
  };
  news: {
    aria: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    viewLibrary: string;
    typeLabels: Record<"newsletter" | "cierre" | "curso" | "avance", string>;
    items: {
      id: string;
      type: "newsletter" | "cierre" | "curso" | "avance";
      date: string;
      title: string;
      summary: string;
      imageAlt: string;
    }[];
  };
  library: {
    aria: string;
    listAria: string;
    filtersAria: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    filters: { all: string; corporate: string };
    typeLabels: Record<string, string>;
    preparing: string;
    downloadAria: string;
    resources: {
      id: string;
      type: string;
      tag: string;
      title: string;
      description: string;
      leadMagnetName: string;
      corporate?: boolean;
    }[];
  };
  ctaBanner: {
    aria: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: string;
    primaryAria: string;
    secondary: string;
    secondaryAria: string;
    footnote: string;
  };
  contact: {
    aria: string;
    formAria: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    responseTime: string;
    confidentiality: string;
    successTitle: string;
    successMessage: string;
    sendAnother: string;
    requirementLabel: string;
    requirementRequired: string;
    nameLabel: string;
    nameRequired: string;
    namePlaceholder: string;
    companyLabel: string;
    companyRequired: string;
    companyPlaceholder: string;
    roleLabel: string;
    rolePlaceholder: string;
    industryLabel: string;
    phoneLabel: string;
    phoneRequired: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailRequired: string;
    emailInvalid: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitAria: string;
    processing: string;
    submitError: string;
    requirementTypes: { value: string; label: string }[];
    industries: string[];
  };
  language: {
    switchTo: string;
    current: string;
    aria: string;
  };
}
