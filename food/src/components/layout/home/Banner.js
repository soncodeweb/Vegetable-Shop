import React from "react";
import "../../style/home/banner.scss";
const Banner = () => {
  return (
    <div className="banner-with-text">
      <div className="container">
        <div className="row flex j-between">
          <div className="banner-with-text-columm">
            <img src="image/img_banner1-1-new.jpg" alt="" />
            <div className="item-shop">
              <h3>Fresh Vegetables</h3>
              <a href="">
                SHOP NOW <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="banner-with-text-columm">
            <img src="image/img_banner1-2-new.jpg" alt="" />
            <div className="item-shop">
              <h3>Fresh Vegetables</h3>
              <a href="">
                SHOP NOW <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
