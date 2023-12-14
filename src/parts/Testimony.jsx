import React from "react";
import TestimonyAccent from "../assets/images/testimonial-landingpages-frame.jpg";
import Button from "../elements/Button";

import Star from "../elements/Star";

export default function Testimony({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-12 mb-3 col-lg-auto mr-5">
          <div className="testimonial-hero">
            <img src={`${process.env.REACT_APP_HOST}/${data.imageUrl}`} alt="Testimonial" className="position-relative" style={{ zIndex: 2 }} />
            <img src={TestimonyAccent} alt="Testimonial frame" className="position-absolute" style={{ margin: `-30px 0 0 -30px`, left: 0 }} />
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={40} height={40} spacing={4}></Star>
          <h5 className="h2 font-weight-light line-height-2 my-3">{data.content}</h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div>
            <Button className="btn px-5" style={{ marginTop: 40 }} hasShadow isPrimary type="link" href={`/testimonial/${data._id}`}>
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
