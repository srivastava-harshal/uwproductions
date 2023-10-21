import "./App.scss";
import { useState, useEffect } from "react";

import ContactUs from "./Components/ContactUs";
import HomepageBanner from "./Components/HomepageBanner";
import Navbar from "./Components/Navbar";
import MobileNav from "./Components/MobileNav";
import Overview from "./Components/Overview";
import CarouselComp from "./Components/Caraousel/Carousel";
import images from "./utils/caraouselImages";
import HomepageFooter from "./Components/HomepageFooter";

function App() {
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
    <div className="app">
      {screenWidth > 820 ? <Navbar /> : <MobileNav />} <HomepageBanner />
      <Overview />
      <CarouselComp slides={slides} />
      {/* <ContactUs /> */}
      <HomepageFooter />
    </div>
  );
}

export default App;
