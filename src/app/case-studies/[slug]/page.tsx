"use client";

import CallToAction from "@/app/components/CallToAction";
import AboutProject from "@/app/components/CaseStudy/AboutProject";
import CaseStudyFeedback from "@/app/components/CaseStudy/CaseStudyFeedback";
import CaseStudyHero from "@/app/components/CaseStudy/CaseStudyHero";
import KeyFunctionalities from "@/app/components/CaseStudy/KeyFunctionalities";
import ProjectOverview from "@/app/components/CaseStudy/ProjectOverview";
import RelatedCases from "@/app/components/CaseStudy/RelatedCases";
import Result from "@/app/components/CaseStudy/Result";
import Solution from "@/app/components/CaseStudy/Solution";
import HeroSkeleton from "@/app/components/HeroSkeleton";
import { SIXSENSE_BACKEND } from "@/constants";
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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";

const CaseStudyDetail = () => {
  const { slug } = useParams();

  const { data: caseStudyDetail, isFetching: caseStudyLoading } = useQuery({
    queryKey: ["getCaseStudyDetails", slug],
    queryFn: async () => {
      const res = await axios.get(`https://sixsense-z2fk.onrender.com/${slug}`);
      return res.data;
    },
    refetchOnWindowFocus: false,
    enabled: !!slug,
  });

  const caseStudyInformation = caseStudyDetail?.data?.details;

  console.log(caseStudyInformation);

  return (
    <div>
      {caseStudyLoading ? (
        <HeroSkeleton />
      ) : (
        <>
          {/* main content */}
          <div className="bg-hero py-28">
            <CaseStudyHero
              coloredPartTitle={caseStudyInformation?.coloredPartTitle}
              regularTitle={caseStudyInformation?.regularTitle}
              info={caseStudyInformation?.heroInfo}
            />
          </div>
          <div>
            <ProjectOverview
              title="Project Overview"
              overviewParagraphs={caseStudyInformation?.overviewParagraphs}
              overviewImage={`${SIXSENSE_BACKEND}${caseStudyInformation?.overviewImage}`}
            />
          </div>

          <div>
            <AboutProject
              aboutProjectInfo={caseStudyInformation?.aboutInfo}
              title="About Project"
              paragraph={caseStudyInformation?.aboutParagraph}
            />
          </div>

          <div>
            <Solution
              solutionImage={`${SIXSENSE_BACKEND}${caseStudyInformation?.solution?.solutionImage}`}
              solutionPoints1={caseStudyInformation?.solution?.solutionsPoints1}
              solutionPoints2={caseStudyInformation?.solution?.solutionsPoints2}
              icon="/images/case-studies/keypointIcon.svg"
              title="Solution"
              subtitle={caseStudyInformation?.solution?.description}
            />
          </div>

          <div>
            <KeyFunctionalities
              keyPoints1={caseStudyInformation?.keyFeature?.keyFeaturesPoints1}
              keyPoints2={caseStudyInformation?.keyFeature?.keyFeaturesPoints2}
              icon="/images/case-studies/keypointIcon.svg"
              title="Key functionality"
              subtitle={caseStudyInformation?.keyFeature?.description}
              keyFunctionalityImage={`${SIXSENSE_BACKEND}${caseStudyInformation?.keyFeature?.keyFeaturesImage}`}
            />
          </div>

          <div>
            <Result
              resultPoints1={caseStudyInformation?.result?.resultsPoints1}
              resultPoints2={caseStudyInformation?.result?.resultsPoints2}
              icon="/images/case-studies/keypointIcon.svg"
              title="Project results"
              subtitle={caseStudyInformation?.result?.description}
            />
          </div>

          <div>
            <CaseStudyFeedback
              feedback={`"Engineering is not a solo endeavor, you’re always dependent on
            other people around you. It’s important to have people who buy into
            the need for high collaboration and flexibility, knowing things will
            change. The 6sense team fit really well into that, allowing us to
            navigate some pretty difficult challenges."`}
              nameWithDesignation="Daniel Brown, VP of Engineering at Itcan"
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
        </>
      )}
    </div>
  );
};

export default CaseStudyDetail;
