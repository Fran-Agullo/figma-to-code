import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Clock, Target } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { getCaseStudyById } from '@/data/caseStudies';
import { Button } from '@/components/ui/button';

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? getCaseStudyById(id) : undefined;

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white font-['Manrope',sans-serif]" lang="es">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Back Button */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/#portfolio">
              <Button variant="ghost" className="gap-2 group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Volver al portfolio
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                {caseStudy.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-4 py-2 rounded-full bg-[#EA580C]/10 text-[#EA580C] border border-[#EA580C]/20 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <h1 className="text-5xl lg:text-6xl text-[#030711] tracking-tight leading-[1.1] mb-4">
                  {caseStudy.title}
                </h1>
                <p className="text-2xl text-[#666666] mb-6">{caseStudy.subtitle}</p>
                <div className="flex gap-6 text-sm">
                  <div>
                    <span className="text-[#8a8a8f]">Cliente:</span>{' '}
                    <span className="text-[#030711] font-medium">{caseStudy.client}</span>
                  </div>
                  <div>
                    <span className="text-[#8a8a8f]">Industria:</span>{' '}
                    <span className="text-[#030711] font-medium">{caseStudy.industry}</span>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100">
                  <TrendingUp className="w-8 h-8 text-[#EA580C] mb-3" />
                  <div className="text-3xl font-semibold text-[#030711] mb-1">
                    {caseStudy.metrics.growth}
                  </div>
                  <div className="text-sm text-[#666666]">Crecimiento</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100">
                  <Target className="w-8 h-8 text-purple-600 mb-3" />
                  <div className="text-3xl font-semibold text-[#030711] mb-1">
                    {caseStudy.metrics.roi}
                  </div>
                  <div className="text-sm text-[#666666]">ROI</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                  <Clock className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="text-3xl font-semibold text-[#030711] mb-1">
                    {caseStudy.metrics.timeline}
                  </div>
                  <div className="text-sm text-[#666666]">Timeline</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100">
                  <Users className="w-8 h-8 text-green-600 mb-3" />
                  <div className="text-3xl font-semibold text-[#030711] mb-1">
                    {caseStudy.metrics.teamSize}
                  </div>
                  <div className="text-sm text-[#666666]">Equipo</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <ImageWithFallback
                  src={caseStudy.images?.hero || caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-[900px] mx-auto px-6 lg:px-12 space-y-16">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl text-[#030711] mb-4">Descripción del proyecto</h2>
            <p className="text-lg text-[#666666] leading-relaxed">{caseStudy.description}</p>
          </motion.div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl border border-red-100"
          >
            <h2 className="text-3xl text-[#030711] mb-4">El Desafío</h2>
            <p className="text-lg text-[#666666] leading-relaxed">{caseStudy.challenge}</p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100"
          >
            <h2 className="text-3xl text-[#030711] mb-4">La Solución</h2>
            <p className="text-lg text-[#666666] leading-relaxed">{caseStudy.solution}</p>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl border border-green-100"
          >
            <h2 className="text-3xl text-[#030711] mb-6">Resultados</h2>
            <ul className="space-y-4">
              {caseStudy.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-[#666666]">{result}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-3xl border border-orange-100"
            >
              <div className="text-4xl text-[#EA580C] mb-6">"</div>
              <p className="text-2xl text-[#030711] leading-relaxed mb-6 italic">
                {caseStudy.testimonial.text}
              </p>
              <div>
                <div className="font-semibold text-[#030711]">
                  {caseStudy.testimonial.author}
                </div>
                <div className="text-[#666666]">{caseStudy.testimonial.position}</div>
              </div>
            </motion.div>
          )}
        </section>

        {/* CTA Section */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#EA580C] to-[#FF6B00] rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl mb-4">¿Listo para tu próximo proyecto?</h2>
            <p className="text-xl mb-8 opacity-90">
              Transformemos juntos la visión de tu negocio en resultados medibles
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-[#EA580C] px-10 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-xl"
            >
              Empezar proyecto
            </motion.a>
          </motion.div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
