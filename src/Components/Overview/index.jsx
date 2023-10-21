import React from "react";
import Slider from "react-slick";
import "./overview.scss";

import images from "../../utils/images";

const Overview = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="Overview" id="Overview">
      <div className="overview_header">
        <p className="overview_header_text">RECENT WORKS</p>
      </div>
      <Slider {...settings}>
        {images.map(({ imageURL }) => {
          return (
            <div className="overview_image_container">
              <img className="overview_image" src={imageURL} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Overview;
