import { motion } from "framer-motion";

export const AISurveillanceIllustration = () => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      className="ai-illustration-svg-wrap"
      transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
    >
      <motion.div
        animate={{ opacity: [0.72, 1, 0.72], scale: [1, 1.03, 1] }}
        className="ai-float-card ai-float-card-top"
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <strong>Object Detection</strong>
        <span>Bounding boxes with anomaly scoring</span>
      </motion.div>

      <svg
        aria-label="AI-powered CCTV surveillance illustration"
        className="ai-illustration-svg"
        fill="none"
        viewBox="0 0 520 560"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="monitorStroke" x1="80" x2="440" y1="80" y2="460">
            <stop stopColor="#32D6FF" />
            <stop offset="1" stopColor="#7A7CFF" />
          </linearGradient>
          <linearGradient id="sceneGlow" x1="120" x2="420" y1="180" y2="420">
            <stop stopColor="#1A9FFF" stopOpacity="0.55" />
            <stop offset="1" stopColor="#35F1C5" stopOpacity="0.42" />
          </linearGradient>
          <radialGradient id="bgGlow" cx="0" cy="0" gradientTransform="translate(166 132) rotate(90) scale(74)" gradientUnits="userSpaceOnUse" r="1">
            <stop stopColor="#20D4FF" />
            <stop offset="1" stopColor="#20D4FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bgGlow2" cx="0" cy="0" gradientTransform="translate(398 442) rotate(90) scale(86)" gradientUnits="userSpaceOnUse" r="1">
            <stop stopColor="#8B7DFF" />
            <stop offset="1" stopColor="#8B7DFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="166" cy="132" fill="url(#bgGlow)" r="74" />
        <circle cx="398" cy="442" fill="url(#bgGlow2)" r="86" />

        <g opacity="0.98">
          <rect fill="#07111F" height="72" rx="20" stroke="#30D7FF" strokeOpacity="0.22" strokeWidth="2" width="132" x="334" y="20" />
          <rect fill="#0B2032" height="24" rx="10" width="36" x="360" y="44" />
          <circle cx="420" cy="56" fill="#38F1C7" fillOpacity="0.92" r="6" />
          <circle cx="383" cy="56" fill="#20D4FF" fillOpacity="0.24" r="18" stroke="#20D4FF" strokeOpacity="0.35" strokeWidth="2" />
          <path d="M466 48H490V66H466" stroke="#30D7FF" strokeLinecap="round" strokeOpacity="0.45" strokeWidth="2" />
          <rect fill="#445262" height="42" rx="8" width="10" x="388" y="92" />
        </g>

        <g>
          <rect fill="#051220" height="404" rx="28" stroke="url(#monitorStroke)" strokeOpacity="0.48" strokeWidth="2" width="412" x="56" y="106" />
          <rect fill="#071A2A" height="336" rx="22" stroke="#FFFFFF" strokeOpacity="0.08" width="364" x="80" y="140" />
          <circle cx="102" cy="124" fill="#FFFFFF" fillOpacity="0.2" r="4" />
          <circle cx="118" cy="124" fill="#FFFFFF" fillOpacity="0.2" r="4" />
          <circle cx="134" cy="124" fill="#FFFFFF" fillOpacity="0.2" r="4" />

          <path d="M80 404L150 348L216 378L280 314L354 362L444 294V476H80V404Z" fill="url(#sceneGlow)" />
          <path d="M80 432L168 366L240 404L302 340L382 388L444 338V476H80V432Z" fill="#0B3553" fillOpacity="0.74" />

          <g opacity="0.24" stroke="#2ED6FF">
            <path d="M80 180H444" />
            <path d="M80 220H444" />
            <path d="M80 260H444" />
            <path d="M80 300H444" />
            <path d="M80 340H444" />
            <path d="M80 380H444" />
            <path d="M80 420H444" />
            <path d="M120 140V476" />
            <path d="M160 140V476" />
            <path d="M200 140V476" />
            <path d="M240 140V476" />
            <path d="M280 140V476" />
            <path d="M320 140V476" />
            <path d="M360 140V476" />
            <path d="M400 140V476" />
          </g>

          <g>
            <rect fill="#1BD3FF" fillOpacity="0.06" height="110" rx="14" stroke="#22D6FF" strokeWidth="3" width="74" x="116" y="208" />
            <rect fill="#1BD3FF" fillOpacity="0.12" height="26" rx="8" width="64" x="121" y="172" />
            <text fill="#B4F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="700" letterSpacing="1.4" x="132" y="189">
              PERSON
            </text>
          </g>

          <g>
            <rect fill="#8B7DFF" fillOpacity="0.08" height="70" rx="14" stroke="#8B7DFF" strokeWidth="3" width="108" x="296" y="186" />
            <rect fill="#8B7DFF" fillOpacity="0.14" height="26" rx="8" width="70" x="301" y="150" />
            <text fill="#E0D9FF" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="700" letterSpacing="1.4" x="314" y="167">
              VEHICLE
            </text>
          </g>

          <g>
            <circle cx="310" cy="364" fill="#03111D" r="92" stroke="#23D4FF" strokeOpacity="0.32" strokeWidth="2" />
            <circle cx="310" cy="364" r="58" stroke="#8B7DFF" strokeDasharray="10 12" strokeOpacity="0.54" strokeWidth="2.5" />
            <circle cx="310" cy="364" fill="#20D4FF" fillOpacity="0.14" r="28" stroke="#23D4FF" strokeWidth="2.5" />
            <path d="M310 272V456" stroke="#23D4FF" strokeOpacity="0.72" strokeWidth="2.5" />
            <path d="M218 364H402" stroke="#23D4FF" strokeOpacity="0.72" strokeWidth="2.5" />
            <path d="M246 306L310 364L392 322" stroke="#37F0C6" strokeWidth="3" />
            <path d="M232 432L310 364L368 448" stroke="#23D4FF" strokeWidth="3" />
            <circle cx="246" cy="306" fill="#37F0C6" r="12" />
            <circle cx="392" cy="322" fill="#8B7DFF" r="12" />
            <circle cx="232" cy="432" fill="#37F0C6" r="12" />
            <circle cx="368" cy="448" fill="#23D4FF" r="12" />
          </g>
        </g>
      </svg>

      <motion.div
        animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.02, 1] }}
        className="ai-float-card ai-float-card-bottom"
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <strong>AI Analytics</strong>
        <span>Real-time alerts and surveillance insights</span>
      </motion.div>
    </motion.div>
  );
};

export default AISurveillanceIllustration;
