import React, { useState } from "react";
import "./getInTouch.scss";
import { Input, Form, Select } from "antd";

const GetInTouch = () => {
  const { TextArea } = Input;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: "",
    message: "",
  });

  // Step 3: Attach onChange handlers to update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 4: Attach onClick handler to log the form data
  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <div className="GetInTouch" id="GetInTouch">
      <div className="getInTouch_wrapper">
        <div className="getInTouch_container">
          <p className="getInTouch_header">Get In Touch!</p>
          <p className="getInTouch_sub_header">Discuss the project</p>
        </div>{" "}
        <div className="getInTouch_contactUs_form">
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
              width: window.innerWidth > 820 ? 500 : "90vw",
              padding: "20px 0",
            }}
          >
            <Form.Item label="Name">
              <Input name="name" onChange={handleInputChange} />
            </Form.Item>
            <Form.Item label="Email">
              <Input name="email" onChange={handleInputChange} />
            </Form.Item>
            <Form.Item label="Services">
              <Select
                name="services"
                onChange={(value) =>
                  handleInputChange({ target: { name: "services", value } })
                }
              >
                <Select.Option value="realEstate">Real Estate</Select.Option>
                <Select.Option value="weddings">Weddings</Select.Option>
                <Select.Option value="portraits">Portraits</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Message">
              <TextArea rows={4} name="message" onChange={handleInputChange} />
            </Form.Item>
          </Form>
          <div className="contactUs_form_btn_wrapper">
            <div className="contactUs_form_btn_container">
              <div className="contactUs_form_btn" onClick={handleSubmit}>
                Let's Do This!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
