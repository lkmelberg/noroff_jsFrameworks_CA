// Cart.js
import React, { useEffect } from "react";
import {
  useCart,
  saveCartStateToLocalStorage,
  loadCartStateFromLocalStorage,
} from "../../context/CartContext";

export function Cart() {
  const { cartState, dispatch } = useCart();
  const numberOfItemsInCart = cartState.cartItems.length;

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  useEffect(() => {
    loadCartStateFromLocalStorage();
  }, []);

  useEffect(() => {
    saveCartStateToLocalStorage(cartState);
  }, [cartState]);

  return (
    <div>
      <h2>Your Cart</h2>
      <p>Total items in cart: {numberOfItemsInCart}</p>
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - {item.discountedPrice} NOK
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
