import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolioData } from "@/utils/portfolioData";

export const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("Send a message and I will get back to you.");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    setStatus("sending");
    setStatusMessage("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({ error: "Failed to send message" }));
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setStatusMessage("Message sent successfully.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Message delivery failed.");
    }
  };

  return (
    <section className="section section-contact" id="contact">
      <div className="container contact-grid">
        <Reveal>
          <SectionHeading
            description="If you have any open roles, collaboration ideas, or opportunities, feel free to reach out. Send me a message or email and I’ll get back to you as soon as possible.
— Durga Sai Prasad"
            eyebrow="Contact"
            title=""
          />

          <div className="contact-details">
            <a className="contact-item" href={`mailto:${portfolioData.email}`}>
              <Mail size={18} />
              <span>{portfolioData.email}</span>
            </a>
            <a className="contact-item" href={`tel:${portfolioData.phone.replace(/\s+/g, "")}`}>
              <Phone size={18} />
              <span>{portfolioData.phone}</span>
            </a>
            <a className="contact-item" href={portfolioData.linkedin} rel="noreferrer" target="_blank">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a className="contact-item" href={portfolioData.github} rel="noreferrer" target="_blank">
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="glass-card contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input name="name" placeholder="Your name" required type="text" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" placeholder="your@email.com" required type="email" />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" placeholder="Tell me about your project or role" required rows={5} />
            </label>
            <button className="button-primary" disabled={status === "sending"} type="submit">
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            <p className="form-status">{statusMessage}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
