import Image from "next/image";
import SectionTitle from "../SectionTitle";

const Technology = () => {
  const title = (
    <>
      <h1 className="text-primary text-5xl font-bold">
        Expertise In
        <span className="text-secondary"> Leading Technologies</span>
      </h1>
    </>
  );
  const paragraph = (
    <>
      <p className="py-5 text-textSecondary">
        Our team is proficient in a wide range of software technologies,
        ensuring top-quality solutions for your business.
      </p>
    </>
  );

  return (
    <div className="mt-20">
      <div className="px-5 text-center">
        <SectionTitle title={title} paragraph={paragraph} />
        <div className="mt-10 flex items-center justify-center">
          <img src="/images/technologies.png" alt="Technologies" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
