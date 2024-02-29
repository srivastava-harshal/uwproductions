import React from "react";
import "./FoodProducts.scss";
import LightGallery from "lightgallery/react";

import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import image1 from "../../assets/foodProduct/1.jpg";
import image2 from "../../assets/foodProduct/2.jpg";
import image3 from "../../assets/foodProduct/3.jpg";
import image4 from "../../assets/foodProduct/4.jpg";
import image5 from "../../assets/foodProduct/5.jpg";
import image6 from "../../assets/foodProduct/6.jpg";

const FoodProducts = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="FoodProducts" id="FoodProducts">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="lightgallery_container"
      >
        {images.map((image) => {
          return (
            <div className="foodProducts_image_container">
              <a href={image}>
                <img className="foodProducts_image" src={image} />
              </a>
            </div>
          );
        })}
      </LightGallery>
    </div>
  );
};

export default FoodProducts;
