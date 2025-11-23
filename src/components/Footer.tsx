import { motion } from 'framer-motion';
import { Sparkles, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030711] text-white pt-20 pb-8 px-6 lg:px-12" role="contentinfo">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#EA580C] to-[#FF6B00] rounded-3xl p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-300 rounded-full blur-3xl" />
          </div>

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6 tracking-tight">
              ¿Listo para hacer crecer tu negocio?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Empieza hoy mismo y ve resultados reales en semanas, no meses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#EA580C] px-10 py-4 rounded-full font-medium hover:bg-gray-100 transition-all shadow-xl"
              >
                Empezar ahora
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#EA580C] to-[#FF6B00] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">BirdieDigital</span>
            </div>
            <p className="text-white/70 mb-6">
              Agencia de growth digital que combina estrategia, data y creatividad para impulsar tu negocio.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} BirdieDigital. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
