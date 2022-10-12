import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const bnr =
  "https://media.sugarcosmetics.com/upload/homePageBackGroundTexture.jpg";
const Hotdeal = () => {
  return (
    <div
      style={{
        width: "auto",
      }}
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/6f66062a-1a39-4252-852b-646acb35d9af.jpg"
            alt="ht1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/7b0cbcd1-1433-484d-8ae1-6f54f52e73fa.jpg"
            alt="ht2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/b8278548-ed11-44b4-9818-25c5146c604d.jpg"
            alt="ht3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hotdeal;
