import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
const ThankYou = () => {
  return <div className="min-h-screen bg-white font-['Manrope',sans-serif]" lang="es">
      <Header />
      
      <main>
        <section className="pt-32 pb-24 px-6 lg:px-12 min-h-[80vh] flex items-center">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5
          }}>
              <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>
              
              <h1 className="text-5xl md:text-6xl text-[#030711] tracking-tight leading-[1.1] mb-6">¡Gracias por todo Contactarnos!<span className="text-[#EA580C]">Contactarnos!</span>
              </h1>
              
              <p className="text-xl text-[#8a8a8f] mb-8">
                Hemos recibido tu mensaje correctamente. Nuestro equipo lo revisará y te responderá en las próximas 24 horas.
              </p>

              <div className="bg-gradient-to-br from-orange-50/50 to-white p-8 rounded-3xl border border-gray-100 mb-12">
                <h2 className="text-2xl text-[#030711] font-bold mb-6">
                  ¿Qué sigue?
                </h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#EA580C] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#030711] mb-1">
                        Revisión de tu consulta
                      </h3>
                      <p className="text-[#8a8a8f]">
                        Analizaremos tu proyecto y necesidades para preparar la mejor propuesta.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#EA580C] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#030711] mb-1">
                        Contacto inicial
                      </h3>
                      <p className="text-[#8a8a8f]">
                        Te contactaremos por email o teléfono para agendar una llamada de descubrimiento.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#EA580C] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#030711] mb-1">
                        Propuesta personalizada
                      </h3>
                      <p className="text-[#8a8a8f]">
                        Te enviaremos una propuesta detallada adaptada a tus objetivos y presupuesto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-[#030711] font-medium">
                  Mientras tanto, puedes explorar:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/portfolio">
                    <Button size="lg" className="bg-[#EA580C] hover:bg-[#C2410C]">
                      Ver Casos de Éxito
                      <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/blog">
                    <Button size="lg" variant="outline">
                      Leer Nuestro Blog
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-sm text-[#8a8a8f]">
                  ¿Necesitas contactarnos urgentemente?<br />
                  Escríbenos a <a href="mailto:hola@birdiedigital.com" className="text-[#EA580C] hover:underline">hola@birdiedigital.com</a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default ThankYou;