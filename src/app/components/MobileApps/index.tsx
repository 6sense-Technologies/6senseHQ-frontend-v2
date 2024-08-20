import React from "react";
import SectionTitle from "../SectionTitle";

type Props = {
  appsInfo: {
    id: number;
    title: string;
    imageSrc: string;
  }[];
};

const MobileApps = ({ appsInfo }: Props) => {
  const title = (
    <>
      <h1 className="text-primary text-5xl font-bold">
        Mobile Apps
        <span className="text-secondary"> Success Stories</span>
      </h1>
    </>
  );
  const paragraph = (
    <>
      <p className="py-5 text-textSecondary">
        Experience the Benefits of Partnering with Our Expert Software
        Development Team
      </p>
    </>
  );

  return (
    <div className="mt-12 lg:my-14 px-5 lg:px-0">
      <div className="text-center">
        <SectionTitle title={title} paragraph={paragraph} />
      </div>
      <div className="mt-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-x-3 lg:gap-x-0 md:gap-y-5 place-items-center">
          {appsInfo.map((app) => (
            <div key={app.id} className="bg-lightGray">
              <img className="px-16 pt-5" src={app.imageSrc} alt={app.title} />
              <div className="mt-2 border-t py-4 border-slate-300 p-0 text-center">
                <h3 className="text-primary font-semibold">{app.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileApps;
