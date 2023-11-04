import React from "react";
import "./FoodProducts.scss";

import image1 from "../../assets/foodProduct/1.jpg";
import image2 from "../../assets/foodProduct/2.jpg";
import image3 from "../../assets/foodProduct/3.jpg";
import image4 from "../../assets/foodProduct/4.jpg";
import image5 from "../../assets/foodProduct/5.jpg";
import image6 from "../../assets/foodProduct/6.jpg";

const FoodProducts = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="FoodProducts" id="FoodProducts">
      {images.map((image) => {
        return (
          <div className="foodProducts_image_container">
            <img className="foodProducts_image" src={image} />
          </div>
        );
      })}
    </div>
  );
};

export default FoodProducts;
