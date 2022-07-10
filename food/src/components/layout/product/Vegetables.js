import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/grid";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Grid, Navigation } from "swiper";
import Product from "./Product";
import axios from "axios";

const Vegetables = () => {
  // const dataProducts = "";

  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const callData = async () => {
      await axios({
        method: "get",
        url: "http://localhost/food_backEnd/admin/product/read.php",
        data: {},
      })
        .then((response) => {
          setData(response.data.data);
          // console.log(dataProducts);
          // console.log("data");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    // console.log("useEffet");
    callData();
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={5}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={20}
        // spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={{
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        //   hideOnClick: true,

        // }}
        navigation={true}
        modules={[Grid, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.idProduct}>
            <Product
              id={item.idProduct}
              name={item.name}
              sortDesc={item.sortDesc}
              price={item.price}
              discount={item.discount}
              thumbail={item.thumbail}
            ></Product>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Vegetables;
