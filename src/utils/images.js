import { v4 as uuidv4 } from "uuid";
import image1 from "../assets/architecture/interiors 1/Project 1/1.jpg";
import image12 from "../assets/architecture/interiors 1/Project 2/12.jpg";
import image3 from "../assets/architecture/interiors 1/Project 1/3.jpg";
import image4 from "../assets/architecture/interiors 1/Project 1/4.jpg";
import image5 from "../assets/architecture/interiors 1/Project 1/5.jpg";
import image6 from "../assets/architecture/interiors 1/Project 1/6.jpg";
import image7 from "../assets/architecture/interiors 1/Project 1/7.jpg";
import image8 from "../assets/architecture/interiors 1/Project 1/8.jpg";

const images = [
  {
    key: uuidv4(),
    imageURL: image1,
  },
  {
    key: uuidv4(),
    imageURL: image12,
  },
  {
    key: uuidv4(),
    imageURL: image3,
  },
  {
    key: uuidv4(),
    imageURL: image4,
  },
  {
    key: uuidv4(),
    imageURL: image5,
  },
  {
    key: uuidv4(),
    imageURL: image6,
  },
  {
    key: uuidv4(),
    imageURL: image7,
  },
  {
    key: uuidv4(),
    imageURL: image8,
  },
];

export default images;
