import React from "react";
import NavigationBar from "../../Shared/NavigationBar";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="text-center mt-10">
        <h2 className="text-4xl font-semibold ">Terms & Condition Page</h2>
        <p className="mt-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero
          optio natus ullam sapiente! Doloremque non, voluptas atque laboriosam
          quisquam voluptatibus nostrum fugiat natus nobis eaque? Dolorem ipsam
          minus inventore. Odio enim nam assumenda iusto numquam modi ducimus
          ea. Pariatur corporis quod, laborum ut dolorum repellat optio
          voluptatem rem eligendi cumque magni, fuga ipsam qui doloremque
          aperiam, cum labore sint?
        </p>
        <p className="mt-5">
          Go to
          <Link className="ml-2 mr-2 underline text-teal-400 " to="/register">
            Register
          </Link>
          Page
        </p>
      </div>
    </div>
  );
};

export default Terms;
