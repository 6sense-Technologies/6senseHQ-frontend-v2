"use client";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

type Props = {
  regularTitle: string;
  coloredPartTitle: string;
  icon: string;
  imageSrc: string;
  alt: string;
  guides: {
    id: number;
    text: string;
  }[];
  resourceUrl: string;
};

const BuyerGuide = ({
  regularTitle,
  coloredPartTitle,
  icon,
  imageSrc,
  alt,
  guides,
  resourceUrl,
}: Props) => {
  return (
    <div className="bg-white mt-10 px-5 md:px-20 md:shadow-custom md:py-16 max-w-6xl md:gap-x-20 mx-auto flex flex-col md:flex-row justify-center">
      <div className="w-full">
        <Image src={imageSrc} alt="Buyer Guide" width={535} height={326} />
      </div>
      <div className="">
        <div>
          <h1 className="font-bold text-primary text-4xl">
            <span className="text-secondary">{coloredPartTitle}</span>{" "}
            {regularTitle}
          </h1>

          <div className="max-w-[350px] w-full">
            {guides.map((guide) => (
              <div key={guide.id} className="space-y-2 mt-4">
                <div className="flex gap-2">
                  <img src={icon} alt={alt} className="w-6 h-6" />
                  <p>{guide.text}</p>
                </div>
              </div>
            ))}
          </div>

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
    </div>
  );
};

export default BuyerGuide;
