import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductOrder from "./ProductOrder";
import axios from "axios";
import { useAuth } from "../../context/authen/user/authContext";
import image from "./no-order.png";

const AllOrder = () => {
  const { user } = useAuth();
  const [data, setData] = useState();
  useEffect(() => {
    const callApi = async () => {
      const result = await axios({
        method: "POST",
        url: "http://localhost/food_backEnd/admin/order/show_IdUser.php",
        data: {
          userId: user.idUser,
        },
      }).catch((error) => console.log(error));
      setData(result.data.data);
    };
    callApi();
  }, [data?.length]);
  return (
    <>
      <Link to="/user/purchare-order/">
        <div className="all">
          <div className="search w-full mt-[20px] relative ">
            <i className="fa-regular fas fa-magnifying-glass absolute left-[15px] translate-y-[50%] bottom-[50%] text-[20px] text-gray-400"></i>
            <input type="text" className="w-full pl-[50px] px-[10px] py-[8px] bg-[#eaeaea]" placeholder="Search by Order ID or Product Name" />
          </div>
          <div className="order-detail">
            <div className="list-product">
              {data && data?.length > 0 ? (
                data.map((item, index) => <ProductOrder key={index} order={item.order} orderDetail={item.orderDetails}></ProductOrder>)
              ) : (
                <div className="flex justify-center items-center w-full h-[500px] flex-col bg-[#fff] mt-[20px]">
                  <img src={image} alt="" className="w-[100px] h-[100px]" />
                  <h4 className="py-[10px] font-medium">No orders yet</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AllOrder;
