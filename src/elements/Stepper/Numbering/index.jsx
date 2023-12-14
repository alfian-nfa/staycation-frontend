import React from "react";
import { motion } from "framer-motion";

import propTypes from "prop-types";

import "./index.scss";

export default function Numbering({ style, className, data, current }) {
  const fadeInVariants = {
    hidden: { opacity: 0 }, // Mulai dari posisi -100px ke kiri
    visible: { opacity: 1, transition: { duration: 1 } }, // Pindah ke posisi x: 0 (awal)
  };
  const KeysOfData = Object.keys(data);
  return (
    <motion.ol initial="hidden" animate="visible" variants={fadeInVariants} className={["stepper", className].join(" ")} style={style}>
      {KeysOfData.map((list, index) => {
        let isActive = list === current ? "active" : "";
        if (index + 1 === KeysOfData.length) {
          isActive = "";
          return null;
        }

        return (
          <li key={`list=${index}`} className={[isActive].join(" ")}>
            {index + 1}
          </li>
        );
      })}
    </motion.ol>
  );
}

Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};
