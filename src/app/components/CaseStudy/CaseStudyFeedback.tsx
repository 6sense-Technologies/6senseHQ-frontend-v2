import Image from "next/image";
import React from "react";

const CaseStudyFeedback = () => {
  return (
    <div className="bg-hero py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-0 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 md:gap-10">
        <div>
          <p className="font-plex-sans text-primary text-xl leading-8 font-semibold text-center lg:text-justify italic">
            "Engineering is not a solo endeavor, you’re always dependent on
            other people around you. It’s important to have people who buy into
            the need for high collaboration and flexibility, knowing things will
            change. The 6sense team fit really well into that, allowing us to
            navigate some pretty difficult challenges."
          </p>
          <div className="mt-6">
            <h3 className="font-helvetica text-sm text-primary font-bold text-center md:text-left">
              – Daniel Brown, VP of Engineering at Itcan
            </h3>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <img
            className="w-[150px] md:w-full h-auto"
            src="/images/case-studies/avatarClient.webp"
            alt="Client Feedback"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyFeedback;
