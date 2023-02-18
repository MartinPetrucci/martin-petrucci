import Header from "./components/header/Header";
import "./globals.css";
import { Roboto } from "@next/font/google";
const roboto = Roboto({ weight: ["300", "700"], subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
