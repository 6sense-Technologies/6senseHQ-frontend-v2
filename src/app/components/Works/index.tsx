import React from "react";
import SectionTitle from "../SectionTitle";
import Link from "next/link";
import GridSkeleton from "../GridSkeleton";

type Props = {
  subtitle: string;
  pageName: string;
  worksInfo: {
    id: number;
    name: string;
    slug: string;
    logo: string;
    imageSrc: string;
  }[];
};

const Works = ({ worksInfo, subtitle, pageName }: Props) => {
  const title = (
    <>
      <h1 className="text-primary text-4xl md:text-5xl font-bold">
        Some of our
        <span className="text-secondary"> Partnership Works </span>
      </h1>
    </>
  );

  const paragraph = (
    <>
      <p
        className={`max-w-5xl mx-auto ${
          pageName === "home" ? "py-4 md:py-1" : "py-5"
        } text-blackSecondary`}
      >
        {subtitle}
      </p>
    </>
  );

  return (
    <div className="bg-lightGray">
      <div
        className={`px-5 lg:px-0 ${pageName === "home" ? "py-20" : "py-14"}`}
      >
        <div className="text-center">
          <SectionTitle title={title} paragraph={paragraph} />
        </div>

        <GridSkeleton />

        <div
          className={`${
            pageName === "home" ? "mt-6" : "mt-6 md:mt-14"
          } max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 place-items-center gap-x-8 gap-y-4`}
        >
          {worksInfo.map((work) => (
            <Link href={`/case-studies/${work.slug}`} key={work.id}>
              <div className="bg-white w-full h-auto shadow-md">
                <img src={work.imageSrc} className="w-full" alt={work.name} />
                <div className="p-5">
                  <img src={work.logo} alt={work.name} />
                  <h3 className="text-primary font-semibold">{work.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
