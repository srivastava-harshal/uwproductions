import React from "react";
import "./testimonial.scss";
// @ts-ignore
import testimonials from "./testimonials";
// import ReactCardCarousel from "react-card-carousel";

const Testimonials = () => {
  return (
    <div className="testimonials_wrapper">
      {/* <ReactCardCarousel autoplay={false} autoplay_speed={2500}>
        {testimonials.map(({ userName, imageURL, testimonial, key }) => {
          return (
            <div className="testimonials_container" key={key}>
              <div className="testimonials_img_container">
                <img src={imageURL} className="testimonials_user_img" />
              </div>
              <div className="testimonials_content_container">
                <div className="testimonials_user_name">
                  <div>{userName}</div>
                </div>
                <div className="testimonials_user_review">
                  <div>{testimonial}</div>
                </div>
              </div>
            </div>
          );
        })}
      </ReactCardCarousel> */}
    </div>
  );
};

export default Testimonials;
