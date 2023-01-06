type Props = { params: { id: string } };
import { getPhotosDirectories } from "utils/getPhotosDirectories";

export default async function Page({ params }: Props) {
  return <h1>{params.id}</h1>;
}

export async function generateStaticParams() {
  return getPhotosDirectories("").map((path) => {
    return {
      id: path,
    };
  });
}
