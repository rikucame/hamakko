"use client";

import { useState } from "react";
import { PhotoThumbnailsClient } from "./PhotoThumbnailsClient";
import style from "./style.module.scss";

export const Simple = () => {
  const [title, setTitle] = useState("portrait");
  return (
    <>
      <div className={style.carouselWrap}>
        <PhotoThumbnailsClient setTitle={setTitle} />
      </div>
      <h1 className={style.title}>{title.toUpperCase()}</h1>
      <p>14 Images</p>
    </>
  );
};
