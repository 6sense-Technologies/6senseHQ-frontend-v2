import Image from "next/image";
import React from "react";

const Stats = () => {
  const statsInfo = [
    {
      id: 1,
      stat: "100+",
      icon: "/images/icon1.png",
      alt: "Stats Icon",
      text: "Successful software projects",
    },
    {
      id: 2,
      stat: "60+",
      icon: "/images/icon2.png",
      alt: "Stats Icon",
      text: "Happy Clients",
    },
    {
      id: 3,
      stat: "4.9",
      icon: "/images/icon3.png",
      alt: "Stats Icon",
      text: "Client Feedbacks",
    },
  ];
  return (
    <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-10 md:place-content-center px-10 lg:px-0">
      {statsInfo.map((info) => (
        <div
          className="max-w-full lg:max-w-[180px] w-full flex gap-4"
          key={info.id}
        >
          <div className="mt-2">
            <Image
              src={info.icon}
              alt={info.alt}
              width={info.id === 1 ? 44 : 36}
              height={44}
            />
          </div>
          <div>
            <h2 className="font-bold text-primary text-3xl">{info.stat}</h2>
            <p className="font-normal">{info.text}</p>
          </div>
        </div>
      ))}
      <div className="w-full">
        <Image
          alt="Clutch Info"
          src={"/images/icon4.png"}
          width={190}
          height={52}
        />
      </div>
    </div>
  );
};

export default Stats;
