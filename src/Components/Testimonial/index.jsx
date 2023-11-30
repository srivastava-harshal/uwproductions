import React from "react";
import "./testimonial.scss";

import testimonials from "./testimonials";
import ReactCardCarousel from "react-card-carousel";

const Testimonials = () => {
  return (
    <div className="testimonials_wrapper">
      <ReactCardCarousel autoplay={false} autoplay_speed={2500}>
        {testimonials.map(({ userName, imageURL, testimonial }) => {
          return (
            <div className="testimonials_container">
              <div className="testimonials_img_container">
                <img src={imageURL} className="testimonials_user_img" />
              </div>
              <div className="testimonials_content_container">
                <div className="testimonials_user_name">{userName}</div>
                <div className="testimonials_user_review">{testimonial}</div>
              </div>
            </div>
          );
        })}
      </ReactCardCarousel>
    </div>
  );
};

export default Testimonials;
