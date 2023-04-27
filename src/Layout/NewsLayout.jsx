import React from "react";

import { Outlet } from "react-router-dom";
import RightPart from "../Shared/RightPart";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-around  mt-8">
        <div>
          <Outlet></Outlet>
        </div>
        <div>
          <RightPart></RightPart>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
