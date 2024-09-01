import React, { ReactNode } from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

const Story = ({ title }: { title: ReactNode }) => {
  return (
    <div className="bg-lightGray py-14">
      <div className="px-4 text-center">
        <SectionTitle title={title} />
      </div>

      <div className="px-4 md:px-0 mt-10 md:mb-32 max-w-5xl mx-auto">
        <div className="relative">
          <div className="flex justify-center">
            <div>
              <Image
                src={"/images/team/story.png"}
                alt="Stories"
                width={868}
                height={546}
              />
            </div>
          </div>

          <div className="md:absolute md:-bottom-20 md:-left-10 max-w-xl bg-white shadow-custom space-y-3 px-8 py-10">
            <h3 className="font-plex-sans-thai text-blackSecondary font-semibold text-2xl">
              In the beginning
            </h3>
            <p className="text-blackSecondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&appos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
