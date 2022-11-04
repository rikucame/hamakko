import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import style from "./style.module.scss";

type Props = {
  title: string;
  href: string;
  src: string;
};

const PhotoThumbnail: FC<Props> = ({ title, href, src }) => {
  console.log(style);
  return (
    <article key={title}>
      <Link href={href}>
        <h2 className={style.pageTitle}>{title}</h2>
        <Image src={src} width={200} height={300} alt={title} />
      </Link>
    </article>
  );
};

export default PhotoThumbnail;
