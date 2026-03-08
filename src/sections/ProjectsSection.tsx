import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/utils/portfolioData";

export const ProjectsSection = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          description="Selected work centered on retrieval pipelines, applied AI workflows, and business-facing backend systems."
          eyebrow="Personal Projects"
          title="Projects that turn AI workflows into usable products"
        />

        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="glass-card project-card">
                <div className="project-topline">
                  <span>Featured Project</span>
                  <div className="project-links">
                    <a aria-label={`${project.title} GitHub`} href={project.github} rel="noreferrer" target="_blank">
                      <Github size={18} />
                    </a>
                    <a aria-label={`${project.title} demo`} href={project.demo} rel="noreferrer" target="_blank">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="skill-badge-wrap">
                  {project.stack.map((item) => (
                    <span key={item} className="skill-badge">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a className="button-secondary" href={project.github} rel="noreferrer" target="_blank">
                    <Github size={18} />
                    GitHub
                  </a>
                  <a className="button-ghost" href={project.demo} rel="noreferrer" target="_blank">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
