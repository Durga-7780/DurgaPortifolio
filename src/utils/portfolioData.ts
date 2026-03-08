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
    "Python & AI Engineer with 1.5 years of experience developing AI-powered backend applications and LLM-based solutions. Skilled in Python, FastAPI, LangChain, and LLM integration, with hands-on experience building AI pipelines using STT and TTS technologies. Experienced in designing scalable REST APIs, AI workflows, and call analytics systems for real-world applications. Strong understanding of AI system integration, backend architecture, and production deployment.",
  futureVision:
    "I am interested in building intelligent CCTV systems powered by AI that can automatically detect suspicious activities, theft attempts, or unusual behaviour in real time. Traditional CCTV systems only record footage and require manual monitoring, which often delays response to security incidents.My vision is to develop a smart surveillance platform that analyzes live video streams using computer vision and AI models to identify events, generate alerts, and provide actionable insights. This approach can transform passive CCTV cameras into proactive security systems for retail stores, offices, and public spaces."
};

export const metrics = [
  { label: "Experience", value: "1.5+ Years" },
  { label: "Focus", value: "AI Integration" },
  { label: "Core Stack", value: "Python, FastAPI" },
];

export const skillCategories = [
  {
    title: "Programming",
    icon: Layers3,
    skills: ["Python (Core, OOP, Async)"],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    skills: [
      "LLMs (OpenAI, Groq)",
      "Prompt Engineering",
      "NLP",
      "Speech-to-Text (STT)",
      "Text-to-Speech (TTS)",
      "LangChain",
      "RAG",
    ],
  },
  {
    title: "Backend",
    icon: ServerCog,
    skills: ["FastAPI", "REST API Development", "JWT Authentication", "File Upload & Processing"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "Redis"],
  },
  {
    title: "Tools & Platforms",
    icon: Gauge,
    skills: ["Git", "GitHub", "GitLab", "Render", "Linux"],
  },
];

export const experienceItems = [
  {
    company: "Deepija Telecom Private Limited",
    location: "Hyderabad, India",
    duration: "Sept 2024 - Present",
    projects: [
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
    github: "https://github.com/your-username/hr-attendance-ai",
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
},{
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
