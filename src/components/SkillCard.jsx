import { motion } from 'framer-motion';

export default function SkillCard({ icon: Icon, category, items }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass-card group relative overflow-hidden rounded-3xl border border-white/10 p-6 shadow-glow"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20 transition group-hover:bg-cyan-400/15">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{category}</h3>
          <p className="text-sm text-slate-400">Relevant tools & expertise</p>
        </div>
      </div>
      <div className="space-y-3">
        {items.map((skill) => (
          <div key={skill} className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
