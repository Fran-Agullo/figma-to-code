import { motion } from 'framer-motion';
import { Laptop, Cpu, Lightbulb, Zap } from 'lucide-react';
import { services as servicesData } from '../data/services';

const iconMap: Record<string, any> = {
  Laptop,
  Cpu,
  Lightbulb,
  Zap
};

const servicesTitles = [
  "Diseño de producto digital (Web y app)",
  "Auditoría de experiencia de usuario",
  "Growth Digital",
  "IA y automatización"
];

const services = servicesData.map((service, index) => ({
  ...service,
  icon: iconMap[service.icon] || Laptop,
  displayTitle: servicesTitles[index] || service.title
}));

const stats = [
  { number: "+100", text: "Empresas colaboradoras" },
  { number: "+1.100M", text: "Usuarios de nuestros productos" },
  { number: "+150M€", text: "Inversión en nuestros productos" },
  { number: "4 exits", text: "Empresas vendidas" }
];

export function WhatWeDo() {
  return (
    <section id="servicios" className="relative py-12 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
          {/* Sticky Left Content */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-sm font-medium text-[#EA580C] uppercase tracking-wider">
                ¿Qué hacemos?
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Un <span className="text-[#EA580C]">producto digital</span> para tu empresa diseñado por seniors.
              </h2>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <h4 className="text-2xl md:text-3xl font-bold text-[#030711] mb-2">
                      {stat.number}
                    </h4>
                    <p className="text-sm text-[#666666]">
                      {stat.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scrolling Timeline Right */}
          <div className="relative">
            <div className="space-y-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#EA580C]/20 transition-all"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-[#EA580C]/10 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-[#EA580C]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-[#030711] mb-4">
                      {service.displayTitle}
                    </h3>

                    {/* Content */}
                    <p className="text-base text-[#666666] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Step Number */}
                    <div className="absolute top-8 right-8 w-10 h-10 bg-[#030711] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Vertical Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#EA580C] via-[#EA580C]/50 to-transparent hidden lg:block" 
                 style={{ marginLeft: '-2rem' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
