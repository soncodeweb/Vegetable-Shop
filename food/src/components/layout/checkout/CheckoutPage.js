import React, { Fragment } from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import Checkout from "./Checkout";
import { ToastContainer, toast } from "react-toastify";

function CheckoutPage() {
  return (
    <Fragment>
      <ToastContainer />
      <Header></Header>
      <Checkout></Checkout>
      <Footer></Footer>
    </Fragment>
  );
}

export default CheckoutPage;
