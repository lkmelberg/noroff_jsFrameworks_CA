import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "REMOVE_ALL_FROM_CART":
      return {
        ...state,
        cartItems: [],
      };
    case "LOAD_CART_STATE_FROM_STORAGE":
      return action.payload;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const initialState = loadCartStateFromLocalStorage();
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const removeAllFromCart = () => {
    dispatch({ type: "REMOVE_ALL_FROM_CART" });
    localStorage.clear();
  };

  return (
    <CartContext.Provider value={{ cartState, dispatch, removeAllFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const saveCartStateToLocalStorage = (state) => {
  localStorage.setItem("cartState", JSON.stringify(state));
};

export const loadCartStateFromLocalStorage = () => {
  const storedState = JSON.parse(localStorage.getItem("cartItems"));
  return storedState || { cartItems: [] };
};
