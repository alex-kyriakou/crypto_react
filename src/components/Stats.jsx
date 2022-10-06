import React from "react";
// Import Icos
import { HiChartBar, HiUser, HiGlobe } from "react-icons/hi";

function Stats() {
  return (
    <section className="pt-24 container mx-auto">
      <div className="flex  lg:justify-between md:place-content-center">
        <div className="flex lg:w-full flex-col   lg:flex-row lg:justify-between">
          {/* Item */}
          <div
            className="flex  items-center gap-x-6 my-6"
            data-aos="fade-in"
            data-aos-delay="1200"
            data-aos-offset="400"
          >
            {/* Icon */}
            <div className="bg-white/10 text-blue text-2xl lg:text-4xl h-20 w-20 rounded-full flex justify-center items-center">
              <HiChartBar />
            </div>
            {/* item text */}
            <div className="flex flex-col ">
              <span className="text-2xl font-bold lg:text-[30px] lg:mb-2">
                $20B
              </span>
              <span className="text-gray">Digital Currency Exchanged</span>
            </div>
          </div>
          {/* Item */}
          <div
            className="flex items-center gap-x-6 my-6"
            data-aos="fade-in"
            data-aos-delay="1400"
            data-aos-offset="400"
          >
            {/* Icon */}
            <div className="bg-white/10 text-blue text-2xl lg:text-4xl h-20 w-20 rounded-full flex justify-center items-center">
              <HiGlobe />
            </div>
            {/* item text */}
            <div className="flex flex-col ">
              <span className="text-2xl font-bold lg:text-[30px] lg:mb-2">
                10M+
              </span>
              <span className="text-gray">Trusted Wallets Investors</span>
            </div>
          </div>
          {/* Item */}
          <div
            className="flex items-center gap-x-6 my-6"
            data-aos="fade-in"
            data-aos-delay="1600"
            data-aos-offset="400"
          >
            {/* Icon */}
            <div className="bg-white/10 text-blue text-2xl lg:text-4xl h-20 w-20 rounded-full flex justify-center items-center">
              <HiUser />
            </div>
            {/* item text */}
            <div className="flex flex-col ">
              <span className="text-2xl font-bold lg:text-[30px] lg:mb-2">
                125
              </span>
              <span className="text-gray">Countries Supported</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
