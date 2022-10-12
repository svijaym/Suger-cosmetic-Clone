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

const Newly = () => {
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
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/a1ea3283-9593-4f1c-8e6b-70c3a5062c37.jpg"
            alt="n11"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg"
            alt="b2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif"
            alt="b3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif"
            alt="b4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif"
            alt="b5"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Newly;
