"use client";
import Image from "next/image";
import React from "react";

const KeyFactors = () => {
  const icons = [
    { id: 1, icon: "/images/aws.png", alt: "AWS" },
    { id: 2, icon: "/images/awsSecurity.png", alt: "AWS" },
    { id: 3, icon: "/images/pspo.png", alt: "PSPO" },
    { id: 4, icon: "/images/psm.png", alt: "PSM" },
    { id: 5, icon: "/images/uxmaster.png", alt: "UX" },
    { id: 6, icon: "/images/acp.png", alt: "ACP" },
  ];

  const process = [
    {
      id: 1,
      icon: "/images/construction.png",
      alt: "Construction",
      title: "Construction",
      text: "Industry",
    },
    {
      id: 2,
      icon: "/images/duration.png",
      alt: "Duration",
      title: "16 months",
      text: "Duration",
    },
    {
      id: 3,
      icon: "/images/engineer.png",
      alt: "Engineers",
      title: "8 Engineers",
      text: "Team Size",
    },
    {
      id: 4,
      icon: "/images/technology.png",
      alt: "Technology",
      title: "Node JS, React Js",
      text: "Technology",
    },
  ];
  return (
    <div className="">
      <div className="mt-12 lg:my-28">
        <div className="px-5 text-center">
          <h1 className="text-primary text-5xl font-bold">
            <span className="text-secondary">Key Factors </span>
            In 6sense Process
          </h1>
          <p className="py-5 text-textSecondary">
            Ensuring Success through Quality Assurance, Timely Delivery,
            Scalability, and Collaboration.
          </p>

          <div className="flex items-center justify-center gap-4">
            {icons.map((ico) => (
              <div key={ico.id}>
                <img src={ico.icon} alt={ico.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* main div */}
        <div className="custombg">
          <div className="mt-20 max-w-6xl mx-auto bg-white drop-shadow-md h-full rounded-t-md py-12 px-4 lg:px-0">
            <div className="max-w-4xl mx-auto flex lg:gap-8 flex-col-reverse lg:flex-row lg:items-start">
              <img
                className="hidden lg:block"
                src="/images/itcan.png"
                alt="Itcan"
              />
              <div className="w-full">
                <div className="flex lg:gap-8 items-center">
                  <p className="text-primary text-xl leading-8 font-semibold text-center lg:text-justify">
                    We interviewed different providers and selected 6sense
                    because of two main factors: their proven track record of
                    success developing businesses, and the leaderships passion
                    and commitment to building great products.
                  </p>
                  <img
                    className="hidden lg:flex"
                    src="/images/quote.png"
                    alt="Quote"
                  />
                </div>

                <div className="mt-10 text-center lg:text-left">
                  <img
                    className="block lg:hidden mx-auto"
                    src="/images/itcan.png"
                    alt="Itcan"
                  />
                  <h3 className="text-primary font-bold">AL</h3>
                  <p className="text-sm">CEO, Itcan Inc.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto bg-white drop-shadow-md h-full rounded-b-md border-t py-12 px-5 lg:px-0">
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-y-8">
                {process.map((item) => (
                  <div
                    key={item.id}
                    className="w-full h-full flex flex-col items-center lg:items-start"
                  >
                    <div className="mb-4">
                      <img src={item.icon} alt={item.alt} />
                    </div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFactors;
