import { FC } from "react";
import Image from "next/image";
import style from "./style.module.scss";

type Props = {
  photos: string[];
  dir: string;
};

export const InfoNum: FC<Props> = ({ dir, photos }) => {
  return (
    <div className={style.wrap}>
      <a href={`/genre/${dir}`} className={style.link}>
        view All
      </a>
      {/* <ul className={style.grid}>
        {photos.map((src) => (
          <li className={style.gridItem} key={src}>
            <Image
              src={`/photos/${dir}/${src}`}
              width={200}
              height={200}
              alt={"sample"}
              className={style.photo}
            />
          </li>
        ))}
      </ul> */}
    </div>
  );
};
