import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { caseStudies } from '@/data/caseStudies';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const Portfolio = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const industries = ['all', ...Array.from(new Set(caseStudies.map(cs => cs.industry)))];
  const filteredProjects = selectedIndustry === 'all' ? caseStudies : caseStudies.filter(cs => cs.industry === selectedIndustry);
  return <div className="min-h-screen bg-white font-['Manrope',sans-serif]" lang="es">
      <Header />
      
      <main className="pt-[120px]">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 lg:px-12 bg-gradient-to-br from-white via-orange-50/30 to-white py-0">
          <div className="max-w-[1440px] mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <h1 className="text-6xl md:text-7xl text-[#030711] tracking-tight leading-[1.1] mb-6">
                Casos de <span className="text-[#EA580C]">Éxito</span>
              </h1>
              <p className="text-xl text-[#8a8a8f] max-w-3xl mx-auto">
                Proyectos que transformaron negocios. Descubre cómo ayudamos a empresas a alcanzar sus objetivos de crecimiento digital.
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="flex flex-wrap justify-center gap-3 mb-16">
              {industries.map(industry => <button key={industry} onClick={() => setSelectedIndustry(industry)} className={`px-6 py-2 rounded-full font-medium transition-all ${selectedIndustry === industry ? 'bg-[#EA580C] text-white shadow-lg' : 'bg-gray-100 text-[#030711] hover:bg-gray-200'}`}>
                  {industry === 'all' ? 'Todos' : industry}
                </button>)}
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="px-6 lg:px-12 py-0 pb-[80px]">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => <motion.div key={project.id} initial={{
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
                  <Link to={`/portfolio/${project.id}`}>
                    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-[#EA580C]/20 transition-all h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="inline-block px-3 py-1 bg-[#EA580C] text-white text-sm font-medium rounded-full mb-2">
                            {project.industry}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-2xl text-[#030711] font-semibold mb-2 group-hover:text-[#EA580C] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#8a8a8f] mb-3">{project.subtitle}</p>
                        <p className="text-[#030711] mb-6 flex-1">
                          {project.description.substring(0, 150)}...
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                          <div>
                            <div className="text-2xl font-bold text-[#EA580C]">
                              {project.metrics.growth}
                            </div>
                            <div className="text-xs text-[#8a8a8f]">Crecimiento</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-[#EA580C]">
                              {project.metrics.roi}
                            </div>
                            <div className="text-xs text-[#8a8a8f]">ROI</div>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-4 flex items-center text-[#EA580C] font-medium group-hover:translate-x-2 transition-transform">
                          Ver caso completo
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-[#EA580C] to-[#C2410C]">
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
              <h2 className="text-5xl text-white tracking-tight leading-[1.15] mb-6">
                ¿Listo para ser el próximo caso de éxito?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contáctanos y descubre cómo podemos ayudarte a alcanzar tus objetivos de crecimiento.
              </p>
              <Link to="/contacto">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Agendar Consulta Gratuita
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>;
};
export default Portfolio;