import Image from "next/image";
import Link from "next/link";
import { FC, memo } from "react";
import style from "./style.module.scss";

type Props = {
  title: string;
  href: string;
  src: string;
  isVertical?: boolean;
};

const FrameInPhoto: FC<Props> = ({ title, href, src, isVertical }) => {
  return (
    <div key={title} className={style.frameWrapper}>
      <Link
        href={href}
        className={isVertical ? style.frameVertical : style.frameHorizontal}
      >
        <p className={style.title}>{title}</p>
        <Image
          src={src}
          width={1000}
          height={1000}
          alt={title}
          className={style.photo}
        />
      </Link>
    </div>
  );
};

export const FrameInPhotoMemo = memo(FrameInPhoto);
