import React from "react";
import Hero from "../components/Hero";
import { achievements, organizations } from "@/data/propsData";
import Companies from "../components/Companies";
import Works from "../components/Works";
import { worksData } from "@/data/worksData";
import { appsData } from "@/data/appsData";
import MobileApps from "../components/MobileApps";
import CallToAction from "../components/CallToAction";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const CaseStudies = () => {
  return (
    <div>
      <Hero
        titlePrimary="Our"
        titleSecondary=" Portfolio"
        achievements={achievements}
        imageSrc="/images/case-studies/caseStudyHero.webp"
        imageAlt="Case Study"
        imageWidth={448}
        imageHeight={300}
        justify="center"
        pageName="case-studies"
      />

      <Companies
        pageName="case-studies"
        organizations={organizations}
        subtitle="We’re a industry-leading team of software developers dedicated to transforming creative leaders’ revolutionary ideas into reality"
      />

      <Works
        pageName="case-studies"
        subtitle="Our dedicated team of off-shore talent provides our partners with a vastly more economical avenue for company expansion, saving huge over hiring US-based developers or wasting resources on employing, training, and maintaining an internal team."
      />

      <MobileApps
        pageName="case-studies"
        subtitle="Through our vast experience in the industry, we are proud to have built a strong and powerful reputation for reliability and precision when it comes to creating purpose-built software designed specially to meet specific company goals and resolve internal problems."
        appsInfo={appsData}
      />

      <CallToAction
        pageName="case-studies"
        regularTitle="Curious to Learn"
        coloredPartTitle="More?"
        subtitle="Get in touch with us to know more about the timeline & budget"
      />
    </div>
  );
};

export default CaseStudies;
