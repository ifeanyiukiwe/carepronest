import React from "react";
import linkedin from "../assets/images/linkedin.png";
import facebook from "../assets/images/messenger.png"; // Assuming you have/rename messenger to facebook
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
import { Link } from "react-router-dom";

const socials = [
  {
    id: 1,
    img: linkedin,
  },
  {
    id: 2,
    img: facebook,
  },
  {
    id: 3,
    img: twitter,
  },
  {
    id: 4, // Fixed duplicate ID
    img: instagram,
  },
];

function Footer() {
  return (
    <div className="bg-[#00ad9b] text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-8">
          <div className="flex-1 min-w-0 order-2 md:order-none">
            <Link to="/" className="mb-4 text-xl md:text-2xl font-bold">
              CareProNest<sup>&reg;</sup>
            </Link>
            <p className="mb-6 text-sm leading-relaxed max-w-full md:max-w-[250px]">
              CareProNest helps families and individuals connect with verified
              caregivers faster
            </p>
            <div className="flex gap-3 md:gap-4">
              {socials.map((social) => (
                <div
                  key={social.id}
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex justify-center items-center"
                >
                  <img
                    src={social.img}
                    alt=""
                    className="w-4 h-4 md:w-[20px] md:h-[20px]"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-16 md:flex-1 md:justify-between w-full md:w-auto order-1 md:order-none">
            <div className="flex flex-col space-y-2 mb-6 md:mb-0">
              <h1 className="mb-4 text-xl md:text-2xl font-bold">About</h1>
              <a href="#" className="text-sm hover:opacity-80 block">
                Company
              </a>
              <a href="#" className="text-sm hover:opacity-80 block">
                FAQ
              </a>
              <a href="#" className="text-sm hover:opacity-80 block">
                Terms of use
              </a>
              <a href="#" className="text-sm hover:opacity-80 block">
                Privacy Policy
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="mb-4 text-xl md:text-2xl font-bold">Services</h1>
              <a href="#" className="text-sm hover:opacity-80 block">
                Child care
              </a>
              <a href="#" className="text-sm hover:opacity-80 block">
                Elderly care
              </a>
              <a href="#" className="text-sm hover:opacity-80 block">
                Housekeeper
              </a>
              <a href="#" className="text-sm hover:opacity-80 block">
                Tutor
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
          <p className="text-xs text-center opacity-80">
            Copyright &copy; {new Date().getFullYear()} CareProNest Company SL.
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
