import Image from "next/image";
import React from "react";
import Button from "../Button";

type Props = {
  regularTitle: string;
  coloredPartTitle: string;
  icon: string;
  imageSrc: string;
  alt: string;
  mistakes: {
    id: number;
    text: string;
  }[];
};

const Mistakes = ({
  regularTitle,
  coloredPartTitle,
  icon,
  imageSrc,
  alt,
  mistakes,
}: Props) => {
  return (
    <div className="my-20 px-5 lg:px-0 max-w-6xl mx-auto md:gap-x-4 flex flex-col-reverse md:flex-row justify-center">
      <div className="w-full md:w-1/2 flex justify-center">
        <div>
          <h1 className="font-bold text-primary text-4xl max-w-[460px] w-full">
            <span className="text-secondary">{coloredPartTitle}</span>{" "}
            {regularTitle}
          </h1>

          {mistakes.map((guide) => (
            <div key={guide.id} className="space-y-2 mt-4">
              <div className="flex gap-2">
                <img src={icon} alt={alt} className="w-6 h-6" />
                <p>{guide.text}</p>
              </div>
            </div>
          ))}

          <div className="mt-5">
            <Button
              text="Download"
              className="w-full md:w-[348px] bg-secondary text-white font-bold px-5 py-4"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-1/2 justify-center">
        <Image src={imageSrc} alt="Buyer Guide" width={535} height={326} />
      </div>
    </div>
  );
};

export default Mistakes;
