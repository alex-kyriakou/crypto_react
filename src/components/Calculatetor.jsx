import React from "react";

import CalcForm from "./CalcForm";

function Calculatetor() {
  return (
    <section className="section ">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-offest="400"
          >
            Check how much you can earn
          </h2>
          <p
            className="section-subtitle text-lg mb-16 max-w-[620px] mx-auto"
            data-aos="fade-up"
            data-aos-offset="450"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            dolorem modi eos quidem exercitationem dolore totam voluptatum
            expedita corrupti temporibus.
          </p>
        </div>
        {/* form */}
        <CalcForm />
      </div>
    </section>
  );
}

export default Calculatetor;
