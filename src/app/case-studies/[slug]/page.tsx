"use client";

import CallToAction from "@/app/components/CallToAction";
import AboutProject from "@/app/components/CaseStudy/AboutProject";
import CaseStudyHero from "@/app/components/CaseStudy/CaseStudyHero";
import KeyFunctionalities from "@/app/components/CaseStudy/KeyFunctionalities";
import ProjectOverview from "@/app/components/CaseStudy/ProjectOverview";
import RelatedCases from "@/app/components/CaseStudy/RelatedCases";
import Result from "@/app/components/CaseStudy/Result";
import Solution from "@/app/components/CaseStudy/Solution";
import {
  aboutProjectInfo,
  heroInfoItems,
  keyPoints1,
  keyPoints2,
  overviewParagraphs,
  resultPoints,
  solutionPoints,
} from "@/data/propsData";
import { worksData } from "@/data/worksData";
import { CaseStudy } from "@/types/type";
import { useParams } from "next/navigation";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const caseStudy = worksData.filter((data) => data.slug === slug);
  const caseStudyInfo = caseStudy[0].details;
  return (
    <div>
      <div className="bg-hero py-28">
        <CaseStudyHero
          coloredPartTitle={caseStudyInfo?.coloredPartTitle || ""}
          regularTitle={caseStudyInfo?.regularTitle || ""}
          info={heroInfoItems}
        />
      </div>
      <div>
        <ProjectOverview
          title="Project Overview"
          overviewParagraphs={caseStudyInfo?.overviewParagraphs || []}
          overviewImage={caseStudyInfo?.overviewImage || ""}
        />
      </div>

      <div>
        <AboutProject
          aboutProjectInfo={caseStudyInfo?.aboutProjectInfo || []}
          title="About Project"
          paragraph={caseStudyInfo?.aboutParagraph || ""}
        />
      </div>

      <div>
        <Solution
          solutionImage={caseStudyInfo?.solutionImage || ""}
          solutionPoints1={caseStudyInfo?.solutionPoints1 || []}
          solutionPoints2={caseStudyInfo?.solutionPoints2}
          icon="/images/case-studies/keypointIcon.svg"
          title="Solution"
          subtitle={caseStudyInfo?.solutionParagraph}
        />
      </div>

      <div>
        <KeyFunctionalities
          keyPoints1={caseStudyInfo?.keypoints1 || []}
          keyPoints2={caseStudyInfo?.keypoints2}
          icon="/images/case-studies/keypointIcon.svg"
          title="Key functionality"
          subtitle={caseStudyInfo?.keyFuncParagraph || ""}
          keyFunctionalityImage={caseStudyInfo?.keyFuncImage || ""}
        />
      </div>

      <div>
        <Result
          resultPoints1={caseStudyInfo?.resultPoints1 || []}
          resultPoints2={caseStudyInfo?.resultPoints2}
          icon="/images/case-studies/keypointIcon.svg"
          title="Project results"
          subtitle={caseStudyInfo?.resultParagraph}
        />
      </div>

      <div>
        <RelatedCases title="Related cases" worksInfo={worksData} />
      </div>

      <div>
        <CallToAction
          pageName="case-study-detail"
          regularTitle="Curious to Learn"
          coloredPartTitle="More?"
          subtitle="Get in touch with us to know more about the timeline & budget"
        />
      </div>
    </div>
  );
};

export default CaseStudyDetail;
