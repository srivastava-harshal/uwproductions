import React from "react";
import Slider from "react-slick";
import "./overview.scss";

import images from "../../utils/images";
import { Link } from "react-router-dom";

const Overview = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 820 ? 4 : 2,
    slidesToScroll: 1,
  };

  return (
    <div className="Overview" id="Overview">
      <div className="overview_header">
        <p className="overview_header_text">RECENT WORKS</p>
      </div>
      <Slider {...settings}>
        {images.map(({ imageURL, key }) => {
          return (
            <Link to="/works">
              <div key={key} className="overview_image_container">
                <img className="overview_image" src={imageURL} />
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default Overview;
