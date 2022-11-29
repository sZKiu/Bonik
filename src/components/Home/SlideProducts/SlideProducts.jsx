import React from "react";
import "./SlideProducts.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slides from "./slideProductsJSON";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import {
  setProduct,
  setIncreaseAmount,
} from "../../../redux/slices/productSlice";
import { setLastProduct } from "../../../redux/slices/lastProduct";

function SlideProducts() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const mql = matchMedia("(min-width: 0px) and (max-width: 1279px)");

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
    <div className="container_swiper">
      <Swiper
        loop={true}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {slides.map((el, ind) => {
          return (
            <SwiperSlide key={el.id} className="individual-swiper">
              {mql.matches ? (
                <>
                  <img src={el.img} alt={el.name} />

                  <div className="individual-swiper-firstPart">
                    <h2>50% Off for Your First Shopping</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi sunt reprehenderit quis ea impedit qui?
                    </p>
                    <span>${el.price}</span>
                    <button onClick={() => addToCart(el)}>Buy Now!</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="individual-swiper-firstPart">
                    <h2>50% Off for Your First Shopping</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi sunt reprehenderit quis ea impedit qui?
                    </p>
                    <span>${el.price}</span>
                    <button onClick={() => addToCart(el)}>Buy Now!</button>
                  </div>

                  <img src={el.img} alt={el.name} />
                </>
              )}
            </SwiperSlide>
          );
        })}

        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}

export default SlideProducts;
