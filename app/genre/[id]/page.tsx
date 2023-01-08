import { getPhotosDirectories } from "utils/getPhotosDirectories";
import fs from "fs";
import Image from "next/image";
import style from "./style.module.scss";

type Props = { params: { id: string } };

export default async function Page({ params }: Props) {
  const photos = fs.readdirSync(`./public/photos/${params.id}`);
  return (
    <div className={style.wrap}>
      <h1 className={style.pageTitle}>{params.id}</h1>
      {photos.map((photo) => (
        <div key={photo} className={style.photo}>
          <Image
            src={`/photos/${params.id}/${photo}`}
            width={500}
            height={500}
            alt={photo}
            style={{
              width: "75vw",
              height: "auto",
              boxShadow: "0 3px 4px 0 #888888",
            }}
          />
          <p className={style.title}>{photo.split(".")[0]}</p>
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
