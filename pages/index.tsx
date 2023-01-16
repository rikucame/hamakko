"use client";

import style from "@/styles/topPage/layout.module.scss";
import { Header } from "@/components/Header/Header";
import { PhotoThumbnails } from "ui/pages/TopPage/components/PhotoThumbnails";
import { InfoNum } from "ui/pages/TopPage/components/Info";
import { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("portrait");
  return (
    <>
      <div className={style.headerWrap}>
        <Header />
      </div>
      <main className={style.content}>
        <div className={style.container}>
          <div className={style.carouselWrap}>
            <PhotoThumbnails setTitle={setTitle} />
          </div>
          <div className={style.carouselWrap}>
            <InfoNum dir={title} photos={["1.jpg", "2.jpg", "3.jpg"]} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
