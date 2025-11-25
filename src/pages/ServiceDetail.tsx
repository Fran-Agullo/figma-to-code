import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const serviceDetails = {
  'diseno-producto-digital': {
    title: 'Diseño de producto digital (IA)',
    subtitle: 'Transformamos plataformas obsoletas en activos digitales de alto rendimiento, asegurando que cada interfaz esté optimizada para el objetivo de negocio.',
    heroImage: 'https://framerusercontent.com/images/8nPYhRhwxclwAgbaLJXkp1PBoM.jpg',
    note: '"Cada etapa del diseño y la implementación está asistida por IA para garantizar una precisión milimétrica, una reducción del tiempo de ciclo de hasta el 40%, y el lanzamiento al mercado más rápido de su activo digital."',
    sections: [
      {
        title: 'Arquitectura de la información',
        intro: 'Estrategia Holística: Mapeamos el ecosistema digital completo, asegurando que cada pieza (Web, App, E-commerce) funcione como un sistema unificado y cohesivo.',
        items: [
          'Diseño Centrado en el Usuario: Estudiamos a sus usuarios para definir flujos de navegación lógicos e intuitivos que minimicen la fricción y la tasa de abandono.',
          'Estructura de Contenido Estratégico: Organizamos el contenido para guiar al usuario hacia la conversión, dando prioridad a la información que genera confianza y acción.',
          'Planificación a Futuro: Creamos una estructura escalable, lista para absorber nuevos productos o servicios sin necesidad de costosos rediseños.'
        ]
      },
      {
        title: 'UX/UI Design System (Sistema de Diseño UX/UI)',
        intro: 'Coherencia Inquebrantable: Desarrollamos librerías de componentes reutilizables (Design System) que garantizan una experiencia de marca consistente en todas las plataformas.',
        items: [
          'Eficiencia Técnica: Definimos tokens de diseño, layouts y guías para acelerar el desarrollo e integración, reduciendo la deuda técnica a largo plazo.',
          'Enfoque en la Accesibilidad: Creamos una paleta de colores y patrones de interacción que cumplen con los estándares de accesibilidad, ampliando su mercado potencial.',
          'El Diseño como Inversión: Entregamos un activo digital de marca que es fácil de mantener, actualizar y escalar por cualquier miembro futuro de su equipo.'
        ]
      },
      {
        title: 'Prototyping & Motion (Prototipos y Movimiento)',
        intro: 'Experiencia Táctil: Creamos prototipos interactivos de alta fidelidad que se sienten y funcionan exactamente como el producto final, permitiendo pruebas reales antes del código.',
        items: [
          'Microinteracciones Estratégicas: Diseñamos animaciones y movimiento (Motion Design) para guiar la atención del usuario, reducir la carga cognitiva y deleitar.',
          'Validación de Flujos: Utilizamos los prototipos para testear los flujos críticos de la conversión (ej. checkout, onboarding) y encontrar la fricción antes de escribir código.',
          'Comunicación de Valor: El motion no es solo decoración; lo usamos para comunicar el estado del sistema, el éxito de una acción y la personalidad de su marca.'
        ]
      },
      {
        title: 'Implementation (Implementación)',
        intro: 'Desarrollo Asistido por Code AI: Utilizamos copilotos de código para escribir y optimizar el desarrollo en Framer/Webflow o la integración de CMS, lo que resulta en un código más limpio y en un tiempo de entrega hasta un 40% menor.',
        items: [
          'Integración de Funcionalidades IA: Programamos e integramos widgets o features de IA directamente en el diseño (ej. chatbots de soporte, asistentes de compra predictivos) para elevar la funcionalidad del producto.',
          'Testing Automatizado de Despliegue: La IA realiza pruebas exhaustivas en múltiples navegadores y dispositivos durante el despliegue, asegurando la fidelidad del diseño y la funcionalidad perfecta.',
          'Guía de Mantenimiento Predictivo: Entregamos un manual de operaciones que utiliza modelos de IA para predecir posibles puntos de fallo o necesidad de optimización futura en el CMS o E-commerce.'
        ]
      }
    ],
    relatedServices: ['ux-research', 'growth-digital', 'ia-automatizacion']
  },
  'growth-digital': {
    title: 'Growth Digital',
    subtitle: 'Estudiamos a fondo las posibilidades digitales de nuestros clientes y lo posicionamos en el lugar que le pertenece.',
    heroImage: 'https://framerusercontent.com/images/Npoh4zx1VqvM4WQgBepQPgij8I.jpg',
    note: null,
    sections: [
      {
        title: 'Audit & Analytics (Auditoría y Analítica)',
        intro: null,
        items: [
          'Diagnóstico de Salud Digital: Realizamos una evaluación holística de su producto actual, analizando la UX, el SEO, la tasa de conversión y la retención para encontrar los cuellos de botella del crecimiento.',
          'Analítica Asistida: Utilizamos la IA como apoyo para procesar volúmenes masivos de datos y detectar anomalías o patrones de rendimiento que requieren atención inmediata.',
          'Evaluación de la Fricción: Identificamos los puntos exactos en el funnel donde los usuarios abandonan, cuantificando la pérdida de ingresos potencial de esos pain points.',
          'Definición de Métricas Clave (KPIs): Traducimos el rendimiento de su plataforma en un dashboard claro con métricas accionables que su equipo pueda entender y seguir fácilmente.'
        ]
      },
      {
        title: 'Experimentation (Experimentación)',
        intro: null,
        items: [
          'Diseño de Pruebas Inteligentes: La IA es un apoyo que nos ayuda a priorizar las hipótesis de prueba A/B que tienen el mayor potencial de impacto en la conversión (ROI).',
          'Optimización de Conversión (CRO): Diseñamos landings, microcopy y flujos que están quirúrgicamente enfocados en mejorar sus KPIs (ej. sign-ups, ventas, retención).',
          'Validación Rápida de Diseño: Implementamos pruebas A/B de manera ágil y controlada para obtener datos duros que respalden las decisiones de diseño, eliminando las suposiciones.',
          'Ciclos de Aprendizaje Acelerado: Medimos los resultados de cada experimento y aplicamos esos insights para informar el próximo ciclo de diseño y crecimiento, creando una mejora continua.'
        ]
      },
      {
        title: 'Automation (Automatización)',
        intro: null,
        items: [
          'Estrategia de Eficiencia Operacional: Identificamos tareas repetitivas y procesos manuales que están frenando a su equipo, creando un roadmap para la automatización total.',
          'Integración No-Code de Alto Valor: Implementamos flujos automatizados utilizando herramientas como Make o Zapier, conectando sus aplicaciones para que trabajen como un ecosistema cohesivo.',
          'Soporte de IA para el Flujo: La IA es un apoyo en la creación de automatizaciones complejas, desde la calificación de leads hasta la generación de respuestas iniciales de soporte.',
          'Escalabilidad de Procesos: Creamos sistemas robustos que manejan el aumento del volumen de trabajo sin necesidad de contratar más personal, garantizando un crecimiento rentable.'
        ]
      },
      {
        title: 'Growth Strategy (Estrategia de Crecimiento)',
        intro: null,
        items: [
          'Ajuste Estratégico Basado en Datos: Utilizamos la inteligencia de los experimentos para refinar constantemente la estrategia digital, asegurando que su producto y marketing sigan las tendencias reales del usuario.',
          'Análisis de Impacto Holístico: Medimos el efecto de cada cambio (UX, SEO, automatización) en la salud general del negocio, no solo en métricas superficiales.',
          'Hoja de Ruta de Crecimiento Priorizada: Entregamos un roadmap claro y secuencial de mejoras, enfocado en las acciones que tendrán el mayor efecto en el crecimiento de su negocio.',
          'Asesoría de Posicionamiento: Le guiamos sobre cómo interpretar y actuar sobre los datos de comportamiento para posicionar su producto en el lugar más rentable del mercado.'
        ]
      }
    ],
    relatedServices: ['diseno-producto-digital', 'ux-research', 'ia-automatizacion']
  },
  'ia-automatizacion': {
    title: 'IA y Automatización',
    subtitle: 'Nuestra metodología integra la estrategia de marca, la precisión del diseño y la eficiencia de la IA para un crecimiento medible.',
    heroImage: 'https://framerusercontent.com/images/kowsLNxnpQclOQJjDCjUkZkX0yw.jpg',
    note: null,
    sections: [
      {
        title: 'Model & Tools Selection (Selección de Modelos y Herramientas)',
        intro: null,
        items: [
          'Consultoría Estratégica de IA: Evaluamos sus objetivos de negocio para recomendar los modelos de IA (OpenAI, Gemini, Claude, etc.) que entregarán la solución más eficiente y rentable.',
          'Arquitectura de Automatización: Diseñamos el stack tecnológico más adecuado, seleccionando plataformas no-code o low-code (n8n, Make, Supabase) para una implementación rápida y escalable.',
          'Integración de Ecosistemas: Aseguramos que la nueva IA se comunique perfectamente con sus sistemas internos (CRM, bases de datos), creando un flujo de trabajo sin fricción.',
          'Análisis Costo-Beneficio: Determinamos la inversión óptima en modelos y tokens para asegurar que la automatización genere un Retorno de la Inversión (ROI) claro desde el inicio.'
        ]
      },
      {
        title: 'AI UX Design (Diseño de Experiencia de Usuario con IA)',
        intro: null,
        items: [
          'Diseño de Interfaz Conversacional: Diseñamos el flujo de chatbots y asistentes de IA para que la interacción sea natural, útil y completamente alineada con el tono de su marca.',
          'Flujos de Trabajo Inteligentes: Creamos interfaces (dashboards, paneles) donde la IA potencia la toma de decisiones del usuario sin generar confusión o fricción cognitiva.',
          'Personalización con Propósito: Diseñamos experiencias de usuario donde la IA anticipa las necesidades, ofreciendo contenido o acciones relevantes antes de que el usuario las solicite.',
          'Control y Confianza: Aseguramos que el usuario mantenga siempre el control sobre las acciones de la IA, estableciendo expectativas claras para fomentar la confianza en la tecnología.'
        ]
      },
      {
        title: 'Automation & Deployment (Automatización e Implementación)',
        intro: null,
        items: [
          'Prototipado Funcional Rápido: Desarrollamos y desplegamos prototipos operativos de features de IA, permitiendo la validación temprana de la funcionalidad y el impacto en el negocio.',
          'Integración en Productos Existentes: Conectamos las automatizaciones inteligentes directamente con sus productos digitales o sistemas internos para que la IA trabaje "detrás de escena".',
          'Pruebas de Rendimiento y Sesgo: Realizamos pruebas exhaustivas para optimizar la precisión del modelo y asegurar un comportamiento justo y eficiente de las herramientas de IA implementadas.',
          'Documentación y Transferencia: Entregamos un manual operativo detallado y fácil de usar, permitiendo que su equipo se apodere y mantenga las soluciones de IA implementadas.'
        ]
      }
    ],
    relatedServices: ['diseno-producto-digital', 'ux-research', 'growth-digital']
  },
  'ux-research': {
    title: 'Auditoría de experiencia de usuario',
    subtitle: 'Analizamos en profundidad el comportamiento de tus usuarios para identificar oportunidades de mejora y optimización.',
    heroImage: 'https://framerusercontent.com/images/a27czPfQpRbb7irqRTDpBX19pLw.jpg',
    note: null,
    sections: [
      {
        title: 'User Research',
        intro: null,
        items: [
          'Análisis de comportamiento de usuarios',
          'Entrevistas y encuestas cualitativas',
          'Testing de usabilidad',
          'Mapeo de journey del usuario'
        ]
      }
    ],
    relatedServices: ['diseno-producto-digital', 'growth-digital', 'ia-automatizacion']
  }
};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceDetails[id as keyof typeof serviceDetails] : null;

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  return (
    <div className="min-h-screen bg-white font-['Manrope',sans-serif]" lang="es">
      <Header />
      <ScrollToTop />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img 
            src={service.heroImage} 
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          <div className="relative h-full flex items-end px-8 lg:px-16 pb-16">
            <div className="max-w-[1200px] mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  {service.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                  {service.subtitle}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Note */}
        {service.note && (
          <section className="py-12 px-8 lg:px-16 bg-orange-50">
            <div className="max-w-[1200px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <p className="text-lg md:text-xl text-[#030711] font-semibold italic">
                  Nota del Proceso: {service.note}
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {/* Content Sections */}
        <section className="py-16 px-8 lg:px-16">
          <div className="max-w-[1200px] mx-auto space-y-16">
            {service.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#030711] mb-4">
                  {section.title}
                </h2>
                {section.intro && (
                  <p className="text-lg text-[#030711] font-semibold mb-6">
                    {section.intro}
                  </p>
                )}
                <ul className="space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#EA580C] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-base text-[#666666] leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8 lg:px-16 bg-gradient-to-br from-[#EA580C] to-[#C2410C]">
          <div className="max-w-[1440px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl text-white tracking-tight leading-[1.15] mb-6">
                ¿Listo para transformar tu negocio?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo nuestros servicios pueden impulsar tu crecimiento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contacto">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                    Agendar Consulta
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white/10">
                    Ver Casos de Éxito
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
