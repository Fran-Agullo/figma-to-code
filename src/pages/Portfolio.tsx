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
          <div className="max-w-[1200px] mx-auto space-y-8">
            {caseStudies.map((project, index) => (
              <motion.a
                key={project.id}
                href={`/case-studies/${project.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="block group relative overflow-hidden rounded-[20px] border border-[rgba(221,234,237,1)] bg-[#111111] shadow-[inset_0px_1px_20px_0px_rgba(255,255,255,0.25)] hover:shadow-[inset_0px_1px_30px_0px_rgba(255,255,255,0.35)] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111111]" />
                </div>

                {/* Content Overlay */}
                <div className="relative p-8 lg:p-12">
                  <div className="space-y-6">
                    {/* Title with gradient mask */}
                    <h3 
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                      style={{
                        WebkitMaskImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgb(0, 0, 0) 100%)',
                        maskImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgb(0, 0, 0) 100%)'
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
                      {project.subtitle}
                    </p>

                    <div className="h-8" />

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="px-4 py-2 rounded-[10px] border border-[rgba(255,255,255,0.1)] bg-transparent"
                        >
                          <span className="text-sm text-white">
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
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
