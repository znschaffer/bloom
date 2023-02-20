import Brew from "@/components/brew";
import Hero from "@/components/hero";
import History from "@/components/history";

export default function Home() {
  return (
    <>
      <main className={"flex flex-col"}>
        <Hero />
        <div className={"hero"}>
          <Brew />
        </div>
        <History />
      </main>
    </>
  );
}
