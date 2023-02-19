import Navbar from "@/components/navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="garden">
      <Head />
      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
