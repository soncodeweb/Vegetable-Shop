import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import ProductSeller from "./ProductSeller";
import "../../style/product/FeaturedProducts.scss";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
const FeaturedProducts = () => {
  const [data, setData] = useState([]);
  const dataNew = data.filter((item, index) => index < 9);

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
      slidesPerView={3}
      grid={{
        rows: 3,
        fill: "row",
      }}
      // spaceBetween={30}
      navigation={true}
      //   width={"100px"}
      module={[Grid, Navigation]}
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
      {/* <SwiperSlide>
        <ProductSeller></ProductSeller>
      </SwiperSlide> */}
    </Swiper>
  );
};

export default FeaturedProducts;
