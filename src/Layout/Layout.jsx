import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

import LeftPart from "../Shared/LeftPart";
import RightPart from "../Shared/RightPart";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <div className="flex justify-around  mt-8">
        <div>
          <LeftPart></LeftPart>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
        <div>
          <RightPart></RightPart>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
