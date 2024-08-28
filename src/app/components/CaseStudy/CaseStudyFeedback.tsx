import Image from "next/image";
import React from "react";

type Props = {
  feedback: string;
  nameWithDesignation: string;
  clientImage?: string;
};

const CaseStudyFeedback = ({
  feedback,
  nameWithDesignation,
  clientImage,
}: Props) => {
  return (
    <div className="bg-hero py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-0 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 md:gap-10">
        <div>
          <p className="font-plex-sans text-primary text-xl leading-8 font-semibold text-center lg:text-justify italic">
            {feedback}
          </p>
          <div className="mt-6">
            <h3 className="font-helvetica text-sm text-primary font-bold text-center md:text-left">
              – {nameWithDesignation}
            </h3>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          {clientImage ? (
            <img
              className="w-[150px] md:w-full h-auto"
              src={clientImage}
              alt="Client Feedback"
            />
          ) : (
            <img
              className="w-[150px] md:w-full h-auto"
              src="/images/case-studies/avatarClient.webp"
              alt="Client Feedback"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyFeedback;
