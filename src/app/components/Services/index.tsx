"use client";
import React from "react";
import SectionTitle from "../SectionTitle";
import { ArrowRight } from "@phosphor-icons/react";

type Props = {
  ourServices: {
    id: number;
    name: string;
    icon: string;
    description: string;
  }[];
};

const Services = ({ ourServices }: Props) => {
  const title = (
    <>
      <h1 className="font-plex-sans-thai text-primary text-4xl md:text-5xl font-bold">
        Full-Service{" "}
        <span className="text-secondary">Software Development</span>
      </h1>
    </>
  );

  const paragraph = (
    <>
      <p className="max-w-xl mx-auto font-helvetica py-4 text-textSecondary">
        Expert custom software development for your business needs. From design
        to deployment, we’ve got you covered.
      </p>
    </>
  );

  return (
    <div className="px-4 mt-12 lg:my-28">
      <div className="text-center">
        <SectionTitle title={title} paragraph={paragraph} />
      </div>

      <div className="mt-5 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center">
        {ourServices.map((item) => (
          <div
            className="bg-white w-full h-full drop-shadow-2xl px-5 py-8 rounded-md flex flex-col"
            key={item.id}
          >
            <div className="flex-1">
              <img src={item.icon} alt={item.name} />
              <h3 className="text-primary font-semibold text-xl my-4">
                {item.name}
              </h3>
              <p className="text-justify">{item.description}</p>
            </div>

            <button className="mt-4 text-actionColor font-semibold flex items-center gap-1">
              Learn More{" "}
              <span className="mt-1">
                <ArrowRight />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
