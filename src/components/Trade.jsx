import React, { useState } from "react";

// Import data
import { currency } from "../../data";
// Import Icons
import { IoIosArrowForward } from "react-icons/io";

function Trade() {
  const [itemName, setItemName] = useState("Bitcoin");
  return (
    <section className="section  bg-gradient-to-b bg-[#4e46e5] text-darkblue ">
      <div className="container mx-auto">
        <h2
          className="section-title text-white text-center mb-16"
          data-aos="fade-up"
          data-aos-offset="400"
        >
          Trade securely and market the high growth cryptocurrencies.
        </h2>
      </div>
      {/* Items */}
      <div
        data-aos="fade-up"
        data-aos-offset="450"
        className="flex flex-col gap-[45px]  md:flex-row md:gap-[30px] lg:flex-row px-6"
      >
        {currency.map((item, index) => {
          const { image: img, name, abbr, description: desc } = item;

          return (
            <div
              onClick={() => setItemName(name)}
              className={` ${
                name === itemName
                  ? "bg-[#3c35b9] text-white border-2 border-white"
                  : "bg-white text-darkblue"
              } bg-white text-darkblue w-full mx-auto max-w-[350px] rounded-md px-6 py-12 shadow-primary transition-300 cursor-pointer`}
              key={index}
            >
              {/* item image */}
              <div className="flex flex-col justify-center items-center">
                <img className="mb-12" src={img} alt={name} />
                {/* item name */}
                <div className="flex items-center  gap-x-2">
                  <div className="text-[32px] font-bold">{name}</div>
                  <div className="text-lg text-gray-400 font-medium">
                    {abbr}
                  </div>
                </div>
                {/* item description */}
                <div>
                  <p className="mb-8 text-center ">{desc}</p>
                </div>
                {/* Buttons */}
                <button
                  className={` ${
                    name === itemName
                      ? "text-white  hover:bg-blue-hover duration-300 ease-in-out border-2 rounded-full p-2 px-6"
                      : "text-blue  border-2 rounded-full p-2"
                  } rounded-full flex justify-center items-center transition-all ease-in-out duration-1000`}
                >
                  {name === itemName && (
                    <div className="mr-4 font-bold">Start mining</div>
                  )}
                  <IoIosArrowForward
                    className={`${name === itemName ? "text-2xl" : "text-3xl"}`}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Trade;
