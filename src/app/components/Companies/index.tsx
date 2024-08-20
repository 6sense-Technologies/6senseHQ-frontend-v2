"use client";
import Image from "next/image";
import React from "react";

type OrgProps = {
  id: number;
  image: string;
  alt: string;
};

type CompayProps = {
  organizations: OrgProps[];
  title: string;
  subtitle: string;
};

const Companies = ({ organizations, title, subtitle }: CompayProps) => {
  return (
    <div className="mt-12 px-5">
      <h2 className="uppercase text-center text-primary font-bold text-2xl pb-2">
        {title}
      </h2>
      <p className="text-center text-textSecondary text-base">{subtitle}</p>
      <div className="mt-10 flex gap-5 md:gap-10 flex-wrap justify-center items-center">
        {organizations.map((org) => (
          <img key={org.id} src={org.image} alt={org.alt} />
        ))}
      </div>
    </div>
  );
};

export default Companies;
