import React from "react";
import SectionTitle from "../SectionTitle";
import { worksData } from "@/data/worksData";
import Image from "next/image";

const Works = () => {
  const title = (
    <>
      <h1 className="text-primary text-5xl font-bold">
        Some of our
        <span className="text-secondary">Partnership Works </span>
      </h1>
    </>
  );

  const paragraph = (
    <>
      <p className="py-5 text-textSecondary">
        Experience the Cost-Effective Benefits of Partnering with Our Software
        Development Team
      </p>
    </>
  );

  return (
    <div className="mt-12 lg:my-14 px-5 lg:px-0">
      <div className="text-center">
        <SectionTitle title={title} paragraph={paragraph} />
      </div>

      <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-8 gap-y-4">
        {worksData.map((work) => (
          <div className="bg-white w-full h-auto shadow-md" key={work.id}>
            <img src={work.imageSrc} className="w-full" alt={work.title} />
            <div className="p-5">
              <img src={work.logo} alt={work.title} />
              <h3 className="text-primary font-semibold">{work.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
