import { configureStore } from "@reduxjs/toolkit";
import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducer";
import { cartProductsReducer } from "./reducers/cartReducer";

const loadCart = () => {
  try {
    const cart = localStorage.getItem("cartItems");
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

export const store = configureStore({
  reducer: {
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cartProducts: cartProductsReducer,
  },
  preloadedState: {
    cartProducts: {
      cartItems: loadCart(),
    },
  },
});

store.subscribe(() => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(store.getState().cartProducts.cartItems)
  );
});