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
        <section className="pt-32 pb-16 px-8 lg:px-16 bg-gradient-to-br from-white via-orange-50/30 to-white">
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
        <section className="py-24 px-8 lg:px-16 bg-white">
          <div className="max-w-[1200px] mx-auto space-y-12">
            {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return <motion.div 
              key={service.id} 
              id={service.id} 
              initial={{
                opacity: 0,
                y: 40
              }} 
              whileInView={{
                opacity: 1,
                y: 0
              }} 
              viewport={{
                once: true
              }} 
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }} 
              className="group rounded-[20px] border border-gray-100 bg-white hover:shadow-2xl hover:border-[#EA580C]/20 transition-all duration-300 overflow-hidden"
            >
              <div className="p-8 lg:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#EA580C]/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#EA580C]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl text-[#030711] font-bold mb-2 group-hover:text-[#EA580C] transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-base text-[#666666] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="text-sm text-[#030711] font-semibold mb-3 uppercase tracking-wide">
                    Beneficios Clave
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.benefits.slice(0, 4).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#666666]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to={`/servicios/${service.id}`}>
                  <Button size="lg" className="bg-[#EA580C] hover:bg-[#C2410C] w-full sm:w-auto">
                    Ver Detalles del Servicio
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>;
          })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8 lg:px-16 bg-gradient-to-br from-[#EA580C] to-[#C2410C]">
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