import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../elements/Button";

export default function MostPicked(props) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true, // Ensure animation triggers only once
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="container" ref={props.refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => (
          <motion.div
            key={`mostpicked-${index}`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInVariants}
            className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
            ref={ref}
            transition={{ delay: inView ? index * 0.2 : 0 }} // Use delay based on inView status
          >
            <div className="card card-featured">
              <div className="tag">
                ${item.price}
                <span className="font-weight-light"> per {item.unit}</span>
              </div>
              <figure className="img-wrapper">
                <img src={item.imageId[0] ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}` : ""} alt={item.name} className="img-cover" />
              </figure>
              <div className="meta-wrapper">
                <Button type="link" className="stretched-link d-block text-white" href={`/properties/${item._id}`}>
                  <h5>{item.name}</h5>
                </Button>
                <span>
                  {item.city}, {item.country}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
