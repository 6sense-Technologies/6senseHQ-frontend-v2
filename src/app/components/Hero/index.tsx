"use client";
import { CalendarDots } from "@phosphor-icons/react";
import Image from "next/image";

const Hero = () => {
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
            <div className="flex items-center gap-4">
              <Image
                src={"/images/tickIcon.png"}
                alt="Icon"
                width={20}
                height={20}
              />
              <p>
                Recognized as Delaware’s{" "}
                <span className="text-primary font-bold">
                  Top Software Developer
                </span>{" "}
                2023
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={"/images/tickIcon.png"}
                alt="Icon"
                width={20}
                height={20}
              />
              <p>
                Honored with Delaware’s
                <span className="text-primary font-bold">
                  Top Design Company Award
                </span>{" "}
                2023
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={"/images/tickIcon.png"}
                alt="Icon"
                width={20}
                height={20}
              />
              <p>
                Idea to Market in
                <span className="text-primary font-bold">
                  Three Months
                </span>{" "}
                with Custom Software
              </p>
            </div>
          </div>

          <button className="w-full lg:w-2/3 bg-secondary text-white font-bold px-5 py-4">
            Get In Touch
          </button>

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
