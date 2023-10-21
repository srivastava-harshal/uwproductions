import React, { useState, useEffect } from "react";
import "./navBar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY === 0 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`${scrolled ? "Navbar_Scrolled" : "Navbar"}`} id="Navbar">
      <div className="logo_container">
        <h2>ULTRAWIDE</h2>
        <h3>PRODUCTIONS</h3>
      </div>
      <div className="nav_links">
        <div className="nav_link_home">Home</div>
        <div className="nav_link_work">Work</div>
        <div className="nav_link_about">About</div>
        <div className="nav_link_contact">Contact</div>
      </div>
    </div>
  );
};

export default Navbar;
