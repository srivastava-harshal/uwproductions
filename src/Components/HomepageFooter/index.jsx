import React from "react";
import "./homepageFooter.scss";
import Footer from "../Footer";
import GetInTouch from "../GetInTouch";

const HomepageFooter = () => {
  return (
    <div className="HomepageFooter" id="HomepageFooter">
      <div className="homepage_footer_whiteBG"></div>
      <Footer />
      <GetInTouch />
    </div>
  );
};

export default HomepageFooter;
