import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCheckout } from "../../context/checkoutContext";
import "../../style/checkout/checkout.scss";
import imageHeader from "./Cart.jpg";
import ProductCheckout from "./ProductCheckout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/authen/user/authContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Checkout() {
  const notify = () =>
    toast.success("Ordered Successfully!", {
      position: "top-right",
      draggable: false,
      autoClose: 2000,
    });

  const { user } = useAuth();
  const navigate = useNavigate();
  const addDataInOrderDetail = (idOrder) => {
    const callApi = async (idOrder, idProduct, quantity) => {
      console.log("render callApi addDataInOrderDetail");
      const result = await axios({
        method: "post",
        url: "http://localhost/food_backEnd/admin/orderdetail/create.php",
        data: {
          idOrder: idOrder,
          productId: idProduct,
          quantity: quantity,
        },
      }).catch((error) => console.log(error));
    };

    try {
      if (listProductCheckout && listProductCheckout.length > 0) {
        listProductCheckout.map((item) =>
          callApi(idOrder, item.productId, item.quantity)
        );
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  const updateTotalMoney = async (idOrder, total) => {
    const result = await axios({
      method: "post",
      url: "http://localhost/food_backEnd/admin/order/update.php",
      data: {
        idOrder: idOrder,
        totalMoney: total,
      },
    }).catch((error) => console.log(error));
  };

  const deleteProductCart = () => {
    const callApi = async (idCart) => {
      const result = await axios({
        method: "post",
        url: "http://localhost/food_backEnd/admin/cart/delete.php",
        data: {
          idCart: idCart,
        },
      }).catch((error) => console.log(error));
    };

    try {
      if (listProductCheckout && listProductCheckout.length > 0) {
        listProductCheckout.map((item) => callApi(item.idCart));
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  const schema = yup.object({
    name: yup.string().required("*Please enter your name "),
    phoneNumber: yup.string().required("*Please enter your phone number "),
    ward: yup.string().required("*Please enter your ward "),
    district: yup.string().required("*Please enter your district "),
    province: yup.string().required("*Please enter your province "),
    address: yup.string().required("*Please enter your address "),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (value) => {
    console.log("render onSubmit");
    if (isValid) {
      const callApi = async () => {
        const result = await axios({
          method: "post",
          url: "http://localhost/food_backEnd/admin/order/create.php",
          data: {
            userId: user.idUser,
            district: value.district,
            province: value.province,
            ward: value.ward,
            address: value.address,
            note: value.note,
          },
        }).catch((error) => console.log(error));
        if (result?.data?.data?.idOrder) {
          addDataInOrderDetail(result.data.data.idOrder);
          updateTotalMoney(result?.data?.data?.idOrder, total);
          setListProductCheckout(null);
          notify();
          setTimeout(() => {
            navigate("/user/purchare-order/confimation");
            deleteProductCart();
          }, 1000);
        } else {
          console.log("addDataInOrderDetail Failed");
        }
      };

      callApi();
    }
  };

  // console.log("dataCreateOrder ", data);

  // đóng kiểm tra input

  const [listProductCheckout, setListProductCheckout] = useCheckout();
  // console.log("listProduct", listProduct);
  // const [list, setList] = useState(listProduct);

  var total = 0;
  if (listProductCheckout) {
    total = listProductCheckout.reduce(
      (total, item) =>
        item.discount && item.discount > 0
          ? total + Number(item.discount) * Number(item.quantity)
          : total + Number(item.price) * Number(item.quantity),
      0
    );
  }

  return (
    <div className="order-wrapper">
      <div className="container">
        <div className="title-order-wrapper">
          <img src={imageHeader} alt="" />
          <div className="title-order">
            <h3>Order</h3>
            <ul className="flex">
              <li>
                <a href="/">Home</a>
              </li>
              <li>/</li>
              <li>
                <a className="order" href="">
                  Order
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-order-wrapper">
          <div className="content-order">
            <h2 className="infor-title">
              CUSTOMER INFORMATION
              <span className=" border-solid border-[#efefef] w-[99%] inline-block border-[0.5px]"></span>
            </h2>
            <form
              action=""
              className="infor-order"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-2  grid-rows-2">
                {" "}
                <div className="user-name">
                  <span className="title-name title">
                    Name{" "}
                    <span className="text-red-600 font-semibold text-[20px]">
                      *
                    </span>
                  </span>
                  <input
                    type="text"
                    value={user?.fullName}
                    className="input-name"
                    placeholder="Enter name"
                    {...register("name")}
                    readOnly
                  />
                  {errors?.name ? (
                    <span className="text-red-600 ml-[25px] font-medium text-sm ">
                      {errors.name.message}
                    </span>
                  ) : null}
                </div>
                <div className="user-phoneNumber">
                  <span className="title-phoneNumber title">
                    Phone number{" "}
                    <span className="text-red-600 font-semibold text-[20px]">
                      *
                    </span>
                  </span>
                  <input
                    type="text"
                    value={user?.phoneNumber}
                    className="input-phoneNumber"
                    readOnly
                    placeholder="Enter phone number"
                    {...register("phoneNumber")}
                  />
                  {errors?.phoneNumber ? (
                    <span className="text-red-600 ml-[25px] font-medium text-sm ">
                      {errors.phoneNumber.message}
                    </span>
                  ) : null}
                </div>
                <div className="user-ward">
                  <span className="title-ward title">
                    Ward{" "}
                    <span className="text-red-600 font-semibold text-[20px]">
                      *
                    </span>
                  </span>
                  <input
                    type="text"
                    className="input-ward"
                    placeholder="Enter ward"
                    {...register("ward")}
                  />
                  {errors?.ward ? (
                    <span className="text-red-600 ml-[25px] font-medium text-sm ">
                      {errors.ward.message}
                    </span>
                  ) : null}
                </div>
                <div className="user-district">
                  <span className="title-district title">
                    District{" "}
                    <span className="text-red-600 font-semibold text-[20px]">
                      *
                    </span>
                  </span>
                  <input
                    type="text"
                    className="input-district"
                    placeholder="Enter district"
                    {...register("district")}
                  />
                  {errors?.district ? (
                    <span className="text-red-600 ml-[25px] font-medium text-sm ">
                      {errors.district.message}
                    </span>
                  ) : null}
                </div>
                <div className="user-province">
                  <span className="title-province title">
                    Province{" "}
                    <span className="text-red-600 font-semibold text-[20px]">
                      *
                    </span>
                  </span>
                  <input
                    type="text"
                    className="input-province"
                    placeholder="Enter province"
                    {...register("province")}
                  />
                  {errors?.province ? (
                    <span className="text-red-600 ml-[25px] font-medium text-sm ">
                      {errors.province.message}
                    </span>
                  ) : null}
                </div>
                <div className="user-address">
                  <span className="title-address title">
                    Address{" "}
                    <span className="text-red-600 font-semibold text-[20px]">
                      *
                    </span>
                  </span>
                  <input
                    type="text"
                    className="input-address"
                    placeholder="Enter address"
                    {...register("address")}
                  />
                  {errors?.address ? (
                    <span className="text-red-600 ml-[25px] font-medium text-sm ">
                      {errors.address.message}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="infor-checkout">
                  <span className="title-checkout">Payment method</span>
                  <select name="" id="" {...register("payment")}>
                    <option value="0">Payment on delivery</option>
                    <option value="1">Payment by card</option>
                  </select>
                </div>

                <div className="note w-full py-4">
                  <span className="block text-center p-2 font-semibold">
                    NOTE
                  </span>
                  <div className="w-full">
                    <input
                      type="text"
                      className="w-full text-center"
                      style={{ width: "100%" }}
                      {...register("note")}
                    />
                  </div>
                </div>
                <div className="btn">
                  <Link to={"/"}>
                    <button className="btn-return">RETURN TO SHOP</button>
                  </Link>
                  <button className="btn-order">ORDER</button>
                </div>
              </div>
            </form>
          </div>
          <div className="order">
            <h3 className="title-order">
              Your order
              <span className=" border-solid border-[#efefef] w-[99%] inline-block border-[0.5px]"></span>
            </h3>
            <div className="product-list max-h-[500px] overflow-y-scroll">
              {listProductCheckout && listProductCheckout.length > 0
                ? listProductCheckout.map((item) => (
                    <ProductCheckout
                      key={item.idCart}
                      idCart={item.idCart}
                      name={item.name}
                      sortDesc={item.sortDesc}
                      price={item.price}
                      discount={item.discount}
                      quantity={item.quantity}
                      thumbail={item.thumbail}
                    ></ProductCheckout>
                  ))
                : ""}
            </div>
            <div className="total">
              <span className="total-title">Total: </span>
              <span className="total-money ">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
