import React from "react";
import Logo from "../assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import imgIcon from "../assets/index 1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img className="mx-auto mt-8 w-96" src={Logo} alt="" />
        <p className="mt-4 text-[#706F6F] text-md">
          Journalism Without Fear or Favour
        </p>
        <p className="mt-2">{moment().format("dddd, MMMM D, YYYY, ")}</p>
      </div>

      <div className="mt-5 ">
        <div className="mt-5 flex items-center mx-auto px-4 rounded-md py-3 bg-[#F3F3F3] md:w-[1000px] w-full lg:w-[1000px]">
          <button className="px-5 py-2 rounded-sm bg-[#D72050] text-white">
            Latest
          </button>
          <div>
            <Marquee
              pauseOnHover={true}
              speed={40}
              className="text-md font-semibold"
            >
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </Marquee>
          </div>
        </div>
      </div>

      {/* ============= Here is this Navbar part Here =========== */}

      <nav className="">
        <div className="flex justify-around mt-5">
          <div className="text-md text-center text-[#706F6F] flex">
            <Link to="/" className="block mt-4 lg:mt-0  mr-4">
              Home
            </Link>
            <Link className="block mt-4 lg:mt-0  mr-4">About</Link>
            <Link className="block mt-4 lg:mt-0 ">Career</Link>
          </div>

          <div className="flex gap-4">
            <img src={imgIcon} alt="" />
            <button className="inline-block text-md px-7 font-medium  bg-black text-white  py-2 leading-none border rounded-md">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
