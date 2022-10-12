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
import Pcard1 from "./Components/Pcard1";
import Pcard2 from "./Components/Pcard2";
import Pcard3 from "./Components/Pcard3";
import Pcard4 from "./Components/Pcard4";
const bnr =
  "https://media.sugarcosmetics.com/upload/homePageBackGroundTexture.jpg";
const Gifting = () => {
  return (
    <div
      style={{
        width: "auto",
        backgroungImage: `url(${bnr})`,
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
          <Pcard4 />
        </SwiperSlide>
        <SwiperSlide>
          <Pcard3 />
        </SwiperSlide>
        <SwiperSlide>
          <Pcard2 />
        </SwiperSlide>
        <SwiperSlide>
          <Pcard1 />
        </SwiperSlide>
        <SwiperSlide>
          <Pcard2 />
        </SwiperSlide>
        <SwiperSlide>
          <Pcard1 />
        </SwiperSlide>
        <SwiperSlide>
          <Pcard3 />
        </SwiperSlide>
        <SwiperSlide>
          <Pcard1 />
        </SwiperSlide>
        <SwiperSlide>
          <Pcard2 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gifting;
