import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import { FC } from "react";
import style from "./style.module.scss";

type Shadow = "left" | "center" | "right";

type Props = {
  title: string;
  href: string;
  src: string;
  isVertical?: boolean;
};

export const PhotoThumbnail: FC<Props> = ({ title, href, src, isVertical }) => {
  return (
    <div key={title} className={style.wrapper}>
      <Link
        href={href}
        className={isVertical ? style.frameVertical : style.frameHorizontal}
      >
        <h2 className={style.title}>{title}</h2>
        <Image
          src={src}
          width={1000}
          height={1000}
          alt={title}
          className={style.photo}
        />
        <span className={style.shadowCenter} />
      </Link>
    </div>
  );
};
