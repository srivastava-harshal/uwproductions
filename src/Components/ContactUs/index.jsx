import React, { useState, useEffect, useRef } from "react";
import "./contactUs.scss";
import emailjs from "@emailjs/browser";

import HomepageBanner from "../HomepageBanner";
import Navbar from "../Navbar";
import MobileNav from "../MobileNav";
import Footer from "../Footer";

const ContactUs = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    // service_eltv65i
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eltv65i",
        "template_yc68cb7",
        formRef.current,
        "VU8Zckgr8QXfR77ps"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = async (e) => {
    try {
      sendEmail(e);
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error, show an error message, etc.
    }
  };

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
        <div className="contactUs_formContainer">
          <form className="contactUs_form" ref={formRef}>
            <label className="contactUs_formLabel" label="Name">
              Name:
              <input
                className="contactUs_formInput"
                name="from_name"
                onChange={handleInputChange}
              />
            </label>
            <label className="contactUs_formLabel" label="Email">
              Email:
              <input
                className="contactUs_formInput"
                name="from_email"
                onChange={handleInputChange}
              />
            </label>
            <label className="contactUs_formLabel" label="Services">
              Services:
              <select
                className="contactUs_formInput"
                name="services"
                onChange={(value) =>
                  handleInputChange({ target: { name: "services", value } })
                }
              >
                <option value="realEstate">Real Estate</option>
                <option value="weddings">Weddings</option>
                <option value="portraits">Portraits</option>
              </select>
            </label>
            <label className="contactUs_formLabel" label="Message">
              Message:
              <textarea
                className="contactUs_formInput"
                rows={4}
                name="message"
                onChange={handleInputChange}
              />
            </label>
            <div className="contactUs_form_btnContainer">
              <button
                className="contactUs_form_btn"
                type="primary"
                onClick={handleSubmit}
              >
                Let's Do This!
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
