import React from "react";
import { useState, useEffect } from "react";

import HomepageBanner from "../HomepageBanner";
import Navbar from "../Navbar";
import MobileNav from "../MobileNav";
import Overview from "../Overview";
import CarouselComp from "../Caraousel/Carousel";
import HomepageFooter from "../HomepageFooter";
import images from "../../utils/caraouselImages";

const Home = () => {
  const slides = images;

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
      <CarouselComp slides={slides} />
      <HomepageFooter />
    </>
  );
};

export default Home;
