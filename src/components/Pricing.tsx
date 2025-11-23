import { motion } from 'framer-motion';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-12 bg-[#f9f7f7]">
      <div className="max-w-[1440px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl text-[#030711] tracking-tight leading-[1.15] max-w-3xl mx-auto mb-6">
            Planes diseñados para <span className="text-[#EA580C]">cada etapa</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
