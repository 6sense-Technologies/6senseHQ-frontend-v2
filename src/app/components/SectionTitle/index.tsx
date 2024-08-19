import React, { ReactNode } from "react";

type Props = {
  title: ReactNode;
  paragraph: ReactNode;
};

const SectionTitle = ({ title, paragraph }: Props) => {
  return (
    <>
      {title}
      {paragraph}
    </>
  );
};

export default SectionTitle;
