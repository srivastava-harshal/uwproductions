import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="footer_social_links_container">
          <div className="footer_social_links_header">
            <h2>ULTRAWIDE</h2>
            <h3>PRODUCTIONS</h3>
          </div>
          <div className="footer_social_links">
            <div className="footer_social_link">
              <a>
                <img
                  className="footer_social_link_image"
                  src="https://seeklogo.com/images/F/facebook-icon-black-logo-133935095E-seeklogo.com.png"
                  alt="facebook"
                />
              </a>
            </div>
            <div className="footer_social_link">
              <a>
                <img
                  className="footer_social_link_image"
                  src="https://www.svgrepo.com/show/144030/linkedin-square-logo.svg"
                  alt="linkedin"
                />
              </a>
            </div>
            <div className="footer_social_link">
              <a>
                <img
                  className="footer_social_link_image"
                  src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                  alt="instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_info_container">
        <div className="footer_info_left_section">
          <div>
            <p className="footer_info_contactUs_header">Contact Us</p>
          </div>
          <div className="footer_info_contactUs">
            <p>2/14, Sector L, Aashiyana</p>
            <p>Mobile: 7754929269</p>
            <p>uwproductions7754@gmail.com</p>
          </div>
        </div>
        <div className="footer_info_right_section">
          <div>
            <p className="footer_info_information_header">Information</p>
          </div>
          <div className="footer_info_information">
            <a className="footer_info_information_link">Terms And Conditions</a>
            <a className="footer_info_information_link">Privacy Policy</a>
            <a className="footer_info_information_link">New Artists Sign-Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
