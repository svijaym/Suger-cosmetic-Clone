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
const Streaming = () => {
  return (
    <div
      style={{
        width: "auto",
      }}
    >
      <Swiper
        slidesPerView={5}
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
            src="https://cdn4.fireworktv.com/medias/2022/9/26/1664194142-bqlwztpe/transcoded/240/4988243348826955541y2mate.is_-_________indian_vs_________pakistan_makeup_look_______shorts__sugar__cosmetics-ofewnjo_mrw-720p-1654297239737.jpg.62.webp"
            alt="ht1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://cdn4.fireworktv.com/medias/2022/9/26/1664193119-giofdkyj/transcoded/240/video-output-F04F87A9-73BC-46C4-A221-5CFFD337813F.jpg.62.webp"
            alt="ht2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://cdn4.fireworktv.com/medias/2022/9/26/1664195279-kzgifyho/transcoded/240/video-output-FCB9FB0B-312A-4993-B5E3-24771A1B637F.jpg.62.webp"
            alt="ht3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://cdn4.fireworktv.com/medias/2022/9/27/1664264589-macpoedu/transcoded/240/WhichLookIsYourFavourite_%F0%9F%98%8D_GlamVsNaturalMakeup_shorts_SUGARCosmetics.jpg.62.webp"
            alt="st4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://cdn4.fireworktv.com/medias/2022/9/19/1663590894-wbymlsha/transcoded/240/88954593e28642098532642bdb2c16aa.jpg.62.webp"
            alt="st5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://cdn4.fireworktv.com/medias/2022/9/19/1663589842-iwcxklhq/transcoded/240/InShot_20220917_183747558.jpg.62.webp"
            alt="st7"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://cdn4.fireworktv.com/medias/2022/9/19/1663592251-iycfkndx/transcoded/240/InShot_20220919_182605711.jpg.62.webp"
            alt="st8"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://cdn4.fireworktv.com/medias/2022/9/19/1663591247-gqruckim/transcoded/240/video-output-BA1EC90D-B8B0-4A8A-BECF-5616AD4B8FA3.jpg.62.webp"
            alt="st9"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ borderRadius: "25px" }}
            src="https://cdn4.fireworktv.com/medias/2022/9/19/1663590894-wbymlsha/transcoded/240/88954593e28642098532642bdb2c16aa.jpg.62.webp"
            alt="st68"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Streaming;
