import { FC } from "react";
import Image from "next/image";
import style from "./style.module.scss";

type Props = {};

export const InfoNum: FC<Props> = () => {
  return (
    <div className={style.wrap}>
      <ul className={style.grid}>
        <li className={style.gridItem}>
          <Image
            src={"/photos/DSCF6519.jpg"}
            width={200}
            height={200}
            alt={"sample"}
            className={style.photo}
          />
        </li>
        <li className={style.gridItem}>
          <Image
            src={"/photos/DSCF6519.jpg"}
            width={200}
            height={200}
            alt={"sample"}
            className={style.photo}
          />
        </li>
        <li className={style.gridItem}>
          <Image
            src={"/photos/DSCF6519.jpg"}
            width={200}
            height={200}
            alt={"sample"}
            className={style.photo}
          />
        </li>
        <li className={style.gridItem}>
          <p className={style.more}>
            <span className={style.moreAnd}>&</span>
            <br /> MORE
          </p>
        </li>
      </ul>
    </div>
  );
};
