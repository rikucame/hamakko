"use client";

import { useState } from "react";
import { PhotoThumbnails } from "./components/PhotoThumbnails";
import style from "./style.module.scss";

export const TopPage = () => {
  const [title, setTitle] = useState("portrait");
  return (
    <>
      <div className={style.carouselWrap}>
        <PhotoThumbnails setTitle={setTitle} />
      </div>
      <h1 className={style.title}>{title.toUpperCase()}</h1>
      <p>14 Images</p>
    </>
  );
};
