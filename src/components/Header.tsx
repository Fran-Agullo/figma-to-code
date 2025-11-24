import { useState } from 'react';
import { Sparkles, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import svgPaths from '../imports/svg-3iai6ops00';
import birdieLogo from '@/assets/birdie-logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-6 left-6 right-6 z-50"
        role="banner"
      >
        <div className="backdrop-blur-xl bg-white/70 border border-white/20 shadow-lg shadow-black/5 box-border flex items-center justify-between px-[50px] py-[7px] rounded-[150px] w-full">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[150px]" />

          {/* Left Container - Logo */}
          <div className="box-border content-stretch flex items-center px-0 py-[8px] relative shrink-0">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
                aria-label="BirdieAgency - Página principal"
              >
                <img 
                  src={birdieLogo} 
                  alt="BirdieAgency" 
                  className="h-[40px] w-auto"
                />
              </motion.div>
            </Link>
          </div>

          {/* Right Container - Nav & Actions */}
          <div className="flex items-center justify-end gap-2 flex-1">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/servicios">Servicios</NavLink>
              <NavLink to="/portfolio">Proyectos</NavLink>
              <NavLink to="/sobre-nosotros">Sobre nosotros</NavLink>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Contact Button */}
              <Link to="/contacto" className="hidden sm:flex">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="box-border content-stretch flex items-center justify-center min-h-[50px] pb-[15.5px] pt-[14.5px] px-[22px] relative rounded-[100px] shrink-0"
                  aria-label="Ir a página de contacto"
                >
                  <div aria-hidden="true" className="absolute border-2 border-[#EA580C] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  <span className="font-['Manrope',sans-serif] font-semibold text-[15px] text-[#EA580C] whitespace-nowrap">
                    Contactanos
                  </span>
                </motion.div>
              </Link>

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
            className="lg:hidden fixed top-[100px] z-40 flex justify-center px-4 w-full"
            id="mobile-menu"
            role="navigation"
            aria-label="Menú de navegación móvil"
          >
            <div className="backdrop-blur-xl bg-white/70 border border-white/20 shadow-lg rounded-3xl p-6 w-full max-w-[500px]">
              <div className="flex flex-col gap-4">
                <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
                  Inicio
                </MobileNavLink>
                <MobileNavLink to="/servicios" onClick={() => setIsMenuOpen(false)}>
                  Servicios
                </MobileNavLink>
                <MobileNavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>
                  Proyectos
                </MobileNavLink>
                <MobileNavLink to="/sobre-nosotros" onClick={() => setIsMenuOpen(false)}>
                  Sobre nosotros
                </MobileNavLink>
                <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#EA580C] text-white px-6 py-3 rounded-full text-center font-semibold mt-2 focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:ring-offset-2"
                    aria-label="Ir a página de contacto"
                  >
                    Contactanos
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="box-border content-stretch flex flex-col items-start p-[12px] rounded-[60px] relative shrink-0 group hover:bg-[rgba(234,88,12,0.08)] transition-colors"
      >
        <span className="font-['Manrope',sans-serif] font-medium text-[15px] text-[#030711] tracking-[0.45px] whitespace-nowrap group-hover:text-[#EA580C] transition-colors">
          {children}
        </span>
      </motion.div>
    </Link>
  );
}

function MobileNavLink({
  to,
  children,
  onClick
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-[#030711] hover:text-[#EA580C] transition-colors font-medium text-lg py-2"
    >
      {children}
    </Link>
  );
}
