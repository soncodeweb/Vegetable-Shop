import React, { useEffect } from "react";
import "../../style/home/newProduct.scss";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import Vegetables from "../product/Vegetables";
import Fishs from "../product/Fishs";
import Salads from "../product/Salads";
import Fruits from "../product/Fruits";
import { useProduct } from "../../context/productContext";
import ProductDetail from "../product/ProductDetail";
const NewProducts = () => {
  const [idProduct, setIdProduct, showProductDetail, handleClose, setShowProductDetail] = useProduct();
  useEffect(() => {
    // <ProductDetail
    //   open={true}
    //   handleClose={() => {
    //     handleClose();
    //   }}
    // ></ProductDetail>;'
    console.log("Effect");
  }, [showProductDetail]);
  console.log(idProduct, showProductDetail);

  return (
    <React.Fragment>
      <ProductDetail
        open={showProductDetail}
        handleClose={() => {
          handleClose();
        }}
        idProduct={idProduct}
      ></ProductDetail>
      ;
      <div className="new-products">
        <div className="container">
          <div className="title-newProducts flex a-center">
            <h2>Trending Products</h2>
            <h6>Recently added our store</h6>
            <div className="bar-product"></div>
            <nav className="menu-products flex j-between">
              <li>
                <NavLink to={"/"} id="vegetables" className={({ isActive }) => (isActive ? "text-[#40a944]" : "")}>
                  VEGETABLES
                </NavLink>
              </li>
              <li>
                <NavLink to={"/fruits"} id="fruits" className={({ isActive }) => (isActive ? "text-[#40a944]" : "")}>
                  FRUITS
                </NavLink>
              </li>
              <li>
                <NavLink to={"/salads"} id="salads" className={({ isActive }) => (isActive ? "text-[#40a944]" : "")}>
                  SALADS
                </NavLink>
              </li>
              <li>
                <NavLink to={"/fishs"} id="fishs" className={({ isActive }) => (isActive ? "text-[#40a944]" : "")}>
                  FISHS
                </NavLink>
              </li>
            </nav>
          </div>

          <Outlet></Outlet>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewProducts;
