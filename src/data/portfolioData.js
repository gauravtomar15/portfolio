import { tr } from "framer-motion/client";
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
  FaLayerGroup,
} from "react-icons/fa";
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
  SiStripe,
} from "react-icons/si";

export const portfolioData = {
  siteMeta: {
    title: "Gaurav Tomar | Software Engineer",
    description:
      "A premium software engineer portfolio with modern UI, polished motion, and recruiter-ready presentation.",
  },
  navLinks: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "philosophy", label: "Philosophy" },
    { id: "highlights", label: "Highlights" },
    { id: "contact", label: "Contact" },
  ],
  profile: {
    name: "Gaurav Tomar",
    role: "Software Engineer",
    image: "/photo.jpg",
    alt: "Professional developer portrait",
    description:
      "Focused on polished, high-impact digital products that balance design, performance, and real-world business goals.",
  },
  hero: {
    badge: "Software Engineer",
    headingPrefix: "Building",
    headingHighlight: "scalable",
    headingSuffix:
      "digital products with design precision and AI-driven insights.",
    summary:
      "I build clear, scalable web applications and interfaces for ambitious teams, with strong emphasis on performance, accessibility, and attention to detail.",
    roles: [
      "Frontend Web Developer",
      "Full Stack Developer",
      "Architecture-minded Collaborator",
    ],
    ctas: [
      { label: "Explore Projects", href: "#projects", variant: "primary" },
      { label: "Let’s Collaborate", href: "#contact", variant: "secondary" },
      {
        label: "Download Resume",
        href: "https://drive.google.com/uc?export=download&id=1unTPxTlEE8ZDd44MTxkD6LDdjaVqC8OD",
        variant: "secondary",
      },
    ],
    metrics: [
      { label: "Live products", value: "10+" },
      { label: "Years of experience", value: "1+" },
      { label: "User-focused deliveries", value: "5+" },
    ],
  },
  about: {
    paragraphs: [
      "I'm a Computer Science graduate (B.Tech, AKTU '26, CGPA 8.1) with a strong foundation in full-stack development.",
      " I specialize in building performant, scalable front-end systems using React, TypeScript, and modern CSS — paired with solid backend knowledge in Node.js, Express, and MongoDB. I care deeply about code quality, component architecture, and delivering experiences that feel fast and intentional.",
    ],
    videoUrl: "https://www.youtube.com/embed/J5ju8263jGQ",
    timeline: [
      {
        title: "Started my professional journey",
        year: "2021",
        detail:
          "Built initial SaaS dashboards while mastering modern front-end frameworks and component-driven design.",
      },
      {
        title: "First product launch",
        year: "2023",
        detail:
          "Delivered a polished web application with authentication, responsive UI, and API integrations.",
      },
      {
        title: "Focused on premium engineering",
        year: "2024",
        detail:
          "Adopted motion, system design, and performance-first development in larger collaborative teams.",
      },
    ],
  },
  skills: [
    {
      category: "Frontend",
      icon: FaReact,
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Sass",
        "Redux Toolkit",
        "Context API",
      ],
    },
    {
      category: "Backend",
      icon: SiExpress,
      items: [
        "Node.js",
        "Express.js",
        "REST API",
        "JWT Auth",
        "Socket.io",
        "WebSockets",
      ],
    },
    {
      category: "Database",
      icon: FaDatabase,
      items: ["MongoDB", "MySQL", "Mongoose ODM"],
    },
    {
      category: "Design & Architecture",
      icon: FaLayerGroup,
      items: [
        "Component Systems",
        "Responsive Design",
        "Design Tokens",
        "Scalable Patterns",
      ],
    },
    {
      category: "Tools",
      icon: FaGithub,
      items: ["Git", "GitHub", "Postman", "VS Code", "Netlify"],
    },
    {
      category: "State & Integration",
      icon: SiRedux,
      items: ["Redux Toolkit", "React Query", "Context API", "APIs"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "DevConnect App",
      category: "Full Stack",
      description:
        "Full-stack developer matchmaking platform with real-time chat and secure authentication.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      live: "https://gauravdevsocial.site",
      github: "https://github.com/gauravtomar15/devTinder-Web",
      featured: true,
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      category: "Full Stack",
      description:
        "Scalable real-time messaging system with WebSocket communication and responsive UI.",
      tech: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
      live: "#",
      github: "https://github.com/gauravtomar15/Chat-app",
      featured: true,
    },
    {
      id: 3,
      title: "ReelStream (TMDB API)",
      category: "Frontend",
      description:
        "Feature-rich movie streaming UI with AI-powered search and optimized frontend performance.",
      tech: ["React", "TMDB API", "Tailwind CSS"],
      live: "https://netflix-gpt-6cth.vercel.app/",
      github: "https://github.com/gauravtomar15/NETFLIX_GPT",
      featured: true,
    },
    {
      id: 4,
      title: "College Management System",
      category: "Full Stack",
      description:
        "College education platform with student-teacher interaction, course management, assignments, quizzes, and performance tracking.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      live: "https://smart-project-management-system-o1t.vercel.app",
      github:
        "https://github.com/smart-poject-management/smart-project-management-system",
      featured: false,
    },
  ],
  experience: [
    {
      title: "Senior Frontend Engineer",
      company: "Modern Labs",
      duration: "Jan 2025 - Present",
      description:
        "Leading frontend delivery for high-impact web products, optimizing design systems and performance.",
      bullets: [
        "React architecture",
        "UI system design",
        "Mentored cross-functional teams",
      ],
      tech: ["React", "Tailwind", "Typescript", "Vercel"],
    },
    {
      title: "Full Stack Developer",
      company: "PulseForge",
      duration: "Jun 2023 - Dec 2024",
      description:
        "Built polished SaaS applications with end-to-end engineering, APIs, and recruiter-focused interfaces.",
      bullets: ["Node.js APIs", "Database modeling", "Deployment automation"],
      tech: ["Node.js", "Express", "MongoDB", "Netlify"],
    },
  ],
  philosophy: [
    {
      icon: FaLaptopCode,
      title: "Clean Code",
      description:
        "Writing scalable and maintainable code with reusable components and structured architecture.",
    },
    {
      icon: FaShieldAlt,
      title: "Problem Solving",
      description:
        "Applying strong DSA and logical thinking to build efficient and reliable solutions.",
    },
    {
      icon: FaRocket,
      title: "Performance Focus",
      description:
        "Optimizing applications for faster load times, smooth interactions, and better user experience.",
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Design",
      description:
        "Creating modern interfaces that work seamlessly across mobile, tablet, and desktop devices.",
    },
  ],
  highlights: [
    {
      title: "Frontend Development",
      detail:
        "Building scalable and responsive interfaces using React.js, TypeScript, and Tailwind CSS.",
    },
    {
      title: "Backend Development",
      detail:
        "Developing secure and efficient server-side applications with Node.js and Express.js.",
    },
    {
      title: "DSA & Problem Solving",
      detail:
        "Practicing data structures and algorithms to strengthen logical and optimized thinking.",
    },
    {
      title: "API Integration",
      detail:
        "Integrating REST APIs and handling real-time communication for dynamic applications.",
    },
    {
      title: "Authentication",
      detail:
        "Implementing JWT-based authentication and secure user session management.",
    },
    {
      title: "State Management",
      detail:
        "Managing scalable application state using Redux Toolkit and modern React patterns.",
    },
    {
      title: "Database Management",
      detail:
        "Working with MongoDB and MySQL for efficient data handling and storage.",
    },
    {
      title: "Performance Optimization",
      detail:
        "Optimizing UI rendering, load speed, and overall application performance.",
    },
  ],
  contact: {
    summary:
      "I’m open to software development roles and collaborations. Let’s build scalable and impactful products together.",
    email: "gauravtomar977@gmail.com",
    phone: "+91 9639508340",
    location: "Delhi, India",
  },
  socialLinks: [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/gauravtomar15",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gaurav-tomar-b19a86258/",
    },
  ],
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1unTPxTlEE8ZDd44MTxkD6LDdjaVqC8OD",
};
