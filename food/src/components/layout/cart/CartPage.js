import React, { Fragment } from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import ContentCartPage from "./ContentCartPage";
import { ToastContainer, toast } from "react-toastify";
function CartPage() {
  return (
    <Fragment>
      <ToastContainer />
      <Header></Header>
      <ContentCartPage></ContentCartPage>
      <Footer></Footer>
    </Fragment>
  );
}

export default CartPage;
