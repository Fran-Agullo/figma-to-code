import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, TrendingUp, Lightbulb, Zap, Rocket, BarChart3 } from 'lucide-react';
import { services as servicesData } from '../data/services';
import { useRef } from 'react';

const iconMap: Record<string, any> = {
  Target,
  TrendingUp,
  Lightbulb,
  Zap,
  Rocket,
  BarChart3
};

const services = servicesData.map(service => ({
  ...service,
  icon: iconMap[service.icon] || Target,
  shortDescription: service.description.substring(0, 100) + '...'
}));

export function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} id="servicios" className="relative py-24 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Sticky Header */}
        <div className="sticky top-24 z-10 bg-background/80 backdrop-blur-sm pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h2 className="text-5xl md:text-6xl tracking-tight leading-[1.15] mb-6 font-bold text-[#030711]">
              Servicios
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl">
              Soluciones diseñadas para impulsar tu negocio con resultados medibles
            </p>
          </motion.div>
        </div>

        {/* Scrolling Cards */}
        <div className="space-y-32 mt-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 bg-[#EA580C]/10 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-[#EA580C]" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-[#030711]">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-[#666666] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="pt-4">
                    <a 
                      href={`/servicios#${service.id}`}
                      className="inline-flex items-center gap-2 text-[#EA580C] font-medium hover:gap-3 transition-all"
                    >
                      Ver detalles
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Card Visual */}
                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-[#EA580C]/20 transition-all"
                  >
                    <div className="space-y-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#EA580C]/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-[#EA580C]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-[#030711] text-base leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
