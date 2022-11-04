"use client";

import PhotoThumbnail from "../PhotoThumbnail";
import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
        <Image
          src={"/photos/DSCF6519.jpg"}
          width={230}
          height={300}
          alt={"photo"}
        />
        <p>hogehogehgoe</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/photos/DSCF6627.jpg"}
          width={230}
          height={300}
          alt={"photo"}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
