import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/auth/PrivateRoute";
import { AuthProvider } from "./components/context/authen/user/authContext";
import { ProductProvider } from "./components/context/productContext";
import Login from "./components/layout/authen/Login";
import Register from "./components/layout/authen/Register";
import CartPage from "./components/layout/cart/CartPage";
import CartPane from "./components/layout/cart/CartPane";
import Checkout from "./components/layout/checkout/Checkout";
import CheckoutPage from "./components/layout/checkout/CheckoutPage";
import HomePage from "./components/layout/home/HomePage";
import Fishs from "./components/layout/product/Fishs";
import Fruits from "./components/layout/product/Fruits";
import Product from "./components/layout/product/Product";
import ProductDetail from "./components/layout/product/ProductDetail";
import Salads from "./components/layout/product/Salads";
import Vegetables from "./components/layout/product/Vegetables";
import AllOrder from "./components/layout/user/AllOrder";
import Cancelled from "./components/layout/user/Cancelled";
import ConfirmationOrder from "./components/layout/user/ConfirmationOrder";
import Contact from "./components/layout/user/Contact";
import Delivered from "./components/layout/user/Delivered";
import Delivering from "./components/layout/user/Delivering";
import InforUser from "./components/layout/user/InforUser";
import ManageOrder from "./components/layout/user/ManageOrder";
import Notification from "./components/layout/user/Notification";
import ProductOrder from "./components/layout/user/ProductOrder";
import UserPage from "./components/layout/user/UserPage";
import Toastify from "./test/Toastify";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}>
          <Route path="/" element={<Vegetables></Vegetables>}></Route>
          <Route path="/fruits" element={<Fruits></Fruits>}></Route>
          <Route path="/salads" element={<Salads></Salads>}></Route>
          <Route path="/fishs" element={<Fishs></Fishs>}></Route>
          {/* <Route path="product:productId" element={<ProductDetail></ProductDetail>}></Route> */}
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage></CartPage>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/cart/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage></CheckoutPage>
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<div>Not Found</div>}></Route>
        <Route path="/cartPane" element={<CartPane></CartPane>}></Route>
        <Route path="/user" element={<UserPage></UserPage>}>
          <Route path="my-account" element={<InforUser></InforUser>}></Route>
          <Route path="purchare-order" element={<ManageOrder></ManageOrder>}>
            <Route
              path="/user/purchare-order/"
              element={<AllOrder></AllOrder>}
            ></Route>
            <Route
              path="/user/purchare-order/confimation"
              element={<ConfirmationOrder></ConfirmationOrder>}
            ></Route>
            <Route
              path="/user/purchare-order/delivering"
              element={<Delivering></Delivering>}
            ></Route>
            <Route
              path="/user/purchare-order/delivered"
              element={<Delivered></Delivered>}
            ></Route>
            <Route
              path="/user/purchare-order/cancelled"
              element={<Cancelled></Cancelled>}
            ></Route>
          </Route>
          <Route
            path="notification"
            element={<Notification></Notification>}
          ></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
        </Route>
        <Route path="/toastify" element={<Toastify></Toastify>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
