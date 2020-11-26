import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slideshow_2 from "../../img/slideshow_2.jpg";
import slideshow_1 from "../../img/slideshow_1.jpg";
import "./Slideshow.css";

const Slideshow = () => {
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideshow_2})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideshow_1})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideshow_2})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
