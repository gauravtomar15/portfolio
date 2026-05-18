import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass-card rounded-3xl border border-white/10 p-6 shadow-glow"
    >
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
    </motion.div>
  );
}
