import React from "react";
import ButtonWithCTA from "../ButtonWithCTA";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="bg-hero relative overflow-hidden">
      <div className="py-16 max-w-7xl mx-auto px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-7 lg:gap-56">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-center lg:text-left">
              <span className="text-primary">Curious to Learn</span>{" "}
              <span className="text-secondary">More?</span>
            </h1>
            <p className="text-center lg:text-left text-blackSecondary font-bold">
              Get in touch with us to know more about the timeline & budget
            </p>
          </div>
          <div>
            <ButtonWithCTA />
          </div>
        </div>
      </div>

      <div className="absolute w-[124px] h-[206px] -bottom-11 right-0 lg:right-20">
        <img src="/images/6senseImage.png" alt="6sense" />
      </div>
    </div>
  );
};

export default CallToAction;
