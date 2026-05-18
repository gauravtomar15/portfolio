import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.9, delay: 0.9 }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#090E19] text-white">
      <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-[#08111F]/90 px-10 py-12 shadow-[0_40px_120px_rgba(9,14,25,0.8)]">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-400/30 border-t-cyan-300" />
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">Loading portfolio</p>
      </div>
    </motion.div>
  );
}
