import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsigths from "../EditorInsigths";

const NewsDetails = () => {
  const NewsDetails = useLoaderData();

  const { _id, category_id, image_url, title, details } = NewsDetails;

  console.log(NewsDetails);
  return (
    <div>
      <div className="card card-compact ml-20 w-[600px] bg-base-100 shadow-xl">
        <figure>
          <img className="px-3 py-2" src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="mt-3">{details}</p>
          <div className="card-actions justify-start mt-4">
            <Link
              to={`/category/${category_id}`}
              className=" rounded-md flex items-center gap-3 px-7 py-2 bg-[#D72050] text-white text-lg font-medium"
            >
              <FaArrowLeft />
              All news in this category
            </Link>
          </div>
        </div>
      </div>
      <EditorInsigths></EditorInsigths>
    </div>
  );
};

export default NewsDetails;
