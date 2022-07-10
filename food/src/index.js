import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuthProvider } from "./components/context/authen/user/authContext";
import { ProductProvider } from "./components/context/productContext";
import { CheckoutProvider } from "./components/context/checkoutContext";
import { CartProvider } from "./components/context/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <CheckoutProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CheckoutProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
