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
const Explore = () => {
  return (
    <div
      style={{
        width: "auto",
      }}
    >
      <Swiper
        slidesPerView={4}
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
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/cba32bfe-cbf9-47f9-b27c-823272a94828.jpg"
            alt="ht1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/52feec2f-892b-4fad-b344-ff9fcb7e8bb1.jpg"
            alt="ht2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/950b18e9-a454-48ce-8787-fe4c7517eaec.jpg"
            alt="ht3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/728e405c-d932-43df-8b82-f6a51421fdfa.jpg"
            alt="ht3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/c51feeb7-6f52-4a40-b422-7f0c413ae31a.jpg"
            alt="e4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/5b6115c3-8e25-4f9c-b2ab-a3d03259b0c1.jpg"
            alt="e4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/bb32957b-89ff-47ee-903e-4141bef2d622.jpg"
            alt="e4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Explore;
