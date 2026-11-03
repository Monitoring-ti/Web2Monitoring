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
    primary: NavItem[];
    more: NavItem[];
  };
  header: {
    homeAria: string;
    navAria: string;
    moreLabel: string;
    moreAria: string;
    requestMeeting: string;
    requestMeetingAria: string;
    openMenu: string;
    closeMenu: string;
    mobileMenuAria: string;
  };
  footer: {
    navAria: string;
    copyright: string;
    version: string;
    developedBy: string;
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
  };
  credibility: {
    aria: string;
    eyebrow: string;
    title: string;
    listAria: string;
    kpis: { value: number; suffix: string; label: string; description: string }[];
    credentialsTitle: string;
    credentialsNote: string;
    credentials: { id: string; name: string }[];
  };
  clients: {
    aria: string;
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  story: {
    challenges: {
      aria: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      items: { title: string; description: string; href: string }[];
    };
    servicesMore: string;
    servicesMoreAria: string;
    results: {
      aria: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      more: string;
      moreAria: string;
    };
    method: {
      aria: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      steps: { title: string; description: string }[];
    };
    field: {
      aria: string;
      eyebrow: string;
      title: string;
      cta: string;
      ctaAria: string;
    };
    contact: {
      aria: string;
      cta: string;
      ctaAria: string;
    };
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
      ctaHref?: string;
      callout?: { title: string; description: string };
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
      body: string;
    }[];
  };
  team: {
    aria: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    presence: string;
    peopleTitle: string;
    people: { name: string; role: string; email: string; phone: string }[];
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
    body: string;
    responseTitle: string;
    responseTime: string;
    confidentialityTitle: string;
    confidentiality: string;
    officesTitle: string;
    offices: { city: string; address: string; phone: string }[];
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
    emailNotHuman: string;
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
  mmi: {
    aria: string;
    brand: string;
    home: {
      aria: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      quote: string;
      cta: string;
      ctaAria: string;
    };
    hero: {
      eyebrow: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
      formula: string;
      ctaPrimary: string;
      ctaPrimaryAria: string;
      ctaSecondary: string;
      ctaSecondaryAria: string;
    };
    flow: {
      aria: string;
      sources: string[];
      result: string;
      resultDetail: string;
      caption: string;
    };
    example: {
      eyebrow: string;
      title: string;
      subtitle: string;
      badge: string;
      kind: string;
      question: string;
      confidenceLabel: string;
      confidence: string;
      confidenceNote: string;
      executionLabel: string;
      execution: string;
      openDemo: string;
      panels: { title: string; text: string }[];
    };
    process: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: { title: string; text: string }[];
    };
    principles: string[];
    problem: {
      eyebrow: string;
      title: string;
      lead: string;
      notReplaceLabel: string;
      notReplace: string[];
      worksWith: string;
      notThisLabel: string;
      notThis: string;
      thisIsLabel: string;
      thisIs: string;
    };
    ally: {
      eyebrow: string;
      title: string;
      subtitle: string;
      layers: string[];
      boxTitle: string;
      boxSubtitle: string;
      outcome: string;
      specialistNote: string;
    };
    sources: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: string[];
    };
    capabilities: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: { title: string; description: string }[];
    };
    differentials: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: { title: string; description: string }[];
    };
    specialists: {
      eyebrow: string;
      title: string;
      subtitle: string;
      coordinator: string;
      roles: string[];
      verifier: string;
      functionTitle: string;
      functions: string[];
      note: string;
    };
    services: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: { title: string; description: string; contributes: string[] }[];
      contributesLabel: string;
      digitalTitle: string;
      digitalLead: string;
      digitalChain: string[];
    };
    evidence: {
      eyebrow: string;
      title: string;
      subtitle: string;
      chain: string[];
      closing: string;
    };
    demo: {
      eyebrow: string;
      title: string;
      subtitle: string;
      context: string;
      steps: { title: string; text: string }[];
      result: string;
    };
    cta: {
      title: string;
      subtitle: string;
      primary: string;
      primaryAria: string;
      secondary: string;
      secondaryAria: string;
    };
  };
}
