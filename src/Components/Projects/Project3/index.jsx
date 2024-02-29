import React from "react";
import LightGallery from "lightgallery/react";

import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import image1 from "../../../assets/architecture/interiors 1/Project 3/1.jpg";
import image2 from "../../../assets/architecture/interiors 1/Project 3/2.jpg";
import image3 from "../../../assets/architecture/interiors 1/Project 3/3.jpg";
import image4 from "../../../assets/architecture/interiors 1/Project 3/4.jpg";
import image5 from "../../../assets/architecture/interiors 1/Project 3/5.jpg";
import image6 from "../../../assets/architecture/interiors 1/Project 3/6.jpg";
import image7 from "../../../assets/architecture/interiors 1/Project 3/7.jpg";
import image8 from "../../../assets/architecture/interiors 1/Project 3/8.jpg";
import image9 from "../../../assets/architecture/interiors 1/Project 3/9.jpg";
import image10 from "../../../assets/architecture/interiors 1/Project 3/10.jpg";
import image11 from "../../../assets/architecture/interiors 1/Project 3/11.jpg";
import image12 from "../../../assets/architecture/interiors 1/Project 3/12.jpg";
import image13 from "../../../assets/architecture/interiors 1/Project 3/13.jpg";
import image14 from "../../../assets/architecture/interiors 1/Project 3/14.jpg";
import image15 from "../../../assets/architecture/interiors 1/Project 3/15.jpg";
import image16 from "../../../assets/architecture/interiors 1/Project 3/16.jpg";
import image17 from "../../../assets/architecture/interiors 1/Project 3/17.jpg";
import image18 from "../../../assets/architecture/interiors 1/Project 3/18.jpg";

const Project3 = () => {
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
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
  ];

  return (
    <div className="Project3" id="Project3">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="lightgallery_container"
      >
        {images.map((image) => {
          return (
            <div className="project_image_container">
              <a href={image}>
                <img className="project_image" src={image} />
              </a>
            </div>
          );
        })}
      </LightGallery>
    </div>
  );
};

export default Project3;
