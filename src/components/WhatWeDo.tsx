import { motion } from 'framer-motion';
import { Target, TrendingUp, Lightbulb, Zap, Rocket, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { services as servicesData } from '../data/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index} 
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }} 
                >
                  <Card className="group h-full flex flex-col bg-white hover:border-[#EA580C]/30 hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="space-y-4">
                      <div className="w-14 h-14 bg-[#EA580C]/10 rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-[#EA580C]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-[#030711] mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-[#666666] leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                      <ul className="space-y-3">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[#666666]">
                            <CheckCircle2 className="w-5 h-5 text-[#EA580C] flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to={`/servicios#${service.id}`}>
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-[#EA580C]/5 group-hover:border-[#EA580C]/50 transition-colors"
                        >
                          Ver detalles
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>;
}