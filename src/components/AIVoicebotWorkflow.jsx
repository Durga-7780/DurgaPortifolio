import { motion } from "framer-motion";
import { PhoneCall, Mic, Bot, Waypoints, ServerCog, Volume2, AudioLines } from "lucide-react";

const steps = [
  { label: "User Call", Icon: PhoneCall },
  { label: "Speech-to-Text (STT)", Icon: Mic },
  { label: "AI / LLM Processing", Icon: Bot },
  { label: "Workflow Engine", Icon: Waypoints },
  { label: "Business Logic / APIs", Icon: ServerCog },
  { label: "Text-to-Speech (TTS)", Icon: Volume2 },
  { label: "Voice Response", Icon: AudioLines },
];

export const AIVoicebotWorkflow = () => {
  return (
    <div className="flow-wrapper">

      {steps.map((step, i) => (
        <div key={step.label} className="flow-step">

          <motion.div
            className="flow-box"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <step.Icon size={18} />
            <span>{step.label}</span>
          </motion.div>

          {i < steps.length - 1 && (
            <div className="flow-arrow">
              <motion.div
                className="flow-dot"
                animate={{ y: [0, 30] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          )}

        </div>
      ))}

    </div>
  );
}