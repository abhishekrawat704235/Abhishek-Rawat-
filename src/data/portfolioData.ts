/**
 * =======================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =======================================================================
 * 
 * All personal information, about me text, skills, projects, education,
 * certificates, and contact links are centralized here.
 * You can edit this file to update your portfolio at any time!
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: string; // e.g. "Proficient", "Intermediate", "Exploring"
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image: string;
}

export const portfolioData = {
  personal: {
    name: "Abhishek Rawat",
    shortName: "Abhishek",
    title: "Aspiring AI Engineer & Full Stack Developer",
    statusBadge: "Available for AI & Full-Stack Opportunities",
    location: "New Delhi, India",
    email: "Abhsihekrawat704235@gmail.com",
    phone: "+91 7043258951",
    github: "https://github.com/abhishekrawat704235",
    linkedin: "https://linkedin.com/in/abhishekrawat704235",
    bio: "Building intelligent systems and responsive digital experiences with AI/ML, React, Java, and modern web architectures.",
    tagline: "Bridging the gap between mathematical AI models and intuitive, high-performance web applications."
  },

  about: {
    heading: "Engineering the Future with AI & Code",
    intro: "I am an aspiring AI Engineer and Computer Applications student at Manipal University Jaipur with a deep obsession for scalable architectures, machine learning models, and cinematic web interfaces.",
    paragraphs: [
      "My technical journey began with core algorithmic problem solving and backend development in Java and Spring Boot. As I dove deeper into computing, the transformative potential of Artificial Intelligence captivated me — inspiring me to specialize in machine learning workflows, data analysis, and neural architectures.",
      "Today, I build full-stack web applications using React.js and modern TypeScript, paired with Python-powered data pipelines and intelligent features. I believe software engineering is at its best when rigorous engineering meets fluid, intuitive user interaction.",
      "When I am not coding, I explore generative AI paradigms, train neural network prototypes, and solve algorithmic challenges to continually refine my problem-solving speed and architectural intuition."
    ],
    highlights: [
      { label: "Academic Degree", value: "BCA at Manipal University Jaipur" },
      { label: "Core Focus", value: "Artificial Intelligence & Full-Stack Systems" },
      { label: "Problem Solving", value: "Data Structures, Algorithms & Java" },
      { label: "Location", value: "Uttamnagar, New Delhi, India" }
    ]
  },

  skills: [
    {
      title: "Artificial Intelligence & Data",
      description: "Foundational AI/ML workflows, numerical computing, and data manipulation.",
      skills: [
        { name: "Python", level: "Proficient" },
        { name: "Machine Learning Basics", level: "Intermediate" },
        { name: "Neural Networks (Intro)", level: "Intermediate" },
        { name: "Data Analysis (Pandas/NumPy)", level: "Intermediate" },
        { name: "Prompt Engineering & LLMs", level: "Exploring" }
      ]
    },
    {
      title: "Frontend & UI Motion",
      description: "Crafting fluid, high-DPI responsive interfaces and cinematic animations.",
      skills: [
        { name: "React.js", level: "Proficient" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Proficient" },
        { name: "GSAP & ScrollTrigger", level: "Intermediate" },
        { name: "HTML5 & Modern CSS3", level: "Proficient" }
      ]
    },
    {
      title: "Backend & Databases",
      description: "Robust server-side logic, RESTful API design, and database persistence.",
      skills: [
        { name: "Java & Spring Boot", level: "Intermediate" },
        { name: "RESTful API Architecture", level: "Proficient" },
        { name: "MySQL", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Node.js Basics", level: "Intermediate" }
      ]
    },
    {
      title: "Tools & Development",
      description: "Version control, development environments, and engineering workflows.",
      skills: [
        { name: "Git & GitHub", level: "Proficient" },
        { name: "VS Code", level: "Proficient" },
        { name: "Vite & Modern Bundlers", level: "Proficient" },
        { name: "Postman API Client", level: "Intermediate" },
        { name: "Command Line / Linux", level: "Intermediate" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "neural-motion",
      title: "NeuralMotion Portfolio",
      subtitle: "Scroll-Driven AI Portrait Animation Engine",
      description: "A custom cinematic personal portfolio featuring a 240-frame head-turning animation synchronized with GSAP ScrollTrigger and hardware-accelerated HTML5 Canvas.",
      technologies: ["React", "TypeScript", "GSAP ScrollTrigger", "HTML5 Canvas", "Tailwind CSS"],
      image: "/images/projects/project-neuralmotion.svg",
      githubUrl: "https://github.com/abhishekrawat704235",
      liveUrl: "#",
      featured: true
    },
    {
      id: "omni-market",
      title: "OmniMarket Platform",
      subtitle: "Full-Stack Dynamic E-Commerce Store",
      description: "A responsive e-commerce web application with real-time product filtering, interactive shopping cart management, and RESTful API endpoints.",
      technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Local State Management"],
      image: "/images/projects/project-ecommerce.svg",
      githubUrl: "https://github.com/abhishekrawat704235",
      liveUrl: "#",
      featured: true
    },
    {
      id: "intellipredict",
      title: "IntelliPredict Sandbox",
      subtitle: "Machine Learning Data Evaluation Hub",
      description: "A data exploration and prediction prototype built with Python and React for visualizing dataset distributions and training baseline classifiers.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "React", "Chart.js"],
      image: "/images/projects/project-ml.svg",
      githubUrl: "https://github.com/abhishekrawat704235",
      liveUrl: "#",
      featured: true
    },
    {
      id: "quantum-code",
      title: "QuantumCode Algorithmic Suite",
      subtitle: "Competitive Programming & Data Structures Repository",
      description: "A structured repository of verified algorithmic solutions covering sorting, binary search, graph traversal, and dynamic programming in Java and Python.",
      technologies: ["Java", "Python", "Data Structures", "Algorithms", "Git"],
      image: "/images/projects/project-algo.svg",
      githubUrl: "https://github.com/abhishekrawat704235",
      liveUrl: "#",
      featured: false
    }
  ] as Project[],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Manipal University Jaipur",
      period: "2024 - Present",
      location: "Jaipur / Online",
      description: "Pursuing in-depth computer science fundamentals, object-oriented programming, database management systems, and discrete mathematics.",
      highlights: [
        "Focus on Algorithm Design & Software Architecture",
        "Active member of developer and AI technology circles",
        "Hands-on coursework in Web Technologies and Java Programming"
      ]
    }
  ] as EducationItem[],

  experience: [
    {
      role: "Independent AI & Software Engineering Projects",
      organization: "Self-Directed Development",
      period: "2023 - Present",
      location: "New Delhi, India",
      description: "Building production-grade web applications, training baseline machine learning models, and mastering full-stack software development workflows.",
      achievements: [
        "Engineered scroll-synchronized canvas animation engine supporting 240+ HD frames.",
        "Implemented RESTful backend integrations with MySQL and MongoDB databases.",
        "Continuously practicing competitive programming problems in Java."
      ]
    }
  ] as ExperienceItem[],

  certificates: [
    {
      id: "cert-ai-python",
      title: "Python for Data Science, AI & Development",
      issuer: "IBM / Coursera",
      date: "2024",
      image: "/images/certificates/cert-ai.svg",
      credentialUrl: "#"
    },
    {
      id: "cert-fullstack",
      title: "Full Stack Web Development with React",
      issuer: "Online Certification Program",
      date: "2024",
      image: "/images/certificates/cert-react.svg",
      credentialUrl: "#"
    },
    {
      id: "cert-java-dsa",
      title: "Java Programming & Data Structures",
      issuer: "Developer Training Institute",
      date: "2023",
      image: "/images/certificates/cert-java.svg",
      credentialUrl: "#"
    }
  ] as CertificateItem[]
};
