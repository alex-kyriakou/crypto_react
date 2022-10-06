import React from "react";

// Import Images
import image from "../assets/img/why-img.png";

function Why() {
  return (
    <section
      className="section
    "
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 items-center lg:flex-row">
          {/* image */}
          <div data-aos="fade-right" data-aos-offset="400">
            <img src={image} alt="" />
          </div>
          {/* text */}
          <div className="max-w-[480px]">
            <h2 className="section-title">
              Why you should choose{" "}
              <span data-aos="fade-in" data-aos-offset="400">
                CRAPPO
              </span>
            </h2>
            <p className="section-subtitle">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <button className="btn px-6">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
