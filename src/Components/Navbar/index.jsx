import "./navBar.scss";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink className="nav_link_home" to="/">
          Home
        </NavLink>
        <NavLink className="nav_link_work" to="/work">
          Work
        </NavLink>
        <NavLink className="nav_link_about" to="/about">
          About
        </NavLink>
        <NavLink className="nav_link_contact" to="/contactus">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
