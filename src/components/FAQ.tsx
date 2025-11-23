import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: '¿Cuánto tiempo tarda en completarse un proyecto?',
    answer: 'El tiempo de entrega depende de la complejidad del proyecto. Una landing page básica puede estar lista en 2-3 semanas, mientras que proyectos más complejos pueden tomar de 1 a 3 meses. Siempre trabajamos con plazos claros y te mantenemos informado del progreso.'
  },
  {
    question: '¿Qué incluye el servicio de diseño web?',
    answer: 'Nuestro servicio incluye diseño personalizado en Figma, desarrollo con código limpio y moderno, optimización SEO, diseño responsive para todos los dispositivos, y soporte post-lanzamiento. También incluimos hosting y dominio en planes superiores.'
  },
  {
    question: '¿Puedo solicitar cambios después del lanzamiento?',
    answer: 'Sí, todos nuestros planes incluyen un período de soporte donde puedes solicitar ajustes y mejoras. Además, ofrecemos planes de mantenimiento continuo para cambios regulares y actualizaciones de contenido.'
  },
  {
    question: '¿Trabajáis con clientes internacionales?',
    answer: 'Absolutamente. Trabajamos con clientes de toda España y Latinoamérica. Nos adaptamos a diferentes zonas horarias y nos comunicamos principalmente por videollamada, email y herramientas de gestión de proyectos.'
  },
  {
    question: '¿Qué tecnologías utilizáis?',
    answer: 'Utilizamos tecnologías modernas y probadas como React, Next.js, Tailwind CSS, y TypeScript para el frontend. Para el backend trabajamos con Node.js, Supabase, y soluciones cloud escalables. Elegimos las mejores herramientas según las necesidades de cada proyecto.'
  },
  {
    question: '¿Ofrecéis servicios de SEO y marketing digital?',
    answer: 'Sí, además del desarrollo web, ofrecemos servicios de optimización SEO, estrategia de contenidos, y consultoría de marketing digital. Podemos ayudarte a aumentar tu visibilidad online y atraer más clientes a tu negocio.'
  },
  {
    question: '¿Cuál es el proceso de trabajo?',
    answer: 'Comenzamos con una reunión de descubrimiento para entender tus necesidades. Luego creamos diseños en Figma para tu aprobación, desarrollamos el sitio, realizamos pruebas exhaustivas, y finalmente lanzamos. Durante todo el proceso mantenemos comunicación constante contigo.'
  },
  {
    question: '¿Qué métodos de pago aceptáis?',
    answer: 'Aceptamos transferencias bancarias y pagos con tarjeta. Generalmente trabajamos con un sistema de pagos en fases: 50% al inicio del proyecto y 50% al finalizar. Para proyectos grandes podemos adaptar el plan de pagos a tus necesidades.'
  }
];

export function FAQ() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
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
