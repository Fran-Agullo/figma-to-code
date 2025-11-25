import { motion } from 'framer-motion';

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="flex flex-col items-center gap-4"
    >
      {/* Línea vertical */}
      <div className="relative w-[2px] h-32 bg-white/10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-[#EA580C]"
          animate={{
            y: [0, 64, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Mouse icon */}
      <div className="relative w-7 h-11 border-2 border-[#EA580C]/80 rounded-full flex items-start justify-center pt-2">
        {/* Bolita animada del scroll */}
        <motion.div
          className="w-1.5 h-1.5 bg-[#EA580C] rounded-full"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}
