"use client";
import Link from "next/link";
import React from "react";
import Button from "../Button";
import { CaretDown } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <div className="bg-white drop-shadow-md h-20 py-5">
      <div className="px-5 lg:px-0 max-w-7xl mx-auto flex justify-between items-center h-full">
        <div>
          <Link href="/">
            <img src="/images/logo.png" alt="6sense Logo" />
          </Link>
        </div>
        <div className="text-blackSecondary text-lg font-medium flex items-center justify-center gap-6">
          <Link className="hover:opacity-60" href={"/case-study"}>
            Case Study
          </Link>
          <div className="relative">
            <Link
              className="hover:opacity-60 flex items-center justify-center gap-1"
              href={"/case-study"}
            >
              Our Services <CaretDown size={16} weight="bold" />
            </Link>

            <ul className="text-blackSecondary text-lg font-medium absolute bg-white border-t-[3px] border-primary w-[240px]">
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Design
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Development
                </Link>
              </div>
            </ul>
          </div>

          <Link className="hover:opacity-60" href={"/case-study"}>
            Our Process
          </Link>
          <Button
            text="Schedule a Free Consultation"
            className="w-full lg:w-[300px] bg-secondary text-white font-bold py-4 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
