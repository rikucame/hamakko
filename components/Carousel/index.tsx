"use client";

import { PhotoThumbnail } from "../PhotoThumbnail";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "@/styles/swiperCustom.scss";

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <PhotoThumbnail
          src={"/photos/0_thumbnail.jpg"}
          title={"portrait"}
          href={"/"}
        />
        {/* Slide 1 */}
      </SwiperSlide>
      <SwiperSlide>
        <PhotoThumbnail
          src={"/photos/DSCF6519.jpg"}
          title={"portrait"}
          href={"/"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <PhotoThumbnail
          src={"/photos/DSCF6627.jpg"}
          title={"portrait"}
          href={"/"}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
