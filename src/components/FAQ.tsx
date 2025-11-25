import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: '¿Qué significa exactamente "Diseño Estratégico"?',
    answer: 'No diseñamos solo interfaces; diseñamos resultados. Nuestro enfoque va más allá del UX/UI bonito. Empezamos con una auditoría de negocio (Growth Digital) para asegurar que cada decisión de diseño (App, Web o Plataforma) esté orientada a mejorar métricas clave como la conversión, la retención y el Lifetime Value (LTV) de tus usuarios.'
  },
  {
    question: '¿Podéis ayudarnos a optimizar un producto que ya tenemos (CRO/Growth)?',
    answer: 'Sí, realizamos auditorías completas de productos existentes para identificar puntos de fricción y oportunidades de mejora. Implementamos estrategias de CRO (Conversion Rate Optimization) basadas en datos y pruebas A/B para maximizar el rendimiento de tu producto.'
  },
  {
    question: '¿Cómo incorporáis la IA y la Automatización en mis procesos?',
    answer: 'Integramos soluciones de IA personalizadas para automatizar tareas repetitivas, mejorar la toma de decisiones y optimizar procesos. Desde chatbots inteligentes hasta sistemas de recomendación, implementamos tecnología de IA que se adapta a las necesidades específicas de tu negocio.'
  },
  {
    question: '¿Cómo garantizáis que el diseño UX/UI funcione para el crecimiento?',
    answer: 'Utilizamos metodologías de UX Research para entender profundamente a tus usuarios, realizamos pruebas de usabilidad continuas y medimos el impacto de cada decisión de diseño en métricas clave. Nuestro diseño está respaldado por datos, no solo por estética.'
  }
];

export function FAQ() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <h2 className="text-5xl text-[#030711] tracking-tight leading-[1.15] mb-6">
            Preguntas <span className="text-[#EA580C]">frecuentes</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios y proceso de trabajo.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-[#f9f7f7] rounded-lg px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-[#030711] font-semibold hover:text-[#EA580C] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#64748b] leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
