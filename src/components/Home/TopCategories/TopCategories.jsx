import React from "react";
import "./TopCategories.css";
import category from "./topCategoriesJSON";
import { BiCategory } from "react-icons/bi";

function TopCategories() {
  const mql = matchMedia("(min-width: 0) and (max-width: 1279px)");

  return (
    <div className="category_container">
      {mql.matches ? null : (
        <>
          <div className="category_title">
            <BiCategory />

            <h3>Top Categories</h3>
          </div>

          <div className="category_cards">
            {category.map((el, ind) => {
              return (
                <div className="category_card" key={el.id}>
                  <span>{el.OPW}</span>
                  <span className="category_card-name">{el.name}</span>
                  <img src={el.img} alt={el.name} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default TopCategories;
