import React from "react";

type Props = {
  title: string;
  subtitle: string;
  icon: string;
  keyPoints1: string[];
  keyPoints2?: string[];
  keyFunctionalityImage: string;
};

const KeyFunctionalities = ({
  title,
  subtitle,
  icon,
  keyPoints1,
  keyPoints2,
  keyFunctionalityImage,
}: Props) => {
  return (
    <div className="max-w-7xl mx-auto py-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl md:leading-tight font-bold capitalize text-primary">
          {title}
        </h1>
      </div>

      <div className="py-6 px-4 md:px-0 max-w-6xl mx-auto">
        <p>{subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-0 md:mt-9">
        <div
          className={`${
            keyPoints2 ? "flex flex-col md:flex-row gap-4 md:gap-14" : ""
          }`}
        >
          <div className="space-y-4">
            {keyPoints1.map((point, index) => (
              <p key={index} className="text-lightGray4 flex items-start gap-2">
                <img src={icon} className="mt-1" alt="Tick" />
                {point}
              </p>
            ))}
          </div>

          <div className="space-y-4">
            {keyPoints2 &&
              keyPoints2?.length > 0 &&
              keyPoints2.map((point, index) => (
                <p
                  key={index}
                  className="text-lightGray4 flex items-start gap-2"
                >
                  <img src={icon} className="mt-1" alt="Tick" />
                  {point}
                </p>
              ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-9">
        <img src={keyFunctionalityImage} alt={title} />
      </div>
    </div>
  );
};

export default KeyFunctionalities;
