import { FC } from "react";
import { FrameInPhotoMemo as FrameInPhoto } from "../FrameInPhoto";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import "@/styles/swiperCustom.scss";

const list = [
  { title: "portrait", src: "/photos/DSCF5710.jpg", href: "/genre/portrait" },
  { title: "snap", src: "/photos/snap/20220812.jpg", href: "/genre/snap" },
  { title: "mood", src: "/photos/DSCF5710.jpg", href: "/genre/mood" },
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
