import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
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
    case "LOAD_CART_STATE_FROM_STORAGE":
      return action.payload;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const initialState = loadCartStateFromLocalStorage();

  // If there are no saved cart items in localStorage, use an empty cart state
  const initialCartState = initialState || { cartItems: [] };
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  // Function to load the initial cart state from localStorage
  const loadInitialCartStateFromLocalStorage = () => {
    const storedState = JSON.parse(localStorage.getItem("cartState")) || {
      cartItems: [],
    };
    dispatch({ type: "LOAD_CART_STATE_FROM_STORAGE", payload: storedState });
  };

  // Load the initial cart state from localStorage when the CartProvider is created
  useEffect(() => {
    loadInitialCartStateFromLocalStorage();
  }, []);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
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
