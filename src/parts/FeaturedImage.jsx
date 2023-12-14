import React from "react";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function FeaturedImage() {
  const page = useSelector((state) => state.page);
  const { id } = useParams();

  const data = page?.[id]?.item?.imageId || [];

  const fadeInVariants = {
    hidden: { opacity: 0, x: -100 }, // Mulai dari posisi -100px ke kiri
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Pindah ke posisi x: 0 (awal)
  };
  return (
    <motion.section className="container" initial="hidden" animate="visible" variants={fadeInVariants}>
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div key={`FeaturedImage-${index}`} className={`item ${index > 0 ? "column-5" : "column-7"} ${index > 0 ? "row-1" : "row-2"}`}>
              <div className="card h-100">
                <figure className="img-wrapper">
                  <img className="img-cover" src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`} alt={item._id} />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
