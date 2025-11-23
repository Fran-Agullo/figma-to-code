import { motion } from 'framer-motion';
import { Check, Send, Zap } from 'lucide-react';

const steps = [
  { number: '1', icon: <Check className="w-8 h-8" />, title: 'Suscríbete a un plan', description: 'Elige el plan que mejor se adapte a tus necesidades.', gradient: 'from-orange-500 to-orange-600' },
  { number: '2', icon: <Send className="w-8 h-8" />, title: 'Comparte tus necesidades', description: 'Envíanos tus requisitos y objetivos.', gradient: 'from-orange-400 to-orange-500' },
  { number: '3', icon: <Zap className="w-8 h-8" />, title: 'Recibe resultados', description: 'Implementamos y optimizamos continuamente.', gradient: 'from-orange-600 to-orange-700' },
];

export function ProcessSteps() {
  return (
    <section id="proceso" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl text-[#030711] tracking-tight leading-[1.15] max-w-3xl mx-auto">
            Proceso simple, resultados <span className="text-[#EA580C]">extraordinarios</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}>
              <div className="bg-[#f9f7f7] rounded-3xl p-8 h-full relative overflow-hidden">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl text-[#030711] font-semibold mb-4">{step.title}</h3>
                <p className="text-[#666666]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
