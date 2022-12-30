"use client";

import { useState } from "react";
import { InfoNum } from "./components/Info";
import { PhotoThumbnails } from "./components/PhotoThumbnails";
import style from "./style.module.scss";

export const TopPage = () => {
  const [title, setTitle] = useState("portrait");
  return (
    <div className={style.container}>
      <div className={style.carouselWrap}>
        <PhotoThumbnails setTitle={setTitle} />
      </div>
      <div className={style.carouselWrap}>
        {/* <h1 className={style.title}>{title.toUpperCase()}</h1> */}
        <InfoNum dir={title} photos={["1.jpg", "2.jpg", "3.jpg"]} />
      </div>
    </div>
  );
};
