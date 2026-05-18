import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <motion.form
      onSubmit={(event) => event.preventDefault()}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65 }}
      className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glow"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Name</span>
          <input type="text" placeholder="Your name" className="w-full rounded-3xl border border-white/10 bg-[#09111F] px-4 py-3 text-sm text-white outline-none ring-1 ring-transparent transition focus:border-cyan-300/40 focus:ring-cyan-300/20" />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          <span>Email</span>
          <input type="email" placeholder="you@example.com" className="w-full rounded-3xl border border-white/10 bg-[#09111F] px-4 py-3 text-sm text-white outline-none ring-1 ring-transparent transition focus:border-cyan-300/40 focus:ring-cyan-300/20" />
        </label>
      </div>
      <label className="mt-4 space-y-2 text-sm text-slate-300">
        <span>Message</span>
        <textarea rows="5" placeholder="Tell me about your next project" className="w-full resize-none rounded-3xl border border-white/10 bg-[#09111F] px-4 py-4 text-sm text-white outline-none ring-1 ring-transparent transition focus:border-cyan-300/40 focus:ring-cyan-300/20" />
      </label>
      <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400/90 to-violet-400/90 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]">
        Send Message
      </button>
    </motion.form>
  );
}
