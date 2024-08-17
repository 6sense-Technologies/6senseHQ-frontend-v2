"use client";
import Image from "next/image";
import React from "react";

const Companies = () => {
  const orgs = [
    { id: 1, image: "/images/logo1.webp", alt: "Logo" },
    { id: 2, image: "/images/logo2.webp", alt: "Logo" },
    { id: 3, image: "/images/logo3.webp", alt: "Logo" },
    { id: 4, image: "/images/logo4.webp", alt: "Logo" },
    { id: 5, image: "/images/logo5.webp", alt: "Logo" },
  ];
  return (
    <div className="mt-12 px-5">
      <h2 className="uppercase text-center text-primary font-bold text-2xl pb-2">
        Trusted by 50+ Companies Worldwide
      </h2>
      <p className="text-center text-textSecondary text-base">
        Experience and Expertise You Can Count On. Our team has a proven track
        record of delivering top-quality solutions for businesses across a
        variety of industries.
      </p>
      <div className="mt-10 flex gap-5 md:gap-10 flex-wrap justify-center items-center">
        {orgs.map((org) => (
          <img src={org.image} />
        ))}
      </div>
    </div>
  );
};

export default Companies;
