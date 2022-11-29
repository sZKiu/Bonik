import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import {
  setProduct,
  setIncreaseAmount,
  setDecreaseAmount,
  setDeleteProduct,
  setCleanAll,
} from "../../redux/slices/productSlice";
import { setLastProduct } from "../../redux/slices/lastProduct";

function CartContent() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const addToCart = (el) => {
    if (products.some((element, ind) => el.name === element.name)) {
      dispatch(
        setIncreaseAmount({
          name: el.name,
        })
      );

      dispatch(
        setLastProduct({
          name: el.name,
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
        })
      );
    }
  };

  const decreaseAmount = (el) => {
    if (el.amount > 1) {
      dispatch(
        setDecreaseAmount({
          name: el.name,
        })
      );
    } else {
      dispatch(
        setDeleteProduct({
          name: el.name,
        })
      );
    }
  };

  const deleteProduct = (el) => {
    dispatch(
      setDeleteProduct({
        name: el.name,
      })
    );
  };

  const deleteAll = () => {
    dispatch(setCleanAll());
  };

  return (
    <div className={products.length !== 0 ? `cart_container-content` : null} >
      {products.length !== 0 ? (
        <>
          <p onClick={() => deleteAll()}>Clean All</p>
          {products.map((el, ind) => {
            return (
              <div className="cart_content" key={el.name}>
                <div>
                  <img src={el.img} alt={el.name} />
                </div>

                <div>
                  <div>
                    <h4>{el.name}</h4>
                    <p>
                      {`${el.price} * ${el.amount} `}{" "}
                      <b>
                        {Number.parseInt(el.price) * Number.parseInt(el.amount)}
                      </b>
                    </p>
                  </div>

                  <div>
                    <div>
                      <AiOutlinePlus onClick={() => addToCart(el)} />

                      <AiOutlineMinus onClick={() => decreaseAmount(el)} />
                    </div>
                    <div>
                      <AiOutlineClose onClick={() => deleteProduct(el)} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : <span className="cart_empty" >The Cart Is Empty</span>}
    </div>
  );
}

export default CartContent;
