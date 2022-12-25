"use client";

import { useState } from "react";
import { PhotoThumbnails } from "./components/PhotoThumbnails";
import { PhotoThumbnailsClient } from "./components/PhotoThumbnailsClient";
import { PhotoThumbnailsNonShadow } from "./components/PhotoThumbnailsNonShadow";
import { PhotoThumbnailsSimple } from "./components/PhotoThumbnailsSimple";
import style from "./style.module.scss";

export const TopPage = () => {
  const [title, setTitle] = useState("portrait");
  return (
    <>
      {/* <div className={style.carouselWrap}>
        <PhotoThumbnails setTitle={setTitle} />
      </div>
      <div className={style.carouselWrap}>
        <PhotoThumbnailsClient setTitle={setTitle} />
      </div>
      <div className={style.carouselWrap}>
        <PhotoThumbnailsSimple setTitle={setTitle} />
      </div> */}
      <div className={style.carouselWrap}>
        <PhotoThumbnailsNonShadow setTitle={setTitle} />
      </div>
      <h1 className={style.title}>{title.toUpperCase()}</h1>
      <p>14 Images</p>
    </>
  );
};
