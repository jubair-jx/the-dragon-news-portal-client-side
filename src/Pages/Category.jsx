import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowNews from "../Pages/Home/ShowNews";
import EditImg1 from "../assets/editorsInsight1.png";
import EditImg2 from "../assets/editorsInsight2.png";
import EditImg3 from "../assets/editorsInsight3.png";

const Category = () => {
  const categoriesNews = useLoaderData();

  return (
    <div>
      {categoriesNews.map((news) => (
        <ShowNews key={news._id} news={news}></ShowNews>
      ))}
    </div>
  );
};

export default Category;
