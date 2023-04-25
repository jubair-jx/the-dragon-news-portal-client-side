import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img className="mx-auto mt-8 w-96" src={Logo} alt="" />
        <p className="mt-2 text-[#706F6F]">Journalism Without Fear or Favour</p>
      </div>
    </div>
  );
};

export default Header;
