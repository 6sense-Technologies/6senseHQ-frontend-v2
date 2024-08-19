import Image from "next/image";
import Stats from "../Stats";
import ButtonWithCTA from "../ButtonWithCTA";

const Hero = () => {
  const achievements = [
    {
      id: 1,
      image: "/images/tickIcon.png",
      alt: "icon",
      contentStart: "Recognized as Delaware’s",
      contentHighlight: "Top Software Developer",
      contentEnd: "2023",
    },
    {
      id: 2,
      image: "/images/tickIcon.png",
      alt: "icon",
      contentStart: "Honored with Delaware’s",
      contentHighlight: "Top Design Company Award",
      contentEnd: "2023",
    },
    {
      id: 3,
      image: "/images/tickIcon.png",
      alt: "icon",
      contentStart: "Idea to Market in",
      contentHighlight: "Three Months",
      contentEnd: "with Custom Software",
    },
  ];

  return (
    <div className="bg-hero">
      <div className="max-w-7xl mx-auto py-16 px-5 lg:px-0">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center justify-between">
          {/* Content Section */}
          <div>
            <h1 className="text-center lg:text-left font-bold text-5xl leading-tight">
              <span className="text-primary">Expert Custom</span>
              <br />
              <span className="text-secondary">Software Development</span>
            </h1>
            <h3 className="text-center lg:text-left text-primary text-3xl font-bold">
              By An Award Winning Agency
            </h3>

            <div className="py-8 space-y-1">
              {achievements.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={20}
                      height={20}
                    />
                  </div>
                  <p>
                    {item.contentStart}{" "}
                    <span className="text-primary font-bold">
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
            <Image
              src={"/images/6sense.png"}
              alt="6sense Team"
              width={640}
              height={427}
            />
            <p className="text-textSecondary uppercase text-center font-medium">
              6sense engineering DEPT.
            </p>
          </div>
        </div>

        <div className="mx-7 pt-12">
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default Hero;
