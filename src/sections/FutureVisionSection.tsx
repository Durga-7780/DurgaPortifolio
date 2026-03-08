import { Lightbulb } from "lucide-react";
import { AISurveillanceIllustration } from "@/components/AISurveillanceIllustration";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolioData } from "@/utils/portfolioData";

export const FutureVisionSection = () => {
  return (
    <section className="section" id="vision">
      <div className="container">
        <SectionHeading
          description="A concept for building intelligent CCTV systems that use AI to detect suspicious activities and generate real-time alerts."
          eyebrow="Future Vision"
          title="My Vision for AI-Powered Smart Surveillance"
        />

        <Reveal>
          <article className="vision-card">
            <div className="vision-glow" />
            <div className="vision-grid">
              <div className="vision-copy">
                <div className="vision-header">
                  <Lightbulb size={22} />
                  <span>Future Vision</span>
                </div>
                <h3>AI-Powered Smart CCTV Surveillance System</h3>
                <p>{portfolioData.futureVision}</p>
              </div>

              <div className="vision-visual-shell">
                <AISurveillanceIllustration />
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
};
