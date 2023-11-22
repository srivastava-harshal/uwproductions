import React from "react";
import LightGallery from "lightgallery/react";

import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

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
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

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

export default Project5;
