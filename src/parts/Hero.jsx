import React from "react";
import { motion } from "framer-motion";

import ImageHero from "../assets/images/img-hero.jpg";
import ImageHero_ from "../assets/images/img-hero-frame.jpg";
import IconCities from "../assets/images/icons/icon-cities.svg";
import IconTraveler from "../assets/images/icons/icon-treasure.svg";
import IconTreasure from "../assets/images/icons/icon-traveler.svg";

import Button from "../elements/Button";

import formatNumber from "../utils/formatNumber";

export default function Hero(props) {
  const fadeInVariants = {
    hidden: { opacity: 0, x: -100 }, // Mulai dari posisi -100px ke kiri
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Pindah ke posisi x: 0 (awal)
  };

  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <motion.section initial="hidden" animate="visible" variants={fadeInVariants} className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-lg-5 mb-5 mb-lg-0" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget the work,
            <br />
            and get your Holiday
          </h1>
          <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
            We provide what you need to enjoy your holiday with family
          </p>
          <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
            Show Me
          </Button>

          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto mr-lg-5">
              <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)} <span className="text-gray-500 font-weight-light">Travelers</span>
              </h6>
            </div>
            <div className="col-auto mr-lg-5">
              <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasures`} />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)} <span className="text-gray-500 font-weight-light">Treasures</span>
              </h6>
            </div>
            <div className="col-auto">
              <img width="36" height="36" src={IconCities} alt={`${props.data.cities} cities`} />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)} <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 pl-lg-5">
          <div className="hero-image-placeholder">
            <img src={ImageHero} alt="Room with couches" className="img-fluid position-relative" style={{ zIndex: 2 }} />
            <img src={ImageHero_} alt="Room with couches frame" className="img-fluid" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
