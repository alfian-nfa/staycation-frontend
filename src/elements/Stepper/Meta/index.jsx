import React from "react";
import { motion } from "framer-motion";

export default function Meta({ data, current }) {
  const fadeInVariants = {
    hidden: { opacity: 0 }, // Mulai dari posisi -100px ke kiri
    visible: { opacity: 1, transition: { duration: 1 } }, // Pindah ke posisi x: 0 (awal)
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInVariants} className="text-center" style={{ marginBottom: 30 }}>
      <h1 className="h2">{data[current] && data[current].title}</h1>
      <p className="lead text-gray-500">{data[current] && data[current].description}</p>
    </motion.div>
  );
}
