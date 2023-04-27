import React from "react";
import EditImg1 from "../assets/editorsInsight1.png";
import EditImg2 from "../assets/editorsInsight2.png";
import EditImg3 from "../assets/editorsInsight3.png";

const EditorInsigths = () => {
  return (
    <div className="grid grid-cols-3 ml-20 mt-10">
      <div className="card card-compact w-72 bg-base-100 shadow-xl">
        <figure>
          <img className="w-50" src={EditImg1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </h2>
        </div>
      </div>
      <div className="card card-compact w-72 ml-2 bg-base-100 shadow-xl">
        <figure>
          <img className="w-50" src={EditImg2} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </h2>
        </div>
      </div>

      <div className="card card-compact w-72 ml-2 bg-base-100 shadow-xl">
        <figure>
          <img className="w-50" src={EditImg3} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            21 The Most Stylish Wedding Guest Dresses For Spring
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EditorInsigths;
