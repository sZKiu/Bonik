import React from "react";
import "./FlashDeals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { IoFlashSharp } from "react-icons/io5";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  setProduct,
  setIncreaseAmount,
} from "../../../redux/slices/productSlice";
import { setLastProduct } from "../../../redux/slices/lastProduct";

function FlashDeals({ products, swiper }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const mqlPhone = matchMedia("(min-width: 0px) and (max-width: 767px)");
  const mqlPad = matchMedia("(min-width: 768px) and (max-width: 1279px)");

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
    <div className={swiper ? "flashdeals_container" : "container"}>
      {swiper ? (
        <>
          <div className="flashdeals_title">
            <IoFlashSharp className="flashdeals_title-h3" />

            <h3 className="flashdeals_title-h3">Flash Deals</h3>
          </div>

          <Swiper
            loop={true}
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={mqlPhone.matches ? 1 : mqlPad.matches ? 2 : 4}
            navigation
            className="flashdeals_swiper"
          >
            {products.map((el, ind) => {
              return (
                <SwiperSlide key={el.id} className="flashdeals_swiperslice">
                  <div className="flashdeal_absolute">
                    <span>50% off</span>
                  </div>
                  <img src={el.img} alt={el.name} />
                  <h5>{el.name}</h5>
                  <div className="stars-container">
                    <AiFillStar className="orange" />
                    <AiFillStar className="orange" />
                    <AiFillStar className="orange" />
                    <AiFillStar className="orange" />
                    <AiFillStar className="orange" />
                  </div>
                  <span>${el.price}</span>
                  <div
                    className="flashdeal_absolute"
                    onClick={() => addToCart(el)}
                  >
                    <AiOutlinePlus />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      ) : (
        <>
          <div className="flashdeals_title">
            <h3>Mobile Phone</h3>
          </div>

          <div className="flashdeals_content">
            {products.map((el, ind) => {
              return (
                <div key={el.id} className="flashdeals_swiperslice">
                  <div className="flashdeal_absolute">
                    <span>50% off</span>
                  </div>
                  <img src={el.img} alt={el.name} />
                  <h5>{el.name}</h5>
                  <div className="stars-container">
                    <AiFillStar className="orange" />
                    <AiFillStar className="orange" />
                    <AiFillStar className="orange" />
                    <AiFillStar className="orange" />
                    <AiFillStar className="orange" />
                  </div>
                  <span>${el.price}</span>
                  <div
                    className="flashdeal_absolute"
                    onClick={() => addToCart(el)}
                  >
                    <AiOutlinePlus />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default FlashDeals;
