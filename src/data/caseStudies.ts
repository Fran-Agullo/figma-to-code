import nibaHero from '@/assets/niba-hero.png';
import serpielHero from '@/assets/serpiel-hero.png';
import cupraHero from '@/assets/cupra-hero.png';

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
    title: 'Niba',
    subtitle: 'Optimizamos la Saas de niba un 30% para la plataforma de comercializadores independientes',
    client: 'Niba',
    industry: 'E-commerce / Optimización / SaaS',
    description: 'Niba, como comercializadora de energía, dependía de un sistema SaaS interno para gestionar su operativa comercial, pero este generaba fricción significativa debido a un diseño de pantalla complejo y poco intuitivo. Esta ineficiencia causaba altos costos operativos, errores en la gestión de contratos y una baja adopción por parte del equipo comercial, impactando directamente en la velocidad de venta y el servicio al cliente.',
    challenge: 'Niba, como comercializadora de energía, dependía de un sistema SaaS interno para gestionar su operativa comercial, pero este generaba fricción significativa debido a un diseño de pantalla complejo y poco intuitivo. Esta ineficiencia causaba altos costos operativos, errores en la gestión de contratos y una baja adopción por parte del equipo comercial, impactando directamente en la velocidad de venta y el servicio al cliente.',
    solution: 'BirdieAgency intervino como Extensión Estratégica para transformar la confusión del sistema interno en un motor de eficiencia, aplicando la investigación UX al servicio de la optimización de procesos de negocio. Identificamos los cuellos de botella reales y los pain points más costosos dentro del flujo de trabajo del SaaS interno mediante UX Research exhaustivo, análisis de flujos (AS-IS) y testing con usuarios reales. Rediseñamos la Information Architecture y los flujos de tareas críticas, minimizando pasos y errores, y transformamos la complejidad regulatoria del sector energético en pantallas de gestión claras e intuitivas.',
    results: [
      'Aumento significativo de la eficiencia del equipo comercial',
      'Reducción de los tiempos de gestión',
      'Notable mejora en la satisfacción interna',
      'Mejora en la calidad de los datos',
      'Optimización del 30% en la plataforma SaaS',
      'SaaS interno transformado en activo de eficiencia'
    ],
    metrics: {
      growth: '+30%',
      roi: '$20,000',
      timeline: '4 meses',
      teamSize: '6 personas'
    },
    tags: ['E-commerce', 'Optimización', 'SaaS'],
    image: nibaHero,
    images: {
      hero: nibaHero
    },
    testimonial: {
      text: 'BirdieAgency transformó nuestra herramienta interna de un sistema complejo a un motor de eficiencia. La optimización del SaaS ha sido clave para mejorar nuestra operativa comercial.',
      author: 'Equipo Niba',
      position: 'Comercializadora de Energía'
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
    image: serpielHero,
    images: {
      hero: serpielHero
    },
    testimonial: {
      text: 'Los resultados de nuestra campaña de Black Friday superaron todas las expectativas. BirdieAgency no solo optimizó nuestra plataforma, sino que nos enseñó a pensar estratégicamente sobre cada punto del funnel de conversión.',
      author: 'Jorge Mendoza',
      position: 'CEO, Serpiel'
    }
  },
  {
    id: 'cupra-seat',
    title: 'Cupra',
    subtitle: 'Sistema de diseño HMI para marca de automóviles de altas prestaciones',
    client: 'Cupra',
    industry: 'Product Design / Growth Digital / Design System',
    description: 'Cupra, una marca española de automóviles de altas prestaciones, quería mejorar la experiencia digital de sus usuarios en el ámbito de la conectividad y la HMI (interfaz hombre-máquina). El reto consistía en diseñar interfaces intuitivas y coherentes sin perder la fuerte identidad de la marca.',
    challenge: 'Cupra necesitaba mejorar la experiencia digital de sus usuarios en el ámbito de la conectividad y la HMI (interfaz hombre-máquina). El reto consistía en diseñar interfaces intuitivas y coherentes sin perder la fuerte identidad de la marca, manteniendo la consistencia en todos los puntos de contacto digitales.',
    solution: 'Creamos un inventario completo de todos los elementos de UI en Sketch, identificando duplicados, incoherencias y elementos faltantes. Planificamos y ejecutamos la migración de Sketch a Figma, ayudando al equipo a adaptarse a nuevos flujos de trabajo. Definimos paletas de color, unidades de espaciado, estilos tipográficos y cuadrículas de maquetación para garantizar la coherencia. Construimos componentes de UI reutilizables y flexibles aplicando principios de diseño atómico. Implementamos flujos de trabajo con ramas (branching) y reglas claras para actualizar y revisar componentes, recogiendo feedback de forma regular.',
    results: [
      'Sistema de diseño completo y coherente',
      'Componentes reutilizables para toda la plataforma',
      'Migración exitosa de Sketch a Figma',
      'Mejora en la colaboración entre diseñadores y desarrolladores',
      'Interfaces intuitivas que mantienen la identidad de marca',
      'Reducción de tiempos de desarrollo mediante componentes estandarizados'
    ],
    metrics: {
      growth: 'Design System',
      roi: '1.200.000€',
      timeline: '3 años',
      teamSize: '7 personas'
    },
    tags: ['Product Design', 'Growth Digital', 'Design System'],
    image: cupraHero,
    images: {
      hero: cupraHero
    },
    testimonial: {
      text: 'BirdieAgency creó un sistema de diseño robusto que nos permite mantener la coherencia de marca en todos nuestros puntos de contacto digitales. La mejora en eficiencia ha sido notable.',
      author: 'Equipo Cupra',
      position: 'Cupra Design Team'
    }
  },
  {
    id: 'greenlife',
    title: 'Facilitea',
    subtitle: 'Diseño Estratégico 360° para unificar marca y producto digital',
    client: 'Facilitea',
    industry: 'Diseño Estratégico / E-commerce / Growth Digital',
    description: 'Facilitea se enfrentaba a un producto digital que generaba fricción y confusión en sus usuarios, afectando directamente las tasas de conversión y retención. La falta de un sistema de diseño centralizado causaba inconsistencia visual y técnica, traduciéndose en altos costos de desarrollo y mantenimiento, y limitando seriamente su capacidad de crecimiento digital. Necesitaban una transformación holística que unificara la experiencia de marca y el producto.',
    challenge: 'Facilitea se enfrentaba a un producto digital que generaba fricción y confusión en sus usuarios, afectando directamente las tasas de conversión y retención. La falta de un sistema de diseño centralizado causaba inconsistencia visual y técnica, traduciéndose en altos costos de desarrollo y mantenimiento, y limitando seriamente su capacidad de crecimiento digital.',
    solution: 'Como extensión estratégica de su equipo, implementamos nuestro Proceso 360° para transformar la fricción en experiencias claras y funcionales, asegurando que la marca, el diseño y la tecnología hablaran el mismo idioma. Realizamos una auditoría 360° (UX, SEO, Analytics) y User Research exhaustivo para identificar los cuellos de botella más costosos. Diseñamos una Information Architecture clara y estratégica, desarrollamos un UX/UI Design System End-to-End con componentes reutilizables, e integramos IA y herramientas no-code para garantizar un producto eficiente y escalable.',
    results: [
      'Producto digital unificado y fácil de mantener',
      'Experiencia de usuario clara y sin fricción',
      'Sistema de diseño coherente y escalable',
      'Simplificación de procesos complejos',
      'Activo digital posicionado para crecimiento sostenido',
      'Coherencia visual y técnica en toda la plataforma'
    ],
    metrics: {
      growth: '360°',
      roi: '40.000€',
      timeline: '6 meses',
      teamSize: '6 personas'
    },
    tags: ['Diseño Estratégico', 'E-commerce', 'Growth Digital'],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHByb2R1Y3RzfGVufDB8fHx8MTc2MzkwMzU4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: {
      hero: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHByb2R1Y3RzfGVufDB8fHx8MTc2MzkwMzU4NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    testimonial: {
      text: 'BirdieAgency transformó nuestro producto digital de un sistema complejo a una experiencia clara y escalable. El diseño estratégico 360° fue clave para nuestro crecimiento.',
      author: 'Equipo Facilitea',
      position: 'Facilitea'
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
