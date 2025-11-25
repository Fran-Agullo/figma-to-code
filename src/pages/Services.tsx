import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Search, Laptop, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
const iconMap: Record<string, any> = {
  TrendingUp,
  Search,
  Laptop,
  Cpu
};
const Services = () => {
  return <div className="min-h-screen bg-white font-['Manrope',sans-serif]" lang="es">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-3 lg:px-6 bg-gradient-to-br from-white via-orange-50/30 to-white">
          <div className="max-w-[1440px] mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
              <h1 className="text-6xl md:text-7xl text-[#030711] tracking-tight leading-[1.1] mb-6">
                Nuestros Servicios
              </h1>
              <p className="text-xl text-[#8a8a8f] max-w-3xl mx-auto">
                Soluciones digitales completas para impulsar el crecimiento de tu negocio. 
                Desde estrategia hasta ejecución, te acompañamos en cada paso.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        

        {/* Detailed Service Sections */}
        <section className="py-24 px-3 lg:px-6 bg-gray-50">
          <div className="max-w-[1200px] mx-auto space-y-24">
            {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return <motion.div key={service.id} id={service.id} initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="scroll-mt-24">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Content */}
                    <div>
                      <h2 className="text-3xl md:text-4xl text-[#030711] font-bold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-base text-[#666666] mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h3 className="text-xl text-[#030711] font-semibold mb-3">
                          Beneficios Clave
                        </h3>
                        <div className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-1" />
                              <span className="text-sm text-[#666666]">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link to={`/servicios/${service.id}`}>
                        <Button size="lg" className="bg-[#EA580C] hover:bg-[#C2410C]">
                          Ver Detalles del Servicio
                          <ArrowRight className="ml-2" />
                        </Button>
                      </Link>
                    </div>

                    {/* Process Steps */}
                    <div>
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl text-[#030711] font-semibold mb-4">
                          Nuestro Proceso
                        </h3>
                        <div className="space-y-4">
                          {service.process.slice(0, 3).map((step, idx) => (
                            <div key={idx} className="flex gap-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-[#EA580C] text-white rounded-full flex items-center justify-center font-bold text-sm">
                                {idx + 1}
                              </div>
                              <div>
                                <h4 className="text-base font-semibold text-[#030711] mb-1">
                                  {step.step}
                                </h4>
                                <p className="text-sm text-[#666666]">{step.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>;
          })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-3 lg:px-6 bg-gradient-to-br from-[#EA580C] to-[#C2410C]">
          <div className="max-w-[1440px] mx-auto text-center">
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
      <ScrollToTop />
    </div>;
};
export default Services;