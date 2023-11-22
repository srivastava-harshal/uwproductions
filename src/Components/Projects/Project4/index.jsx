import React from "react";
import LightGallery from "lightgallery/react";

import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import image1 from "../../../assets/architecture/interiors 1/Project 4/1.jpg";
import image2 from "../../../assets/architecture/interiors 1/Project 4/2.jpg";
import image3 from "../../../assets/architecture/interiors 1/Project 4/3.jpg";
import image4 from "../../../assets/architecture/interiors 1/Project 4/4.jpg";
import image5 from "../../../assets/architecture/interiors 1/Project 4/5.jpg";

const Project4 = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="Project4" id="Project4">
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

export default Project4;
