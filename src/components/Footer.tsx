import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Linkedin, Instagram, Phone, MapPin, ArrowRight } from 'lucide-react';
export function Footer({ className = "" }: { className?: string }) {
  return <footer className={`bg-[#030711] text-white pt-20 pb-8 px-6 lg:px-12 ${className}`} role="contentinfo">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#EA580C] to-[#FF6B00] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">BirdieAgency</span>
            </Link>
            <p className="text-white/70 mb-6">
              Transformamos la confusión y la fricción digital en experiencias de marca claras, memorables y funcionales.
            </p>
            <p className="text-white/50 text-sm mb-6">
              © 2025
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#EA580C] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#EA580C] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/servicios" className="text-white/70 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/70 hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-white/70 hover:text-white transition-colors">
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/politica-privacidad" className="text-white/70 hover:text-white transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="text-white/70 hover:text-white transition-colors">
                  Política de cookies
                </Link>
              </li>
              <li>
                <Link to="/terminos-servicio" className="text-white/70 hover:text-white transition-colors">
                  Términos de servicio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:birdieagency@gmail.com" className="hover:text-white transition-colors">
                  birdieagency@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+34664344657" className="hover:text-white transition-colors">
                  +34 664 344 657
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>;
}