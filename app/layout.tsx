import "@/styles/globals.scss";
import Header from "./header";
import style from "./layout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  // console.log(num);
  // const router = useNavigation();
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/sqa7avw.css" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className={style.wrap}>
        <div className={style.headerWrap}>
          <Header />
        </div>
        <main className={style.content}>{children}</main>
      </body>
    </html>
  );
}
