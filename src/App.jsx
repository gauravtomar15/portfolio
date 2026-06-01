import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiRedux, SiNextdotjs, SiFigma } from 'react-icons/si';
import NavBar from './components/NavBar';
import SectionHeading from './components/SectionHeading';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import TimelineItem from './components/TimelineItem';
import FeatureCard from './components/FeatureCard';
import ContactForm from './components/ContactForm';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import HeroSection from './components/HeroSection';
import AIAssistant from './components/AIAssistant';
import { portfolioData } from './data/portfolioData';

function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] || 'home');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(pageHeight > 0 ? Math.min(100, Math.round((scrollY / pageHeight) * 100)) : 0);

      const nextActive = sectionIds.reduce((current, id) => {
        const section = document.getElementById(id);
        if (!section) return current;
        const top = section.getBoundingClientRect().top;
        if (top <= 140) return id;
        return current;
      }, sectionIds[0]);

      setActive(nextActive);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return { active, progress };
}

function useTypingEffect(words) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[index % words.length];
    const delay = isDeleting ? 70 : text === currentWord ? 900 : 120;
    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);
      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  return text;
}

function App() {
  const { navLinks, profile, hero, about, skills, projects, experience, philosophy, highlights, contact, socialLinks, resumeLink } = portfolioData;
  const sectionIds = useMemo(() => navLinks.map((item) => item.id), [navLinks]);
  const { active, progress } = useActiveSection(sectionIds);
  const typedRole = useTypingEffect(hero.roles);
  const [projectFilter, setProjectFilter] = useState('All');
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [loading, setLoading] = useState(true);

  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((item) => item.category)))], [projects]);
  const visibleProjects = projects.filter((project) => projectFilter === 'All' || project.category === projectFilter);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => setCursor({ x: event.clientX, y: event.clientY, visible: true });
    const handleMouseLeave = () => setCursor((state) => ({ ...state, visible: false }));

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#0B0F19] text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-radial-glow opacity-80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_36%)]" />
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-white/10">
        <div className="h-full bg-cyan-400/80 transition-all duration-200" style={{ width: `${progress}%` }} />
      </div>

      <NavBar navLinks={navLinks} resumeLink={resumeLink} activeSection={active} brand={profile.name} />

      <main className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8 lg:px-10">
        <HeroSection hero={hero} typedRole={typedRole} profile={profile} />

      <section id="about" className="mt-24">
  {/* Section Heading */}
  <SectionHeading number="01" title="About Me" subtitle="Professional journey, video introduction, and story timeline." />
  
  {/* Main Grid Layout */}
  <div className="grid gap-10 xl:grid-cols-[0.4fr_0.6fr] items-start">
    
    {/* Left Side: About Text Content */}
    <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#08101F]/75 p-8 shadow-glow backdrop-blur-xl">
      {about.paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-base leading-7 text-slate-300">
          {paragraph}
        </p>
      ))}
      
      {/* Skill Tags / Badges */}
      <div className="grid gap-4 sm:grid-cols-2">
        {['Creative problem solving', 'Component-driven UI', 'Fast-loading pages', 'Scalable web systems'].map((item) => (
          <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200">
            {item}
          </div>
        ))}
      </div>
    </div>

    {/* Right Side: Full-Width Video Box (No extra spaces inside) */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="glass-card border border-white/10 p-0 shadow-glow w-full overflow-hidden rounded-[2rem]"
    >
      <div className="flex h-full w-full flex-col bg-[#08111F]/95">
        {/* Video Header */}
        <div className="border-b border-white/10 bg-[#091224]/90 px-5 py-4 text-sm uppercase tracking-[0.28em] text-cyan-200">
          Watch my introduction
        </div>
        
        {/* Full Edge-to-Edge Video Wrapper */}
        <div className="relative aspect-video w-full bg-slate-950 rounded-b-[1.9rem] overflow-hidden">
          <iframe
            className="absolute inset-0 h-full w-full object-cover"
            src={about.videoUrl}
            title="Introduction video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </motion.div>

  </div>

  {/* Timeline Section */}
  <div className="mt-10 grid gap-6 lg:grid-cols-2">
    {/* {about.timeline.map((entry) => (
      <TimelineItem key={entry.year + entry.title} entry={entry} />
    ))} */}
  </div>
</section>

        <section id="skills" className="mt-24">
          <SectionHeading number="02" title="Skills" subtitle="Organized expertise shown in premium skill cards." />
          <div className="grid gap-6 xl:grid-cols-2">
            {skills.map((skill) => (
              <SkillCard key={skill.category} icon={skill.icon} category={skill.category} items={skill.items} />
            ))}
          </div>
        </section>

        <section id="projects" className="mt-24">
          <SectionHeading number="03" title="Featured Projects" subtitle="High-end product showcases with dynamic filters." />
          <div className="flex flex-wrap items-center gap-3 rounded-full border border-white/10 bg-[#08101F]/70 px-4 py-3 text-sm text-slate-300 shadow-glow">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setProjectFilter(category)}
                className={`rounded-full px-4 py-2 transition ${projectFilter === category ? 'bg-cyan-400/20 text-cyan-200' : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="experience" className="mt-24">
          {/* <SectionHeading number="04" title="Work Experience" subtitle="Career milestones shown in a modern timeline." /> */}
          {/* <div className="space-y-6">
            {experience.map((item) => (
              <TimelineItem key={item.title + item.company} entry={item} />
            ))}
          </div> */}
        </section>

        <section id="philosophy" className="mt-24">
          <SectionHeading number="05" title="Development Philosophy" subtitle="How I approach design, engineering, and production quality." />
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {philosophy.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </section>

        <section id="highlights" className="mt-24">
          <SectionHeading number="06" title="Technical Highlights" subtitle="Core strengths that reflect my growth as a full stack developer and problem solver." />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <motion.div whileHover={{ y: -6 }} className="glass-card rounded-3xl border border-white/10 p-6 shadow-glow transition">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24 pb-16">
          <SectionHeading number="07" title="Contact" subtitle="Let’s build something amazing together." />
          <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65 }}
              className="glass-card rounded-[2rem] border border-white/10 bg-[#08101F]/80 p-10 shadow-glow"
            >
              <p className="mb-6 max-w-xl text-lg leading-8 text-slate-300">{contact.summary}</p>
              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200">
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-slate-400">{contact.email}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200">
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-slate-400">{contact.location}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((item) => (
                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-300/30 hover:bg-cyan-400/10">
                      <item.icon className="h-4 w-4 text-cyan-300" />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#090E19]/90 py-8 text-center text-sm text-slate-500">
        <p>Designed with premium motion, glassmorphism, and professional engineering craftsmanship.</p>
        <p className="mt-3 text-slate-400">© 2026 Your Name. Built with React, Tailwind, and Framer Motion.</p>
      </footer>

      <ScrollToTop />
      <AIAssistant />
      {cursor.visible && (
        <>
          <div className="cursor-dot" style={{ left: cursor.x, top: cursor.y }} />
          <div className="cursor-ring" style={{ left: cursor.x, top: cursor.y }} />
        </>
      )}
      {loading && <Loader />}
    </div>
  );
}

export default App;
