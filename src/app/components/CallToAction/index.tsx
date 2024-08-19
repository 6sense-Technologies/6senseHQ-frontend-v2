import React from "react";
import ButtonWithCTA from "../ButtonWithCTA";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="bg-hero">
      <div className="py-14 max-w-7xl mx-auto px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-7 lg:gap-52">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-center lg:text-left">
              <span className="text-primary">Curious to Learn</span>{" "}
              <span className="text-secondary">More?</span>
            </h1>
            <p className="text-center lg:text-left text-blackSecondary font-bold">
              Get in touch with us to know more about the timeline & budget
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:gap-10 justify-around">
            <div className="">
              <ButtonWithCTA />
            </div>
            {/* <div className="relative w-[124px] h-[206px] overflow-hidden">
              <Image
                className="absolute right-0 -bottom-6"
                src="/images/6senseImage.png"
                alt="6sense"
                width={124}
                height={170}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
