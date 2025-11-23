import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { getCaseStudyById, caseStudies } from '@/data/caseStudies';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Quote } from 'lucide-react';

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? getCaseStudyById(id) : undefined;

  if (!caseStudy) {
    return <Navigate to="/portfolio" replace />;
  }

  const relatedCases = caseStudies.filter(cs => cs.id !== caseStudy.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-['Manrope',sans-serif]" lang="es">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 lg:px-12 bg-gradient-to-br from-[#EA580C]/10 via-orange-50/30 to-white">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <Link to="/portfolio" className="text-[#EA580C] hover:underline">
                  ← Volver al Portfolio
                </Link>
              </div>
              
              <span className="inline-block px-4 py-2 bg-[#EA580C] text-white text-sm font-medium rounded-full mb-4">
                {caseStudy.industry}
              </span>
              
              <h1 className="text-5xl md:text-6xl text-[#030711] tracking-tight leading-[1.1] mb-4">
                {caseStudy.title}
              </h1>
              
              <p className="text-2xl text-[#8a8a8f] mb-8">{caseStudy.subtitle}</p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold text-[#EA580C] mb-2">{caseStudy.metrics.growth}</div>
                  <div className="text-sm text-[#8a8a8f]">Crecimiento</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold text-[#EA580C] mb-2">{caseStudy.metrics.roi}</div>
                  <div className="text-sm text-[#8a8a8f]">ROI</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold text-[#EA580C] mb-2">{caseStudy.metrics.timeline}</div>
                  <div className="text-sm text-[#8a8a8f]">Timeline</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold text-[#EA580C] mb-2">{caseStudy.metrics.teamSize}</div>
                  <div className="text-sm text-[#8a8a8f]">Equipo</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-0 px-6 lg:px-12">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={caseStudy.images?.hero || caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-[900px] mx-auto space-y-16">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl text-[#030711] font-bold mb-6">El Proyecto</h2>
              <p className="text-lg text-[#030711] leading-relaxed">
                {caseStudy.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-[#030711] text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-3xl"
            >
              <h2 className="text-4xl text-[#030711] font-bold mb-6">El Desafío</h2>
              <p className="text-lg text-[#030711] leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl text-[#030711] font-bold mb-6">La Solución</h2>
              <p className="text-lg text-[#030711] leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#EA580C]/5 to-orange-50/30 p-8 rounded-3xl"
            >
              <h2 className="text-4xl text-[#030711] font-bold mb-8">Resultados</h2>
              <div className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#EA580C] flex-shrink-0 mt-1" />
                    <p className="text-lg text-[#030711]">{result}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-[#030711] p-12 rounded-3xl text-white"
              >
                <Quote className="w-12 h-12 text-[#EA580C] mb-6" />
                <p className="text-xl leading-relaxed mb-6 italic">
                  "{caseStudy.testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-lg">{caseStudy.testimonial.author}</div>
                  <div className="text-gray-400">{caseStudy.testimonial.position}</div>
                  <div className="text-gray-500">{caseStudy.client}</div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-[#EA580C] to-[#C2410C]">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl text-white tracking-tight leading-[1.15] mb-6">
                ¿Quieres resultados como estos?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo podemos ayudarte.
              </p>
              <Link to="/contacto">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Agendar Consulta
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Related Cases */}
        {relatedCases.length > 0 && (
          <section className="py-24 px-6 lg:px-12 bg-gray-50">
            <div className="max-w-[1440px] mx-auto">
              <h2 className="text-4xl text-[#030711] font-bold mb-12 text-center">
                Más Casos de Éxito
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedCases.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link to={`/portfolio/${project.id}`}>
                      <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-[#EA580C]/20 transition-all h-full">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl text-[#030711] font-semibold mb-2 group-hover:text-[#EA580C] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-[#8a8a8f] mb-4">{project.subtitle}</p>
                          <div className="flex items-center text-[#EA580C] font-medium">
                            Ver caso
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudy;
