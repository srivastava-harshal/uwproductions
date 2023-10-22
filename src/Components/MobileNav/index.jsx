import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { NavLink } from "react-router-dom";

import "./mobileNav.scss";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
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

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={`${scrolled ? "Mobile_Navbar_Scrolled" : "Mobile_Navbar"}`}>
      <div className="mobile_navbar_wrapper">
        <div className="mobile_navbar_container">
          <p className="mobile_navbar_header">ULTRAWIDE</p>
          <p className="mobile_navbar_subHeader">PRODUCTIONS</p>
        </div>
        <img
          src="https://i.ibb.co/gSNz7sn/drawer.png"
          className="drawer_image"
          onClick={showDrawer}
        />
      </div>
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <Drawer
        title="Ultrawide Productions"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="mobile_nav_links">
          <NavLink className="mobile_nav_link_home" to="/">
            Home
          </NavLink>
          <NavLink className="mobile_nav_link_work" to="/work">
            Work
          </NavLink>
          <NavLink className="mobile_nav_link_about" to="/about">
            About
          </NavLink>
          <NavLink className="mobile_nav_link_contact" to="/contactus">
            Contact
          </NavLink>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileNav;
