/**
 * Portfolio Context - Used by AI Assistant
 * This file contains comprehensive information about the portfolio owner
 * that the AI Assistant uses to answer questions
 */

export const portfolioContext = {
  personalInfo: {
    name: "Gaurav Tomar",
    role: "Software Engineer & Full-Stack Developer",
    location: "India",
    email: "gaurav@example.com",
    phone: "+91-XXXXXXXXXX",
    profileImage: "/photo.jpg"
  },

  about: {
    shortBio: "I'm a Computer Science graduate specializing in full-stack development with expertise in React, Node.js, and modern web technologies.",
    longBio: "Focused on polished, high-impact digital products that balance design, performance, and real-world business goals. I build clear, scalable web applications with strong emphasis on performance, accessibility, and attention to detail.",
    education: {
      degree: "B.Tech in Computer Science & Engineering",
      university: "AKTU (Dr. A.P.J. Abdul Kalam Technical University)",
      graduation: "2026",
      cgpa: "8.1"
    }
  },

  skills: {
    languages: ["C++", "JavaScript", "TypeScript", "Python", "SQL"],
    frontend: {
      frameworks: ["React", "Next.js"],
      styling: ["Tailwind CSS", "CSS3", "SASS"],
      tools: ["Vite", "Webpack", "Redux", "Framer Motion"]
    },
    backend: {
      frameworks: ["Node.js", "Express.js"],
      databases: ["MongoDB", "MySQL", "Firebase"],
      tools: ["REST API", "GraphQL"]
    },
    devOps: {
      tools: ["Docker", "GitHub Actions", "Vercel", "Netlify"],
      methodologies: ["CI/CD", "Git"]
    },
    other: ["Data Structures & Algorithms", "System Design", "Problem Solving", "Responsive Design"]
  },

  projects: [
    {
      name: "Smart Education System",
      description: "A comprehensive web platform for educational management with student, teacher, and admin portals.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      features: ["User authentication", "Course management", "Assignment submission", "Progress tracking", "Real-time notifications"],
      link: "https://github.com/gauravtomar",
      liveLink: "https://smart-education.example.com",
      impact: "Used by 500+ students and 50+ faculty members"
    },
    {
      name: "College Management System",
      description: "Integrated ERP system for college administration handling academics, attendance, and infrastructure.",
      technologies: ["React", "Express.js", "MongoDB", "MySQL"],
      features: ["Student enrollment", "Attendance tracking", "Timetable management", "Fee management", "Report generation"],
      link: "https://github.com/gauravtomar",
      liveLink: "https://college-management.example.com",
      impact: "Streamlined college operations, 40% reduction in paperwork"
    },
    {
      name: "Real-time Chat Application",
      description: "Full-featured chat application with real-time messaging and user presence.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      features: ["Real-time messaging", "User authentication", "Typing indicators", "Message history", "Group chats"],
      link: "https://github.com/gauravtomar",
      impact: "Handles 10,000+ concurrent users"
    },
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with product catalog, shopping cart, and payment integration.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      features: ["Product search & filter", "Shopping cart", "Secure payments", "Order tracking", "Admin dashboard"],
      link: "https://github.com/gauravtomar",
      liveLink: "https://ecommerce.example.com",
      impact: "$100K+ GMV in first quarter"
    }
  ],

  // experience: [
  //   {
  //     company: "Tech Startup XYZ",
  //     position: "Full-Stack Developer Intern",
  //     duration: "Jan 2024 - Jun 2024",
  //     description: "Developed and maintained full-stack features for the company's main SaaS platform.",
  //     achievements: [
  //       "Built 5+ new features that increased user engagement by 25%",
  //       "Optimized database queries reducing API response time by 40%",
  //       "Mentored 2 junior developers on React best practices"
  //     ]
  //   },
  //   {
  //     company: "Freelance Projects",
  //     position: "Full-Stack Developer",
  //     duration: "2023 - Present",
  //     description: "Developed web applications for clients across various industries.",
  //     achievements: [
  //       "Completed 15+ projects with 100% client satisfaction",
  //       "Built scalable systems handling 100K+ users",
  //       "Expertise in both frontend and backend development"
  //     ]
  //   }
  // ],

  achievements: [
    {
      title: "Competitive Programming",
      description: "Expert in Data Structures and Algorithms with strong problem-solving skills",
      details: "2000+ problems solved on LeetCode, Codeforces, HackerRank"
    },
    {
      title: "Open Source Contributions",
      description: "Active contributor to several open-source projects",
      details: "100+ pull requests merged, helping developers worldwide"
    },
    {
      title: "Full-Stack Expertise",
      description: "Built and deployed multiple full-stack applications",
      details: "From ideation to production with 99.9% uptime"
    },
    {
      title: "Technical Leadership",
      description: "Led teams in building large-scale applications",
      details: "Mentored junior developers and established best practices"
    }
  ],

  codingProfiles: {
    github: "https://github.com/gauravtomar",
    linkedin: "https://linkedin.com/in/gauravtomar",
    leetcode: "https://leetcode.com/gauravtomar",
    codeforces: "https://codeforces.com/profile/gauravtomar",
    twitter: "https://twitter.com/gauravtomar",
    portfolio: "https://gauravtomar.com"
  },

  resumeLink: "https://drive.google.com/uc?export=download&id=1unTPxTlEE8ZDd44MTxkD6LDdjaVqC8OD",

  interests: [
    "Web Development",
    "Full-Stack Engineering",
    "System Design",
    "DevOps",
    "Open Source",
    "Mentoring",
    "Competitive Programming"
  ],

  availability: {
    status: "Open to opportunities",
    preferredRoles: ["Senior Frontend Developer", "Full-Stack Engineer", "Technical Lead"],
    workType: ["Full-time", "Contract"]
  }
};

