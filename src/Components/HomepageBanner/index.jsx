import React from "react";
import "./homepageBanner.scss";

const HomepageBanner = () => {
  return (
    <div className="HomepageBanner" id="HomepageBanner">
      <div className="banner_container">
        <div className="banner_header">
          <p className="banner_header_text">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur.
          </p>
          <p className="banner_sub_header_text">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur.
          </p>
        </div>
        <div className="banner_btn">
          <button className="banner_btn_hire_us">Hire Us</button>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
