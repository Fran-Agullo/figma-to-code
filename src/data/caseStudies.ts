export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    growth: string;
    roi: string;
    timeline: string;
    teamSize: string;
  };
  tags: string[];
  image: string;
  images?: {
    hero: string;
    before?: string;
    after?: string;
    process?: string;
  };
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'niba-energia',
    title: 'Niba Energía',
    subtitle: 'Transformación digital en el sector energético',
    client: 'Niba Energía',
    industry: 'Energía / Sostenibilidad',
    description: 'Niba Energía es una compañía innovadora que ofrece soluciones energéticas sostenibles para hogares y empresas. Trabajamos en su transformación digital completa, desde el rediseño de su presencia online hasta la optimización de su embudo de conversión.',
    challenge: 'Niba Energía tenía una presencia digital obsoleta que no comunicaba adecuadamente su propuesta de valor diferencial en energías renovables. La tasa de conversión web era solo del 0.8% y el 73% de los usuarios abandonaban el proceso de solicitud de presupuesto. Además, competían con grandes empresas energéticas tradicionales con presupuestos significativamente mayores.',
    solution: 'Rediseñamos completamente su experiencia digital con un enfoque en claridad y usabilidad. Creamos un sitio web moderno que explica de forma visual y sencilla los beneficios de cambiar a energía renovable. Implementamos una calculadora interactiva de ahorro energético, optimizamos el formulario de solicitud de presupuesto reduciéndolo de 15 a 4 campos esenciales, y desarrollamos una estrategia de contenido SEO centrada en búsquedas locales y educación energética.',
    results: [
      'Aumento del 380% en solicitudes de presupuesto cualificadas',
      'Tasa de conversión mejorada del 0.8% al 3.4%',
      'Reducción del 65% en la tasa de abandono del formulario',
      'ROI de 9.2x en inversión de marketing digital',
      'Incremento del 420% en tráfico orgánico en 8 meses',
      'Posicionamiento en primera página para +85 términos de búsqueda relacionados con energía renovable'
    ],
    metrics: {
      growth: '+380%',
      roi: '9.2x',
      timeline: '8 meses',
      teamSize: '6 personas'
    },
    tags: ['Diseño Web', 'SEO', 'UX/UI'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzb2xhciUyMGVuZXJneXxlbnwwfHx8fDE3NjM5MDM1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: {
      hero: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzb2xhciUyMGVuZXJneXxlbnwwfHx8fDE3NjM5MDM1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    testimonial: {
      text: 'BirdieAgency transformó completamente nuestra presencia digital. El nuevo sitio web no solo es visualmente impresionante, sino que ha multiplicado nuestras conversiones. Su comprensión del sector energético fue clave.',
      author: 'Carmen Ruiz',
      position: 'Directora de Marketing, Niba Energía'
    }
  },
  {
    id: 'serpiel',
    title: 'Serpiel',
    subtitle: 'E-commerce de electrónica de alta conversión',
    client: 'Serpiel',
    industry: 'E-commerce / Tecnología',
    description: 'Serpiel es un e-commerce especializado en productos de tecnología y electrónica. Optimizamos su plataforma para aumentar conversiones durante campañas estratégicas como Black Friday y mejorar la experiencia de compra omnicanal.',
    challenge: 'Serpiel experimentaba altas tasas de abandono de carrito (78%) y dificultades para gestionar picos de tráfico durante eventos como Black Friday. Su plataforma era lenta, el proceso de checkout tenía 6 pasos, y carecían de estrategias de remarketing efectivas. Además, competían con gigantes como Amazon en un mercado altamente competitivo.',
    solution: 'Realizamos una optimización técnica completa de la plataforma, mejorando velocidad de carga en un 65%. Rediseñamos el flujo de compra implementando un checkout en un solo paso, integramos múltiples métodos de pago incluyendo wallets digitales, y creamos una estrategia de remarketing dinámica con carritos abandonados. Desarrollamos campañas específicas para Black Friday con landing pages optimizadas y sistema de urgencia en tiempo real.',
    results: [
      'Reducción del 52% en abandono de carrito',
      'Aumento del 290% en ventas durante Black Friday 2024',
      'Conversión general mejorada del 1.2% al 3.8%',
      'Ticket promedio aumentó un 34% gracias a upselling inteligente',
      'ROI de 12.8x en campañas de remarketing',
      'Velocidad de carga mejorada de 4.2s a 1.3s'
    ],
    metrics: {
      growth: '+290%',
      roi: '12.8x',
      timeline: '5 meses',
      teamSize: '8 personas'
    },
    tags: ['E-commerce', 'Conversión', 'Performance'],
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc2MzkwMzU4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: {
      hero: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc2MzkwMzU4NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    testimonial: {
      text: 'Los resultados de nuestra campaña de Black Friday superaron todas las expectativas. BirdieAgency no solo optimizó nuestra plataforma, sino que nos enseñó a pensar estratégicamente sobre cada punto del funnel de conversión.',
      author: 'Jorge Mendoza',
      position: 'CEO, Serpiel'
    }
  },
  {
    id: 'cupra-seat',
    title: 'Cupra / Seat',
    subtitle: 'Transformación digital en automoción',
    client: 'Cupra / Seat',
    industry: 'Automoción / Retail',
    description: 'Cupra / Seat es parte del grupo automovilístico líder en España. Trabajamos en su estrategia de marketing digital para aumentar test drives y conversiones en concesionarios oficiales.',
    challenge: 'Cupra / Seat necesitaba modernizar su presencia digital para conectar con audiencias más jóvenes y aumentar las visitas cualificadas a concesionarios. El proceso de solicitud de test drive era complicado y la tasa de conversión era baja.',
    solution: 'Rediseñamos la experiencia digital completa con enfoque en mobile-first. Simplificamos el formulario de solicitud de test drive a solo 3 campos, implementamos geolocalización para mostrar concesionarios cercanos, y creamos campañas segmentadas en redes sociales dirigidas a diferentes perfiles de compradores. Desarrollamos contenido visual atractivo mostrando los modelos en acción y lanzamos campañas de retargeting para usuarios que exploraron configuradores.',
    results: [
      'Aumento del 340% en solicitudes de test drive',
      'Tasa de conversión mejorada del 2.1% al 7.8%',
      'Reducción del 58% en costo por lead cualificado',
      'ROI de 8.5x en inversión de marketing digital',
      'Incremento del 290% en tráfico desde redes sociales',
      'Tiempo promedio en sitio aumentó de 1:45 a 4:20 minutos'
    ],
    metrics: {
      growth: '+340%',
      roi: '8.5x',
      timeline: '6 meses',
      teamSize: '7 personas'
    },
    tags: ['Automoción', 'Digital Marketing', 'Lead Gen'],
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjdXByYSUyMGNhcnxlbnwwfHx8fDE3NjM5MDQ4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: {
      hero: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjdXByYSUyMGNhcnxlbnwwfHx8fDE3NjM5MDQ4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    testimonial: {
      text: 'BirdieAgency logró conectar nuestra marca con una audiencia digital más joven. La estrategia de marketing digital incrementó significativamente nuestras conversiones en concesionarios.',
      author: 'Carlos Martínez',
      position: 'Director de Marketing Digital, Cupra / Seat España'
    }
  },
  {
    id: 'greenlife',
    title: 'GreenLife',
    subtitle: 'E-commerce de productos sostenibles',
    client: 'GreenLife',
    industry: 'E-commerce / Sostenibilidad',
    description: 'GreenLife es un e-commerce especializado en productos eco-friendly y sostenibles para el hogar y cuidado personal. Trabajamos en comunicar sus valores de sostenibilidad mientras escalaban ventas de forma rentable.',
    challenge: 'GreenLife tenía una audiencia apasionada pero pequeña. El desafío era escalar sin diluir su mensaje de sostenibilidad y mantener márgenes saludables en un mercado donde los productos eco-friendly suelen tener mayor costo. La competencia de Amazon y retailers tradicionales que empezaban a ofrecer productos "verdes" complicaba la diferenciación.',
    solution: 'Construimos una estrategia de contenido centrada en educación sobre sostenibilidad y impacto ambiental. Creamos una comunidad en redes sociales con contenido generado por usuarios mostrando su transición a vida sostenible. Implementamos SEO para búsquedas de productos específicos eco-friendly, desarrollamos colaboraciones con influencers de sostenibilidad auténticos, y creamos un programa de fidelización que recompensaba comportamientos sostenibles. Optimizamos el packaging y comunicamos el impacto positivo de cada compra.',
    results: [
      'Crecimiento del 450% en ventas anuales',
      'Base de clientes recurrentes aumentó 340%',
      'Tasa de retención mejorada del 32% al 67%',
      'AOV (valor promedio de pedido) aumentó 45%',
      'Comunidad en redes sociales creció a 125K seguidores orgánicos',
      'ROI de 10.3x en marketing de contenido'
    ],
    metrics: {
      growth: '+450%',
      roi: '10.3x',
      timeline: '12 meses',
      teamSize: '6 personas'
    },
    tags: ['E-commerce', 'Branding', 'Community'],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHByb2R1Y3RzfGVufDB8fHx8MTc2MzkwMzU4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: {
      hero: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHByb2R1Y3RzfGVufDB8fHx8MTc2MzkwMzU4NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    testimonial: {
      text: 'BirdieAgency nos ayudó a escalar manteniendo intactos nuestros valores de sostenibilidad. No solo crecimos en ventas, sino que construimos una comunidad leal y comprometida.',
      author: 'Lucía Vega',
      position: 'Fundadora, GreenLife'
    }
  },
  {
    id: 'fintech-pay',
    title: 'FintechPay',
    subtitle: 'Solución de pagos digitales para empresas',
    client: 'FintechPay',
    industry: 'Fintech / B2B',
    description: 'FintechPay es una plataforma SaaS que permite a empresas aceptar pagos digitales de múltiples formas. Trabajamos en su estrategia de adquisición B2B y optimización de su embudo de conversión desde demo hasta cliente pagador.',
    challenge: 'FintechPay competía con soluciones establecidas como Stripe y PayPal. Su ciclo de ventas era largo (promedio 45 días), el costo de adquisición de clientes era alto, y necesitaban demostrar ROI rápido para convencer a CFOs escépticos. La complejidad técnica de integración era una barrera significativa para la adopción.',
    solution: 'Implementamos una estrategia ABM (Account-Based Marketing) dirigida a empresas de 50-500 empleados. Creamos contenido técnico especializado (whitepapers, webinars, casos de estudio por industria) que posicionó a FintechPay como thought leader. Optimizamos el sitio para conversión de demo con pruebas sociales y calculadora de ROI interactiva. Simplificamos el proceso de integración con documentación mejorada y soporte proactivo. Lanzamos campañas de LinkedIn Ads segmentadas y eventos virtuales exclusivos.',
    results: [
      'Pipeline de ventas creció 380% en 7 meses',
      'Ciclo de ventas reducido de 45 a 23 días',
      'Tasa de conversión de demo a cliente: 42%',
      'CAC (Costo de Adquisición) reducido en 48%',
      'LTV (Lifetime Value) de clientes aumentó 67%',
      'ROI de 9.1x en inversión de marketing B2B'
    ],
    metrics: {
      growth: '+380%',
      roi: '9.1x',
      timeline: '7 meses',
      teamSize: '8 personas'
    },
    tags: ['Fintech', 'B2B', 'SaaS'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGF5bWVudHN8ZW58MHx8fHwxNzYzOTAzNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: {
      hero: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGF5bWVudHN8ZW58MHx8fHwxNzYzOTAzNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    testimonial: {
      text: 'La estrategia B2B de BirdieAgency fue exactamente lo que necesitábamos. Nos ayudaron a posicionarnos como la alternativa seria y confiable en el mercado de pagos digitales.',
      author: 'Fernando García',
      position: 'VP de Marketing, FintechPay'
    }
  },
  {
    id: 'wellness-app',
    title: 'WellnessApp',
    subtitle: 'App de salud y bienestar integral',
    client: 'WellnessApp',
    industry: 'HealthTech / Mobile',
    description: 'WellnessApp es una aplicación móvil que combina meditación, fitness y nutrición en una experiencia personalizada. Trabajamos en su estrategia de adquisición de usuarios y optimización de conversión de free a premium.',
    challenge: 'WellnessApp enfrentaba un mercado saturado con competidores fuertes como Calm y Headspace. Su tasa de retención al día 7 era solo del 18%, la conversión de free a premium era del 2.8%, y el costo de adquisición era insostenible. Necesitaban diferenciarse y crear hábitos de uso que justificaran la suscripción premium.',
    solution: 'Rediseñamos el onboarding para reducir fricción y acelerar el "aha moment". Implementamos notificaciones push personalizadas basadas en comportamiento, creamos contenido exclusivo con expertos en salud mental y fitness, y desarrollamos un sistema de challenges sociales para aumentar engagement. En marketing, lanzamos campañas de influencer marketing con micro-influencers auténticos del sector wellness, optimizamos ASO (App Store Optimization) y creamos una estrategia de contenido orgánico en redes sociales.',
    results: [
      'Base de usuarios activos creció 620% en 10 meses',
      'Retención día 7 mejorada del 18% al 54%',
      'Conversión free-to-premium aumentó al 8.2%',
      'LTV de usuarios premium aumentó 73%',
      'CAC reducido en 41% gracias a crecimiento orgánico',
      'Rating en App Store mejoró de 3.9 a 4.7 estrellas'
    ],
    metrics: {
      growth: '+620%',
      roi: '11.6x',
      timeline: '10 meses',
      teamSize: '9 personas'
    },
    tags: ['Mobile App', 'Wellness', 'Suscripción'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGFwcHxlbnwwfHx8fDE3NjM5MDM1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: {
      hero: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGFwcHxlbnwwfHx8fDE3NjM5MDM1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    testimonial: {
      text: 'BirdieAgency transformó nuestra aplicación de un producto más en el mercado a una experiencia que realmente genera hábitos. Los resultados en retención y conversión superaron nuestras metas más optimistas.',
      author: 'Sofía Ramírez',
      position: 'Product Lead, WellnessApp'
    }
  }
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.id === id);
}
