import React from "react";
import "./NewArrival.css";
import { MdOutlineNewReleases } from "react-icons/md";
import arrivals from "./newArrivalJSON";
import { useDispatch, useSelector } from "react-redux";
import {
  setProduct,
  setIncreaseAmount,
} from "../../../redux/slices/productSlice";
import { setLastProduct } from "../../../redux/slices/lastProduct";

function NewArrival() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const addToCart = (el) => {
    const element = product.find((element, ind) => el.name === element.name);
    if (product.some((element, ind) => el.name === element.name)) {
      dispatch(
        setIncreaseAmount({
          name: el.name,
        })
      );

      dispatch(
        setLastProduct({
          name: el.name,
          amount: element?.amount + 1,
        })
      );
    } else {
      dispatch(
        setProduct({
          name: el.name,
          price: el.price,
          img: el.img,
          amount: 1,
        })
      );

      dispatch(
        setLastProduct({
          name: el.name,
          amount: 1,
        })
      );
    }
  };

  return (
    <div className="newarrivals_container">
      <div className="newarrivals_title">
        <MdOutlineNewReleases />

        <h3>New Arrivals</h3>
      </div>

      <div className="newarrivals_cards">
        {arrivals.map((el, ind) => {
          return (
            <div
              className="newarrivals_card"
              key={el.id}
              onClick={() => addToCart(el)}
            >
              <img src={el.img} alt={el.name} />
              <h4>{el.name}</h4>
              <p>${el.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewArrival;
