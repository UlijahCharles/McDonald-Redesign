import { useEffect, useState } from "react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = [slide1, slide2, slide3, slide4];
  const slideDom = document.querySelector(".slideshow");

  function handleSlideChange(type) {
    if (type === "next" && currentSlide < 4) {
      setCurrentSlide((currentSlide) => {
        return currentSlide + 1;
      });
    } else if (type === "prev" && currentSlide > 1) {
      setCurrentSlide((currentSlide) => {
        return currentSlide - 1;
      });
    }
  }

  useEffect(() => {
    if (slideDom) {
      slideDom.classList.remove("slide-img");
      const timeoutId = setTimeout(() => {
        slideDom.classList.add("slide-img");
      }, 1);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [currentSlide]);

  return (
    <div className="slideshow-container">
      <img
        className="slideshow slide-img"
        src={slides[currentSlide - 1]}
        alt="Slide 1"
      />
      <button
        onClick={() => {
          handleSlideChange("prev");
        }}
        disabled={currentSlide === 1}
      >
        ⬅️
      </button>
      {`${currentSlide} ╱ 4`}
      <button
        onClick={() => {
          handleSlideChange("next");
        }}
        disabled={currentSlide === 4}
      >
        ➡️
      </button>
    </div>
  );
};

export default SlideShow;
