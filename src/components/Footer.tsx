import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Linkedin, Twitter, Instagram, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const servicios = [
    { name: 'Growth Marketing', href: '/servicios#growth-marketing' },
    { name: 'SEO & Content', href: '/servicios#seo-content' },
    { name: 'Diseño Web & UX', href: '/servicios#diseno-web' },
    { name: 'Desarrollo Digital', href: '/servicios#desarrollo' },
    { name: 'Estrategia Digital', href: '/servicios#estrategia' },
    { name: 'Analytics & Data', href: '/servicios#analytics' },
  ];

  const empresa = [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Proceso', href: '/proceso' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ];

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
              <Link to="/contacto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#EA580C] px-10 py-4 rounded-full font-medium hover:bg-gray-100 transition-all shadow-xl"
                >
                  Empezar ahora
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#EA580C] to-[#FF6B00] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">BirdieDigital</span>
            </Link>
            <p className="text-white/70 mb-6">
              Agencia de growth digital que combina estrategia, data y creatividad para impulsar tu negocio.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#EA580C] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#EA580C] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#EA580C] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              {servicios.map((servicio) => (
                <li key={servicio.name}>
                  <Link to={servicio.href} className="text-white/70 hover:text-white transition-colors">
                    {servicio.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {empresa.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/70 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:hola@birdiedigital.com" className="hover:text-white transition-colors">
                  hola@birdiedigital.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+34123456789" className="hover:text-white transition-colors">
                  +34 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} BirdieDigital. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <Link to="/privacidad" className="hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link to="/terminos" className="hover:text-white transition-colors">
                Términos
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
