import Image from "next/image";
import React from "react";

const CaseStudyHero = () => {
  return (
    <div className="px-4 md:px-0">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl md:leading-tight font-bold capitalize">
          <span className="text-secondary">Munca- </span>{" "}
          <span className="text-primary">
            infallible plan management app for managing funds
          </span>
        </h1>
      </div>

      <div className="px-4 md:px-0 max-w-5xl mx-auto mt-20">
        <div className="flex justify-center">
          <div className="w-full flex flex-col md:flex-row gap-7 md:justify-between">
            <div className="max-w-[250px] w-full">
              <Image
                src={"/images/case-studies/developers.svg"}
                alt="Developers"
                width={36}
                height={36}
              />
              <div className="mt-4 space-y-1">
                <h3 className="text-primary uppercase font-semibold text-lg">
                  4 Developers
                </h3>
                <p className="font-plex-sans-thai text-lightGray3">
                  We had 4 developers, one SQA and one scrum master.
                </p>
              </div>
            </div>
            <div className="max-w-[250px] w-full">
              <Image
                src={"/images/case-studies/sprints.svg"}
                alt="Developers"
                width={36}
                height={36}
              />
              <div className="mt-4 space-y-1">
                <h3 className="text-primary uppercase font-semibold text-lg">
                  7 Sprints
                </h3>
                <p className="font-plex-sans-thai text-lightGray3">
                  This product ran for total 7 sprints.
                </p>
              </div>
            </div>
            <div className="max-w-[250px] w-full">
              <Image
                src={"/images/case-studies/duration.svg"}
                alt="Developers"
                width={36}
                height={36}
              />
              <div className="mt-4 space-y-1">
                <h3 className="text-primary uppercase font-semibold text-lg">
                  5 Months
                </h3>
                <p className="font-plex-sans-thai text-lightGray3">
                  The total duration of the development timeline was 3 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHero;
