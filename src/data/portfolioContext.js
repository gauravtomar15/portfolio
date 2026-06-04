/**
 * Portfolio Context - Used by AI Assistant
 * This file contains comprehensive information about the portfolio owner
 * that the AI Assistant uses to answer questions
 */

export const portfolioContext = {
  personalInfo: {
    name: "Gaurav Tomar",
    role: "Software Developer & Full-Stack Developer",
    location: "India",
    email: "gauravtomar977@gmail.com",
    phone: "+91-9639508340",
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

//   projects: [
//     {
//       name: "Smart Education System",
//       description: "A comprehensive web platform for educational management with student, teacher, and admin portals.",
//       technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
//       features: ["User authentication", "Course management", "Assignment submission", "Progress tracking", "Real-time notifications"],
//       link: "https://github.com/gauravtomar",
//       liveLink: "https://smart-education.example.com",
//       impact: "Used by 500+ students and 50+ faculty members"
//     },
//     {
//       name: "College Management System",
//       description: "Integrated ERP system for college administration handling academics, attendance, and infrastructure.",
//       technologies: ["React", "Express.js", "MongoDB", "MySQL"],
//       features: ["Student enrollment", "Attendance tracking", "Timetable management", "Fee management", "Report generation"],
//       link: "https://github.com/gauravtomar",
//       liveLink: "https://college-management.example.com",
//       impact: "Streamlined college operations, 40% reduction in paperwork"
//     },
//     {
//       name: "Real-time Chat Application",
//       description: "Full-featured chat application with real-time messaging and user presence.",
//       technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
//       features: ["Real-time messaging", "User authentication", "Typing indicators", "Message history", "Group chats"],
//       link: "https://github.com/gauravtomar",
//       impact: "Handles 10,000+ concurrent users"
//     },
//     {
//       name: "College Management System",
// description: "College education platform with student-teacher interaction, course management, assignments, quizzes, and performance tracking.",
// technologies: ["Next.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
// features: [
//   "Student & teacher authentication",
//   "Course and study material management",
//   "Assignment & quiz system",
//   "Attendance and performance tracking",
//   "Admin dashboard"
// ],
//       link: "https://github.com/smart-poject-management/smart-project-management-system",
//       liveLink: "https://smart-project-management-system-o1t.vercel.app",
//       impact: "$100K+ GMV in first quarter"
//     }
//   ],
 projects: [
    {
      id: 1,
      title: 'DevConnect App',
      category: 'Full Stack',
      description: 'Full-stack developer matchmaking platform with real-time chat and secure authentication.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      live: 'https://gauravdevsocial.site',
      github: 'https://github.com/gauravtomar15/devTinder-Web',
      featured: true
    },
    {
      id: 2,
      title: 'Real-Time Chat Application',
      category: 'Full Stack',
      description: 'Scalable real-time messaging system with WebSocket communication and responsive UI.',
      tech: ['React', 'Node.js','Socket.io', 'Tailwind CSS'],
      live: '#',
      github: 'https://github.com/gauravtomar15/Chat-app',
      featured: true
    },
    {
      id: 3,
      title: 'ReelStream (TMDB API)',
      category: 'Frontend',
      description: 'eature-rich movie streaming UI with AI-powered search and optimized frontend performance.',
      tech: ['React', 'TMDB API', 'Tailwind CSS'],
      live: 'https://netflix-gpt-6cth.vercel.app/',
      github: 'https://github.com/gauravtomar15/NETFLIX_GPT',
      featured: true
    },
    {
      id: 4,
      title: 'College Management System',
      category: 'Full Stack Project Management System',
      description: "College education platform with student-teacher interaction, course management, assignments, quizzes, and performance tracking.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      live: 'https://github.com/smart-poject-management/smart-project-management-system',
      github: 'https://github.com/smart-poject-management/smart-project-management-system',
      featured: false
    }
  ],
  experience: [
    {
      company: "Tech Startup XYZ",
      position: "Full-Stack Developer Intern",
      duration: "Jan 2024 - Jun 2024",
      description: "Developed and maintained full-stack features for the company's main SaaS platform.",
      achievements: [
        "Built 5+ new features that increased user engagement by 25%",
        "Optimized database queries reducing API response time by 40%",
        "Mentored 2 junior developers on React best practices"
      ]
    },
    {
      company: "Freelance Projects",
      position: "Full-Stack Developer",
      duration: "2023 - Present",
      description: "Developed web applications for clients across various industries.",
      achievements: [
        "Completed 15+ projects with 100% client satisfaction",
        "Built scalable systems handling 100K+ users",
        "Expertise in both frontend and backend development"
      ]
    }
  ],

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
export const systemPrompt = `You are Gaurav Tomar's AI portfolio assistant. Keep responses INTERMEDIATE and CONCISE.

KEY RULES:
1. Answer in 2-3 sentences maximum (unless asked for details)
2. When asked about PROJECTS: Mention only 2 top projects in 1-2 lines each. Format: "• Project Name: Brief description with tech stack"
3. When asked about SKILLS: List 5-6 key skills only
4. Always be professional and friendly
5. If asked unrelated questions, politely redirect to portfolio topics
6. For contact: provide email: gaurav@example.com
7. Use markdown for emphasis (**bold**) but keep it minimal

ABOUT GAURAV:
- Full-Stack Developer with expertise in React, Node.js, MongoDB, TypeScript, Tailwind CSS
- 4 top projects:  College Management System (React, Node.js, MongoDB) & DevConnect App (React, Node.js, MongoDB, payment integration)
- Open to Full-time/Contract opportunities
- GitHub, LinkedIn, LeetCode profiles available

Remember: Be brief, helpful, and professional. No long explanations.`;

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
