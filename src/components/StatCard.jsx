import { motion } from 'framer-motion';

export default function StatCard({ title, value }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="glass-card rounded-3xl border border-white/10 bg-[#091124]/80 p-5 shadow-glow transition">
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="mt-3 text-sm text-slate-400">{title}</p>
    </motion.div>
  );
}
