import React from "react";
import RightPart from "../../Shared/RightPart";
import LeftPart from "../../Shared/LeftPart";

const Home = () => {
  return (
    <div>
      <div className="flex justify-around  mt-8">
        <div>
          <LeftPart></LeftPart>
        </div>
        <div>
          <h2>This is Middle Part</h2>
        </div>
        <div>
          <RightPart></RightPart>
        </div>
      </div>
    </div>
  );
};

export default Home;
