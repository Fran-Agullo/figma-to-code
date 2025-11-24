import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const plans = [
  {
    name: 'Starter',
    price: 'Desde 500€',
    description: 'Perfecto para empezar tu presencia digital',
    features: [
      'Landing page responsive',
      'Diseño personalizado',
      'Optimización SEO básica',
      '1 mes de soporte',
      'Hosting incluido'
    ],
    cta: 'Empezar ahora',
    popular: false
  },
  {
    name: 'Growth',
    price: 'Desde 1.500€',
    description: 'Para negocios en crecimiento',
    features: [
      'Web completa hasta 5 páginas',
      'Diseño premium personalizado',
      'SEO avanzado',
      'Integración con Analytics',
      '3 meses de soporte',
      'Hosting y dominio incluidos',
      'Sistema de gestión de contenidos'
    ],
    cta: 'Impulsar mi negocio',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    description: 'Soluciones a medida para grandes proyectos',
    features: [
      'Web completa ilimitada',
      'Diseño premium exclusivo',
      'E-commerce completo',
      'Integraciones avanzadas',
      'Dashboard personalizado',
      'Soporte prioritario 24/7',
      'Mantenimiento continuo',
      'Consultoría estratégica'
    ],
    cta: 'Contactar',
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-12 bg-[#f9f7f7]">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <h2 className="text-5xl tracking-tight leading-[1.15] max-w-3xl mx-auto mb-6">
            <span className="text-[#030711]">Pri</span><span className="text-[#EA580C]">cing</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Transparent pricing, no surprises. Choose a plan that fits your needs and scale up whenever you're ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                plan.popular ? 'ring-2 ring-[#EA580C]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EA580C] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Más popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#030711] mb-2">{plan.name}</h3>
                <p className="text-[#64748b] text-sm mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-[#030711]">{plan.price}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#EA580C] flex-shrink-0 mt-0.5" />
                    <span className="text-[#030711]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-[#EA580C] hover:bg-[#dc4e07] text-white'
                    : 'bg-[#030711] hover:bg-[#1e293b] text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
