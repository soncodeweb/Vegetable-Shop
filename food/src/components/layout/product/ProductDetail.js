import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../../style/product/productDetail.scss";
import { useProduct } from "../../context/productContext";
import { UseCart } from "../../context/cartContext";
import { useAuth } from "../../context/authen/user/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ProductDetail({
  open = false,
  handleClose = () => {},
  idProduct = 0,
}) {
  const notify = (mes, type) =>
    toast[type](mes, {
      position: "top-right",
      draggable: false,
      autoClose: 1000,
    });

  console.log("Re load!");
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState({});
  const [cart, setCart] = UseCart();
  const { user } = useAuth();
  function addToCart(idProduct, idUser, quantity) {
    const callApi = async () => {
      const result1 = await axios({
        method: "post",
        url: "http://localhost/food_backEnd/admin/cart/create.php",
        data: {
          userId: idUser,
          productId: idProduct,
          quantity: quantity,
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
        notify("Add product success!!", "success");
      }
    };
    callApi();
  }
  useEffect(() => {
    const callData = async () => {
      const result = await axios({
        method: "post",
        url: "http://localhost/food_backEnd/admin/product/show.php",
        data: {
          idProduct: idProduct,
        },
      }).catch((err) => console.log(err));
      setData(result.data.data);
    };
    callData();
    console.log("detail Effect: ", idProduct);
    setQuantity(1);
  }, [idProduct]);

  // console.log(data);

  if (typeof document === "undefined")
    return <div className={`productDetail-wrapper`}></div>;
  return ReactDOM.createPortal(
    <div
      className={`productDetail-wrapper ${open ? "" : "hidden"}`}
      onClick={handleClose}
    >
      <ToastContainer />
      <div
        className="productDetails"
        data-id={data.idProduct}
        onClick={(e) => e.stopPropagation()}
      >
        <i className="fa-solid fa-xmark closeDetail" onClick={handleClose}></i>
        <div className="image-details">
          <div className="thumbail">
            <img src={data.thumbail} alt="" />
          </div>
          <div className="other-thumbails">
            <img
              src="https://easyfreshmarket.com/image/cache/catalog/products/1/2-800x800.jpg"
              alt=""
              className="other-thumbail"
            />
            <img
              // src="https://easyfreshmarket.com/image/cache/catalog/products/1/2-800x800.jpg"
              src="https://easyfreshmarket.com/image/cache/catalog/products/1/10-212x212.jpg"
              alt=""
              className="other-thumbail"
            />
            <img
              src="https://easyfreshmarket.com/image/cache/catalog/products/1/4-212x212.jpg"
              alt=""
              className="other-thumbail"
            />
            {/* <img src="https://easyfreshmarket.com/image/cache/catalog/products/1/2-800x800.jpg" alt="" className="other-thumbail" /> */}
          </div>
        </div>
        <div className="infor-details">
          <h2 className="title-product">{data.name}</h2>
          <div className="rating">
            <i className="fa-solid fa-star star"></i>
            <i className="fa-solid fa-star star"></i>
            <i className="fa-solid fa-star star"></i>
            <i className="fa-solid fa-star star"></i>
            <i className="fa-solid fa-star star"></i>
          </div>
          <div className="money">
            {/* <span className="discount">${data.discount}</span>
            <span className="price">${data.price}</span> */}

            {data?.discount &&
            data?.discount !== "null" &&
            data?.discount !== "0" ? (
              <span className="discount">${data.discount}</span>
            ) : (
              <span className="price-noDiscount text-black font-semibold text-2xl">
                ${data.price}
              </span>
            )}

            {data?.discount &&
            data?.discount !== "null" &&
            data?.discount !== "0" ? (
              <span className="price">${data.price}</span>
            ) : (
              ""
            )}
          </div>
          <span className="sortDesc">{data.sortDesc}</span>
          <div className="form-group">
            <input
              type="number"
              step={0.5}
              min={1}
              defaultValue={quantity}
              value={quantity}
              className="quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />

            <button
              className="btnAddProduct"
              onClick={(e) => {
                addToCart(idProduct, user.idUser, quantity);
                // console.log("quantity", quantity);
              }}
            >
              + ADD TO CART
            </button>
            <div className="heart">
              <i className="far fa-heart icon-heart"></i>
              <span className="title-heart">Add To Wish List</span>
            </div>
          </div>
          <span className=" border-solid border-[#efefef] w-full inline-block border-[0.5px]"></span>
          <div className="description">
            <span className="title-desc">Description: </span>
            {data.description}
          </div>
          <span className="border-solid border-[#efefef] w-full inline-block border-[0.5px]"></span>
          <div className="share">
            <h3>SHARE</h3>
            <ul className="social-icons">
              <li>
                <a href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
}

export default ProductDetail;
