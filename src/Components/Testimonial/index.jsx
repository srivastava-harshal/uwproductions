import React from "react";
import "./testimonial.scss";
import { Avatar, Space } from "antd";

const Testimonails = () => {
  return (
    <div className="testimonial_container">
      <div className="testimonial_image">
        <Space size={16} wrap>
          <Avatar
            style={{
              backgroundColor: "#87d068",
              height: "80px",
              width: "80px",
            }}
            // icon={<UserOutlined />}
          />
        </Space>
      </div>
      <div className="testimonial_review">
        <p className="testimonial_review_header">Anuj Pratap Singh</p>
        <p className="testimonial_review_content">
          WE HAD A GREAT EXPERIENCE WITH NG PRODUCTIONS. NAMAN AND BRANDON WERE
          SO HELPFUL BEFORE, DURING, AND AFTER FILMING. OUR VIDEOS TURNED OUT
          AMAZING. WOULD DEFINITELY RECOMMEND THEM!
        </p>
      </div>
    </div>
  );
};

export default Testimonails;
