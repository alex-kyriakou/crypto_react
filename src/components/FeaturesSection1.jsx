import React from "react";

// import image
import image1 from "../assets/img/feature-1-img.png";

function FeaturesSection1() {
  return (
    <section className="pb-[30px] lg:pb-[120px] pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Text */}
        <div
          className="max-w-[450px] mb-6 lg:mt-10"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <h3 className="h3 mb-6">Invest Smart</h3>
          <p className="text-gray mb-8">
            Get full statistic information about the behavior of buyers and
            sellers will help you to make the secision.
          </p>
          <button className="btn px-8">Learn more</button>
        </div>
        {/* IMage */}
        <div
          className="flex justify-end flex-1"
          data-aos="fade-left"
          data-aos-offeset="400"
        >
          <img src={image1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection1;
