import { motion } from 'framer-motion';

const companies = [
  'Airbnb', 'Uber', 'Stripe', 'Shopify', 'Netflix', 'Spotify',
  'Discord', 'Notion', 'Figma', 'Vercel', 'Linear', 'Framer',
];

export function LogosMarquee() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[#757575] text-sm mb-8 tracking-wide uppercase font-semibold"
        >
          Confían en nosotros
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="flex">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex gap-12 items-center shrink-0"
            >
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="flex items-center justify-center min-w-[160px] h-20 px-6"
                >
                  <span className="text-xl font-semibold text-[#666666]">{company}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
