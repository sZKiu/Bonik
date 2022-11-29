import React from "react";
import { banner } from "./banner";
import "./Banner.css"

function Banner() {
  return (
    <div className="banner">
      {banner.map((el, ind) => {
        return (
          <div key={el.id} >
            <img src={el.img} alt="banner_1" />
          </div>
        );
      })}
    </div>
  );
}

export default Banner;
