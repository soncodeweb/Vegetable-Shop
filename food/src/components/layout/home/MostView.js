import React from "react";
import MostviewProducts from "../product/MostviewProducts";
// import Product from "../product/Product";

const MostView = () => {
  return (
    <div className="deals-of-the-weeks-wrap mt-[50px]">
      <div className="container">
        <div className="title-deals-of-the-weeks">
          <h2>Mostview Products</h2>
          <h6>Recently added our store</h6>
        </div>
        <MostviewProducts></MostviewProducts>
      </div>
    </div>
  );
};

export default MostView;
