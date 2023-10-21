import React, { useState } from "react";
import { Drawer } from "antd";

import "./mobileNav.scss";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="mobile_navbar">
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
        <p>Home</p>
        <p>Work</p>
        <p>About</p>
        <p>Contact Us</p>
      </Drawer>
    </div>
  );
};

export default MobileNav;
