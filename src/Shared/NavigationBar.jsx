import React, { useContext } from "react";
import { Link } from "react-router-dom";
import imgIcon from "../assets/index 1.png";

import { AuthContext } from "../Providers/AuthProvider";
const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  return (
    <nav className="pt-5">
      <div className="flex justify-around">
        <div className="text-md text-center text-[#706F6F] flex">
          <Link to="/" className="block mt-4 lg:mt-0  mr-4">
            Home
          </Link>
          <Link className="block mt-4 lg:mt-0  mr-4">About</Link>
          <Link className="block mt-4 lg:mt-0 ">Career</Link>
        </div>

        <div className="flex gap-4">
          {user && <img src={imgIcon} alt="" />}
          {user ? (
            <button
              onClick={handleLogout}
              className="inline-block text-md px-7 font-medium  bg-black text-white  py-2 leading-none border rounded-md"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="inline-block text-md px-7 font-medium  bg-black text-white  py-2 leading-none border rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
