import Image from "next/image";
import Hero from "./components/Hero";
import Companies from "./components/Companies";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
    </main>
  );
}
