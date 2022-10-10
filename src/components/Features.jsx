import React from "react";
// import feature sections
import FeaturesSection1 from "./FeaturesSection1";
import FeaturesSection2 from "./FeaturesSection2";
import FeaturesSection3 from "./FeaturesSection3";

function Features() {
  return (
    <section className="pt-12 lg:pt-24 bg-violet">
      <div className="container mx-auto">
        <div className="text-center max-w-[758px] mx-auto mb-24">
          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-offset="400"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
        </div>
        <FeaturesSection1 />
        <FeaturesSection2 />
        <FeaturesSection3 />
      </div>
    </section>
  );
}

export default Features;
