import React, { useState, useEffect } from "react";
import "./About.scss";

import HomepageBanner from "../HomepageBanner";
import Navbar from "../Navbar";
import MobileNav from "../MobileNav";
import Footer from "../Footer";

const About = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // console.log(Object.values(images)[0].name);

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
      <div id="About">
        <div className="about_header_container">
          <h1 className="about_header">About Ultrawide Productions</h1>
          <p className="about_subHeader_content">
            Welcome to Ultrawide Productions, where our passion for storytelling
            meets the cutting edge of visual creativity. Established 2022, we
            have quickly emerged as a hub for producing vibrant and impactful
            visual content across various domains.
          </p>
        </div>
        <div className="about_content_container">
          <div className="about_content_expertise">
            <h2 className="about_header">Our Expertise</h2>
            <p className="about_content">
              <span className="about_content_title">Ad Films: </span> We
              specialize in crafting compelling ad films that resonate with your
              target audience. Our team combines creative storytelling with
              stunning visuals to create memorable campaigns that drive
              engagement and results.
            </p>
            <p className="about_content">
              <span className="about_content_title">
                Architecture and Interiors:
              </span>{" "}
              Our expertise in architecture and interior filming and photography
              captures the essence of spaces. We blend art with precision to
              showcase designs in their best light.
            </p>
            <p className="about_content">
              <span className="about_content_title">Concerts: </span> Capturing
              the energy and emotion of live music events, we bring concerts to
              life through dynamic filming techniques. Our work immortalizes
              these moments, creating lasting memories for performers and fans
              alike.
            </p>
            <p className="about_content">
              <span className="about_content_title">Wedding Films: </span> Each
              wedding story is unique, and we tell it with the elegance and
              emotion it deserves. Our wedding films are a blend of candid
              moments and crafted cinematic experiences.
            </p>
            <p className="about_content">
              <span className="about_content_title">
                Social Media Marketing:
              </span>{" "}
              In the digital age, impactful social media presence is key. We
              create engaging content that boosts your brand's online
              visibility, leveraging the power of social media to connect with
              audiences worldwide.
            </p>
            <p className="about_content">
              <span className="about_content_title">Fashion: </span> Our team
              excels in capturing the elegance and sophistication of the fashion
              world. We bring style and visual flair to fashion photography and
              films, highlighting the beauty and intricacy of garments in a way
              that speaks to both style and substance.
            </p>
            <p className="about_content">
              <span className="about_content_title">Food & Product: </span> We
              bring the allure and art of culinary creations to life. Our food
              photography and films celebrate the sensory experience of cuisine,
              capturing the vibrant colors, textures, and presentations that
              make each dish unique.
            </p>
            <p className="about_content">
              <span className="about_content_title">Fashion: </span> Our team
              excels in capturing the elegance and sophistication of the fashion
              world. We bring style and visual flair to fashion photography and
              films, highlighting the beauty and intricacy of garments in a way
              that speaks to both style and substance.
            </p>
          </div>
        </div>
        <div className="about_footer_container">
          <h2 className="about_header">Why Choose Us: </h2>
          <p className="about_subHeader_content">
            <span className="about_content_title">Diverse Expertise: </span> Our
            wide-ranging experience across various domains enables us to handle
            diverse projects with ease and proficiency.
          </p>
          <p className="about_subHeader_content">
            <span className="about_content_title">Innovative Techniques: </span>{" "}
            We stay ahead of the curve, utilizing the latest technology and
            creative techniques to deliver top-notch quality.
          </p>
          <p className="about_subHeader_content">
            <span className="about_content_title">
              Client-Centric Approach:
            </span>{" "}
            Our clients are at the heart of everything we do. We listen,
            understand, and tailor our services to meet your unique needs.
          </p>
          <p className="about_subHeader_content">
            <span className="about_content_title">Our Vision: </span> To be the
            go-to production house for creative and impactful visual
            storytelling, setting new standards in the media production
            industry.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
