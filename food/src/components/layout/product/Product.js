import React, { useState, Fragment, useEffect } from "react";
import { useProduct } from "../../context/productContext";
import "../../style/product/product.scss";
import { useAuth } from "../../context/authen/user/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UseCart } from "../../context/cartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = (props) => {
  const notify = () =>
    toast.success("Add to cart successfully!", {
      position: "top-right",
      draggable: false,
      autoClose: 1000,
    });

  const { id, name, sortDesc, price, discount, thumbail } = props;

  const [
    idProduct,
    setIdProduct,
    showProductDetail,
    handleClose,
    setShowProductDetail,
  ] = useProduct();
  const [cart, setCart] = UseCart();

  const { user } = useAuth();
  const navigate = useNavigate();
  function addToCart(idProduct, idUser) {
    const callApi = async () => {
      const result1 = await axios({
        method: "post",
        url: "http://localhost/food_backEnd/admin/cart/create.php",
        data: {
          userId: idUser,
          productId: idProduct,
          quantity: 1,
          // createdDate: "2022-6-4 11:52:24",
        },
      }).catch((error) => {
        console.log(error);
      });

      const result2 = await axios({
        method: "post",
        url: "http://localhost/food_backEnd/admin/cart/show.php",
        data: {
          userId: user.idUser,
        },
      }).catch((error) => {
        console.log(error);
      });
      setCart(result2.data.data);
      if (result2) {
        notify();
      }
    };
    callApi();
  }
  return (
    <>
      <div className="product-item cursor-pointer">
        <ul className="item" data={id}>
          <li>
            <a href="">
              <img src={thumbail} alt="" />
            </a>
            <div className="products-button">
              <ul className="flex j-between a-center cursor-pointer">
                <li
                  onClick={() =>
                    user !== null
                      ? addToCart(id, user.idUser)
                      : navigate("/login")
                  }
                >
                  <i className="fas fa-shopping-cart"></i>
                </li>
                <li>
                  <i className="far fa-heart"></i>
                </li>
                <li>
                  <i className="fas fa-undo"></i>
                </li>
                <li
                  className="quickview"
                  onClick={(e) => {
                    e.preventDefault();
                    setIdProduct(id);
                    setShowProductDetail(true);
                  }}
                >
                  <i className="fas fa-search"></i>
                </li>
              </ul>
            </div>
            {discount && discount !== "null" && discount !== "0" ? (
              <div className="sale">
                <span>Sale!</span>
              </div>
            ) : (
              ""
            )}
          </li>
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setIdProduct(id);
                setShowProductDetail(true);
              }}
            >
              {name}
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                setIdProduct(id);
                setShowProductDetail(true);
              }}
              href=""
            >
              {sortDesc}
            </a>
          </li>
          <li>
            {discount && discount !== "null" && discount !== "0" ? (
              <span className="price">${discount}</span>
            ) : (
              <span className="price-noDiscount text-black font-medium">
                ${price}
              </span>
            )}
            {discount && discount !== "null" && discount !== "0" ? (
              <span className="old-price">${price}</span>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Product;
