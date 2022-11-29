import React from "react";
import "./MobilePhones.css"
import { shops } from "./mobilePhoneJSON";
import Brands from "./Brands";
import MobilePhones from "../FlashDeals/FlashDeals";

function MobilePhonesContainer() {
  const mql = matchMedia("(min-width: 0px) and (max-width: 1279px)");

  return (
    <div className="mobilephones_container" >
      { mql.matches ? null : <Brands/> }

      <MobilePhones products={shops} swiper={false} />
    </div>
  );
}

export default MobilePhonesContainer;
