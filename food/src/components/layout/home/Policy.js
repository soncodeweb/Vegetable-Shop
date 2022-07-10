import React from "react";
import "../../style/home/policy.scss";
const Policy = () => {
  return (
    <div className="policy-wrap">
      <div className="container">
        <div className="policy-content">
          <div className="row">
            <div className="">
              <div className="item">
                <i className="fa fa-plane"></i>
                <h4>FREE SHIPPING</h4>
                <h6>Free Shipping On All US Order Or Order Above $200</h6>
              </div>
            </div>
            <div className="">
              <div className="item">
                <i className="far fa-life-ring"></i>
                <h4>SUPPORT 24/7</h4>
                <h6>Contact Us 24 Hours A Day, 7 Days A Week</h6>
              </div>
            </div>
            <div className="">
              <div className="item">
                <i className="fas fa-undo"></i>
                <h4>30 DAYS RETURN</h4>
                <h6>Simply Return It Within 30 Days For An Exchange</h6>
              </div>
            </div>
            <div className="">
              <div className="item">
                <i className="far fa-credit-card"></i>
                <h4>100% PAYMENT SECURE</h4>
                <h6>We Ensure Secure Payment With PEV</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
