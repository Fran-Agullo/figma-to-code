export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: {
    step: string;
    description: string;
  }[];
  caseStudies: string[];
}

export const services: Service[] = [
  {
    id: 'growth-marketing',
    title: 'Growth Marketing',
    description: 'Estrategias data-driven para escalar tu negocio de forma sostenible. Combinamos experimentación rápida, análisis profundo y optimización continua para impulsar tu crecimiento.',
    icon: 'TrendingUp',
    features: [
      'Growth Hacking & Experimentación',
      'Optimización de Funnel de Conversión',
      'Estrategias de Adquisición Multi-Canal',
      'Retención y Lifecycle Marketing',
      'A/B Testing y Optimización CRO',
      'Marketing Automation'
    ],
    benefits: [
      'Crecimiento medible y escalable',
      'Reducción de CAC (Costo de Adquisición)',
      'Aumento de LTV (Lifetime Value)',
      'ROI optimizado en campañas',
      'Decisiones basadas en datos reales',
      'Metodología ágil y experimental'
    ],
    process: [
      {
        step: 'Auditoría & Análisis',
        description: 'Evaluamos tu situación actual, identificamos oportunidades de crecimiento y establecemos métricas clave.'
      },
      {
        step: 'Estrategia de Growth',
        description: 'Diseñamos un roadmap de experimentos y tácticas priorizadas según potencial de impacto.'
      },
      {
        step: 'Implementación & Testing',
        description: 'Ejecutamos experimentos rápidos, medimos resultados y optimizamos continuamente.'
      },
      {
        step: 'Escalado',
        description: 'Escalamos las tácticas que funcionan y duplicamos el crecimiento de forma sostenible.'
      }
    ],
    caseStudies: ['fintechflow', 'edulearn', 'travelnow']
  },
  {
    id: 'seo-content',
    title: 'SEO & Content',
    description: 'Posicionamiento orgánico que genera tráfico cualificado y conversiones. Creamos estrategias de contenido que atraen, educan y convierten a tu audiencia ideal.',
    icon: 'Search',
    features: [
      'Auditoría SEO Técnico',
      'Investigación de Keywords',
      'Estrategia de Contenido',
      'Link Building Estratégico',
      'SEO Local y E-commerce',
      'Content Marketing & Blog'
    ],
    benefits: [
      'Tráfico orgánico cualificado',
      'Visibilidad en búsquedas clave',
      'Autoridad de marca',
      'ROI a largo plazo',
      'Reducción de costos de adquisición',
      'Contenido que educa y convierte'
    ],
    process: [
      {
        step: 'Análisis & Keywords',
        description: 'Investigamos oportunidades de posicionamiento y definimos estrategia de contenido.'
      },
      {
        step: 'Optimización Técnica',
        description: 'Mejoramos arquitectura del sitio, velocidad, estructura y aspectos técnicos críticos.'
      },
      {
        step: 'Creación de Contenido',
        description: 'Producimos contenido optimizado que responde a las búsquedas de tu audiencia.'
      },
      {
        step: 'Link Building & Autoridad',
        description: 'Construimos autoridad mediante enlaces de calidad y menciones estratégicas.'
      }
    ],
    caseStudies: ['depasify', 'healthtech-pro']
  },
  {
    id: 'web-design-ux',
    title: 'Diseño Web & UX',
    description: 'Diseños que combinan estética y funcionalidad. Creamos experiencias digitales que cautivan usuarios y generan conversiones.',
    icon: 'Palette',
    features: [
      'Diseño UI/UX Profesional',
      'Prototipado Interactivo',
      'Design System & Branding',
      'Responsive & Mobile-First',
      'Optimización de Conversión',
      'Testing de Usabilidad'
    ],
    benefits: [
      'Experiencia de usuario excepcional',
      'Mayor tasa de conversión',
      'Diseño consistente y escalable',
      'Marca profesional y memorable',
      'Accesibilidad garantizada',
      'Adaptado a todos los dispositivos'
    ],
    process: [
      {
        step: 'Research & Discovery',
        description: 'Investigamos a tu audiencia, competencia y objetivos de negocio.'
      },
      {
        step: 'Wireframes & Prototipo',
        description: 'Diseñamos la estructura y flujos de usuario antes del diseño visual.'
      },
      {
        step: 'Diseño Visual',
        description: 'Creamos interfaces atractivas alineadas con tu identidad de marca.'
      },
      {
        step: 'Testing & Refinamiento',
        description: 'Validamos el diseño con usuarios reales y optimizamos la experiencia.'
      }
    ],
    caseStudies: ['depasify', 'retailhub']
  },
  {
    id: 'product-development',
    title: 'Desarrollo de Producto Digital',
    description: 'Transformamos ideas en productos digitales escalables. Desarrollo full-stack con tecnologías modernas y metodologías ágiles.',
    icon: 'Code',
    features: [
      'Desarrollo Web Full-Stack',
      'Apps Móviles (iOS & Android)',
      'SaaS & Plataformas Digitales',
      'Integraciones & APIs',
      'MVP & Prototipos Rápidos',
      'Mantenimiento & Soporte'
    ],
    benefits: [
      'Código limpio y escalable',
      'Tecnologías modernas',
      'Time-to-market acelerado',
      'Arquitectura robusta',
      'Seguridad enterprise-grade',
      'Documentación completa'
    ],
    process: [
      {
        step: 'Planificación & Arquitectura',
        description: 'Definimos alcance, tecnologías y arquitectura del producto.'
      },
      {
        step: 'Desarrollo Iterativo',
        description: 'Construimos el producto en sprints con entregas continuas.'
      },
      {
        step: 'Testing & QA',
        description: 'Aseguramos calidad mediante testing exhaustivo y automatizado.'
      },
      {
        step: 'Deploy & Mantenimiento',
        description: 'Lanzamos el producto y proporcionamos soporte continuo.'
      }
    ],
    caseStudies: ['depasify', 'fintechflow', 'healthtech-pro']
  },
  {
    id: 'digital-strategy',
    title: 'Estrategia Digital',
    description: 'Consultoría estratégica para transformar tu negocio digitalmente. Te ayudamos a definir objetivos, identificar oportunidades y crear roadmaps accionables.',
    icon: 'Target',
    features: [
      'Auditoría Digital Completa',
      'Análisis de Mercado & Competencia',
      'Definición de OKRs & KPIs',
      'Roadmap de Transformación Digital',
      'Optimización de Procesos',
      'Consultoría Continua'
    ],
    benefits: [
      'Visión estratégica clara',
      'Decisiones informadas por datos',
      'Ventaja competitiva',
      'Optimización de recursos',
      'Innovación estructurada',
      'Crecimiento planificado'
    ],
    process: [
      {
        step: 'Diagnóstico',
        description: 'Evaluamos tu situación actual y identificamos gaps y oportunidades.'
      },
      {
        step: 'Estrategia',
        description: 'Diseñamos un plan estratégico alineado con tus objetivos de negocio.'
      },
      {
        step: 'Roadmap',
        description: 'Creamos un roadmap priorizado con iniciativas y métricas claras.'
      },
      {
        step: 'Acompañamiento',
        description: 'Te acompañamos en la ejecución y ajustamos la estrategia según resultados.'
      }
    ],
    caseStudies: ['retailhub', 'edulearn']
  },
  {
    id: 'analytics-data',
    title: 'Analytics & Data',
    description: 'Convertimos datos en insights accionables. Implementamos sistemas de medición, análisis y visualización que impulsan decisiones inteligentes.',
    icon: 'BarChart3',
    features: [
      'Implementación de Analytics',
      'Dashboards Personalizados',
      'Data Tracking & Eventos',
      'Análisis de Comportamiento',
      'Reportes Automatizados',
      'Insights & Recomendaciones'
    ],
    benefits: [
      'Visibilidad completa del negocio',
      'Decisiones basadas en datos',
      'Identificación de oportunidades',
      'Optimización continua',
      'ROI medible',
      'Predicción de tendencias'
    ],
    process: [
      {
        step: 'Setup & Tracking',
        description: 'Implementamos herramientas de analytics y configuramos eventos clave.'
      },
      {
        step: 'Dashboards',
        description: 'Creamos dashboards visuales que muestran métricas importantes.'
      },
      {
        step: 'Análisis',
        description: 'Analizamos datos para identificar patrones, problemas y oportunidades.'
      },
      {
        step: 'Recomendaciones',
        description: 'Entregamos insights accionables para mejorar resultados.'
      }
    ],
    caseStudies: ['fintechflow', 'retailhub']
  }
];

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}
