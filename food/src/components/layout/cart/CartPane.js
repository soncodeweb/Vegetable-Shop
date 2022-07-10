import React, { Fragment, useEffect, useState } from "react";
import "../../style/cart/cartPane.scss";
import ProductCartPane from "./ProductCartPane";
import axios from "axios";
import { useAuth } from "../../context/authen/user/authContext";
import { Link } from "react-router-dom";
import { UseCart } from "../../context/cartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CartPane() {
  const { user } = useAuth();
  const [idCart, setIdCart] = useState(0);
  const [cart, setCart] = UseCart();
  const notify = () =>
    toast.success("Delete to cart successfully!", {
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
      callData();
    } else {
      setCart([]);
    }
  }, [user, idCart, cart?.length]);

  const deleteProductInCart = async (id) => {
    const result = await axios.post("http://localhost/food_backEnd/admin/cart/delete.php/", {
      idCart: id,
    });
    setIdCart(id);
    notify();
  };

  return (
    <Fragment>
      <div className="list-cart ">
        {cart !== "undefined" && cart?.length > 0 ? (
          cart.map((item) => (
            <ProductCartPane
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
            ></ProductCartPane>
          ))
        ) : (
          <ul className="">
            <li>No products in the cart.</li>
          </ul>
        )}
      </div>
      {/* <div className="total-wrapper">
        <span>Subtotal:</span>
        <span className="total">$100.00</span>
      </div> */}
      {cart?.length > 0 ? (
        <div className="view-cart-and-checkout mt-[15px]">
          <Link to={"/cart"}>VIEW CART</Link>
        </div>
      ) : null}
    </Fragment>
  );
}

export default CartPane;
