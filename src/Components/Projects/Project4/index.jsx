import React from "react";
// import "./Project1.scss";

import image1 from "../../../assets/architecture/interiors 1/Project 4/1.jpg";
import image2 from "../../../assets/architecture/interiors 1/Project 4/2.jpg";
import image3 from "../../../assets/architecture/interiors 1/Project 4/3.jpg";
import image4 from "../../../assets/architecture/interiors 1/Project 4/4.jpg";
import image5 from "../../../assets/architecture/interiors 1/Project 4/5.jpg";

const Project4 = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="Project4" id="Project4">
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

export default Project4;
