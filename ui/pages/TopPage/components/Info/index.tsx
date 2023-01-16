import { FC } from "react";
import Image from "next/image";
import style from "./style.module.scss";
import Link from "next/link";

type Props = {
  photos: string[];
  dir: string;
};

export const InfoNum: FC<Props> = ({ dir, photos }) => {
  return (
    <div className={style.wrap}>
      <Link href={`/genre/${dir}`} className={style.link}>
        view All
      </Link>
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
