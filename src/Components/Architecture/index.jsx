import React from "react";
import "./Architecture.scss";
import image1 from "../../assets/architecture/interiors 1/1.jpg";
// import image2 from "../../assets/architecture/interiors 1/2.jpg";
import image3 from "../../assets/architecture/interiors 1/3.jpg";
import image4 from "../../assets/architecture/interiors 1/4.jpg";
import image5 from "../../assets/architecture/interiors 1/5.jpg";
import image6 from "../../assets/architecture/interiors 1/6.jpg";
import image7 from "../../assets/architecture/interiors 1/7.jpg";
import image8 from "../../assets/architecture/interiors 1/8.jpg";
import image9 from "../../assets/architecture/interiors 1/9.jpg";
import image10 from "../../assets/architecture/interiors 1/10.jpg";
import image11 from "../../assets/architecture/interiors 1/11.jpg";

const Architecture = () => {
  const images = [
    image1,
    // image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  return (
    <div className="Architecture" id="Architecture">
      {images.map((image) => {
        return (
          <div className="architecture_image_container">
            <img className="architecture_image" src={image} />
          </div>
        );
      })}
    </div>
  );
};

export default Architecture;
