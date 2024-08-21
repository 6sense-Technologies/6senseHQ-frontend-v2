"use client";
import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle";
import Feedback from "../Feedback";

type Props = {
  keyfactorIcons: {
    id: number;
    icon: string;
    alt: string;
  }[];
};

const KeyFactors = ({ keyfactorIcons }: Props) => {
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

  const title = (
    <>
      <h1 className="font-plex-sans-thai text-primary text-5xl font-bold">
        <span className="text-secondary">Key Factors </span>
        In 6sense Process
      </h1>
    </>
  );

  const paragraph = (
    <>
      <p className="font-helvetica py-5 text-textSecondary">
        Ensuring Success through Quality Assurance, Timely Delivery,
        Scalability, and Collaboration.
      </p>
    </>
  );
  return (
    <>
      <div className="mt-12 lg:my-28">
        <div className="px-5 text-center">
          <SectionTitle title={title} paragraph={paragraph} />
          <div className="flex flex-wrap items-center justify-center gap-4">
            {keyfactorIcons.map((ico) => (
              <div key={ico.id}>
                <img src={ico.icon} alt={ico.alt} />
              </div>
            ))}
          </div>
        </div>

        <Feedback
          paragraph="We interviewed different providers and selected 6sense
                        because of two main factors: their proven track record
                        of success developing businesses, and the leaderships
                        passion and commitment to building great products."
          quoteLogo="/images/quote.png"
          logo="/images/itcan1.png"
          name="AL"
          designation="CEO, Itcan Inc."
          ourProcess={process}
        />
      </div>
    </>
  );
};

export default KeyFactors;
