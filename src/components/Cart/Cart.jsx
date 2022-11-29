import React from "react";
import "./Cart.css";
import Header from "../Common/Header";
import CartContent from "./CartContent";
import CartSummary from "./CartSummary";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

function Cart() {
  const products = useSelector((state) => state.product);
  let price = [];
  let realPrice = 0;

  products.forEach((el, ind) => {
    price.push(el.price * el.amount);
  });

  price.forEach((el, ind) => {
    realPrice += el;
  });

  return (
    <div>

      <Helmet>
        <title>Cart</title>
      </Helmet>

      <Header />

      <main className="cart_container">
        <CartContent />

        <CartSummary price={realPrice} />
      </main>
    </div>
  );
}

export default Cart;
