import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "../../style/home/brand.scss";
const Brand = () => {
  return (
    <div className="container">
      <Swiper slidesPerView={5} loop={true} className="my-3 brand border-solid border-[#e7e7e7] border-[1px]">
        <SwiperSlide>
          <div className="py-5 hover:opacity-100 opacity-25 transition duration-300">
            <img src="https://easyfreshmarket.com/image/cache/catalog/brandslider/br4-185x60.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5  hover:opacity-100 opacity-25 transition duration-300">
            <img src="https://easyfreshmarket.com/image/cache/catalog/brandslider/br1-185x60.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5  hover:opacity-100 opacity-25 transition duration-300">
            <img src="https://easyfreshmarket.com/image/cache/catalog/brandslider/br2-185x60.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5  hover:opacity-100 opacity-25 transition duration-300">
            <img src="https://easyfreshmarket.com/image/cache/catalog/brandslider/br5-185x60.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5  hover:opacity-100 opacity-25 transition duration-300">
            <img src="https://easyfreshmarket.com/image/cache/catalog/brandslider/br3-185x60.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5  hover:opacity-100 opacity-25 transition duration-300">
            <img src="https://easyfreshmarket.com/image/cache/catalog/brandslider/br4-185x60.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brand;
