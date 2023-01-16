import { TopPage } from "ui/pages/TopPage";
import style from "@/styles/topPage/layout.module.scss";
import Head from "next/head";
import { Header } from "@/components/Header/Header";

const Page = () => {
  return (
    <html>
      <body className={style.wrap}>
        <div className={style.headerWrap}>
          <Header />
        </div>
        <main className={style.content}>
          <TopPage />
        </main>
      </body>
    </html>
  );
};

export default Page;
