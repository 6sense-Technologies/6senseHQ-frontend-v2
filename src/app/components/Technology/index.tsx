import Image from "next/image";
import SectionTitle from "../SectionTitle";

type Props = {
  image: string;
  alt: string;
};

const Technology = ({ image, alt }: Props) => {
  const title = (
    <>
      <h1
        className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold"
      >
        Expertise In
        <span className="text-secondary"> Leading Technologies</span>
      </h1>
    </>
  );
  const paragraph = (
    <>
      <p className="py-5 font-helvetica text-textSecondary">
        Our team is proficient in a wide range of software technologies,
        ensuring top-quality solutions for your business.
      </p>
    </>
  );

  return (
    <div className="pt-9 md:pt-16 upperGradient">
      <div className="px-5 text-center">
        <SectionTitle title={title} paragraph={paragraph} />
        <div className="mt-10 flex items-center justify-center">
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Technology;
