import Brew from "@/components/brew";
import Hero from "@/components/hero";
import History from "@/components/history";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bloom</title>
      </Head>
      <main className={"flex flex-col"}>
        <Hero />
        <div className={"hero m-4"}>
          <Brew />
        </div>
        <History />
      </main>
    </>
  );
}
