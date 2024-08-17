"use client";
import { CalendarDots } from "@phosphor-icons/react";
import Image from "next/image";
import Button from "../Button";

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
      id: 2,
      image: "/images/tickIcon.png",
      alt: "icon",
      contentStart: "Idea to Market in",
      contentHighlight: "Three Months",
      contentEnd: "with Custom Software",
    },
  ];

  return (
    <div className="bg-hero">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-0 px-7 lg:px-0 lg:flex-row items-center md:justify-between py-20">
        <div>
          <h1 className="text-center md:text-left font-bold text-5xl leading-tight">
            <span className="text-primary">Expert Custom</span>
            <br />
            <span className="text-secondary">Software Development</span>
          </h1>
          <h3 className="text-center md:text-left text-primary text-3xl font-bold">
            By An Award Winning Agency
          </h3>

          <div className="py-8 space-y-1">
            {achievements.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <Image src={item.image} alt={item.alt} width={20} height={20} />
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

          <Button />

          <div className="mt-5 flex gap-2 items-center">
            <CalendarDots size={22} weight="duotone" />
            <span className="text-lg text-primary font-medium">Or,</span>
            <h4 className="text-primary font-bold underline text-lg">
              Schedule a Free Consultation
            </h4>
          </div>
        </div>
        <div>
          <Image
            src={"/images/6sense.png"}
            alt="6sense Team"
            width={640}
            height={427}
          />
          <p className="uppercase text-center font-normal">
            6sense engineering DEPT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
