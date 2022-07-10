import React from "react";
import "../../style/home/blackFriday.scss";

const BlackFriday = () => {
  return (
    <div className="black-friday">
      <div className="container">
        <div className="item-friday">
          <h5>BLACK FRIDAY</h5>
          <h2>SALE 50% OFF</h2>
          <p>ALL VEGETABLES PRODUCTS</p>
          <div className="discover">
            <span>DISCOVER NOW</span>
          </div>
        </div>
        <img src="image/black friday.jpg" alt="" />
      </div>
    </div>
  );
};

export default BlackFriday;
