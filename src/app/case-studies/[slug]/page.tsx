"use client";

import CaseStudyHero from "@/app/components/CaseStudy/CaseStudyHero";
import ProjectOverview from "@/app/components/CaseStudy/ProjectOverview";
import Image from "next/image";
import { useParams } from "next/navigation";

const CaseStudyDetail = () => {
  const { slug } = useParams();

  return (
    <div>
      <div className="bg-hero py-28">
        <CaseStudyHero />
      </div>
      <div>
        <ProjectOverview />
      </div>
    </div>
  );
};

export default CaseStudyDetail;
