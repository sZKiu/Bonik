import React from "react";
import { useSelector } from "react-redux";

function CartSummary({ price }) {
  const products = useSelector((state) => state.product);

  return (
    <>
      {products.length !== 0 ? (
        <div className="cart_summary-container">
          <h3>Cart Summary</h3>

          <div>
            <p>Total Price:</p>

            <p>${price}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CartSummary;