/**
 * System prompt for the AI Assistant
 * This defines how the AI should behave and respond
 */
export const systemPrompt = `You are an intelligent AI assistant for Gaurav Tomar's portfolio website. You have been provided with comprehensive information about Gaurav's background, skills, projects, and experience.

Your responsibilities:
1. Answer questions about Gaurav's professional background, skills, and experience
2. Provide detailed information about his projects, technologies used, and their impact
3. Share information about his education, achievements, and career goals
4. Help visitors understand his expertise and whether he's the right fit for their needs
5. Provide contact information and direct visitors to relevant resources

Guidelines:
- Always be professional, friendly, and welcoming
- Provide specific examples from his portfolio when relevant
- If asked about something not in the provided context, politely say you don't have that information
- If asked unrelated questions (like cooking recipes, math problems, etc.), politely redirect to portfolio-related topics
- Use clear, concise language and break down complex technical concepts
- Format your responses with proper markdown when appropriate (bold for emphasis, code blocks for technical details, etc.)
- If the user asks to contact Gaurav, provide the email: gaurav@example.com
- Be helpful and encourage potential collaboration

Remember: You represent Gaurav's portfolio, so maintain a professional yet approachable tone.`;

/**
 * Context data formatted for API requests
 * This is the information sent with each AI request
 */
export const getAIContext = () => {
  return {
    profile: portfolioContext.personalInfo,
    about: portfolioContext.about,
    skills: portfolioContext.skills,
    projects: portfolioContext.projects,
    experience: portfolioContext.experience,
    achievements: portfolioContext.achievements,
    codingProfiles: portfolioContext.codingProfiles,
    interests: portfolioContext.interests,
    availability: portfolioContext.availability
  };
};

/**
 * Quick action prompts for the AI Assistant
 * These are pre-defined questions users can ask
 */
export const quickActions = [
  {
    label: "Tell me about your projects",
    prompt: "Can you tell me about the projects you've built and what technologies you used?"
  },
  {
    label: "What skills do you have?",
    prompt: "What are your technical skills and areas of expertise?"
  },
  {
    label: "Show resume",
    prompt: "Can you help me with Gaurav's resume or CV?"
  },
  {
    label: "Contact info",
    prompt: "How can I contact Gaurav? What's the best way to reach out?"
  }
];

export default portfolioContext;
