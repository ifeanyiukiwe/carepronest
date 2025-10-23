import React from "react";
import nurse from "../assets/images/Medium shot smiley nurse and patient _ Free Photo.jpeg";
import note from "../assets/images/notepad.png";
import search from "../assets/images/search.png";
import connect from "../assets/images/business-network.png";
import { Link } from "react-router-dom";
const steps = [
  {
    id: 1,
    img: note,
    tag: "Register",
    role: "Send messages to review and negotiate with matched care givers",
  },
  {
    id: 2,
    img: search,
    tag: "Connect",
    role: "Send messages to review and negotiate with matched care givers",
  },
  {
    id: 3,
    img: connect,
    tag: "Hire",
    role: "Conduct a comprehensive screening of preferred caregiver and hire",
  },
];

function Steps() {
  return (
    <div style={{ background: "white" }}>
      <div>
        <h1 className="font-extrabold  p-10 flex justify-center items-center text-black text-4xl mb-10">
          Get started in three easy steps
        </h1>
      </div>
      <div
        className="bg-cover bg-center flex flex-col items-center md:items-end justify-end text-white gap-y-4 md:gap-y-5 p-4 md:p-20 mb-8 md:mb-20"
        style={{ backgroundImage: `url(${nurse})` }}
      >
        {steps.map((step) => (
          <div
            key={step.id}
            className="rounded-xl py-5 px-4 bg-white text-black w-full md:w-[500px] max-w-[90vw]"
          >
            <div className="flex items-center gap-1 mb-2">
              <img
                src={step.img}
                alt=""
                className="w-8 md:w-[40px] h-8 md:h-[40px]"
              />
              <h3 className="text-xl md:text-2xl font-bold">{step.tag}</h3>
            </div>
            <span className="block max-w-full md:max-w-[300px] text-sm md:text-base">
              {step.role}
            </span>
          </div>
        ))}

        <div className="flex items-center justify-end w-full">
          <Link to="/signup">
            <button className="bg-[#f59cab] text-white p-3 md:p-4 rounded-full w-full md:w-[500px] cursor-pointer max-w-[90vw] text-sm md:text-base">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Steps;

{
  /* <div className="rounded-xl start px-4 py-5 bg-white text-black w-[500px]">
          <div className="flex items-center gap-1">
            <img src={search} alt="" width="40px" />
            <h3 className="text-2xl font-bold">Connect</h3>
          </div>
          <span className="block max-w-[300px]">
            Send messages to review and negotiate with matched care givers
          </span>
        </div>
        <div className="rounded-xl start px-4 py-5 bg-white text-black w-[500px]">
          <div className="flex items-center gap-1">
            <img src={connect} alt="" width="40px" />
            <h3 className="text-2xl font-bold">Hire</h3>
          </div>
          <span className="block max-w-[300px]">
            Conduct a comprehensive screening of preferred caregiver and hire
          </span>
        </div> */
}
