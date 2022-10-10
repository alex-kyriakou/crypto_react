import React from "react";

function CalcForm() {
  return (
    <div className="w-full  max-w-[924px] bg-indigo-600 rounded-2xl text-darkblue p-12 mx-auto shadow-primary ">
      {/* form */}
      <form className="flex flex-col lg:flex-row justify-between lg:items-center space-y-12 lg:space-y-0">
        <input
          className="placeholder:text-gray-500 input p-3 bg-white rounded-md"
          type="text"
          placeholder="Enter your hash rate"
        />
        <select className="select rounded-md lg:ml-5">
          <option value="">TH/s</option>
          <option value="">KH/s</option>
          <option value="">GH/s</option>
          <option value="">TH/s</option>
          <option value="">TH/s</option>
        </select>
        <button className="btn text-white mx-auto px-8  lg:text-xl">
          Calculate
        </button>
      </form>
    </div>
  );
}

export default CalcForm;
