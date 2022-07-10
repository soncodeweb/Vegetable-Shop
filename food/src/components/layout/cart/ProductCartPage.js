import React, { Fragment, useEffect, useState } from "react";
import { useCheckout } from "../../context/checkoutContext";
import axios from "axios";
import { useAuth } from "../../context/authen/user/authContext";
import { UseCart } from "../../context/cartContext";
function ProductCartPage({
  addProduct = () => {},
  deleteProduct = () => {},
  deleteProductInCart = () => {},
  idCart,
  productId,
  name,
  sortDesc,
  price,
  discount,
  quantity,
  thumbail,
}) {
  // const [number, setNumber] = useState(quantity);
  const { user } = useAuth();
  const [cart, setCart] = UseCart();

  // useEffect(() => {
  //   console.log(idCart, number, user.idUser);

  //   callApi();
  //   listCart();
  // }, [number]);

  // load data cart

  async function update(number) {
    const result1 = await axios({
      method: "post",
      url: "http://localhost/food_backEnd/admin/cart/update.php/",
      data: {
        quantity: number,
        userId: user.idUser,
        idCart: idCart,
      },
    }).catch((erros) => {
      console.log(erros);
    });
    if (result1?.data.status) {
      // setCart(result?.data.data);
      console.log("success!!", result1?.data.msg);
    }

    const result2 = await axios({
      method: "post",
      url: "http://localhost/food_backEnd/admin/cart/show.php/",
      data: {
        userId: user.idUser,
      },
    }).catch((erros) => {
      console.log(erros);
    });
    // console.log(result2?.data?.data);
    setCart(result2?.data?.data);
  }

  // const callApi = async (number) => {
  //   const result = await axios({
  //     method: "post",
  //     url: "http://localhost/food_backEnd/admin/cart/update.php/",
  //     data: {
  //       quantity: number,
  //       userId: user.idUser,
  //       idCart: idCart,
  //     },
  //   }).catch((erros) => {
  //     console.log(erros);
  //   });
  //   if (result?.data.status) {
  //     // setCart(result?.data.data);
  //     console.log("success!!", result?.data.msg);
  //   }
  // };

  // const listCart = async () => {
  //   const result = await axios({
  //     method: "post",
  //     url: "http://localhost/food_backEnd/admin/cart/show.php/",
  //   }).catch((erros) => {
  //     console.log(erros);
  //   });
  //   if (result?.data.status) {
  //     // setCart(result?.data.data);
  //     setCart(result?.data?.data);
  //   }
  // };

  return (
    <>
      <tr>
        <td className="close" onClick={deleteProductInCart}>
          <a href="" onClick={(e) => e.preventDefault()}>
            x
          </a>
        </td>
        <td className="image">
          <img src={thumbail} alt="" className="image-product" />
        </td>
        <td>
          <a href="" className="title">
            {name}
          </a>
        </td>
        {discount && discount !== null && discount > 0 ? (
          <td>
            <span className="price">${discount}</span>
          </td>
        ) : (
          <td>
            <span className="price">${price}</span>
          </td>
        )}
        <td>
          <input
            type="number"
            step="0.5"
            min="0"
            defaultValue={quantity}
            // value={number}
            onChange={(e) => {
              // setNumber(e.target.value);
              update(e.target.value);
            }}
            className="quantity"
          />
        </td>
        {discount && discount !== null && discount > 0 ? (
          <td>
            <span className="total">${(discount * quantity).toFixed(2)}</span>
          </td>
        ) : (
          <td>
            <span className="total">${(price * quantity).toFixed(2)}</span>
          </td>
        )}

        <td>
          <input
            type="checkbox"
            className="choise"
            // checked={check(productId)}
            onChange={(e) => {
              // if (check(idCart)) {
              //   e.target.checked = true;
              // }
              if (e.target.checked) {
                addProduct();
              } else {
                deleteProduct();
              }
            }}
          />
        </td>
      </tr>
    </>
  );
}

export default ProductCartPage;
