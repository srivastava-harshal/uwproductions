import React, { useState, useEffect } from "react";
import { Tabs } from "antd";

import HomepageBanner from "../HomepageBanner";
import Navbar from "../Navbar";
import MobileNav from "../MobileNav";
import Footer from "../Footer";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "Architecture",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Concert",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Fashion",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "Food & Products",
    children: "Content of Tab Pane 4",
  },
];

const Works = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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