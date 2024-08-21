import React from "react";
import SectionTitle from "../SectionTitle";
import TwoColumnLayout from "./TwoCoumnLayout";

type FeatureItem = {
  title: string;
  items: {
    text: string;
  }[];
};

type Feature = {
  item: FeatureItem[];
  imageSrc: string;
  imageAlt: string;
};

type Features = {
  features: Feature[];
};

const Features = ({ features }: Features) => {
  const title = (
    <>
      <h1 className="font-plex-sans-thai text-primary text-5xl font-bold">
        Setting
        <span className="text-secondary"> 6sense </span>
        Apart From The Competition
      </h1>
    </>
  );
  const paragraph = (
    <>
      <p className="font-helvetica py-5 text-textSecondary">
        We go above and beyond to ensure your satisfaction and success. Don’t
        just take our word for it – check out our track record and see for
        yourself why <br />
        we stand out from the competition.
      </p>
    </>
  );

  return (
    <div className="mt-12 lg:mt-28">
      <div className="px-5 text-center">
        <SectionTitle title={title} paragraph={paragraph} />
      </div>

      {features.map((feature, index) => (
        <div key={index} className={`${index === 2 ? "pb-28 gradient" : ""}`}>
          <div className="px-5">
            <TwoColumnLayout
              features={feature.item}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              imageOnLeft={index === 1 ? true : false}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
