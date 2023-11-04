import React, { useState, useEffect } from "react";
import "./Works.scss";
import { Tabs } from "antd";

import HomepageBanner from "../HomepageBanner";
import Navbar from "../Navbar";
import MobileNav from "../MobileNav";
import Footer from "../Footer";
import Architecture from "../Architecture";
import Concert from "../Concert";
import Fashion from "../Fashion";
import FoodProducts from "../FoodProducts";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "architecture",
    label: "Architecture",
    // children: "Image",
    children: <Architecture />,
  },
  {
    key: "concert",
    label: "Concert",
    children: <Concert />,
  },
  {
    key: "fashion",
    label: "Fashion",
    children: <Fashion />,
  },
  {
    key: "foodProducts",
    label: "Food & Products",
    children: <FoodProducts />,
  },
];

const Works = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // console.log(Object.values(images)[0].name);

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
      <div className="Works" id="Works">
        <div className="tabs_container">
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            indicatorSize={(origin) => origin - 1}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Works;
