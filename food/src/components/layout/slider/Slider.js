import { Swiper, SwiperSlide } from "swiper/react";
import "../../style/slider/slider.scss";
import React from "react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Slider = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <div className="slider-wrapper ">
      <Swiper pagination={pagination} modules={[Pagination]} loop={true} slidesPerView={1} onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <div className="item">
            <div className="content-item">
              <h2 className="name-item">Fresh Vegetables</h2>
              <h3 className="item-type">Natural Farm Products</h3>
              <p className="item-infor">Widest range of farm-fresh Vegetables, Fruits & seasonal produce</p>
              <i className="shop-now">SHOP NOW</i>
            </div>
            <div className="image-item col-lg-12 col-xl-12">
              <img src="image/Homeslider1-1.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <div className="content-item">
              <h2 className="name-item">Fresh Tomatoes</h2>
              <h3 className="item-type">Natural Farm Products</h3>
              <p className="item-infor">Natural organic tomatoes make your health stronger. Put your information here</p>
              <i className="shop-now">SHOP NOW</i>
            </div>
            <div className="image-item col-lg-12 col-xl-12">
              <img src="image/Homeslider1-2.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <div className="content-item">
              <h2 className="name-item">Vegetables Big Sale</h2>
              <h3 className="item-type">Fresh Farm Products</h3>
              <p className="item-infor">10% certifled-organic mix of fruit and veggies. Perfect for weekly cooking and snacking!</p>
              <i className="shop-now">SHOP NOW</i>
            </div>
            <div className="image-item col-lg-12 col-xl-12">
              <img src="image/Homeslider1-3.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
