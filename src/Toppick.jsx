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
const Toppick = () => {
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
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/727c91d1-8040-4cab-a5d7-db81dd6f0e4b.gif"
            alt="tp1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/84f0d36c-381f-4c62-8702-b0059b13094a.jpg"
            alt="tp2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/0903f25c-ae3f-4de6-980b-1e3a4bbe2b6e.jpg"
            alt="tp3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/c5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg"
            alt="tp4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/ae700fcf-b911-452c-a916-f9994a15d20c.gif"
            alt="tp5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/fd3114aa-06bb-4aff-bb21-7381559ee48f.jpg"
            alt="tp6"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Toppick;
