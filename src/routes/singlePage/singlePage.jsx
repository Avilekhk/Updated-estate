import React from "react";
import "./singlePage.scss";
import Slider from "../../components/slider/SLider";

function SinglePage() {
  return (
    <div classsName="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider />
        </div>
      </div>
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default SinglePage;
