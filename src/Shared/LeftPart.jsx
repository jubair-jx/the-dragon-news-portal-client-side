import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditImg1 from "../assets/editorsInsight1.png";
import EditImg2 from "../assets/editorsInsight2.png";
import EditImg3 from "../assets/editorsInsight3.png";
const LeftPart = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="text-xl font-semibold">All Category</h1>
      {category.map((newsTitle) => (
        <p className="mt-6" key={newsTitle.id}>
          <Link
            to={`/category/${newsTitle.id}`}
            className=" hover:bg-[#E7E7E7] py-3 px-6 rounded-md"
          >
            {" "}
            {newsTitle.name}
          </Link>
        </p>
      ))}

      <div className="  mt-10">
        <div className="card card-compact  w-72 bg-base-100 shadow-xl">
          <figure>
            <img className="w-50" src={EditImg1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              21 The Most Stylish Wedding Guest Dresses For Spring
            </h2>
          </div>
        </div>
        <div className="card card-compact w-72 mt-5 ml-2 bg-base-100 shadow-xl">
          <figure>
            <img className="w-50" src={EditImg2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              21 The Most Stylish Wedding Guest Dresses For Spring
            </h2>
          </div>
        </div>

        <div className="card card-compact w-72 mt-5 ml-2 bg-base-100 shadow-xl">
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
    </div>
  );
};

export default LeftPart;
