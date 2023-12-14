import React from "react";

import { motion } from "framer-motion";

export default function Controller(props) {
  const fadeInVariants = {
    hidden: { opacity: 0 }, // Mulai dari posisi -100px ke kiri
    visible: { opacity: 1, transition: { duration: 1 } }, // Pindah ke posisi x: 0 (awal)
  };
  return (
    <motion.section initial="hidden" animate="visible" variants={fadeInVariants} className="container">
      <div className="row justify-content-center">
        <div className="col-8 col-lg-3">{props.children}</div>
      </div>
    </motion.section>
  );
}
