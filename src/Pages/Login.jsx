// pages/Login.js
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/signup"
              className="font-medium text-[#f59cab] hover:text-[#17865f]"
            >
              create a new account
            </Link>
          </p>
        </div>

        <div>
          <form action="" method="get">
            <ul className="space-y-4">
              <li>
                <label htmlFor="Email" className="text-sm text-gray-500">
                  Email
                </label>
                <div className="border rounded-xl border-gray-300 mt-2">
                  <input
                    id="Email"
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full p-2 focus:outline-none focus:ring-0"
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
            </ul>
          </form>
        </div>
        <div className="mt-8 space-y-6">
          <button className="group relative w-full flex justify-center py-4 px-4 border cursor-pointer border-transparent text-sm font-medium rounded-full text-white bg-[#00ad9b] hover:bg-teal-600">
            Sign in
          </button>
          <span className="text-[#f59cab] flex justify-center">
            Forgot Password?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
