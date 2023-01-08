import Link from "next/link";
import style from "./header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <Link href="/" className={style.siteName}>
        Rikuto Ishikura
      </Link>
      <span className={style.menu} />
    </header>
  );
}
