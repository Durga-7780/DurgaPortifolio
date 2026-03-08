import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { heroRoles, metrics, portfolioData } from "@/utils/portfolioData";

export const HeroSection = () => {
  const typedRole = useTypingEffect(heroRoles);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-gradient hero-gradient-a" />
      <div className="hero-gradient hero-gradient-b" />
      <div className="container hero-grid">
        <Reveal className="space-y-8">
          <div className="hero-chip">
            <Sparkles size={16} />
            <span>Building reliable AI backend systems for production</span>
          </div>

          <div className="space-y-5">
            <p className="hero-kicker">{portfolioData.title}</p>
            <h1 className="hero-title">
              Building scalable LLM infrastructure 
              <span> for fast, reliable, and production-ready AI systems.</span>
            </h1>
            <div className="typing-shell">
              <span className="typing-label">Open To Work on :</span>
              <span className="typing-text">{typedRole}</span>
              <span className="typing-caret" />
            </div>
            <p className="hero-copy">
              <strong>{portfolioData.name}</strong> designs AI-first backend systems with Python,
              FastAPI, LangChain, streaming workflows, and production-ready integrations.
            </p>
          </div>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a className="button-secondary" download href="/resume/durgasaiprasadp.pdf">
              <Download size={18} />
              Download Resume
            </a>
            <a className="button-ghost" href="#contact">
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          <div className="metric-grid">
            {metrics.map((metric) => (
              <div key={metric.label} className="glass-card metric-card">
                <p>{metric.label}</p>
                <span>{metric.value}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-visual-wrap" delay={0.15}>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            className="hero-visual"
            transition={{ duration: 6, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="avatar-ring">
              <div className="avatar-core">
                <img
                  alt={`${portfolioData.name} profile`}
                  className="profile-photo"
                  src={portfolioData.profilePhoto}
                />
              </div>
            </div>
            <div className="orbital orbital-a" />
            <div className="orbital orbital-b" />
            <div className="glass-card hero-status">
              <span className="status-dot" />
              Available for AI engineering roles
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};
