import React, { Fragment, useEffect } from "react";
import "../../style/cart/productCartPane.scss";
function ProductCartPane({ deleteProductInCart = () => {}, idCart, productId, name, sortDesc, price, discount, quantity, thumbail }) {
  return (
    <Fragment>
      <div className="product max-w-" data-id={idCart}>
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

            <span className="multiply ">x</span>
            <span className="quantity">{quantity}</span>
          </div>
        </div>
        <span className="close-productPane cursor-pointer p-1 font-semibold" onClick={deleteProductInCart}>
          x
        </span>
      </div>

      <span className=" border-solid border-[#efefef] w-[99%] inline-block border-[0.5px]"></span>
    </Fragment>
  );
}

export default ProductCartPane;
