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
        <section className="px-8 lg:px-16 py-24 bg-gradient-to-br from-white via-purple-50/20 to-white">
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
        <section className="px-8 lg:px-16 py-16 bg-white">
          <div className="max-w-[1200px] mx-auto space-y-12">
            {caseStudies.map((project, index) => (
              <motion.a
                key={project.id}
                href={`/portfolio/${project.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="block group relative overflow-hidden rounded-[20px] border border-gray-100 bg-white hover:shadow-2xl hover:border-[#EA580C]/20 transition-all duration-300"
              >
                {/* Content Grid */}
                <div className="grid lg:grid-cols-[400px,1fr] gap-0">
                  {/* Image */}
                  <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-r from-transparent to-[#111111]/80" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 lg:p-10 flex flex-col justify-center">
                    <div className="space-y-4">
                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#030711] group-hover:text-[#EA580C] transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {project.subtitle}
                      </p>

                      <div className="h-4" />

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <div
                            key={tagIndex}
                            className="px-3 py-1.5 rounded-[10px] border border-border bg-background/50"
                          >
                            <span className="text-sm text-foreground">
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 lg:px-16 py-24 bg-gradient-to-br from-[#EA580C] to-[#C2410C]">
          <div className="max-w-[1440px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Listo para transformar tu negocio?
              </h2>
              <p className="text-xl text-white/90 mb-8">
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
    </>
  );
}
