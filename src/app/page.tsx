import Image from "next/image";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Services from "./components/Services";
import KeyFactors from "./components/KeyFactor";
import Technology from "./components/Technology";

export default function Home() {
  return (
    <main className="font-plex-sans">
      <Hero />
      <Companies />
      <Services />
      <KeyFactors />
      <Technology />
    </main>
  );
}
