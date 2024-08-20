import React from "react";
import ButtonWithCTA from "../ButtonWithCTA";

type Props = {
  regularTitle: string;
  coloredPartTitle: string;
  subtitle: string;
  imageSrc: string;
  alt: string;
};

const CallToAction = ({
  regularTitle,
  coloredPartTitle,
  subtitle,
  imageSrc,
  alt,
}: Props) => {
  return (
    <div className="bg-hero relative overflow-hidden">
      <div className="py-16 max-w-7xl mx-auto px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-7 lg:gap-56">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-center lg:text-left">
              <span className="text-primary">{regularTitle}</span>{" "}
              <span className="text-secondary">{coloredPartTitle}</span>
            </h1>
            <p className="text-center lg:text-left text-blackSecondary font-bold">
              {subtitle}
            </p>
          </div>
          <div>
            <ButtonWithCTA />
          </div>
        </div>
      </div>

      <div className="absolute w-[124px] h-[206px] -bottom-11 right-0 lg:right-20">
        <img src={imageSrc} alt={alt} />
      </div>
    </div>
  );
};

export default CallToAction;
