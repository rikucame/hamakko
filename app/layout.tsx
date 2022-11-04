import "@/styles/globals.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  // console.log(num);
  // const router = useNavigation();
  return (
    <html>
      <head></head>
      <body>
        <main>
          <p>レイアウトです</p>

          {children}
        </main>
      </body>
    </html>
  );
}
