import React, { Fragment, useEffect, useState } from "react";
import image from "./no-order.png";
import axios from "axios";
import { useAuth } from "../../context/authen/user/authContext";
import ProductOrder from "./ProductOrder";
const Cancelled = () => {
  const { user } = useAuth();
  const [data, setData] = useState();
  const filterData =
    data && data?.length > 0
      ? data.filter((item, index) => item?.order.isDeleted == 1)
      : null;
  console.log("data", filterData);
  //   console.log("data[0]: ", data[0].order.userId);
  useEffect(() => {
    const callApi = async () => {
      console.log("call api");

      const result = await axios({
        method: "POST",
        url: "http://localhost/food_backEnd/admin/order/show_IdUser.php",
        data: {
          userId: user.idUser,
        },
      }).catch((error) => console.log(error));
      setData(result.data.data);
      //   console.log(result.data);
    };
    callApi();
  }, [data?.length]);
  return (
    <>
      {/* <div className="flex justify-center items-center w-full h-[500px] flex-col bg-[#fff] mt-[20px]">
        <img src={image} alt="" className="w-[100px] h-[100px]" />
        <h4 className="py-[10px] font-medium">No orders yet</h4>
      </div> */}
      {console.log(filterData)}
      {filterData && filterData?.length > 0 ? (
        filterData.map((item, index) => (
          <ProductOrder
            key={index}
            order={item.order}
            orderDetail={item.orderDetails}
          ></ProductOrder>
        ))
      ) : (
        <div className="flex justify-center items-center w-full h-[500px] flex-col bg-[#fff] mt-[20px]">
          <img src={image} alt="" className="w-[100px] h-[100px]" />
          <h4 className="py-[10px] font-medium">No cancelled yet</h4>
        </div>
      )}
    </>
  );
};

export default Cancelled;
