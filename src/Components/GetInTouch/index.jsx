import React, { useRef, useState } from "react";
import "./getInTouch.scss";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
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

  return (
    <div className="GetInTouch" id="GetInTouch">
      <div className="getInTouch_wrapper">
        <div className="getInTouch_container">
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <p className="getInTouch_header">Get In Touch!</p>
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <p className="getInTouch_sub_header">Discuss the project</p>
          </div>
        </div>{" "}
        <div className="getInTouch_contactUs_formContainer">
          <form className="getInTouch_contactUs_form" ref={formRef}>
            <label className="getInTouch_contactUs_formLabel" label="Name">
              Name:
              <input
                className="getInTouch_contactUs_formInput"
                name="from_name"
                onChange={handleInputChange}
              />
            </label>
            <label className="getInTouch_contactUs_formLabel" label="Email">
              Email:
              <input
                className="getInTouch_contactUs_formInput"
                name="from_email"
                onChange={handleInputChange}
              />
            </label>
            <label className="getInTouch_contactUs_formLabel" label="Services">
              Services:
              <select
                className="getInTouch_contactUs_formInput"
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
            <label className="getInTouch_contactUs_formLabel" label="Message">
              Message:
              <textarea
                className="getInTouch_contactUs_formInput"
                rows={4}
                name="message"
                onChange={handleInputChange}
              />
            </label>
            <div className="getInTouch_contactUs_form_btnContainer">
              <button
                className="getInTouch_contactUs_form_btn"
                type="primary"
                onClick={handleSubmit}
              >
                Let's Do This!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
