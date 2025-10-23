// pages/Signup.js (similar structure)
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-[#00ad9b] hover:text-teal-600"
            >
              Log in
            </Link>
          </p>
        </div>
        {/* Add your signup form here (name, email, password, etc.) */}
        <div>
          <form action="" method="post">
            <ul className="space-y-2">
              <li>
                <label htmlFor="FirsName" className="text-sm text-gray-500">
                  First Name
                </label>
                <div className="border rounded-xl border-gray-300 mt-2">
                  <input
                    id="text"
                    type="text"
                    placeholder="First name"
                    className="w-full p-4 focus:outline-none focus:ring-0"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="LastName" className="text-sm text-gray-500">
                  Last Name
                </label>
                <div className="border rounded-xl border-gray-300 mt-2">
                  <input
                    id="text"
                    type="text"
                    placeholder="Last name"
                    className="w-full p-4 focus:outline-none focus:ring-0"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="EmailAddress" className="text-sm text-gray-500">
                  Email Address
                </label>
                <div className="border rounded-xl border-gray-300 mt-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="yourmail@mail.com"
                    className="w-full p-4 focus:outline-none focus:ring-0"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="Phonenumber" className="text-sm text-gray-500">
                  Phone Number
                </label>
                <div className="border rounded-xl border-gray-300 mt-2">
                  <input
                    id="phone number"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-4 focus:outline-none focus:ring-0"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="Password" className="text-sm text-gray-500">
                  Password
                </label>
                <div className="border rounded-xl border-gray-300 mt-2">
                  <input
                    id="Password"
                    type="password"
                    placeholder="Password"
                    className="w-full p-4 focus:outline-none focus:ring-0"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="Password" className="text-sm text-gray-500">
                  Confirm Password
                </label>
                <div className="border rounded-xl border-gray-300 mt-2">
                  <input
                    id="Password"
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-4 focus:outline-none focus:ring-0"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="DateofBirth" className="text-sm text-gray-500">
                  Date of birth
                </label>
                <div className="border rounded-xl border-gray-300 mt-2">
                  <input
                    id="Date"
                    type="date"
                    placeholder="Date of Birth"
                    className="w-full p-4 focus:outline-none focus:ring-0"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="Gender" className="text-sm text-gray-500">
                  Gender
                </label>
                <div className="flex gap-2">
                  <div className="border rounded-xl border-gray-300 mt-2">
                    <input
                      id="genderm"
                      type="text"
                      placeholder="Male"
                      className="w-full p-4 focus:outline-none focus:ring-0"
                    />
                  </div>
                  <div className="border rounded-xl border-gray-300 mt-2">
                    <input
                      id="genderf"
                      type="text"
                      placeholder="Female"
                      className="w-full p-4 focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </form>
        </div>
        <div className="text-sm">
          <p className="">
            By clicking “Sign up” you agree to our{" "}
            <span className="text-blue-600"> terms of use</span> and
            <span className="text-blue-600"> privacy policy</span>
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button className="group relative w-full flex justify-center py-2 px-4 border cursor-pointer border-transparent text-sm font-medium rounded-md text-white bg-[#f59cab] hover:bg-pink-600">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
