import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden" aria-labelledby="hero-heading">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50 opacity-60" aria-hidden="true" />

      {/* Floating elements for visual interest */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-100"
              role="text"
            >
              <Sparkles className="w-4 h-4 text-[#EA580C]" aria-hidden="true" />
              <span className="text-sm text-[#EA580C] font-medium">Growth Digital Inteligente</span>
            </motion.div>

            <div className="space-y-4">
              <h1 id="hero-heading" className="text-5xl lg:text-6xl text-[#030711] tracking-tight leading-[1.1] font-bold">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="block"
                >
                  Transforma tu presente.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="block text-[#EA580C]"
                >
                  Mira hacia el futuro.
                </motion.span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-[#666666] leading-relaxed max-w-xl"
            >
              En BirdieAgency transformamos la confusión y la fricción digital en experiencias de marca claras, memorables y funcionales. Diseño, usabilidad y análisis, impulsamos empresas en entornos digitales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-[#EA580C] text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#C14107] transition-all shadow-lg shadow-orange-500/25 focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:ring-offset-2"
                aria-label="Empezar un proyecto con BirdieDigital"
              >
                Empezar proyecto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#e5e7eb] text-[#030711] px-8 py-4 rounded-full hover:border-[#EA580C] hover:text-[#EA580C] transition-all focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:ring-offset-2"
                aria-label="Ver nuestro portfolio de casos de éxito"
              >
                Ver casos de éxito
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
              role="list"
              aria-label="Estadísticas de BirdieDigital"
            >
              <div role="listitem">
                <div className="text-3xl text-[#030711] font-medium">+150</div>
                <div className="text-sm text-[#666666] mt-1">Proyectos completados</div>
              </div>
              <div role="listitem">
                <div className="text-3xl text-[#030711] font-medium">+50</div>
                <div className="text-sm text-[#666666] mt-1">Clientes activos</div>
              </div>
              <div role="listitem">
                <div className="text-3xl text-[#030711] font-medium">98%</div>
                <div className="text-sm text-[#666666] mt-1">Satisfacción</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#EA580C] to-[#FF6B00] rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-[#666666]">Growth Rate</div>
                      <div className="text-2xl text-[#030711] font-semibold">+247%</div>
                    </div>
                  </div>
                  <div className="h-48 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl" aria-hidden="true">📈</div>
                      <div className="text-sm text-[#666666]">Crecimiento exponencial</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl" aria-hidden="true">✨</span>
                  </div>
                  <div className="text-sm text-[#030711] font-medium">ROI +350%</div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl" aria-hidden="true">🎯</span>
                  </div>
                  <div className="text-sm text-[#030711] font-medium">Conversión +180%</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
