import { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.scss";

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/swiperCustom.scss";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/sqa7avw.css" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
