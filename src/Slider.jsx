import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/b52160d6-6a75-4d73-a468-f0f39e524137.jpg"
            alt="b1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/259790f5-3c09-43f3-8dde-49c3de49f0c4.jpg"
            alt="b2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/91374506-cc05-46f3-aff6-86a00e501c38.gif"
            alt="b3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/0a0d2b46-e424-4f4c-baf3-da2d2fc14f88.jpg"
            alt="b4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/2d934fad-8c2a-4f7d-85fc-ea1ed8f23673.jpg"
            alt="b5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/87591a7c-d8f8-499c-9562-c89000ef7e4a.jpg"
            alt="b6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg"
            alt="b7"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg"
            alt="b8"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
