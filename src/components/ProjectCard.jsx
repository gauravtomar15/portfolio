import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="glass-card flex min-h-[18rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-glow transition-shadow duration-300"
    >
      <div>
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">{project.category}</span>
          {project.featured && <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-violet-300">Featured</span>}
        </div>
        <h3 className="text-2xl font-semibold text-slate-100">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={project.github} className="inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-400/15" target="_blank" rel="noreferrer">GitHub</a>
        <a href={project.live} className="inline-flex items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200 transition hover:border-violet-300/40 hover:bg-violet-400/15" target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    </motion.article>
  );
}
