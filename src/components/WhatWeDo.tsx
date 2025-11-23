import { motion } from 'framer-motion';
import { Target, TrendingUp, Lightbulb, Zap } from 'lucide-react';
const services = [{
  icon: Target,
  title: 'Growth Strategy',
  description: 'Desarrollamos estrategias de crecimiento basadas en data y experimentación continua para maximizar tu ROI.',
  features: ['Growth hacking', 'A/B Testing', 'Analytics avanzado']
}, {
  icon: TrendingUp,
  title: 'Performance Marketing',
  description: 'Campañas paid media optimizadas en todos los canales digitales para adquisición y retención eficiente.',
  features: ['Paid Ads', 'SEO/SEM', 'Social Media Ads']
}];
export function WhatWeDo() {
  return <section id="servicios" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-white via-orange-50/30 to-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32 space-y-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <p className="text-[#757575] text-sm mb-4 tracking-wide uppercase font-semibold">
                ¿Qué hacemos?
              </p>
              <h2 className="text-5xl text-[#030711] tracking-tight leading-[1.15] mb-6 font-bold">
                Una <span className="text-[#EA580C]">estrategia de growth</span> para tu empresa diseñada por expertos.
              </h2>
            </motion.div>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => <motion.article key={index} initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#EA580C]/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-[#EA580C]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-[#030711] font-semibold mb-2">{service.title}</h3>
                    <p className="text-[#666666] leading-relaxed mb-4">{service.description}</p>
                  </div>
                </div>
              </motion.article>)}
          </div>
        </div>
      </div>
    </section>;
}