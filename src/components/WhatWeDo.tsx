import { motion } from 'framer-motion';
import { Target, TrendingUp, Lightbulb, Zap, Rocket, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { services as servicesData } from '../data/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
  icon: iconMap[service.icon] || Target
}));
export function WhatWeDo() {
  return <section id="servicios" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-white via-orange-50/30 to-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
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
      }} className="text-center mb-16">
          <p className="text-[#757575] text-sm mb-4 tracking-wide uppercase font-semibold">
            ¿Qué hacemos?
          </p>
          <h2 className="text-5xl md:text-6xl text-[#030711] tracking-tight leading-[1.15] mb-6 font-bold max-w-4xl mx-auto">Soluciones escalables, 
visión 360º<span className="text-[#EA580C]">estrategia de growth</span> para tu empresa diseñada por expertos.
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <motion.div key={service.id} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }}>
                <Card className="h-full hover:shadow-2xl transition-shadow border-gray-100 hover:border-[#EA580C]/20">
                  <CardHeader>
                    <div className="w-14 h-14 bg-[#EA580C]/10 rounded-2xl flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-[#EA580C]" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#EA580C] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#030711]">{feature}</span>
                        </div>)}
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`/servicios#${service.id}`}>
                        Ver detalles
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
}