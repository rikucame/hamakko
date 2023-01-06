import fs from "fs";

export const getPhotosDirectories = (dir: string): string[] => {
  const dirs = fs
    .readdirSync(`./public/photos/${dir}`, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map(({ name }) => name);
  console.log(dirs);
  return dirs;
};
