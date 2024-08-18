import React from "react";
import "./SliderDiv.css";
import Slider from "./Slider/Slider";
import Banners from "./SmallBanners/Banners";

export default function Sliderdiv() {
  return (
    <>
      <div className="sliderdiv">
        <div className="slidercenterdiv">
          <Slider />
        </div>
        <Banners />
      </div>
    </>
  );
}
