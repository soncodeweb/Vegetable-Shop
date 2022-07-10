import React, { Fragment } from "react";

const ProductOrder = ({ order, orderDetail }) => {
  console.log("dssd", order);
  return (
    <div className="bg-[#fff] py-[10px] px-[20px] my-[10px]">
      <div className="flex justify-between py-[10px]">
        <span className="text-[12px] text-[#0a0a0a]">{order.orderDate}</span>
        <div>
          <h4 className="inline-block font-medium text-[18px]">Status: </h4>
          {order.isDeleted == 1 ? (
            <span className="text-[18px] inline-block  text-[#ee4d2d] font-medium pl-[10px]">
              Order has been cancelled
            </span>
          ) : (
            <span className="text-[18px] inline-block  text-[#ee4d2d] font-medium pl-[10px]">
              {order.status}
            </span>
          )}
        </div>
      </div>
      {orderDetail && orderDetail?.length > 0 ? (
        orderDetail.map((item, index) => (
          <div key={index} className="product relative justify-start py-[5px]">
            <div className="image-order w-[100px] h-[100px]">
              <img src={item.thumbail} alt="" className="image-product" />
            </div>
            <div className="infor pl-[20px]">
              <h2 className="infor-name">{item.name}</h2>
              <h4 className="infor-shortDesc">{item.sortDesc}</h4>
              <div className="cost">
                {item.discount &&
                item.discount !== "null" &&
                item.discount !== "0" ? (
                  <span className="price">${item.discount}</span>
                ) : (
                  <span className="price">${item.price}</span>
                )}
                {/* <span className="price">${item.price}</span> */}
                <span className="multiply">x</span>
                <span className="quantity">1</span>
              </div>
            </div>
            <div className="total-number absolute right-[30px] top-[50%] translate-y-[-50%] font-normal  text-[#40a944] ">
              <span className="text-[15px]">
                {item.discount &&
                item.discount !== "null" &&
                item.discount !== "0"
                  ? item.discount * item.quantity
                  : item.price * item.quantity}
                $
              </span>
            </div>
          </div>
        ))
      ) : (
        <div>
          <span>Không tồn tại sản phẩm</span>
        </div>
      )}

      <span className=" border-solid border-[#efefef] w-[99%] inline-block border-[0.5px]"></span>
      <div className="flex justify-end">
        <div>
          <h4 className="inline-block font-medium text-[18px]">
            Total money:{" "}
          </h4>{" "}
          <span className="text-[20px] inline-block p-[10px] text-[#40a944] font-medium">
            {order.totalMoney}$
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;
