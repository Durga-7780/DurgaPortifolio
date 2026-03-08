import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

export const Reveal = ({ children, delay = 0, className }: RevealProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
};
