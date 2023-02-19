import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Context from "@/context/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  );
}
