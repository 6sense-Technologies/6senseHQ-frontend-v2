import React, { ReactNode } from "react";
import SectionTitle from "../SectionTitle";

const SuccessStories = ({
  title,
  paragraph,
}: {
  title: ReactNode;
  paragraph: string;
}) => {
  const text = (
    <>
      <p className="max-w-3xl mx-auto font-helvetica py-5 text-blackSecondary">
        {paragraph}
      </p>
    </>
  );
  return (
    <div className="my-12">
      <div className="px-4 text-center">
        <SectionTitle title={title} paragraph={text} />
      </div>
    </div>
  );
};

export default SuccessStories;
