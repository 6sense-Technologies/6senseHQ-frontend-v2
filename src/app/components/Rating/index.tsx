import React from "react";
import ClutchWidget from "../Clutchwidget";

type Props = {
  ratingsInfo: {
    id: number;
    type: string;
    text: string;
    rating: string;
  }[];
  buttonText: string;
};

const Rating = ({ ratingsInfo, buttonText }: Props) => {
  return (
    <div className="mt-10 px-5 lg:px-0 py-20 max-w-6xl mx-auto bg-slate-50">
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 justify-around">
        <div className="space-y-5">
          <ClutchWidget />
          <button className="hidden lg:block ml-2 px-4 py-2 border text-sm text-highlight border-highlight rounded-md font-thin">
            {buttonText}
          </button>
        </div>

        {/* gap-x-3 md:gap-x-20 gap-y-4 */}
        <div className="grid grid-cols-2 ">
          {ratingsInfo.map((item, index) => (
            <div
              className={`flex lg:items-center  py-10 gap-4 ${
                index === 0 || index === 1
                  ? "border-b pb-4 md:border-0"
                  : "pt-4"
              } ${
                index === 0 || index === 2
                  ? "border-r pr-4 md:border-0"
                  : "pl-4"
              } border-highlight`}
            >
              <div className="flex items-center justify-center font-bold text-xs p-2 w-8 h-8 border rounded-full border-highlight">
                {item.rating}
              </div>
              <div className="space-y-1">
                <p className="text-sm">{item.type}</p>
                <h4 className="font-medium text-primary">{item.text}</h4>
              </div>
            </div>
          ))}
        </div>

        <button className="lg:hidden ml-2 px-4 py-2 border text-sm text-highlight border-highlight rounded-md font-thin">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Rating;
