import { motion } from 'framer-motion';
import { caseStudies } from '../data/caseStudies';

export function Portfolio() {
  const projects = caseStudies.slice(0, 6);

  return (
    <section id="portfolio" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-white via-purple-50/20 to-white">
      <div className="max-w-[1440px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl text-[#030711] tracking-tight leading-[1.15] max-w-3xl mx-auto mb-6">
            Casos de éxito que <span className="text-[#EA580C]">hablan por sí solos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all">
              <div className="p-6">
                <h3 className="text-2xl text-[#030711] font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-[#8a8a8f] mb-3">{project.subtitle}</p>
                <p className="text-[#030711]">{project.description.substring(0, 150)}...</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
