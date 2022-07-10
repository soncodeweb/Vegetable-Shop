import React, { useState } from "react";
import NewProducts from "./NewProducts";
import Slider from "../slider/Slider";
import Banner from "./Banner";
import Header from "./Header";
import Policy from "./Policy";
import DealsOfTheWeeks from "./DealsOfTheWeeks";
import BlackFriday from "./BlackFriday";
import BestSellers from "./BestSellers";
import MostView from "./MostView";
import Blogs from "./Blogs";
import FeaturedProduct from "./FeaturedProduct";
import Brand from "./Brand";
import Footer from "./Footer";
import Login from "../authen/Login";
import ProductDetail from "../product/ProductDetail";
import { ProductProvider, useProduct } from "../../context/productContext";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
  // const [showProductDetail, setShowProductDetail] = useState(true);

  // const [idProduct, setIdProduct, showProductDetail, handleClose, setShowProductDetail] = useProduct();
  console.log("Homepage");
  return (
    <React.Fragment>
      <ToastContainer />
      {/* <ProductProvider> */}
      <Header></Header>
      <Slider></Slider>
      <Policy></Policy>
      <NewProducts></NewProducts>
      <Banner></Banner>
      <DealsOfTheWeeks></DealsOfTheWeeks>
      <BlackFriday></BlackFriday>
      <BestSellers></BestSellers>
      <MostView></MostView>
      <Blogs></Blogs>
      <FeaturedProduct></FeaturedProduct>
      <Brand></Brand>
      <Footer></Footer>
      {/* <ProductDetail
        open={showProductDetail}
        handleClose={() => {
          handleClose();
        }}
      ></ProductDetail> */}
      {/* {console.log(idProduct)} */}
    </React.Fragment>
  );
};

export default HomePage;
