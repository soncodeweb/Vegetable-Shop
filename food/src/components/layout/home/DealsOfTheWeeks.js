import React from "react";
import "../../style/home/deals.scss";
import Deals from "../product/Deals";

const DealsOfTheWeeks = () => {
  return (
    <div className="deals-of-the-weeks-wrap">
      <div className="container">
        <div className="title-deals-of-the-weeks">
          <h2>Deals Of The Weeks</h2>
          <h6>Recently added our store</h6>
        </div>
        <Deals></Deals>
      </div>
    </div>
  );
};

export default DealsOfTheWeeks;
