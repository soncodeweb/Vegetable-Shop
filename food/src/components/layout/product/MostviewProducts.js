import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Product from "./Product";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
const MostviewProducts = () => {
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
    <Swiper slidesPerView={5} navigation={true} modules={[Navigation]}>
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
  );
};

export default MostviewProducts;
