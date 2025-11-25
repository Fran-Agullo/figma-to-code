import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { Button } from '@/components/ui/button';

export default function Portfolio() {
  return (
    <>
      <Header />
      <ScrollToTop />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 py-24 bg-gradient-to-br from-white via-purple-50/20 to-white">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-[#030711] mb-6">
                Proyectos
              </h1>
              <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                Descubre cómo nuestras soluciones han transformado empresas. Consulta nuestros casos de éxito para ver resultados reales.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stacked Case Studies */}
        <section className="px-6 lg:px-12 py-16 bg-white">
          <div className="max-w-[1200px] mx-auto space-y-24">
            {caseStudies.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                >
                  {/* Image */}
                  <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <Link to={`/portfolio/${project.id}`} className="group block">
                      <div className="relative rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      </div>
                    </Link>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#EA580C]/10 text-[#EA580C] text-sm font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#030711]">
                      {project.title}
                    </h2>

                    <p className="text-xl text-[#666666] leading-relaxed">
                      {project.subtitle}
                    </p>

                    <div className="pt-4">
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="group border-[#EA580C] text-[#EA580C] hover:bg-[#EA580C] hover:text-white"
                      >
                        <Link to={`/portfolio/${project.id}`}>
                          Ver caso completo
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-12 py-24 bg-gradient-to-br from-[#EA580C]/5 to-white">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#030711] mb-6">
                ¿Listo para ser nuestro próximo caso de éxito?
              </h2>
              <p className="text-xl text-[#666666] mb-8">
                Agenda una consultoría gratuita y descubre cómo podemos transformar tu negocio
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#EA580C] hover:bg-[#EA580C]/90 text-white px-8 py-6 text-lg"
              >
                <Link to="/contacto">
                  Agenda tu consultoría
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
