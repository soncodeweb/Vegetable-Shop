import React from "react";
import FeaturedProducts from "../product/FeaturedProducts";
import "../../style/home/FeaturedProduct.scss";
const FeaturedProduct = () => {
  return (
    <div className="featuredProducts-wrapper">
      <div className="container">
        <div className="title-featuredProducts">
          <h2>Featured Products</h2>
          <h6>Recently added our store</h6>
        </div>
        <div className="content-featuredProducts">
          <FeaturedProducts></FeaturedProducts>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
