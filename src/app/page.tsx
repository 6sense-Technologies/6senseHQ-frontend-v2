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
import {
  achievements,
  advantagesAccordionInfo,
  buyerGuides,
  faqAccordionItems,
  featureItems,
  impactStats,
  keyFactorIcons,
  mistakes,
  organizations,
  ourProcess,
  ourServices,
  ratingsInfo,
  statsInfo,
} from "@/data/propsData";
import { worksData } from "@/data/worksData";
import { appsData } from "@/data/appsData";
import BuyerGuide from "./components/BuyerGuide";
import Mistakes from "./components/Mistakes";
import Impact from "./components/Impact";

export default function Home() {
  return (
    <main className="">
      <Hero
        titlePrimary="Expert Custom"
        titleSecondary="Software Development"
        subtitle="By An Award Winning Agency"
        achievements={achievements}
        statsInfo={statsInfo}
        imageSrc="/images/6sense.png"
        imageAlt="6sense Team"
        imageCaption="6sense engineering DEPT."
      />
      <Companies
        organizations={organizations}
        title="Trusted by 50+ Companies Worldwide"
        subtitle="Experience and Expertise You Can Count On. Our team has a proven track record of delivering top-quality solutions for businesses across a variety of industries."
      />
      <Services ourServices={ourServices} />
      <KeyFactors keyfactorIcons={keyFactorIcons} />
      <Technology image="/images/technologies.png" alt="Technology" />
      <BuyerGuide
        coloredPartTitle="Buyers Guide"
        regularTitle="for Developing Custom Software"
        imageSrc="/images/buyersguide.png"
        icon="/images/tick.svg"
        alt="Tick"
        guides={buyerGuides}
      />

      <Mistakes
        coloredPartTitle="10 Mistakes"
        regularTitle=" You Should Avoid While Developing Custom Software"
        icon="/images/tick.svg"
        alt="Icon"
        imageSrc="/images/10mistakes.png"
        mistakes={mistakes}
      />

      <Features features={featureItems} />
      <Impact impactStats={impactStats} />
      <Advantages
        accordionItems={advantagesAccordionInfo}
        imageSrc="/images/Choosing-6sense.png"
        alt="Choosing 6sense"
      />
      <CallToAction
        regularTitle="Curious to Learn"
        coloredPartTitle="More?"
        subtitle="Get in touch with us to know more about the timeline & budget"
        imageSrc="/images/6senseImage.png"
        alt="6sense"
      />
      <Works worksInfo={worksData} />

      <Feedback
        paragraph="I find it comforting that they follow the schedule they
                  provided me with. It establishes trust between us."
        logo="/images/impromek.svg"
        name="Gabriel Sotomayor"
        designation="CEO, Impromek Ltd."
        ourProcess={ourProcess}
      />

      <Rating ratingsInfo={ratingsInfo} buttonText="Visit Clutch" />

      <div className="my-12">
        <CallToAction
          regularTitle="Curious to Learn"
          coloredPartTitle="More?"
          subtitle="Get in touch with us to know more about the timeline & budget"
          imageSrc="/images/6senseImage.png"
          alt="6sense"
        />
      </div>
      <MobileApps appsInfo={appsData} />
      <FAQ
        faqAccordionItems={faqAccordionItems}
        regularTitle="Frequently Asked"
        coloredPartTitle="Question"
      />
      <Footer />
    </main>
  );
}
