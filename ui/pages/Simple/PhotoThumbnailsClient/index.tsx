"use client";

import { FC } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/scss";
import "swiper/scss/pagination";
import "@/styles/swiperCustom.scss";
import "./style.scss";

const list = [
  { title: "portrait", src: "/photos/0_thumbnail.jpg", href: "/" },
  { title: "snap", src: "/photos/DSCF5579.jpg", href: "/" },
  { title: "mode", src: "/photos/DSCF6627.jpg", href: "/" },
];

type Props = {
  setTitle: (title: string) => void;
};

export const PhotoThumbnailsClient: FC<Props> = ({ setTitle }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: false }}
      onSlideChange={(s) => {
        setTitle(list[s.activeIndex].title);
      }}
    >
      {list.map(({ title, src, href }) => (
        <SwiperSlide key={title}>
          <Image src={src} width={1000} height={1000} alt={title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
