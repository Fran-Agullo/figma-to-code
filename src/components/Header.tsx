import { useState } from 'react';
import { Sparkles, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import svgPaths from '../imports/svg-3iai6ops00';
import { BirdieLogo } from './BirdieLogo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[95%] lg:max-w-[1240px] px-4"
        role="banner"
      >
        <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.9)] box-border content-stretch flex items-start justify-between px-[17px] py-[7px] relative rounded-[150px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[150px]" />

          {/* Left Container - Logo */}
          <div className="box-border content-stretch flex items-center px-0 py-[10px] relative shrink-0">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center w-[40px] h-[40px]"
              aria-label="BirdieDigital - Página principal"
            >
              <BirdieLogo />
            </motion.a>
          </div>

          {/* Right Container - Nav & Actions */}
          <div className="basis-0 content-stretch flex grow items-start justify-end min-h-px min-w-px relative self-stretch shrink-0">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2" aria-label="Navegación principal">
              <NavLink href="#servicios">Servicios</NavLink>
              <NavLink href="#proceso-page">Proceso</NavLink>
              <NavLink href="#portfolio-page">Portfolio</NavLink>
              <NavLink href="#pricing-page">Pricing</NavLink>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Contact Button */}
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex box-border content-stretch items-center justify-center min-h-[50px] pb-[15.5px] pt-[14.5px] px-[22px] relative rounded-[100px] shrink-0"
                aria-label="Ir a sección de contacto"
              >
                <div aria-hidden="true" className="absolute border-2 border-[#EA580C] border-solid inset-0 pointer-events-none rounded-[100px]" />
                <span className="font-['Manrope',sans-serif] font-semibold text-[15px] text-[#EA580C] whitespace-nowrap">
                  Contacto →
                </span>
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden box-border content-stretch flex items-center justify-center p-3 relative shrink-0 hover:bg-[rgba(234,88,12,0.08)] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:ring-offset-2"
                aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-[#030711]" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6 text-[#030711]" aria-hidden="true" />
                )}
              </button>

              {/* Desktop Globe Icon */}
              <button
                className="hidden lg:flex box-border content-stretch items-center justify-center p-3 relative shrink-0 cursor-pointer group hover:bg-[rgba(234,88,12,0.08)] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:ring-offset-2"
                aria-label="Cambiar idioma"
              >
                <Globe className="w-6 h-6 text-[#030711] group-hover:text-[#EA580C] transition-colors" aria-hidden="true" />
                <svg className="ml-2 w-3 h-3 text-[#030711] group-hover:text-[#EA580C] transition-colors" fill="currentColor" viewBox="0 0 14 14" aria-hidden="true">
                  <path d={svgPaths.p1b3dd900} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-[100px] left-1/2 -translate-x-1/2 z-40 w-full max-w-[95%] px-4"
            id="mobile-menu"
            role="navigation"
            aria-label="Menú de navegación móvil"
          >
            <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.95)] rounded-3xl p-6 border border-[rgba(0,0,0,0.06)]">
              <div className="flex flex-col gap-4">
                <MobileNavLink href="#servicios" onClick={() => setIsMenuOpen(false)}>
                  Servicios
                </MobileNavLink>
                <MobileNavLink href="#proceso-page" onClick={() => setIsMenuOpen(false)}>
                  Proceso
                </MobileNavLink>
                <MobileNavLink href="#portfolio-page" onClick={() => setIsMenuOpen(false)}>
                  Portfolio
                </MobileNavLink>
                <MobileNavLink href="#pricing-page" onClick={() => setIsMenuOpen(false)}>
                  Pricing
                </MobileNavLink>
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#EA580C] text-white px-6 py-3 rounded-full text-center font-semibold mt-2 focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:ring-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Ir a sección de contacto"
                >
                  Contacto →
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      className="box-border content-stretch flex flex-col items-start p-[20px] rounded-[60px] relative shrink-0 group hover:bg-[rgba(234,88,12,0.08)] transition-colors"
    >
      <span className="font-['Manrope',sans-serif] font-medium text-[15px] text-[#030711] tracking-[0.45px] whitespace-nowrap group-hover:text-[#EA580C] transition-colors">
        {children}
      </span>
    </motion.a>
  );
}

function MobileNavLink({
  href,
  children,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-[#030711] hover:text-[#EA580C] transition-colors font-medium text-lg py-2"
    >
      {children}
    </a>
  );
}
