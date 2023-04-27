import moment from "moment/moment";
import React from "react";
import { HiOutlineBookmark } from "react-icons/Hi";
import { CiShare1 } from "react-icons/Ci";
import { AiOutlineEye } from "react-icons/Ai";

import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const NewsDetails = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <div className="card w-[450px] bg-base-100 shadow-md mt-4 rounded-lg">
      <div className="flex justify-between px-5 py-5 bg-[#F3F3F3]">
        <div className="flex gap-3">
          <div>
            <img className="w-10 rounded-full" src={author?.img} alt="" />
          </div>
          <div>
            <h2>{author?.name}</h2>
            <p>{moment(author?.published_date).format("yy-MM-D")}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button className="text-2xl">
            <CiShare1></CiShare1>
          </button>
          <button className="text-2xl">
            {" "}
            <HiOutlineBookmark />{" "}
          </button>
        </div>
      </div>
      <h2 className="card-title px-5 py-2 mt-2">{title}</h2>
      <figure>
        <img className="px-5 py-2 rounded-md" src={image_url} />
      </figure>
      <div className="card-body">
        <p>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}......{" "}
              <Link
                className="ml-2 underline text-blue-600 "
                to={`/news/${_id}`}
              >
                {" "}
                Read More
              </Link>{" "}
            </>
          )}
        </p>

        <div className="flex justify-between mt-4">
          <div className="flex gap-3">
            <div>
              <Rating
                placeholderRating={rating.number}
                readonly
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              ></Rating>
            </div>
            <span>{rating.number}</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <AiOutlineEye />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
