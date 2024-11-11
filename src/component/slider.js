import React, { useState } from "react";
import SliderContent from "./slideContent";
import Arrows from "./arows";
import Dots from "./Dot";

const len = imageSlider.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots 
      activeIndex={activeIndex}
      imageSlider={imageSlider}
      onClick={(activeIndex)=>setActiveIndex(activeIndex)}/>
    </div>
  );
}
