import Image from "next/image";
import React from "react";
import ClutchWidget from "../Clutchwidget";

export type StatInfo = {
  id: number;
  stat: string;
  icon: string;
  alt: string;
  text: string;
};

type StatsProps = {
  statsInfo: StatInfo[];
};

const Stats = ({ statsInfo }: StatsProps) => {
  return (
    <div className="md:px-5 lg:px-0 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-y-5 justify-between">
        {statsInfo.map((info) => (
          <div className="w-full" key={info.id}>
            <div className="flex gap-3 w-full">
              <div className="mt-2">
                <Image src={info.icon} alt={info.alt} width={24} height={24} />
              </div>
              <div>
                <h2 className="font-bold text-primary text-2xl md:text-3xl">
                  {info.stat}
                </h2>
                <p className="font-medium text-[#737373]">{info.text}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="pl-2 md:pl-10 w-full flex justify-center">
          <ClutchWidget />
        </div>
      </div>
    </div>
  );
};

export default Stats;
