import { motion } from 'framer-motion';

export default function TimelineItem({ entry }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-glow"
    >
      <div className="absolute inset-y-0 left-0 w-0.5 bg-cyan-400/20" />
      <div className="relative ml-6">
        <span className="mb-3 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">{entry.year}</span>
        <h3 className="text-2xl font-semibold text-slate-100">{entry.title}</h3>
        {entry.company && entry.duration && (
          <p className="mt-2 text-sm text-slate-400">{entry.company} • {entry.duration}</p>
        )}
        {entry.description && <p className="mt-4 text-sm leading-7 text-slate-400">{entry.description}</p>}
        {entry.detail && <p className="mt-4 text-sm leading-7 text-slate-400">{entry.detail}</p>}
        {entry.bullets?.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {entry.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
