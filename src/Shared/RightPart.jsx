import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import kindsImg1 from "../assets/qZone1.png";
import kindsImg2 from "../assets/qZone2.png";
import RightImg from "../assets/bg.png";
import kindsImg3 from "../assets/qZone3.png";

const RightPart = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Login With</h2>
      <div className="mt-5 ">
        <button className="px-8 flex hover:text-blue-600 hover:border-blue-600 items-center gap-2 rounded-md py-1 border-2 border-black text-black">
          <FaGoogle />
          <p>Login With Google</p>
        </button>
      </div>
      <div className="mt-2">
        <button className="px-9 flex gap-2 hover:text-blue-600 hover:border-blue-600  items-center rounded-md py-1 border-2 border-black text-black">
          <FaGithub />
          <p>Login With Github</p>
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-6">Find Us On</h2>

        <div className="max-w-xl flex flex-col mt-4">
          <a
            className="inline-flex items-center gap-x-3.5 py-4 rounded-md px-4 text-sm font-medium border"
            href="#"
          >
            <FaFacebook className="text-lg bg-[#F3F3F3]" />
            Facebook
          </a>
          <a
            className="inline-flex items-center gap-x-3.5 py-4 px-4 text-sm font-medium bg-white border "
            href="#"
          >
            <FaTwitter className="text-lg" />
            Twitter
          </a>
          <a
            className="inline-flex items-center gap-x-3.5 rounded-md py-4 px-4 text-sm font-medium border -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg cursor-not-allowed focus:z-10 focus:outline-none "
            href="#"
          >
            <FaInstagram className="text-lg" />
            Instagram
          </a>
        </div>
      </div>

      <div className=" bg-[#F3F3F3] h-[750px] mt-5 rounded-md">
        <h2 className="text-xl font-semibold px-3 py-4">Q-Zone</h2>
        <div className="px-4">
          <img src={kindsImg1} alt="" />
          <img src={kindsImg2} alt="" />
          <img src={kindsImg3} alt="" />
        </div>
      </div>

      <div className="mt-5">
        <img className="w-[294px]" src={RightImg} alt="" />
        <div className="relative bottom-[450px] text-white text-center">
          <h2 className="text-3xl w-60 ml-6 font-semibold">
            Create an Amazing Newspaper
          </h2>
          <p className="w-64 ml-6 mt-8 text-md font-normal">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="mt-14 px-6 rounded-md text-lg font-medium py-4 bg-[#D72050]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPart;
