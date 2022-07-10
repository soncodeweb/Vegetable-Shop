import React from "react";
import "../../style/home/seller.scss";
import Seller from "../product/Seller";
const BestSellers = () => {
  return (
    <div className="bestSellers">
      <div className="container">
        <div className="title-bestSellers">
          <h2>Best Sellers</h2>
          <h6>Recently added our store</h6>
        </div>
        <div className="content-bestSellers flex">
          <div id="bestSellers">{<Seller></Seller>}</div>
          <div className="banner-with-text-bestSellers">
            <a href="">
              <img src="https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            </a>
            <div className="text-bestSellers">
              <h3>Natural Food</h3>
              <div className="show-now">
                SHOP NOW
                <span>
                  <i className="fas fa-caret-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
