import { motion } from 'framer-motion';

export function FAQ() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-5xl text-[#030711] tracking-tight leading-[1.15] mb-6">
            Preguntas <span className="text-[#EA580C]">frecuentes</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
