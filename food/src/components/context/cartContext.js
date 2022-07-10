import React, { createContext, Fragment, useContext, useState } from "react";
import useLocalStorage from "./authen/user/useLocalStorage";

const CartContext = createContext();

function CartProvider(props) {
  const [cart, setCart] = useLocalStorage("cart", null);
  const value = [cart, setCart];
  return <CartContext.Provider value={value} {...props}></CartContext.Provider>;
}

function UseCart() {
  const context = useContext(CartContext);
  if (typeof context === "undefined") throw new Error("UseCart must be used within CartProvider");
  return context;
}

export { CartProvider, UseCart };
