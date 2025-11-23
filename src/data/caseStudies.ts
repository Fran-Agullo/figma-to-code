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
    id: 'depasify',
    title: 'Depasify',
    subtitle: 'Web3 / Blockchain core banking solution',
    client: 'Depasify Technologies',
    industry: 'Fintech / Blockchain',
    description: 'Depasify es una plataforma innovadora de core banking basada en blockchain que revoluciona la forma en que las instituciones financieras gestionan sus operaciones. Nuestro desafío fue crear una experiencia de usuario intuitiva para una tecnología compleja, aumentando la adopción del producto en un mercado altamente competitivo.',
    challenge: 'El principal desafío fue posicionar una solución de core banking basada en blockchain en un mercado tradicional y conservador. Las instituciones financieras mostraban resistencia a adoptar nuevas tecnologías debido a preocupaciones sobre seguridad, compliance y la curva de aprendizaje. Además, el producto necesitaba comunicar claramente sus ventajas sobre sistemas legacy sin abrumar con tecnicismos.',
    solution: 'Desarrollamos una estrategia integral de growth digital centrada en educación y confianza. Creamos contenido técnico accesible, implementamos demos interactivas que mostraban el valor real del producto, y optimizamos el funnel de conversión con nurturing personalizado. Lanzamos campañas dirigidas a decision-makers en fintech, complementadas con webinars y casos de uso específicos para diferentes tipos de instituciones financieras.',
    results: [
      'Incremento del 340% en leads cualificados durante los primeros 6 meses',
      'Reducción del 60% en el tiempo del ciclo de ventas gracias a contenido educativo estratégico',
      'ROI de 8.2x en inversión de marketing digital',
      '25 nuevas instituciones financieras adoptaron la plataforma',
      'Tasa de conversión de demo a cliente de 42%, superando el benchmark de la industria',
      'Posicionamiento como top 3 en búsquedas orgánicas para "blockchain core banking"'
    ],
    metrics: {
      growth: '+340%',
      roi: '8.2x',
      timeline: '6 meses',
      teamSize: '8 personas'
    },
    tags: ['Blockchain', 'SaaS', 'Fintech'],
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzNzk2ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: {
      hero: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzNzk2ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    testimonial: {
      text: 'BirdieDigital transformó completamente nuestra estrategia de go-to-market. Su comprensión del sector fintech y blockchain fue clave para comunicar nuestro valor de forma clara y alcanzar nuestros objetivos de crecimiento.',
      author: 'Laura Martínez',
      position: 'CEO, Depasify Technologies'
    }
  },
  {
    id: 'fintechflow',
    title: 'FintechFlow',
    subtitle: 'Plataforma de pagos instantáneos',
    client: 'FintechFlow LATAM',
    industry: 'Fintech / Pagos',
    description: 'FintechFlow es una plataforma de pagos instantáneos que permite transacciones en tiempo real entre usuarios y comercios en toda América Latina. Trabajamos en escalar su base de usuarios y mejorar la activación de nuevos usuarios en los primeros 7 días.',
    challenge: 'FintechFlow enfrentaba dos desafíos críticos: baja tasa de activación de usuarios nuevos (solo 28% completaban su primera transacción) y alto costo de adquisición de clientes. El mercado de pagos digitales en LATAM es extremadamente competitivo, con grandes jugadores establecidos, lo que dificultaba la diferenciación y el crecimiento orgánico.',
    solution: 'Rediseñamos completamente el onboarding de usuarios con un enfoque en reducir la fricción y aumentar el "aha moment" temprano. Implementamos gamificación, incentivos progresivos y un sistema de referidos viral. En marketing, creamos campañas hiperlocalizadas por país, optimizamos el SEO para búsquedas transaccionales, y desarrollamos alianzas estratégicas con e-commerce y marketplaces para integración nativa.',
    results: [
      'Aumento del 580% en usuarios activos mensuales en 8 meses',
      'Tasa de activación mejorada del 28% al 71% en los primeros 7 días',
      'Reducción del 45% en el CAC (Costo de Adquisición de Cliente)',
      'ROI de 12.5x en campañas de performance marketing',
      'Programa de referidos generó el 38% de nuevos usuarios con costo cero',
      'Expansión exitosa a 5 nuevos países en LATAM'
    ],
    metrics: {
      growth: '+580%',
      roi: '12.5x',
      timeline: '8 meses',
      teamSize: '10 personas'
    },
    tags: ['Fintech', 'Product', 'Growth'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzgyNTcxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: {
      hero: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzgyNTcxMnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    testimonial: {
      text: 'El equipo de Birdie no solo nos ayudó a crecer, sino que nos enseñó a pensar como una empresa data-driven. Sus estrategias de growth hacking fueron fundamentales para nuestro éxito en LATAM.',
      author: 'Carlos Rodríguez',
      position: 'Head of Growth, FintechFlow'
    }
  },
  {
    id: 'healthtech-pro',
    title: 'HealthTech Pro',
    subtitle: 'Telemedicina de nueva generación',
    client: 'HealthTech Pro Inc.',
    industry: 'HealthTech / Telemedicina',
    description: 'HealthTech Pro es una plataforma de telemedicina que conecta pacientes con profesionales de la salud mediante videoconsultas, recetas digitales y seguimiento continuo. Nuestro objetivo fue aumentar la confianza en el servicio y escalar las consultas realizadas.',
    challenge: 'La adopción de telemedicina requiere superar barreras de confianza significativas. Los usuarios potenciales dudaban sobre la calidad de atención virtual comparada con consultas presenciales. Además, la competencia de plataformas establecidas y la necesidad de cumplir con regulaciones estrictas de salud complicaban el posicionamiento y la comunicación del servicio.',
    solution: 'Construimos una estrategia de contenido centrada en educación médica y testimonios reales de pacientes. Optimizamos el SEO para búsquedas médicas específicas, creamos contenido en video con profesionales de la salud explicando beneficios de la telemedicina, y desarrollamos un programa de embajadores con médicos influyentes. Implementamos un sistema de agendamiento intuitivo con recordatorios automáticos y seguimiento post-consulta.',
    results: [
      'Crecimiento del 425% en consultas completadas mensualmente',
      'Tasa de satisfacción del paciente: 4.8/5 estrellas',
      'Red de profesionales de la salud expandida en 280%',
      'ROI de 9.8x en inversión de marketing digital',
      'Reducción del 52% en la tasa de cancelación de citas mediante sistema de recordatorios',
      'Posicionamiento orgánico en primera página para más de 150 términos médicos'
    ],
    metrics: {
      growth: '+425%',
      roi: '9.8x',
      timeline: '7 meses',
      teamSize: '6 personas'
    },
    tags: ['HealthTech', 'Mobile', 'SaaS'],
    image: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM3MTgxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: {
      hero: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM3MTgxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    testimonial: {
      text: 'Birdie entendió perfectamente los desafíos únicos del sector salud. Su enfoque en generar confianza y educar al mercado fue exactamente lo que necesitábamos para escalar.',
      author: 'Dra. Ana Sánchez',
      position: 'Directora Médica, HealthTech Pro'
    }
  },
  {
    id: 'retailhub',
    title: 'RetailHub',
    subtitle: 'E-commerce omnicanal sin fricción',
    client: 'RetailHub Corp',
    industry: 'E-commerce / Retail',
    description: 'RetailHub es una plataforma omnicanal que unifica la experiencia de compra online y offline para retailers. Trabajamos en aumentar la adopción entre retailers tradicionales y optimizar la conversión en el canal digital.',
    challenge: 'Los retailers tradicionales mostraban resistencia a digitalizar sus operaciones por miedo a la complejidad técnica y el costo de implementación. El producto necesitaba demostrar ROI rápido y facilidad de uso. Adicionalmente, competir contra soluciones establecidas como Shopify requería una diferenciación clara.',
    solution: 'Desarrollamos una estrategia ABM (Account-Based Marketing) dirigida a retailers medianos y grandes. Creamos casos de estudio específicos por vertical (moda, electrónica, hogar) mostrando ROI en 90 días. Implementamos demos personalizadas, trials gratuitos con onboarding asistido, y un programa de partners para facilitar la implementación técnica. Optimizamos las campañas de PPC y creamos contenido sobre transformación digital en retail.',
    results: [
      'Aumento del 290% en retailers activos en la plataforma',
      'Conversión de trial a cliente pagado: 58%',
      'ROI promedio de clientes en primeros 90 días: 4.2x',
      'Ingresos recurrentes (MRR) crecieron 310%',
      'Tasa de retención mejorada del 67% al 89%',
      'Expansión a 12 nuevas verticales de retail'
    ],
    metrics: {
      growth: '+290%',
      roi: '6.7x',
      timeline: '9 meses',
      teamSize: '7 personas'
    },
    tags: ['E-commerce', 'Retail', 'B2B'],
    image: 'https://images.unsplash.com/photo-1643139863038-7355941e9e89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzYzODQwODg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: {
      hero: 'https://images.unsplash.com/photo-1643139863038-7355941e9e89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzYzODQwODg4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    testimonial: {
      text: 'La estrategia de Birdie nos permitió posicionarnos como la solución preferida para retailers que quieren digitalizarse sin complicaciones. Los resultados superaron nuestras expectativas.',
      author: 'Miguel Torres',
      position: 'VP de Marketing, RetailHub'
    }
  },
  {
    id: 'edulearn',
    title: 'EduLearn',
    subtitle: 'Plataforma de aprendizaje adaptativo',
    client: 'EduLearn Technologies',
    industry: 'EdTech / IA',
    description: 'EduLearn es una plataforma educativa que utiliza inteligencia artificial para personalizar el aprendizaje según las necesidades de cada alumno. Nuestro desafío fue escalar la base de usuarios en el mercado B2C y B2B (instituciones educativas).',
    challenge: 'EduLearn competía en un mercado saturado de plataformas educativas. El desafío dual era adquirir estudiantes individuales de manera rentable mientras simultáneamente cerraba contratos con instituciones educativas. La estacionalidad del sector educativo y la necesidad de demostrar resultados académicos medibles complicaban el growth.',
    solution: 'Implementamos una estrategia dual-channel: para B2C, creamos contenido viral en redes sociales mostrando casos de éxito de estudiantes, optimizamos para búsquedas educativas longtail, y lanzamos un modelo freemium con conversión inteligente. Para B2B, desarrollamos white papers sobre personalización del aprendizaje con IA, implementamos demos personalizadas para directores académicos, y creamos un programa piloto gratuito para escuelas.',
    results: [
      'Base de estudiantes activos creció 510% en 10 meses',
      '45 instituciones educativas implementaron la plataforma',
      'Mejora promedio del 34% en calificaciones de estudiantes usuarios',
      'ROI de 11.2x en marketing digital',
      'Conversión de freemium a premium: 23%',
      'Viralidad orgánica generó 42% de nuevos usuarios'
    ],
    metrics: {
      growth: '+510%',
      roi: '11.2x',
      timeline: '10 meses',
      teamSize: '9 personas'
    },
    tags: ['EdTech', 'AI', 'SaaS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzgyNTcxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: {
      hero: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzgyNTcxMnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    testimonial: {
      text: 'Birdie nos ayudó a navegar la complejidad de un modelo de negocio dual B2B/B2C. Su expertise en growth fue clave para nuestro éxito tanto con estudiantes como con instituciones.',
      author: 'Patricia López',
      position: 'Co-founder & CMO, EduLearn'
    }
  },
  {
    id: 'travelnow',
    title: 'TravelNow',
    subtitle: 'Reservas de viajes impulsadas por IA',
    client: 'TravelNow Global',
    industry: 'Travel / Tech',
    description: 'TravelNow es una plataforma de planificación y reservas de viajes que utiliza IA para crear itinerarios personalizados. Trabajamos en recuperar el tráfico post-pandemia y posicionar la IA como diferenciador clave.',
    challenge: 'La industria de viajes estaba en recuperación post-COVID, con usuarios cautelosos y presupuestos reducidos. TravelNow necesitaba reactivar usuarios dormidos, adquirir nuevos viajeros, y comunicar efectivamente cómo la IA mejora la experiencia de planificación. La competencia de OTAs establecidas como Booking y Expedia era feroz.',
    solution: 'Creamos una estrategia de reactivación de usuarios dormidos con campañas de email personalizadas según destinos previamente buscados. Para adquisición, implementamos SEO para destinos emergentes y búsquedas longtail, creamos contenido viral sobre viajes en TikTok e Instagram, y desarrollamos un sistema de recomendaciones de IA que mostraba su valor desde la primera interacción. Lanzamos partnerships con influencers de viajes y ofertas exclusivas.',
    results: [
      'Reactivación del 47% de usuarios dormidos en 6 meses',
      'Crecimiento del 360% en reservas completadas',
      'ROI de 7.9x en inversión de marketing',
      'Ticket promedio de reserva aumentó 28%',
      'Contenido viral alcanzó 8.5M de impresiones orgánicas',
      'NPS (Net Promoter Score) mejoró de 42 a 68'
    ],
    metrics: {
      growth: '+360%',
      roi: '7.9x',
      timeline: '6 meses',
      teamSize: '8 personas'
    },
    tags: ['Travel', 'SaaS', 'AI'],
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzNzk2ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: {
      hero: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzNzk2ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    testimonial: {
      text: 'Después de la pandemia, necesitábamos reinventarnos. Birdie no solo nos ayudó a recuperar usuarios, sino que nos posicionó como líderes en viajes con IA. Increíble trabajo.',
      author: 'Roberto Fernández',
      position: 'CEO, TravelNow Global'
    }
  }
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.id === id);
}
