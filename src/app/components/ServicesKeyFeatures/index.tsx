import Image from "next/image";
import SectionTitle from "../SectionTitle";

type Props = {
  servicesKeyFeatures: {
    id: number;
    title: string;
    paragraph: string;
  }[];
};

const SectionKeyFeatures = ({ servicesKeyFeatures }: Props) => {
  const title = (
    <>
      <h1
        className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold capitalize"
      >
        When to use the
        <span className="text-secondary"> Managed Delivery </span>
        model
      </h1>
    </>
  );

  return (
    <div className="py-9 md:py-16 bg-gradient-to-b from-[#F8FFE9] to-[#F8FFE980]/10">
      <div className="px-5 text-center">
        <SectionTitle title={title} />
      </div>

      <div className="px-4 md:px-0 mt-8 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-5">
          {servicesKeyFeatures.map((feature) => (
            <div
              key={feature.id}
              className="max-w-[410px] w-full shadow-custom pl-8 py-8 pr-5 bg-white"
            >
              <h2 className="text-textSecondary font-bold text-[22px] capitalize">
                {feature.title}
              </h2>
              <p className="text-textSecondary pt-3">{feature.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionKeyFeatures;
