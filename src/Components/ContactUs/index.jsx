import React, { useState, useEffect } from "react";
import "./contactUs.scss";
import { Input, Form, Select } from "antd";

import HomepageBanner from "../HomepageBanner";
import Navbar from "../Navbar";
import MobileNav from "../MobileNav";
import Footer from "../Footer";

const ContactUs = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { TextArea } = Input;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {screenWidth > 820 ? <Navbar /> : <MobileNav />}
      <HomepageBanner />
      <div className="ContactUs" id="ContactUs">
        <div className="contactUs_chat">
          <p className="contactUs_header">Let's Chat</p>
          <p className="contactUs_sub_header">
            INTERESTED IN WORKING WITH ULTRAWIDE?
          </p>
          <p className="contactUs_form_request">
            We'd love to hear from you! Please fill out the contact form and
            we'll be in touch shortly.
          </p>
          <p className="contactUs_mail">
            Or if you prefer, you can chat with us directly at{" "}
            <a href="#">@gmail.com</a>
          </p>
        </div>
        <div className="contactUs_form">
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            //   disabled={componentDisabled}
            style={{
              width: window.innerWidth > 820 ? 700 : "90vw",
            }}
          >
            <Form.Item label="Name">
              <Input />
            </Form.Item>
            <Form.Item label="Email">
              <Input />
            </Form.Item>
            <Form.Item label="Services">
              <Select>
                <Select.Option value="realEstate">Real Estate</Select.Option>
                <Select.Option value="weddings">Weddings</Select.Option>
                <Select.Option value="portraits">Portraits</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Message">
              <TextArea rows={4} />
            </Form.Item>
          </Form>
          <div className="contactUs_form_btn_wrapper">
            <div className="contactUs_form_btn_container">
              <div className="contactUs_form_btn">Let's Do This!</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
