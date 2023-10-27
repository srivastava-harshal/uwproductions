import React from "react";
import "./Architecture.scss";
import image1 from "../../assets/architecture/interiors 1/1.jpg";
// import image2 from "../../assets/architecture/interiors 1/2.jpg";
import image3 from "../../assets/architecture/interiors 1/3.jpg";
import image4 from "../../assets/architecture/interiors 1/4.jpg";
import image5 from "../../assets/architecture/interiors 1/5.jpg";
import image6 from "../../assets/architecture/interiors 1/6.jpg";
import image7 from "../../assets/architecture/interiors 1/7.jpg";
import image8 from "../../assets/architecture/interiors 1/8.jpg";
import image9 from "../../assets/architecture/interiors 1/9.jpg";
import image10 from "../../assets/architecture/interiors 1/10.jpg";
import image11 from "../../assets/architecture/interiors 1/11.jpg";
import image12 from "../../assets/architecture/interiors 1/12.jpg";
import image13 from "../../assets/architecture/interiors 1/13.jpg";
import image14 from "../../assets/architecture/interiors 1/14.jpg";
import image15 from "../../assets/architecture/interiors 1/15.jpg";
import image16 from "../../assets/architecture/interiors 1/16.jpg";
import image17 from "../../assets/architecture/interiors 1/17.jpg";
import image18 from "../../assets/architecture/interiors 1/18.jpg";
import image19 from "../../assets/architecture/interiors 1/19.jpg";
import image20 from "../../assets/architecture/interiors 1/20.jpg";
import image21 from "../../assets/architecture/interiors 1/21.jpg";
import image22 from "../../assets/architecture/interiors 1/22.jpg";
import image23 from "../../assets/architecture/interiors 1/23.jpg";
import image24 from "../../assets/architecture/interiors 1/24.jpg";
import image25 from "../../assets/architecture/interiors 1/25.jpg";
import image26 from "../../assets/architecture/interiors 1/26.jpg";
import image27 from "../../assets/architecture/interiors 1/27.jpg";
import image28 from "../../assets/architecture/interiors 1/28.jpg";
import image29 from "../../assets/architecture/interiors 1/29.jpg";
import image30 from "../../assets/architecture/interiors 1/30.jpg";
import image31 from "../../assets/architecture/interiors 1/31.jpg";

const Architecture = () => {
  const images = [
    image1,
    // image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
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
    <div className="Architecture" id="Architecture">
      {images.map((image) => {
        return (
          <div className="architecture_image_container">
            <img className="architecture_image" src={image} />
          </div>
        );
      })}
    </div>
  );
};

export default Architecture;
