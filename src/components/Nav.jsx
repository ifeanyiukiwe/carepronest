import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Hook for programmatic navigation

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleMobileNav = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <>
      <div className="bg-[#fff8f9] flex items-center justify-between p-4 sm:p-9 sm:px-56 border-b-4 border-b-gray-200">
        {/* Logo: Link back to home */}
        <Link
          to="/"
          className="text-[#17865f] text-lg sm:text-xl font-semibold"
        >
          CareProNest<sup>&reg;</sup>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center justify-between space-x-6 text-[#17865f]">
          <Link
            to="/apply"
            className="text-base font-medium cursor-pointer hover:opacity-80"
          >
            Apply To Care Job
          </Link>
          <Link
            to="/career"
            className="text-base font-medium cursor-pointer hover:opacity-80"
          >
            Career
          </Link>
          <Link
            to="/login"
            className="text-base font-medium cursor-pointer hover:opacity-80"
          >
            Log In
          </Link>
          <Link to="/signup">
            <button className="bg-[#f59cab] text-white px-6 py-2 rounded-full font-medium whitespace-nowrap">
              Get Care
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#17865f] focus:outline-none"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block w-6 h-0.5 bg-[#17865f] transition-all ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#17865f] transition-all ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#17865f] transition-all ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black/50 z-50"
          onClick={closeMenu}
        >
          <div
            className="bg-[#fff8f9] w-full h-full flex flex-col justify-start items-center pt-20 space-y-6 p-4 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="self-end mr-4 mb-4">
              <button
                onClick={closeMenu}
                className="text-[#17865f] text-2xl font-bold focus:outline-none hover:opacity-80"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>

            <div
              className="text-lg font-medium text-[#17865f] cursor-pointer hover:opacity-80 text-center w-full"
              onClick={() => handleMobileNav("/apply")}
            >
              Apply To Care Job
            </div>
            <div
              className="text-lg font-medium text-[#17865f] cursor-pointer hover:opacity-80 text-center w-full"
              onClick={() => handleMobileNav("/career")}
            >
              Career
            </div>
            <div
              className="text-lg font-medium text-[#17865f] cursor-pointer hover:opacity-80 text-center w-full"
              onClick={() => handleMobileNav("/login")}
            >
              Log In
            </div>
            <button
              className="bg-[#f59cab] text-white px-8 py-3 rounded-full font-medium w-full max-w-[200px]"
              onClick={() => handleMobileNav("/signup")}
            >
              Get Care
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
