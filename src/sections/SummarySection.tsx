import { BrainCircuit, Cpu, Workflow } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolioData } from "@/utils/portfolioData";

const highlights = [
  { title: "LLM integration", icon: BrainCircuit },
  { title: "Backend architecture", icon: Cpu },
  { title: "AI workflow design", icon: Workflow },
];

export const SummarySection = () => {
  return (
    <section className="section" id="summary">
      <div className="container">
        <SectionHeading
          description="Overview of my experience building AI-powered backend systems and production-ready workflows."
          eyebrow="Professional Summary"
          title="Developing AI-powered backend systems and workflows"
        />

        <Reveal className="glass-card summary-card">
          <p>{portfolioData.summary}</p>
          <div className="highlight-row">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="highlight-pill">
                  <Icon size={18} />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
