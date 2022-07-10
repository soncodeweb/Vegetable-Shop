import React from "react";
import "../../style/product/productSeller.scss";
const Product = (props) => {
  const { id, name, sortDesc, price, discount, thumbail } = props;
  return (
    <div className="item-seller" data-id={id}>
      <div className="image-item-bestSellers">
        <div className="thubmail-wrap">
          <img className="thumbail" src={thumbail} alt="" />
        </div>
      </div>
      <div className="product_content">
        <h2>
          <a href="">{name}</a>
        </h2>
        <h6>{sortDesc}</h6>
        <div className="flex">
          {discount && discount !== "null" && discount !== "0" ? (
            <span className="price">${discount}</span>
          ) : (
            <span className="price-noDiscount text-black font-medium">${price}</span>
          )}
          {discount && discount !== "null" && discount !== "0" ? <span className="old-price">${price}</span> : ""}
        </div>
      </div>
    </div>
  );
};

export default Product;
