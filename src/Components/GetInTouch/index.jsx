import React from "react";
import "./getInTouch.scss";
import { Input, Form, Select } from "antd";

const GetInTouch = () => {
  const { TextArea } = Input;

  return (
    <div className="GetInTouch" id="GetInTouch">
      <div className="getInTouch_wrapper">
        <div className="getInTouch_container">
          <p className="getInTouch_header">Get In Touch</p>
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
              width: 700,
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
    </div>
  );
};

export default GetInTouch;
