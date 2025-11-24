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
    id: 'product-design-ai',
    title: 'Diseño de producto digital (IA)',
    description: 'Transformamos plataformas obsoletas en activos digitales de alto rendimiento, asegurando que cada interfaz esté optimizada para el objetivo de negocio.',
    icon: 'Laptop',
    features: [
      'Diseño UI/UX centrado en conversión',
      'Optimización de flujos de usuario',
      'Integración de IA en interfaces',
      'Prototipado rápido e iterativo',
      'Design Systems escalables',
      'Testing y validación continua'
    ],
    benefits: [
      'Interfaces optimizadas para objetivos de negocio',
      'Mayor eficiencia operativa',
      'Experiencias digitales de alto rendimiento',
      'Reducción de fricción en flujos críticos',
      'Productos digitales escalables',
      'Integración inteligente de IA'
    ],
    process: [
      {
        step: 'Auditoría Digital',
        description: 'Evaluamos la plataforma actual e identificamos oportunidades de optimización.'
      },
      {
        step: 'Diseño Estratégico',
        description: 'Creamos interfaces centradas en los objetivos de negocio y las necesidades del usuario.'
      },
      {
        step: 'Implementación',
        description: 'Desarrollamos y optimizamos cada componente con tecnologías modernas.'
      },
      {
        step: 'Validación',
        description: 'Testeamos, medimos y refinamos continuamente para asegurar el alto rendimiento.'
      }
    ],
    caseStudies: ['niba-energia', 'facilitea', 'cupra-seat']
  },
  {
    id: 'ux-research',
    title: 'UX Research',
    description: 'Investigamos, detectamos y cuantificamos los pain points que usted no ve, transformando la fricción de sus usuarios en oportunidades de negocio medibles.',
    icon: 'Search',
    features: [
      'Investigación cualitativa y cuantitativa',
      'User testing y validación',
      'Análisis de comportamiento de usuarios',
      'Journey mapping detallado',
      'Identificación de pain points críticos',
      'Auditorías UX exhaustivas'
    ],
    benefits: [
      'Detección de fricción invisible',
      'Decisiones basadas en datos reales',
      'Oportunidades de negocio medibles',
      'Reducción de costos operativos',
      'Mayor satisfacción del usuario',
      'ROI cuantificable en optimizaciones'
    ],
    process: [
      {
        step: 'Research & Discovery',
        description: 'Investigamos a fondo el comportamiento y las necesidades de los usuarios.'
      },
      {
        step: 'Análisis de Pain Points',
        description: 'Identificamos y cuantificamos los puntos de fricción más costosos.'
      },
      {
        step: 'Journey Mapping',
        description: 'Mapeamos la experiencia completa del usuario identificando oportunidades.'
      },
      {
        step: 'Insights Accionables',
        description: 'Entregamos recomendaciones específicas con impacto medible en el negocio.'
      }
    ],
    caseStudies: ['niba-energia', 'facilitea']
  },
  {
    id: 'growth-digital',
    title: 'Growth Digital',
    description: 'Estudiamos a fondo las posibilidades digitales de nuestros clientes y lo posicionamos en el lugar que le pertenece.',
    icon: 'TrendingUp',
    features: [
      'Estrategia de crecimiento digital',
      'SEO y posicionamiento orgánico',
      'Marketing de contenido estratégico',
      'Optimización de conversión (CRO)',
      'Análisis competitivo profundo',
      'Roadmap de crecimiento medible'
    ],
    benefits: [
      'Posicionamiento estratégico del negocio',
      'Crecimiento digital sostenible',
      'Ventaja competitiva clara',
      'Tráfico cualificado y conversiones',
      'ROI medible y escalable',
      'Visibilidad en canales clave'
    ],
    process: [
      {
        step: 'Análisis de Oportunidades',
        description: 'Estudiamos a fondo las posibilidades digitales de tu negocio.'
      },
      {
        step: 'Estrategia de Posicionamiento',
        description: 'Definimos la estrategia para posicionarte donde debes estar.'
      },
      {
        step: 'Implementación',
        description: 'Ejecutamos las tácticas de crecimiento priorizadas por impacto.'
      },
      {
        step: 'Optimización Continua',
        description: 'Medimos, ajustamos y escalamos lo que funciona.'
      }
    ],
    caseStudies: ['facilitea', 'cupra-seat']
  },
  {
    id: 'ai-automation',
    title: 'IA y Automatización',
    description: 'Nuestra metodología integra la estrategia de marca, la precisión del diseño y la eficiencia de la IA para un crecimiento medible.',
    icon: 'Cpu',
    features: [
      'Integración de IA en productos digitales',
      'Automatización de procesos de negocio',
      'Chatbots y asistentes inteligentes',
      'Análisis predictivo con IA',
      'Personalización automatizada',
      'Optimización mediante machine learning'
    ],
    benefits: [
      'Eficiencia operativa maximizada',
      'Reducción de costos mediante automatización',
      'Experiencias personalizadas a escala',
      'Decisiones más inteligentes con IA',
      'Escalabilidad sin aumentar recursos',
      'Crecimiento medible y predecible'
    ],
    process: [
      {
        step: 'Identificación de Oportunidades',
        description: 'Detectamos procesos y áreas donde la IA puede generar mayor impacto.'
      },
      {
        step: 'Diseño de Solución',
        description: 'Diseñamos la integración de IA alineada con objetivos de negocio.'
      },
      {
        step: 'Implementación',
        description: 'Integramos IA y automatización en tu producto o flujos de trabajo.'
      },
      {
        step: 'Optimización',
        description: 'Monitoreamos, ajustamos y mejoramos continuamente el rendimiento.'
      }
    ],
    caseStudies: ['niba-energia', 'facilitea']
  }
];

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}
