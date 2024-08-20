import Image from "next/image";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Services from "./components/Services";
import KeyFactors from "./components/KeyFactor";
import Technology from "./components/Technology";
import Features from "./components/Features";
import Advantages from "./components/Advantages";
import CallToAction from "./components/CallToAction";
import Works from "./components/Works";
import Feedback from "./components/Feedback";
import Rating from "./components/Rating";
import MobileApps from "./components/MobileApps";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="font-plex-sans">
      <Hero />
      <Companies />
      <Services />
      <KeyFactors />
      <Technology />
      <Features />
      <Advantages />
      <CallToAction />
      <Works />
      <Feedback />
      <Rating />
      <div className="my-12">
        <CallToAction />
      </div>
      <MobileApps />
      <FAQ />
      <Footer />
    </main>
  );
}
