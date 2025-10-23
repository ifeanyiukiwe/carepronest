import React from "react";
import laptop from "../assets/images/repair.png";
import bag from "../assets/images/portfolio.png";
import { Link } from "react-router-dom";

function Career() {
  return (
    <div className="flex flex-col items-center my-20 px-4">
      <div className="text-center mb-10 max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Let's get started. Choose an option
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-4xl">
        <div className="flex-1 border border-[#00ad9b] hover:bg-teal-600 hover:text-white rounded-xl p-6 space-y-4 flex flex-col items-center justify-center transition-colors duration-200">
          <div>
            <img
              src={laptop}
              alt="Care seeker"
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center">
            I need a care giver
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-300">
            Start your search for a care in your area
          </p>
          <div className="w-full">
            <Link to="/signup">
              <button className="w-full bg-[#f59cab] text-white py-3 rounded-full font-medium cursor-pointer hover:bg-pink-500 transition-colors whitespace-nowrap">
                Find Care
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 border border-[#00ad9b] hover:bg-teal-600 hover:text-white rounded-xl p-6 space-y-4 flex flex-col items-center justify-center transition-colors duration-200">
          <div>
            <img
              src={bag}
              alt="Job seeker"
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center">
            I want a care job
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-300">
            Create a profile and search for jobs
          </p>
          <div className="w-full">
            <Link to="/apply">
              <button className="w-full bg-[#f59cab] text-white py-3 rounded-full font-medium cursor-pointer hover:bg-pink-500 transition-colors whitespace-nowrap">
                Find Job
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
