import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos digitales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article 
              key={project.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#030711] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl text-[#030711] font-semibold mb-2 group-hover:text-[#EA580C] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#8a8a8f] mb-3">{project.subtitle}</p>
                <p className="text-[#666666] mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm">
                    <span className="text-[#EA580C] font-bold text-lg">{project.metrics.growth}</span>
                    <span className="text-[#8a8a8f] ml-1">crecimiento</span>
                  </div>
                  
                  <Link 
                    to={`/case-study/${project.id}`}
                    className="flex items-center gap-2 text-[#EA580C] font-medium group-hover:gap-3 transition-all"
                  >
                    Ver caso
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
