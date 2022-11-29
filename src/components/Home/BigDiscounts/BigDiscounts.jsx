import React from "react";
import discount from "./bigDiscountsJSON";
import "./BigDiscounts.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillGift } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  setProduct,
  setIncreaseAmount,
} from "../../../redux/slices/productSlice";
import { setLastProduct } from "../../../redux/slices/lastProduct";

function BigDiscounts() {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const mqlPhone = matchMedia("(min-width: 0px) and (max-width: 767px)");
  const mqlPad = matchMedia("(min-width: 767px) and (max-width: 1279px)");


  const addToCart = (el) => {
      const element = product.find((element, ind) => el.name === element.name);
    if (
      product.some((element, ind) => el.name === element.name)
    ) {
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
  }

  return (
    <div className="bigdiscounts_container">
      <div className="bigdiscounts_title" >

        <AiFillGift/>

        <h3>Big Discounts</h3>

      </div>

      <Swiper
      loop={true}
      spaceBetween={15}
      slidesPerView={mqlPhone.matches ? 2 : mqlPad.matches ? 3 : 5  }
      className="bigdiscounts_swiper"
      >
        {discount.map((el, ind) => {
          return (
            <SwiperSlide key={el.id} className="bigdiscounts_swiperslide" onClick={() => addToCart(el)} >
              <img src={el.img} alt={el.name} />
              <h4>{el.name}</h4>
              <p>${el.price}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>

    </div>
  );
}

export default BigDiscounts;
