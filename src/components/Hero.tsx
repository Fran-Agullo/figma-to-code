import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
export function Hero() {
  return <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#0f0f1e] to-[#16213e]" aria-labelledby="hero-heading">
      {/* Animated wavy background */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EA580C" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#1a1a2e" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 V0 H0 Z"
            fill="url(#waveGradient)"
            animate={{
              d: [
                "M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 V0 H0 Z",
                "M0,50 Q250,100 500,50 T1000,50 T1500,50 T2000,50 V0 H0 Z",
                "M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 V0 H0 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M0,200 Q250,150 500,200 T1000,200 T1500,200 T2000,200 V0 H0 Z"
            fill="url(#waveGradient)"
            opacity="0.5"
            animate={{
              d: [
                "M0,200 Q250,150 500,200 T1000,200 T1500,200 T2000,200 V0 H0 Z",
                "M0,150 Q250,200 500,150 T1000,150 T1500,150 T2000,150 V0 H0 Z",
                "M0,200 Q250,150 500,200 T1000,200 T1500,200 T2000,200 V0 H0 Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </svg>
      </div>

      {/* Floating glowing orbs */}
      <motion.div animate={{
      y: [0, -20, 0],
      rotate: [0, 5, 0]
    }} transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }} className="absolute top-20 right-10 w-64 h-64 bg-[#EA580C] rounded-full blur-3xl opacity-20" aria-hidden="true" />
      <motion.div animate={{
      y: [0, 20, 0],
      rotate: [0, -5, 0]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }} className="absolute bottom-20 left-10 w-80 h-80 bg-[#EA580C] rounded-full blur-3xl opacity-15" aria-hidden="true" />

      <div className="relative max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="space-y-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="inline-flex items-center gap-2 bg-[#EA580C]/20 px-4 py-2 rounded-full border border-[#EA580C]/30" role="text">
              <Sparkles className="w-4 h-4 text-[#EA580C]" aria-hidden="true" />
              <span className="text-sm text-white font-medium">BirdieAgency</span>
            </motion.div>

            <div className="space-y-4">
              <h1 id="hero-heading" className="text-5xl lg:text-7xl text-white tracking-tight leading-[1.1] font-bold">
                <motion.span initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.3,
                duration: 0.6
              }} className="block">
                  Transforma tu <span className="text-[#EA580C]">presente.</span>
                </motion.span>
                <motion.span initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.4,
                duration: 0.6
              }} className="block">
                  Mira hacia el <span className="text-[#EA580C]">futuro.</span>
                </motion.span>
              </h1>
            </div>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.6
          }} className="text-xl text-gray-300 leading-relaxed max-w-xl">
              En BirdieAgency transformamos la confusión y la fricción digital en experiencias de marca claras, memorables y funcionales. Diseño, usabilidad y análisis, impulsamos empresas en entornos digitales.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7,
            duration: 0.6
          }} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="group bg-[#EA580C] text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#C14107] transition-all shadow-lg shadow-orange-500/25 focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:ring-offset-2" aria-label="Empezar un proyecto con BirdieDigital">
                  Empezar proyecto
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="border-2 border-white/20 text-white px-8 py-4 rounded-full hover:border-[#EA580C] hover:bg-[#EA580C]/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:ring-offset-2 focus:ring-offset-[#1a1a2e]" aria-label="Ver nuestro portfolio de casos de éxito">
                  Ver casos de éxito
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8,
            duration: 0.6
          }} role="list" aria-label="Estadísticas de BirdieAgency" className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 px-[17px]">
              <div role="listitem">
                <div className="text-3xl text-white font-medium">+42%</div>
                <div className="text-sm text-gray-400 mt-1">Eficiencia</div>
              </div>
              <div role="listitem">
                <div className="text-3xl text-white font-medium">24h</div>
                <div className="text-sm text-gray-400 mt-1">Research</div>
              </div>
              <div role="listitem">
                <div className="text-3xl text-white font-medium">48h</div>
                <div className="text-sm text-gray-400 mt-1">Diagnóstico</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.4,
          duration: 0.8,
          ease: 'easeOut'
        }} className="relative hidden lg:block" aria-hidden="true">
            <div className="relative">
              {/* Main card */}
              <motion.div animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }} className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#EA580C] to-[#FF6B00] rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Growth Rate</div>
                      <div className="text-2xl text-white font-semibold">+247%</div>
                    </div>
                  </div>
                  <div className="h-48 bg-gradient-to-br from-[#EA580C]/20 to-orange-500/20 rounded-xl flex items-center justify-center border border-[#EA580C]/30">
                    <div className="text-center space-y-2">
                      <div className="text-4xl" aria-hidden="true">📈</div>
                      <div className="text-sm text-gray-300">Crecimiento exponencial</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div animate={{
              y: [0, -15, 0],
              rotate: [0, 2, 0]
            }} transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5
            }} className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-4 border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl" aria-hidden="true">✨</span>
                  </div>
                  <div className="text-sm text-white font-medium">ROI +350%</div>
                </div>
              </motion.div>

              <motion.div animate={{
              y: [0, 15, 0],
              rotate: [0, -2, 0]
            }} transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }} className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-4 border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-400/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl" aria-hidden="true">🎯</span>
                  </div>
                  <div className="text-sm text-white font-medium">Conversión +180%</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}