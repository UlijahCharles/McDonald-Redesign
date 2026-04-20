import { useState } from "react";
import Slide from "./Slide";
import slideData from "../assets/data/slide.json";
import arrowRight from "../assets/arrow-right.png";
import arrowLeft from "../assets/arrow-left.png";
import slash from "../assets/slash.png";

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = slideData.map((slide) => (
    <Slide key={slide.id} slide={slide} />
  ));
  console.log(slides);

  function handleSlideChange(type) {
    const infoContainer = document.querySelector(".slide-info-container");
    const imageContainer = document.querySelector(".slide-image-container");

    infoContainer.classList.add("close-left");
    imageContainer.classList.add("close-right");

    const timeoutId = setTimeout(() => {
      if (type === "next" && currentSlide < slides.length) {
        setCurrentSlide((currentSlide) => {
          return currentSlide + 1;
        });
      } else if (type === "prev" && currentSlide > 1) {
        setCurrentSlide((currentSlide) => {
          return currentSlide - 1;
        });
      }
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }

  return (
    <div className="slideshow-container">
      {slides[currentSlide - 1]}
      <div className="slideshow-controls">
        <button
          onClick={() => {
            handleSlideChange("prev");
          }}
          disabled={currentSlide === 1}
        >
          <img
            className="control-img control-img__left"
            src={arrowLeft}
            alt=""
          />
        </button>
        {`${currentSlide}`}{" "}
        <img className="control-img slash" src={slash} alt="" />{" "}
        {`${slides.length}`}
        <button
          onClick={() => {
            handleSlideChange("next");
          }}
          disabled={currentSlide === slides.length}
        >
          <img
            className="control-img control-img__right"
            src={arrowRight}
            alt=""
          />
        </button>
      </div>
      <progress max={slides.length} value={currentSlide} />
    </div>
  );
};

export default SlideShow;
