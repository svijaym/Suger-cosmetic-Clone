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

const Quickt = () => {
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
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/7fcf7da7-9d0b-4e1a-b09e-e075825bc9ad.jpg"
            alt="qb1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/05b6a9d3-2d45-4381-80f2-2b3fdd2c56f0.jpg"
            alt="qb2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/67885afc-5ba2-4f1d-a6dd-7012bf5b7b90.jpg"
            alt="qb3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Quickt;
