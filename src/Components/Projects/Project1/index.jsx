import React from "react";
import LightGallery from "lightgallery/react";

import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import image1 from "../../../assets/architecture/interiors 1/Project 1/1.jpg";
// import image2 from "../../assets/architecture/interiors 1/Project 1/2.jpg";
import image3 from "../../../assets/architecture/interiors 1/Project 1/3.jpg";
import image4 from "../../../assets/architecture/interiors 1/Project 1/4.jpg";
import image5 from "../../../assets/architecture/interiors 1/Project 1/5.jpg";
import image6 from "../../../assets/architecture/interiors 1/Project 1/6.jpg";
import image7 from "../../../assets/architecture/interiors 1/Project 1/7.jpg";
import image8 from "../../../assets/architecture/interiors 1/Project 1/8.jpg";
import image9 from "../../../assets/architecture/interiors 1/Project 1/9.jpg";
import image10 from "../../../assets/architecture/interiors 1/Project 1/10.jpg";

const Project1 = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const images = [
    image1,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  return (
    <div className="Project1" id="Project1">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="lightgallery_container"
      >
        {images.map((image) => {
          return (
            <a href={image}>
              <div className="project_image_container">
                <img className="project_image" src={image} />
              </div>
            </a>
          );
        })}
      </LightGallery>
    </div>
  );
};

export default Project1;
