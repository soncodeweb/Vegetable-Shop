import { createContext, useContext, useState } from "react";
import useLocalStorage from "./authen/user/useLocalStorage";

const CheckoutContext = createContext();

function CheckoutProvider(props) {
  const [listProductCheckout, setListProductCheckout] = useLocalStorage("listProductCheckout", null);
  const value = [listProductCheckout, setListProductCheckout];
  return <CheckoutContext.Provider value={value} {...props}></CheckoutContext.Provider>;
}

function useCheckout() {
  const context = useContext(CheckoutContext);

  if (typeof context === "undefined") throw new Error("useCheckout must be used within a CheckoutProvider");
  return context;
}

export { useCheckout, CheckoutProvider };
