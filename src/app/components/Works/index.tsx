"use client";
import React from "react";
import SectionTitle from "../SectionTitle";
import Link from "next/link";
import GridSkeleton from "../GridSkeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SIXSENSE_BACKEND } from "@/constants";

type Props = {
  subtitle: string;
  pageName: string;
};

const Works = ({ subtitle, pageName }: Props) => {
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

  //https://sixsense-z2fk.onrender.com/case-studies

  const {
    data: caseStudies,
    isFetching: caseStudyLoading,
    isFetched,
  } = useQuery({
    queryKey: ["getCaseStudies"],
    queryFn: async () => {
      const res = await axios.get(`${SIXSENSE_BACKEND}/case-studies`);
      return res.data;
    },
    refetchOnWindowFocus: false,
  });

  https: return (
    <div className="bg-lightGray">
      <div
        className={`px-5 lg:px-0 ${pageName === "home" ? "py-20" : "py-14"}`}
      >
        <div className="text-center">
          <SectionTitle title={title} paragraph={paragraph} />
        </div>

        {caseStudyLoading && !isFetched ? (
          <GridSkeleton />
        ) : (
          <div
            className={`${
              pageName === "home" ? "mt-6" : "mt-6 md:mt-8"
            } max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 place-items-center gap-x-8 gap-y-4`}
          >
            {caseStudies?.data?.projects.map((work: any) => (
              <Link href={`/case-studies/${work.slug}`} key={work.id}>
                <div className="bg-white w-[362px] h-auto shadow-md">
                  <div className="h-[460px]">
                    <img
                      src={`${SIXSENSE_BACKEND}${work.imageSrc}`}
                      className="w-full"
                      alt={work.appName}
                    />
                  </div>
                  <div className="h-[90px] p-5">
                    <img
                      src={`${SIXSENSE_BACKEND}${work.logo}`}
                      alt={work.name}
                    />
                    <h3 className="text-primary font-semibold">
                      {work.appName}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Works;
