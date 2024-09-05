import Image from "next/image";
import React from "react";
import Button from "../Button";
import Link from "next/link";

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
  resourceUrl: string;
};

const Mistakes = ({
  regularTitle,
  coloredPartTitle,
  icon,
  imageSrc,
  alt,
  mistakes,
  resourceUrl,
}: Props) => {
  return (
    <div className="my-20 px-5 md:px-20 max-w-6xl mx-auto md:gap-x-20 flex flex-col-reverse md:flex-row justify-center">
      <div className="w-full md:w-1/2">
        <div>
          <h1 className="font-bold text-primary text-4xl">
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
            <Link href={resourceUrl} target="_blank">
              <Button
                text="Download"
                className="w-full md:w-[348px] bg-secondary text-white font-bold px-5 py-4"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <Image src={imageSrc} alt="Buyer Guide" width={535} height={326} />
      </div>
    </div>
  );
};

export default Mistakes;
