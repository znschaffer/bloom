import Timer from "@/components/timer";
import History from "@/components/history";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bloom</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <Timer />
        <History />
      </main>
    </>
  );
}
