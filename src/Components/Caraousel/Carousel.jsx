import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Dots from "./Dots";

let interval = null;

export default function CarouselComp({ slides: sourceSlides = [] }) {
  const ref = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
  });

  const slides = [...sourceSlides].map((slide, index) => {
    // console.log(slide);
    return {
      ...slide,
      onClick: () => setState({ ...state, goToSlide: index }),
    };
  });

  const updateSlide = () => {
    setCurrentSlide(ref.current.state.index + 1);
  };

  useEffect(() => {
    // eslint-disable-next-line
    interval = setInterval(updateSlide, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setState({ ...state, goToSlide: currentSlide });

    // eslint-disable-next-line
  }, [currentSlide]);

  const handleClick = (v) => {
    clearInterval(interval);
    interval = setInterval(updateSlide, 5000);
    setCurrentSlide(v);
  };

  return (
    <div>
      <div
        style={{
          width: window.innerWidth > 820 ? "70%" : "100%",
          height: "250px",
          margin: "0 auto",
          padding: "30px 0 0",
        }}
      >
        <Carousel
          ref={ref}
          slides={slides}
          goToSlide={state.goToSlide}
          offsetRadius={state.offsetRadius}
          showNavigation={state.showNavigation}
          animationConfig={state.config}
        />
      </div>
      <Dots
        slides={slides}
        currentSlide={currentSlide >= slides.length ? 0 : currentSlide}
        goToSlide={handleClick}
      />
    </div>
  );
}
