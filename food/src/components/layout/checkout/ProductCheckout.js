import React, { Fragment } from "react";

function ProductCheckout({ idCart, name, sortDesc, price, discount, quantity, thumbail }) {
  return (
    <Fragment>
      <div className="product">
        <div className="image">
          <img src={thumbail} alt="" className="image-product" />
        </div>
        <div className="infor">
          <h2 className="infor-name">{name}</h2>
          <h4 className="infor-shortDesc">{sortDesc}</h4>
          <div className="cost">
            {discount && discount !== "null" && discount !== "0" ? (
              <span className="price">${discount}</span>
            ) : (
              <span className="price">${price}</span>
            )}
            {/* <span className="price">${price}</span> */}
            <span className="multiply">x</span>
            <span className="quantity">{quantity}</span>
          </div>
        </div>
      </div>
      <span className=" border-solid border-[#efefef] w-[99%] inline-block border-[0.5px]"></span>
    </Fragment>
  );
}

export default ProductCheckout;
