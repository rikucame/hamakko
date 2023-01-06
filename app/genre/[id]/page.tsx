import { getPhotosDirectories } from "utils/getPhotosDirectories";
import fs from "fs";
import Image from "next/image";
import style from "./style.module.scss";

type Props = { params: { id: string } };

export default async function Page({ params }: Props) {
  const photos = fs.readdirSync(`./public/photos/${params.id}`);
  return (
    <div className={style.wrap}>
      <h1>{params.id}</h1>
      {photos.map((photo) => (
        <div key={photo} className={style.photo}>
          <Image
            src={`/photos/${params.id}/${photo}`}
            width={500}
            height={500}
            alt={photo}
            style={{ width: "75vw", height: "auto" }}
          />
          <p className={style.title}>{photo}</p>
        </div>
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  return getPhotosDirectories("").map((path) => {
    return {
      id: path,
    };
  });
}
