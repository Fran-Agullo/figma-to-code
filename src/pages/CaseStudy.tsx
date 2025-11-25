import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies, getCaseStudyById } from '../data/caseStudies';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { Button } from '@/components/ui/button';

export default function CaseStudy() {
  const { id } = useParams();
  const caseStudy = getCaseStudyById(id || '');

  if (!caseStudy) {
    return <Navigate to="/portfolio" replace />;
  }

  const relatedCases = caseStudies
    .filter(cs => cs.id !== caseStudy.id)
    .slice(0, 3);

  return (
    <>
      <Header />
      <ScrollToTop />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/portfolio" className="inline-flex items-center gap-2 text-[#666666] hover:text-[#EA580C] transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Volver a proyectos
              </Link>

              <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-[#030711] mb-4">
                    {caseStudy.title}
                  </h1>
                  <p className="text-xl text-[#666666] mb-8">
                    {caseStudy.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {caseStudy.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-[#030711]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-[#8a8a8f] mb-1">Duración</p>
                    <p className="text-2xl font-semibold text-[#030711]">{caseStudy.metrics.timeline}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#8a8a8f] mb-1">Presupuesto</p>
                    <p className="text-2xl font-semibold text-[#030711]">{caseStudy.metrics.roi}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-[#8a8a8f] mb-1">Industria</p>
                    <p className="text-lg font-medium text-[#030711]">{caseStudy.industry}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 lg:px-12 py-0">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={caseStudy.images?.hero || caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="px-6 lg:px-12 py-24 bg-white">
          <div className="max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#030711] mb-6">
                Problema:
              </h2>
              <p className="text-lg text-[#666666] leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-6 lg:px-12 py-24 bg-gray-50">
          <div className="max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#030711] mb-6">
                Solución:
              </h2>
              <p className="text-lg text-[#666666] leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="px-6 lg:px-12 py-24 bg-white">
          <div className="max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#030711] mb-8">
                Resultados:
              </h2>
              <div className="space-y-4">
                {caseStudy.results.map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#EA580C] flex-shrink-0 mt-1" />
                    <p className="text-lg text-[#030711]">{result}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial Section */}
        {caseStudy.testimonial && (
          <section className="px-6 lg:px-12 py-24 bg-gradient-to-br from-[#EA580C]/5 to-white">
            <div className="max-w-[900px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <svg className="w-12 h-12 text-[#EA580C] mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-2xl md:text-3xl text-[#030711] font-medium mb-8">
                  "{caseStudy.testimonial.text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-[#030711]">{caseStudy.testimonial.author}</p>
                  <p className="text-[#666666]">{caseStudy.testimonial.position}</p>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="px-6 lg:px-12 py-24 bg-[#030711]">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Listo para lograr resultados similares?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Agenda una consultoría gratuita y descubre cómo podemos ayudarte
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#EA580C] hover:bg-[#EA580C]/90 text-white px-8 py-6 text-lg"
              >
                <Link to="/contacto">Agenda tu consultoría</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Related Cases */}
        {relatedCases.length > 0 && (
          <section className="px-6 lg:px-12 py-24 bg-white">
            <div className="max-w-[1200px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#030711] mb-4">
                  Más Casos de Éxito
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedCases.map((relatedCase, idx) => (
                  <motion.div
                    key={relatedCase.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Link
                      to={`/portfolio/${relatedCase.id}`}
                      className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-[#EA580C]/20 transition-all"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={relatedCase.image}
                          alt={relatedCase.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold text-[#030711] mb-2 group-hover:text-[#EA580C] transition-colors">
                          {relatedCase.title}
                        </h3>
                        <p className="text-[#666666]">{relatedCase.subtitle}</p>
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
    </>
  );
}
