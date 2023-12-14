import React from "react";
import { motion } from "framer-motion";

export default function MainContent({ data, current }) {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 100 }, // Mulai dari posisi -100px ke kiri
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Pindah ke posisi x: 0 (awal)
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
      {data[current] && data[current].content}
    </motion.div>
  );
}
