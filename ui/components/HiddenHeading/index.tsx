import { FC } from "react";
import style from "./style.module.scss";

type Props = {
  title: String;
};

const H1: FC<Props> = ({ title }) => (
  <h1 className={style.HiddenHeading}>{title}</h1>
);

const H2: FC<Props> = ({ title }) => (
  <h2 className={style.HiddenHeading}>{title}</h2>
);
const H3: FC<Props> = ({ title }) => (
  <h3 className={style.HiddenHeading}>{title}</h3>
);

export { H1, H2, H3 };
