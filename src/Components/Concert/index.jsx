import React from "react";
import "./Concert.scss";

import image1 from "../../assets/concert/1.jpg";
import image2 from "../../assets/concert/2.jpg";
import image3 from "../../assets/concert/3.jpg";
import image4 from "../../assets/concert/4.jpg";
import image5 from "../../assets/concert/5.jpg";
import image6 from "../../assets/concert/6.jpg";
import image7 from "../../assets/concert/7.jpg";
import image8 from "../../assets/concert/8.jpg";
import image9 from "../../assets/concert/9.jpg";
import image10 from "../../assets/concert/10.jpg";
import image11 from "../../assets/concert/11.jpg";
import image12 from "../../assets/concert/12.jpg";
import image13 from "../../assets/concert/13.jpg";
import image14 from "../../assets/concert/14.jpg";
import image15 from "../../assets/concert/15.jpg";
import image16 from "../../assets/concert/16.jpg";
import image17 from "../../assets/concert/17.jpg";
import image18 from "../../assets/concert/18.jpg";

const Concert = () => {
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
    <div className="Concert" id="Concert">
      {images.map((image) => {
        return (
          <div className="concert_image_container">
            <img className="concert_image" src={image} />
          </div>
        );
      })}
    </div>
  );
};

export default Concert;
