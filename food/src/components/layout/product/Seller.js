import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";
import ProductSeller from "./ProductSeller";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
const Seller = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const dataNew = data.filter((item, index) => index < 6);

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
    <Swiper
      slidesPerView={2}
      grid={{
        rows: 3,
        fill: "row",
      }}
      //   width={"100px"}
      module={[Grid]}
      className="sellerSwiper"
    >
      {dataNew.map((item, index) => (
        <SwiperSlide key={item.idProduct}>
          <ProductSeller
            id={item.idProduct}
            name={item.name}
            sortDesc={item.sortDesc}
            price={item.price}
            discount={item.discount}
            thumbail={item.thumbail}
          ></ProductSeller>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Seller;
