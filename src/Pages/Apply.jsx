// pages/Apply.js
import React from "react";
import { Link } from "react-router-dom";

const Apply = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Apply for Care Job
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ready to make a difference?{" "}
            <Link
              to="/"
              className="font-medium text-[#f59cab] hover:text-[#17865f]"
            >
              Back to Home
            </Link>
          </p>
        </div>

        <div>
          <form action="" method="get">
            <ul className="space-y-7">
              <li>
                <label htmlFor="FullName" className="text-sm text-gray-500">
                  Full Name
                </label>
                <div className="border rounded-xl border-gray-300 mt-4">
                  <input
                    id="FullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full p-4 focus:outline-none focus:ring-0"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="Email" className="text-sm text-gray-500">
                  Email
                </label>
                <div className="border rounded-xl border-gray-300 mt-4">
                  <input
                    id="Email"
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full p-4 focus:outline-none focus:ring-0"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="Phone" className="text-sm text-gray-500">
                  Phone Number
                </label>
                <div className="border rounded-xl border-gray-300 mt-4">
                  <input
                    id="Phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full p-4 focus:outline-none focus:ring-0"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="Experience" className="text-sm text-gray-500">
                  Years of Experience
                </label>
                <div className="border rounded-xl border-gray-300 mt-4">
                  <input
                    id="Experience"
                    type="number"
                    placeholder="e.g., 2"
                    min="0"
                    className="w-full p-4 focus:outline-none focus:ring-0"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="Resume" className="text-sm text-gray-500">
                  Upload Resume
                </label>
                <div className="border border-gray-300 rounded-xl mt-4 p-4 bg-gray-50">
                  <input
                    id="Resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full focus:outline-none focus:ring-0"
                  />
                </div>
              </li>
            </ul>
          </form>
        </div>
        <div className="mt-8 space-y-6">
          <button className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-[#17865f] hover:bg-green-700">
            Apply Now
          </button>
          <span className="text-[#f59cab] flex justify-center">
            Need help? Contact us
          </span>
        </div>
      </div>
    </div>
  );
};

export default Apply;
