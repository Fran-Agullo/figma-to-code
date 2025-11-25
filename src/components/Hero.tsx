import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
export function Hero() {
  return <section className="relative min-h-screen flex items-center pb-[50px] px-[50px] overflow-hidden bg-[#1a1a2e]" aria-labelledby="hero-heading">
      {/* Video background */}
      <div className="absolute top-0 left-0 right-0 bottom-[100px]" aria-hidden="true">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" poster="https://cdn.prod.website-files.com/61e461cb7ac4a96a83a9538a/659ecc4543469978cf61fc17_Pexels product video-poster-00001.jpg">
          <source src="https://cdn.prod.website-files.com/61e461cb7ac4a96a83a9538a/659ecc4543469978cf61fc17_Pexels product video-transcode.mp4" type="video/mp4" />
          <source src="https://cdn.prod.website-files.com/61e461cb7ac4a96a83a9538a/659ecc4543469978cf61fc17_Pexels product video-transcode.webm" type="video/webm" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative w-full">
        <div className="items-start justify-start flex flex-row">
          {/* Left-aligned Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="space-y-8 max-w-2xl text-left pt-24">
            

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
          }} className="text-xl text-gray-300 leading-relaxed max-w-3xl">
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
          }} className="flex-col gap-4 flex items-start justify-start sm:flex sm:flex-row">
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
            </motion.div>

            {/* Stats */}
            
          </motion.div>
        </div>
      </div>
    </section>;
}