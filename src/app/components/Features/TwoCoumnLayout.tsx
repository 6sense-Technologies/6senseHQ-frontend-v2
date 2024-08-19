import Image from "next/image";

type FeatureItem = {
  text: string;
};

type Feature = {
  title: string;
  items: FeatureItem[];
};

type FeaturesProps = {
  features: Feature[];
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
};

const TwoColumnLayout = ({
  features,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
}: FeaturesProps) => {
  return (
    <div
      className={`mt-20 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row lg:items-center lg:gap-10 ${
        imageOnLeft ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="lg:w-1/2">
        {features.map(({ title, items }, index) => (
          <div key={index} className={index > 0 ? "mt-8" : ""}>
            <h3 className="text-3xl text-primary font-bold">{title}</h3>
            <div className="ml-5 mt-4 space-y-4">
              {items.map(({ text }, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <img src="/images/verified.webp" alt="Verified" />
                  <p className="text-justify">{text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};

export default TwoColumnLayout;
