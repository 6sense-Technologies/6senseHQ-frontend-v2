import Image from "next/image";
import Stats, { StatInfo } from "../Stats";
import ButtonWithCTA from "../ButtonWithCTA";

type Achievement = {
  id: number;
  image: string;
  alt: string;
  contentStart: string;
  contentHighlight: string;
  contentEnd: string;
};

type HeroProps = {
  titlePrimary: string;
  titleSecondary: string;
  subtitle: string;
  achievements: Achievement[];
  statsInfo: StatInfo[];
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
};

const Hero = ({
  titlePrimary,
  titleSecondary,
  subtitle,
  achievements,
  statsInfo,
  imageSrc,
  imageAlt,
  imageCaption,
}: HeroProps) => {
  return (
    <div className="bg-hero">
      <div className="max-w-7xl mx-auto py-16 px-5 lg:px-0">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center justify-between">
          {/* Content Section */}
          <div>
            <h1 className="font-plex-sans-thai text-center lg:text-left font-bold text-4xl md:text-5xl leading-tight">
              <span className="text-primary">{titlePrimary}</span>
              <br />
              <span className="text-secondary">{titleSecondary}</span>
            </h1>
            <h3 className="text-center lg:text-left text-primary text-[26px] md:text-[28px] mt-6 md:mt-0 font-bold">
              {subtitle}
            </h3>

            <div className="py-8 space-y-1">
              {achievements.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start md:items-center gap-1 md:gap-2 font-helvetica"
                >
                  <div className="mt-1 md:mt-0">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={20}
                      height={20}
                    />
                  </div>
                  <p>
                    {item.contentStart}{" "}
                    <span className="text-[#252B42] font-bold">
                      {item.contentHighlight}
                    </span>{" "}
                    {item.contentEnd}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center lg:text-left">
              {/* Button With CTA */}
              <ButtonWithCTA />
            </div>
          </div>

          {/* Image Section */}
          <div>
            <Image src={imageSrc} alt={imageAlt} width={640} height={427} />
            <p className="text-textSecondary uppercase text-center text-sm md:text-base font-medium">
              {imageCaption}
            </p>
          </div>
        </div>

        <div className="pt-12">
          <Stats statsInfo={statsInfo} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
