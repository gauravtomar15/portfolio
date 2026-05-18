import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaShieldAlt,
  FaRocket,
  FaMobileAlt,
  FaLayerGroup
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiRedux,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiDocker,
  SiGithubactions,
  SiFigma,
  SiExpress,
  SiFirebase,
  SiStripe
} from 'react-icons/si';

export const portfolioData = {
  siteMeta: {
    title: 'Gaurav Tomar | Software Engineer',
    description: 'A premium software engineer portfolio with modern UI, polished motion, and recruiter-ready presentation.'
  },
  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'contact', label: 'Contact' }
  ],
  profile: {
    name: 'Gaurav Tomar',
    role: 'Software Engineer',
    image: '/photo.jpg',
    alt: 'Professional developer portrait',
    description: 'Focused on polished, high-impact digital products that balance design, performance, and real-world business goals.'
  },
  hero: {
    badge: 'Software Engineer',
    headingPrefix: 'Building',
    headingHighlight: 'scalable',
    headingSuffix: 'digital products with design precision and AI-driven insights.',
    summary: 'I build clear, scalable web applications and interfaces for ambitious teams, with strong emphasis on performance, accessibility, and attention to detail.',
    roles: ['Frontend Web Developer', 'Full Stack Developer','Architecture-minded Collaborator'],
    ctas: [
      { label: 'Explore Projects', href: '#projects', variant: 'primary' },
      { label: 'Let’s Collaborate', href: '#contact', variant: 'secondary' },
      { label: 'Download Resume', href: '/resume.pdf', variant: 'secondary' }
    ],
    metrics: [
      { label: 'Live products', value: '16+' },
      { label: 'Years of experience', value: '4+' },
      { label: 'User-focused deliveries', value: '12+' }
    ]
  },
  about: {
    paragraphs: [
      'I deliver polished digital products that feel premium, intentional, and easy to use. My approach combines modern front-end craftsmanship with strong architecture and thoughtful motion.',
      'I enjoy collaborating on product design, building reusable systems, and turning strategic requirements into fast, recruiter-ready experiences.'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    timeline: [
      {
        title: 'Started my professional journey',
        year: '2021',
        detail: 'Built initial SaaS dashboards while mastering modern front-end frameworks and component-driven design.'
      },
      {
        title: 'First product launch',
        year: '2023',
        detail: 'Delivered a polished web application with authentication, responsive UI, and API integrations.'
      },
      {
        title: 'Focused on premium engineering',
        year: '2024',
        detail: 'Adopted motion, system design, and performance-first development in larger collaborative teams.'
      }
    ]
  },
  skills: [
    {
      category: 'Frontend',
      icon: FaReact,
      items: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend',
      icon: SiExpress,
      items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication']
    },
    {
      category: 'Database',
      icon: FaDatabase,
      items: ['MongoDB', 'MySQL', 'Firebase', 'Redis']
    },
    {
      category: 'Design & Architecture',
      icon: FaLayerGroup,
      items: ['Component Systems', 'Responsive Design', 'Design Tokens', 'Scalable Patterns']
    },
    {
      category: 'Tools',
      icon: FaGithub,
      items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Netlify']
    },
    {
      category: 'State & Integration',
      icon: SiRedux,
      items: ['Redux Toolkit', 'React Query', 'Context API', 'APIs']
    }
  ],
  projects: [
    {
      id: 1,
      title: 'SaaS Operations Dashboard',
      category: 'Full Stack',
      description: 'A premium operations workspace built for teams, integrating secure auth, live metrics, and polished analytics UI.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      live: '#',
      github: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Recruiter Portfolio UI',
      category: 'Frontend',
      description: 'A focused portfolio interface with strong visual hierarchy, motion, and recruiter-friendly interactions.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS'],
      live: '#',
      github: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Realtime Collaboration App',
      category: 'Backend',
      description: 'A modern collaboration backend with API-first design, socket updates, and secure session handling.',
      tech: ['Node.js', 'Express', 'Socket.io', 'Redis'],
      live: '#',
      github: '#',
      featured: false
    },
    {
      id: 4,
      title: 'AI Notes Companion',
      category: 'AI/Other',
      description: 'A notes assistant prototype with AI-driven summaries and fast, responsive mobile-first UI.',
      tech: ['React', 'Firebase', 'OpenAI'],
      live: '#',
      github: '#',
      featured: false
    }
  ],
  experience: [
    {
      title: 'Senior Frontend Engineer',
      company: 'Modern Labs',
      duration: 'Jan 2025 - Present',
      description: 'Leading frontend delivery for high-impact web products, optimizing design systems and performance.',
      bullets: ['React architecture', 'UI system design', 'Mentored cross-functional teams'],
      tech: ['React', 'Tailwind', 'Typescript', 'Vercel']
    },
    {
      title: 'Full Stack Developer',
      company: 'PulseForge',
      duration: 'Jun 2023 - Dec 2024',
      description: 'Built polished SaaS applications with end-to-end engineering, APIs, and recruiter-focused interfaces.',
      bullets: ['Node.js APIs', 'Database modeling', 'Deployment automation'],
      tech: ['Node.js', 'Express', 'MongoDB', 'Netlify']
    }
  ],
  philosophy: [
    {
      icon: FaLaptopCode,
      title: 'Readable Code',
      description: 'Code that is easy to maintain and evolves with the product is central to every implementation.'
    },
    {
      icon: FaShieldAlt,
      title: 'Performance-first',
      description: 'Fast load times and responsive interactions make the experience feel premium.'
    },
    {
      icon: FaRocket,
      title: 'Intentional Motion',
      description: 'Motion should feel meaningful, not distracting — supporting clarity and hierarchy.'
    },
    {
      icon: FaMobileAlt,
      title: 'Responsive Focus',
      description: 'Every design adapts smoothly from mobile to large desktop layouts.'
    }
  ],
  highlights: [
    { title: 'Problem Solving', detail: 'Designing solutions with clear architecture and strong UI/UX foundations.' },
    { title: 'DSA Practice', detail: 'Continuously refining algorithm thinking to improve technical decision-making.' },
    { title: 'API Integration', detail: 'Building reliable REST and real-time systems for modern products.' },
    { title: 'Authentication', detail: 'Implementing secure auth flows with best-practice session handling.' },
    { title: 'Real-time Systems', detail: 'Delivering live updates with efficient event-driven architecture.' },
    { title: 'Optimization', detail: 'Improving load speed, bundle size, and runtime performance.' },
    { title: 'Responsive UI', detail: 'Creating polished layouts across devices and viewport sizes.' },
    { title: 'State Management', detail: 'Maintaining predictable state with scalable logic patterns.' }
  ],
  contact: {
    summary: 'I’m available for product roles and collaborations. Let’s design and ship something exceptional together.',
    email: 'hello@developer.com',
    phone: '+1 234 567 890',
    location: 'Remote / USA'
  },
  socialLinks: [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/username' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/username' },
    { icon: SiFigma, label: 'Figma', href: 'https://www.figma.com' }
  ],
  resumeLink: '/resume.pdf'
};
