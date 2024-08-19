import React from "react";

const Rating = () => {
  const ratings = [
    { id: 1, type: "Scheduling", text: "On Time/ Deadlines", rating: "5.0" },
    { id: 2, type: "Cost", text: "Value/ Within Estimated", rating: "5.0" },
    {
      id: 3,
      type: "Quality",
      text: "Services & Within Estimated",
      rating: "5.0",
    },
    {
      id: 4,
      type: "NPS",
      text: "Willing To Refer",
      rating: "5.0",
    },
  ];
  return (
    <div className="mt-10 px-5 lg:px-0 py-20 max-w-6xl mx-auto bg-slate-50">
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 justify-around">
        <div className="space-y-5">
          <img src="/images/icon4.png" alt="Clutch Rating" />
          <button className="hidden lg:block ml-2 px-4 py-2 border text-sm text-highlight border-highlight rounded-md font-thin">
            Visit Clutch
          </button>
        </div>

        {/* gap-x-3 md:gap-x-20 gap-y-4 */}
        <div className="grid grid-cols-2 ">
          {ratings.map((item, index) => (
            <div
              className={`flex lg:items-center  py-10 gap-4 ${
                index === 0 || index === 1
                  ? "border-b pb-4 md:border-0"
                  : "pt-4"
              } ${
                index === 0 || index === 2
                  ? "border-r pr-4 md:border-0"
                  : "pl-4"
              } border-highlight`}
            >
              <div className="flex items-center justify-center font-bold text-xs p-2 w-8 h-8 border rounded-full border-highlight">
                {item.rating}
              </div>
              <div className="space-y-1">
                <p className="text-sm">{item.type}</p>
                <h4 className="font-medium text-primary">{item.text}</h4>
              </div>
            </div>
          ))}
        </div>

        <button className="lg:hidden ml-2 px-4 py-2 border text-sm text-highlight border-highlight rounded-md font-thin">
          Visit Clutch
        </button>
      </div>
    </div>
  );
};

export default Rating;
