import React from "react";
import { categories } from "./mobilePhoneJSON";

function Brands() {
  return (
    <div className="brands-container" >
      <div className="brands-title" >
        <h4>Brands</h4>

        <h4>Shops</h4>
      </div>

      <div className="brands-content" >
        {categories.map((el, ind) => {
          return <div key={el.id} className="brands-content-individual" >
            <img src={el.img} alt="Logo" />

            <span>{el.name}</span>
          </div>;
        })}
      </div>
    </div>
  );
}

export default Brands;
