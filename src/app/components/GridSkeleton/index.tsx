import React from "react";

const GridSkeleton = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 px-10 md:px-0">
        <div className="">
          <div className="md:mt-12 w-full grid sm:grid-cols-3 gap-10 md:gap-52">
            <div className="space-y-2">
              <div className="w-full md:w-[350px]  bg-[#E5E5E7] rounded-md text-white h-[200px] animate-pulse"></div>
              <div className="space-y-2">
                <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
                <div className="w-[250px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full md:w-[350px]  bg-[#E5E5E7] rounded-md text-white h-[200px] animate-pulse"></div>
              <div className="space-y-2">
                <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
                <div className="w-[250px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full md:w-[350px]  bg-[#E5E5E7] rounded-md text-white h-[200px] animate-pulse"></div>
              <div className="space-y-2">
                <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
                <div className="w-[250px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="md:mt-12 w-full grid sm:grid-cols-3 gap-10 md:gap-52">
            <div className="space-y-2">
              <div className="w-full md:w-[350px]  bg-[#E5E5E7] rounded-md text-white h-[200px] animate-pulse"></div>
              <div className="space-y-2">
                <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
                <div className="w-[250px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full md:w-[350px]  bg-[#E5E5E7] rounded-md text-white h-[200px] animate-pulse"></div>
              <div className="space-y-2">
                <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
                <div className="w-[250px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full md:w-[350px]  bg-[#E5E5E7] rounded-md text-white h-[200px] animate-pulse"></div>
              <div className="space-y-2">
                <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
                <div className="w-[250px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSkeleton;
