export default function Layout({ children }: { children: React.ReactNode }) {
  // console.log(num);
  // const router = useNavigation();
  return (
    <html>
      <head>{/* <title>hogehoge</title> */}</head>
      <body>
        <p>レイアウトです</p>

        {children}
      </body>
    </html>
  );
}
