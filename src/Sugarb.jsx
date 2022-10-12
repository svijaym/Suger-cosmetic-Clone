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
const Sugarb = () => {
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
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/d8b00b3d-11f9-4255-9ac1-2cab5695e55f.jpg"
            alt="ht1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/703cfa73-627d-4363-ba07-c5817ec70b73.jpg"
            alt="ht2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/e35cc2c7-ec9a-40ba-80f0-939a4f250edc.jpg"
            alt="ht3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/fb8f0b03-2d7c-47a1-96f5-a2dec654df9d.jpg"
            alt="ht4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/44e498d2-0acd-4c77-a0cf-4ff4ce57e4c7.jpg"
            alt="ht5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/b5d96e6f-8a8c-4535-97b4-635fa48be906.jpg"
            alt="ht6"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sugarb;
