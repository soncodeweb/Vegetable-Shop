import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/cart/contentCartPage.scss";
import ProductCartPage from "./ProductCartPage";
import axios from "axios";
import { useAuth } from "../../context/authen/user/authContext";
import { useCheckout } from "../../context/checkoutContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseCart } from "../../context/cartContext";

function ContentCartPage() {
  const { user } = useAuth();
  const [product, setListProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [listProductCheckout, setListProductCheckout] = useCheckout();
  const [cart, setCart] = UseCart();
  const navigate = useNavigate();

  const notify = () =>
    toast.error("Please select the product to order!", {
      position: "top-right",
      draggable: false,
      autoClose: 1000,
    });

  useEffect(() => {
    const callData = async () => {
      const result = await axios({
        method: "post",
        url: "http://localhost/food_backEnd/admin/cart/show.php",
        data: {
          userId: user.idUser,
        },
      }).catch((err) => console.log(err));
      setCart(result.data.data);
    };

    if (user !== null) {
      setTotal(
        product.reduce(
          (total, item) =>
            item.discount && item.discount > 0
              ? total + Number(item.discount) * Number(item.quantity)
              : total + Number(item.price) * Number(item.quantity),
          0
        )
      );
      callData();
      console.log("Reload in effect!!");
    } else {
      setCart([]);
    }
  }, [user, product?.length, cart?.length]);

  const deleteProductInCart = async (id) => {
    const result = await axios.post(
      "http://localhost/food_backEnd/admin/cart/delete.php/",
      {
        idCart: id,
      }
    );
    setListProduct((prev) => prev.filter((item) => item.idCart !== id));
    // setCart( product);
  };

  const updateProductInCart = async (quantity, idCart, userId) => {
    const result = await axios.post(
      "http://localhost/food_backEnd/admin/cart/update.php/",
      {
        quantity: quantity,
        idCart: idCart,
        userId: userId,
      }
    );
    setCart(result?.data.data);
  };

  const addProduct = (
    idCart,
    price,
    discount,
    quantity,
    name,
    sortDesc,
    thumbail,
    productId
  ) => {
    setListProduct((prev) => [
      ...prev,
      {
        idCart: idCart,
        price: price,
        discount: discount,
        quantity: quantity,
        name: name,
        sortDesc: sortDesc,
        thumbail: thumbail,
        productId: productId,
      },
    ]);
  };

  const deleteProduct = (id) => {
    setListProduct((prev) => prev.filter((item) => item.idCart !== id));
  };

  useEffect(() => {
    setTotal(
      product.reduce(
        (total, item) =>
          item.discount && item.discount > 0
            ? total + Number(item.discount) * Number(item.quantity)
            : total + Number(item.price) * Number(item.quantity),
        0
      )
    );
  }, [product]);
  return (
    <div className="cart-wrapper">
      <div className="container">
        <div className="title-cart-wrapper">
          <img src="image/Cart.jpg" alt="" />
          <div className="title-cart">
            <h3>Cart</h3>
            <ul className="flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link className="cart" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-cart-wrapper">
          {cart?.length > 0 ? (
            <table className="content-cart">
              <thead>
                <tr className="">
                  <td></td>
                  <td>IMAGE</td>
                  <td>PRODUCT</td>
                  <td>PRICE</td>
                  <td>QUANTITY</td>
                  <td>TOTAL</td>
                  <td>CHECK</td>
                </tr>
              </thead>
              <tbody>
                {cart?.length > 0
                  ? cart.map((item) => (
                      <ProductCartPage
                        addProduct={() => {
                          addProduct(
                            item.idCart,
                            item.price,
                            item.discount,
                            item.quantity,
                            item.name,
                            item.sortDesc,
                            item.thumbail,
                            item.productId
                          );
                        }}
                        deleteProduct={() => {
                          deleteProduct(item.idCart);
                        }}
                        deleteProductInCart={() => {
                          deleteProductInCart(item.idCart);
                        }}
                        key={item.idCart}
                        idCart={item.idCart}
                        productId={item.productId}
                        name={item.name}
                        sortDesc={item.sortDesc}
                        price={item.price}
                        discount={item.discount}
                        quantity={item.quantity}
                        thumbail={item.thumbail}
                      ></ProductCartPage>
                    ))
                  : null}
              </tbody>
            </table>
          ) : (
            <div className="cart-empty-wrapper my-[50px]">
              <div className="cart-empty flex items-center px-[20px] py-[15px] border-solid border-t-[3px] border-[#40a944] bg-[#f7f6f7] mb-[50px]">
                <i className="fas fa-tablet-alt mr-[15px] text-[#40a944]"></i>
                <p className="text-[#666]">Your cart is currently empty.</p>
              </div>
              <div className="returnShop">
                <Link to="/">
                  <button className="py-[10px] px-[30px] bg-[#222] hover:bg-[#28a745] duration-75 rounded-lg text-[#fff] font-semibold text-[16px] ">
                    Return To Shop
                  </button>
                </Link>
              </div>
            </div>
          )}
          {cart?.length > 0 ? (
            <div className="btn-group">
              <div className="return">
                <Link to={"/"}>
                  <button className="btn-return">Continue Shopping</button>
                </Link>
              </div>
              <div className="total">
                <div className="total-money">
                  <span className="total-title">Total money: </span>
                  <span id="total-money">${total.toFixed(2)}</span>
                </div>
                {/* <Link to={"/cart/checkout"} className="block"> */}
                <button
                  className="total-checkout"
                  onClick={() => {
                    if (product?.length > 0) {
                      navigate("/cart/checkout");
                      // localStorage.setItem("listProduct", JSON.stringify(product));
                      setListProductCheckout(product);
                    } else {
                      // navigate("/cart");
                      // setListProductCheckout(null);
                      setListProductCheckout(null);
                      notify();
                    }
                  }}
                >
                  Checkout
                </button>
                {/* </Link> */}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ContentCartPage;
