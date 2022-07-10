import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Blog from "./Blog";
import "swiper/css";
import "swiper/css/navigation";
const ListBlog = () => {
  return (
    <Swiper slidesPerView={3} spaceBetween={20} navigation={true} modules={[Navigation]}>
      <SwiperSlide>
        <Blog></Blog>
      </SwiperSlide>
      <SwiperSlide>
        <Blog></Blog>
      </SwiperSlide>
      <SwiperSlide>
        <Blog></Blog>
      </SwiperSlide>
      <SwiperSlide>
        <Blog></Blog>
      </SwiperSlide>
    </Swiper>
  );
};

export default ListBlog;
