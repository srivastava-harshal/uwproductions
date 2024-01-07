import React from "react";
import { useState, useEffect } from "react";

import HomepageBanner from "../HomepageBanner";
import Navbar from "../Navbar";
import MobileNav from "../MobileNav";
import Overview from "../Overview";
import HomepageFooter from "../HomepageFooter";
// import Testimonials from "../Testimonial";

const Home = () => {
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
      <Overview />
      {/* <Testimonials /> */}
      <HomepageFooter />
    </>
  );
};

export default Home;
