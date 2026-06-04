import { motion } from 'framer-motion';
import StatCard from './StatCard';

export default function HeroSection({ hero, typedRole, profile }) {
  return (
    <section id="home" className="relative overflow-hidden pt-10 lg:pt-14">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 xl:px-10">
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.35em] text-cyan-200">{hero.badge}</span>
            <h1 className="mt-8 max-w-2xl text-4xl font-semibold tracking-[-0.02em] leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-6xl">
              {hero.headingPrefix}{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-slate-100 to-violet-300 bg-clip-text text-transparent">{hero.headingHighlight}</span>{' '}
              {hero.headingSuffix}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{hero.summary}</p>
            <p className="mt-3 h-6 min-h-[1.5rem] whitespace-nowrap overflow-hidden text-sm uppercase tracking-[0.35em] text-cyan-300/80">{typedRole}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="flex flex-wrap items-center gap-4">
            {hero.ctas.map((cta) => (
              <a key={cta.label} href={cta.href} className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${cta.variant === 'primary' ? 'bg-cyan-400 text-slate-950 shadow-[0_18px_50px_rgba(56,189,248,0.18)] hover:scale-[1.02]' : 'border border-white/10 bg-white/5 text-slate-100 hover:border-cyan-300/30 hover:bg-cyan-400/10'}`}>
                {cta.label}
              </a>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="grid gap-4 sm:grid-cols-3">
            {hero.metrics.map((metric) => (
              <StatCard key={metric.label} title={metric.label} value={metric.value} />
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85, delay: 0.2 }} className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-12 top-10 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -right-12 -bottom-4 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#08101F]/90 p-6 shadow-[0_40px_120px_rgba(15,23,42,0.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_24%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_24%)]" />
            <div className="relative rounded-[2rem] border border-white/10 bg-[#08111F] p-5">
              <div className="absolute inset-0 rounded-[2rem] border border-cyan-300/20 opacity-0 transition duration-500 hover:opacity-100" />
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#102040] via-[#0a1324] to-[#140e28] p-1">
                <img src={profile.image} alt={profile.alt} className="h-full w-full rounded-[1.75rem] object-cover" />
              </div>
              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-300 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">{profile.role}</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{profile.name}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">{profile.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
