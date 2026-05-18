import { motion } from 'framer-motion';

export default function SectionHeading({ number, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-10 max-w-3xl"
    >
      <div className="mb-3 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-cyan-300/90">
        <span className="inline-flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200">{number}</span>
        <span>{title}</span>
      </div>
      <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">{subtitle}</h2>
    </motion.div>
  );
}
