import React from "react";
// import "./Project1.scss";

import image1 from "../../../assets/architecture/interiors 1/Project 5/1.jpg";
import image2 from "../../../assets/architecture/interiors 1/Project 5/2.jpg";
import image3 from "../../../assets/architecture/interiors 1/Project 5/3.jpg";
import image4 from "../../../assets/architecture/interiors 1/Project 5/4.jpg";
import image5 from "../../../assets/architecture/interiors 1/Project 5/5.jpg";
import image6 from "../../../assets/architecture/interiors 1/Project 5/6.jpg";
import image7 from "../../../assets/architecture/interiors 1/Project 5/7.jpg";
import image8 from "../../../assets/architecture/interiors 1/Project 5/8.jpg";
import image9 from "../../../assets/architecture/interiors 1/Project 5/9.jpg";
import image10 from "../../../assets/architecture/interiors 1/Project 5/10.jpg";
import image11 from "../../../assets/architecture/interiors 1/Project 5/11.jpg";
import image12 from "../../../assets/architecture/interiors 1/Project 5/12.jpg";

const Project5 = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  return (
    <div className="Project5" id="Project5">
      {images.map((image) => {
        return (
          <div className="project_image_container">
            <img className="project_image" src={image} />
          </div>
        );
      })}
    </div>
  );
};

export default Project5;
