import Accordion from "../Accordion";
import SectionTitle from "../SectionTitle";

type Props = {
  accordionItems: {
    title: string;
    content: string;
  }[];
  imageSrc: string;
  alt: string;
};

const Advantages = ({ accordionItems, imageSrc, alt }: Props) => {
  const title = (
    <>
      <h1
        className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold"
      >
        <span className="text-secondary">Advantages </span>
        Of Choosing 6sense
      </h1>
    </>
  );
  const paragraph = (
    <>
      <p className="max-w-3xl mx-auto font-helvetica py-4 text-textSecondary">
        By utilizing our full off-shore team of experienced software developers,
        responsible American companies are enjoying an impressive range of
        benefits.
      </p>
    </>
  );
  return (
    <div className="my-16">
      <div className="flex flex-col items-center text-center">
        <SectionTitle title={title} paragraph={paragraph} />
      </div>
      <div className="mt-10 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-start lg:justify-center">
          <div className="lg:w-1/2">
            <Accordion items={accordionItems} />
          </div>
          <div className="lg:w-1/2">
            <img src={imageSrc} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
