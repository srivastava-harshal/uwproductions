import { v4 as uuidv4 } from "uuid";
// import { UserOutlined } from "@ant-design/icons";
import Testimonails from "../Components/Testimonial";

const images = [
  {
    key: uuidv4(),
    content: (
      <div className="testimonial_wrapper">
        <Testimonails />
      </div>
    ),
  },
  {
    key: uuidv4(),
    content: (
      <div className="testimonial_wrapper">
        <Testimonails />
      </div>
    ),
  },
  {
    key: uuidv4(),
    content: (
      <div className="testimonial_wrapper">
        <Testimonails />
      </div>
    ),
  },
];

export default images;
