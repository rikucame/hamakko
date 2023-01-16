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
      <Link href={href}>
        <a className={isVertical ? style.frameVertical : style.frameHorizontal}>
          <p className={style.title}>{title}</p>
          <div className={style.photoWrap}>
            <Image
              src={src}
              layout="fill"
              alt={title}
              className={style.photo}
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export const FrameInPhotoMemo = memo(FrameInPhoto);
