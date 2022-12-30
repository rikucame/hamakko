import { FC } from "react";
import { FrameInPhoto } from "@/components/FrameInPhoto";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import "@/styles/swiperCustom.scss";

const list = [
  { title: "portrait", src: "/photos/DSCF5710.jpg", href: "/" },
  { title: "snap", src: "/photos/DSCF5579.jpg", href: "/" },
  { title: "portrait", src: "/photos/DSCF5710.jpg", href: "/" },
];

type Props = {
  setTitle: (title: string) => void;
};

export const PhotoThumbnails: FC<Props> = ({ setTitle }) => {
  return (
    <Swiper
      spaceBetween={28}
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        clickable: false,
        dynamicBullets: true,
      }}
      onSlideChange={(s) => {
        setTitle(list[s.activeIndex].title);
      }}
    >
      {list.map(({ title, src, href }) => (
        <SwiperSlide key={title}>
          <FrameInPhoto src={src} title={title} href={href} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
