import {
  BrainCircuit,
  BriefcaseBusiness,
  Database,
  Gauge,
  Github,
  Globe,
  Layers3,
  MapPin,
  MessageSquareText,
  ServerCog,
  Sparkles,
  Speech,
  Users,
  Cloud,
  Wrench,
  Network,
  Layout,
} from "lucide-react";

export const navigationItems = [
  { label: "About", href: "#summary" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export const heroRoles = [
  "Python Developer ",
  "Gen Ai Developer ",
  "AI Backend Developer",
  "FastAPI Developer",
  "Software Engineer",
];

export const portfolioData = {
  name: "Durga sai prasad Pragada",
  title: "Python & AI Engineer",
  location: "Hyderabad, India",
  profilePhoto: "/profile/durgasaiprasadp.jpg",
  email: "durgapragada204@gmail.com",
  phone: "+91 7780158135",
  linkedin: "https://www.linkedin.com/in/pragadadurgasaiprasad",
  github: "https://github.com/Durga-7780",
  summary:
    "Python & AI Engineer with around 2+ years of experience building scalable backend systems and AI-driven applications. Proficient in Python (Core, OOP, Async) and FastAPI for developing high-performance REST APIs using microservices architecture.\nExperienced in LLM integration (OpenAI, Groq), RAG, LangChain, and real-time STT/TTS pipelines. Skilled in MySQL, Redis, and deployment using Docker, Linux, and AWS.",
  futureVision:
    "I am interested in building intelligent CCTV systems powered by AI that can automatically detect suspicious activities, theft attempts, or unusual behaviour in real time.\nTraditional CCTV systems only record footage and require manual monitoring, which often delays response to security incidents.\nMy vision is to develop a smart surveillance platform that analyzes live video streams using computer vision and AI models to identify events, generate alerts, and provide actionable insights. This approach can transform passive CCTV cameras into proactive security systems for retail stores, offices, and public spaces."
};

export const metrics = [
  { label: "Experience", value: "2+ Years" },
  { label: "Focus", value: "AI Integration" },
  { label: "Core Stack", value: "Python, FastAPI" },
];

export const skillCategories = [
  {
    title: "Programming",
    icon: Layers3,
    skills: ["Python (Core, OOP, Async Programming)","Pandas (Data Manipulation & Analysis)"],
  },
  {
    title: "Backend Development",
    icon: ServerCog,
    skills: [
      "FastAPI",
      "REST API Development",
      "Authentication & Authorization (JWT, OAuth basics)",
      "File Upload & Processing",
      "API Design & Integration",
    ],
  },
  {
    title: "AI / Machine Learning",
    icon: BrainCircuit,
    skills: [
      "Large Language Models (OpenAI, Groq)",
      "Prompt Engineering",
      "Natural Language Processing (NLP)",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "Speech-to-Text (STT)",
      "Text-to-Speech (TTS)",
      "Crew AI",
      "Agentic AI",
    ],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Redis (Caching, Session Management)"],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    skills: ["AWS (EC2, S3 – basic usage)", "Render (Deployment)", "Docker (Basic)"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git, GitHub, GitLab",
      "Linux",
    ],
  },
  {
    title: "System Design (Basic)",
    icon: Network,
    skills: ["Microservices Architecture (Basic)", "API Design Patterns", "Caching Strategies"],
  },
  {
    title: "Frontend (Basic)",
    icon: Layout,
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

export const experienceItems = [
  {
  company: "Infosys Limited",
  location: "Bangalore, India",
  duration: "Sept 2026 – Present",
  projects: [
    {
      title: "Associate Business Analyst — Python & GenAI",
      points: [
        "Developing applications and backend services using Python.",
        "Building and integrating Generative AI and LLM-based solutions.",
        "Working on RAG (Retrieval-Augmented Generation), prompt engineering, and model orchestration.",
        "Developing REST APIs and backend services for AI-powered applications.",
        "Integrating AI models with enterprise systems and external tools.",
        "Working with ML/NLP concepts and cloud platforms including Azure, AWS, and GCP.",
        "Using Docker, Git, and CI/CD practices for application development and deployment.",
        "Optimizing AI applications for scalability, performance, and response quality.",
      ],
    },
  ],
},
    {
    company: "Deepija Telecom Private Limited",
    location: "Hyderabad, India",
    duration: "Sept 2024 - August 2026",
    projects: [
	{
		title: "Software Engineer — Python & GenAI",
		points: [],
	},
      {
        title: "ConVox Platform Management System",
	points: [
          "Developed backend services including Data Ingestion APIs and workflow orchestration.",
          "Built MySQL reporting modules for user activity and system metrics.",
          "Improved performance by about 60% using Redis caching.",
          "Conducted structured testing and API validation using Postman.",
          "Worked with product and engineering teams to implement scalable backend systems.",
        ],
      },
      {
        title: "Real-Time AI Integration with ConVox",
        points: [
          "Developed WebSocket bridge for real-time AI service integration.",
          "Implemented event-driven architecture for streaming workflows.",
          "Built async low-latency modules using Python asyncio and multithreading.",
          "Implemented webhook-based JSON reporting system.",
          "Improved reliability with Redis caching, retry logic, and thread synchronization.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: "Enterprise AI Voice & Chatbot Platform",
    description:
      "A centralized server platform for creating customizable prompt and RAG-based voicebots and chatbots. Features LiveKit SIP support, low-level latency optimization, multi-language/multi-voice capabilities, and built-in Quality Analysis for real-time interactions.",
    stack: ["Python", "FastAPI", "LiveKit SIP", "RAG", "LLMs", "RAG Chatbot", "VoiceBot" , "Langchain", "CrewAi"],
    github: "#",
    demo: "https://natvoice.store",
    webpage: "https://www.natvoice.store",
  },
  {
    title: "AI Voice Chat (Hospital Website Chatbot)",
    description:
      "A website-based AI chatbot built for hospitals to assist patients with common queries and provide fast, accessible information through a simple web chat experience.",
    stack: ["Python", "FastAPI", "LLMs", "Web Chat", "Healthcare"],
    github: "#",
    demo: "https://www.aivoicechat.site/",
    webpage: "https://www.aivoicechat.site/",
  },
  {
    title: "AI Document Assistant",
    description:
      "AI-powered document analysis system using PDF text extraction, embeddings, ChromaDB vector search, and Groq-based RAG responses for summaries, Q&A, and follow-up insights.",
    stack: ["Python", "Groq", "ChromaDB", "RAG", "PDF Processing"],
    github: "https://huggingface.co/spaces/Durga-7780/AiChatbot/tree/main",
    demo: "https://huggingface.co/spaces/Durga-7780/AiChatbot",
  },
  {
    title: "AI HR Attendance Management System",
    description:
      "HR attendance platform with analytics, privacy-aware employee insights, and an AI assistant for operational queries, designed for deployment on Render.",
    stack: ["Python", "FastAPI", "Render", "Analytics", "AI Assistant"],
    github: "https://github.com/Durga-7780/Saigo",
    demo: "https://saigo.onrender.com",
  },
];

export const strengths = [
  { title: "Strong problem-solving", icon: Sparkles },
  { title: "AI workflow understanding", icon: BriefcaseBusiness },
  { title: "Quick learner in AI tools", icon: Speech },
  { title: "Communication & teamwork", icon: Users },
];

export const education = [{
  degree: "Masters of Computer Applications (MCA)",
  school: "B V Raju College - Bhimavaram",
  cgpa: "8.0 / 10",
  duration: "2021 - 2023",
}, {
  degree: "Bachelor of Science (B.Sc Statistics)",
  school: "B V Raju College - Bhimavaram",
  cgpa: "8.2 / 10",
  duration: "2018 - 2021",
}
];

export const certificates = [
  {
    title: "Prompt Engineering Basics",
    issuer: "IBM via Coursera",
    description: "Introduces prompt engineering techniques for working with Large Language Models (LLMs) and Generative AI, focusing on prompt design, context structuring, and strategies to guide models in generating accurate and relevant responses.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/6MV88DTVHX9V",
  },
  {
    title: "Generative AI: Introduction and Applications",
    issuer: "IBM via Coursera",
    description: "Learned the fundamentals of generative AI, including how it differs from discriminative AI, its real-world capabilities, and applications across multiple industries. Explored common generative AI models and tools used for generating text, code, images, audio, and video, along with practical insights into how these technologies are applied in modern AI solutions.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/86QLM9YIUX2T",
  }
];

export const socials = [
  { label: "GitHub", href: portfolioData.github, icon: Github },
  { label: "LinkedIn", href: portfolioData.linkedin, icon: Globe },
  { label: "Email", href: `mailto:${portfolioData.email}`, icon: MessageSquareText },
  { label: "Location", href: "https://maps.google.com", icon: MapPin },
];
