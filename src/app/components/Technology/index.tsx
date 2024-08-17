import Image from "next/image";

const Technology = () => {
  return (
    <div className="mt-20">
      <div className="px-5 text-center">
        <h1 className="text-primary text-5xl font-bold">
          Expertise In
          <span className="text-secondary"> Leading Technologies</span>
        </h1>
        <p className="py-5 text-textSecondary">
          Our team is proficient in a wide range of software technologies,
          ensuring top-quality solutions for your business.
        </p>

        <div className="mt-10 flex items-center justify-center">
          <img src="/images/technologies.png" alt="Technologies" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
