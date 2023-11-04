import React from "react";
import "./Fashion.scss";

// import image1 from "../../assets/fashion/1.jpg";
import image2 from "../../assets/fashion/2.jpg";
import image3 from "../../assets/fashion/3.jpg";
import image4 from "../../assets/fashion/4.jpg";
import image5 from "../../assets/fashion/5.jpg";
import image6 from "../../assets/fashion/6.jpg";
import image7 from "../../assets/fashion/7.jpg";
import image8 from "../../assets/fashion/8.jpg";
import image9 from "../../assets/fashion/9.jpg";
import image10 from "../../assets/fashion/10.jpg";
import image11 from "../../assets/fashion/11.jpg";

const Fashion = () => {
  const images = [
    // image1,
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
  ];

  return (
    <div className="Fashion" id="Fashion">
      {images.map((image) => {
        return (
          <div className="fashion_image_container">
            <img className="fashion_image" src={image} />
          </div>
        );
      })}
    </div>
  );
};

export default Fashion;
