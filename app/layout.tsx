import "../styles/globals.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  // console.log(num);
  // const router = useNavigation();
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main>
          <p>レイアウトです</p>

          {children}
        </main>
      </body>
    </html>
  );
}
