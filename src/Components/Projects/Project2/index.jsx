import React from "react";
import LightGallery from "lightgallery/react";
// import "./Project1.scss";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import image12 from "../../../assets/architecture/interiors 1/Project 2/12.jpg";
import image13 from "../../../assets/architecture/interiors 1/Project 2/13.jpg";
import image14 from "../../../assets/architecture/interiors 1/Project 2/14.jpg";
import image15 from "../../../assets/architecture/interiors 1/Project 2/15.jpg";
import image16 from "../../../assets/architecture/interiors 1/Project 2/16.jpg";
import image17 from "../../../assets/architecture/interiors 1/Project 2/17.jpg";
import image18 from "../../../assets/architecture/interiors 1/Project 2/18.jpg";
import image19 from "../../../assets/architecture/interiors 1/Project 2/19.jpg";
import image20 from "../../../assets/architecture/interiors 1/Project 2/20.jpg";
import image21 from "../../../assets/architecture/interiors 1/Project 2/21.jpg";
import image22 from "../../../assets/architecture/interiors 1/Project 2/22.jpg";
import image23 from "../../../assets/architecture/interiors 1/Project 2/23.jpg";
import image24 from "../../../assets/architecture/interiors 1/Project 2/24.jpg";
import image25 from "../../../assets/architecture/interiors 1/Project 2/25.jpg";
import image26 from "../../../assets/architecture/interiors 1/Project 2/26.jpg";
import image27 from "../../../assets/architecture/interiors 1/Project 2/27.jpg";
import image28 from "../../../assets/architecture/interiors 1/Project 2/28.jpg";
import image29 from "../../../assets/architecture/interiors 1/Project 2/29.jpg";
import image30 from "../../../assets/architecture/interiors 1/Project 2/30.jpg";
import image31 from "../../../assets/architecture/interiors 1/Project 2/31.jpg";

const Project2 = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const images = [
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
  ];

  return (
    <div className="Project2" id="Project2">
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

export default Project2;
