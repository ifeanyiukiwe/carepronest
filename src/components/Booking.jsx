import React from "react";
import { Link } from "react-router-dom";

function Booking() {
  return (
    <div className="bg-[#f59cab]">
      <div className="flex flex-col justify-center items-center p-20">
        <h1 className="font-extrabold text-white text-4xl mb-10 ">
          Are You A Care Giver?
        </h1>
        <Link to="/apply">
          <button className="bg-white text-black px-25 py-3 rounded-xl cursor-pointer font-medium whitespace-nowrap">
            Get a Care job
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Booking;
