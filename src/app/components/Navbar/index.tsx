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
        <div
          className="font-plex-sans-thai
         text-blackSecondary font-medium text-lg flex items-center justify-center gap-6"
        >
          <Link className="hover:opacity-60" href={"/case-study"}>
            Home
          </Link>

          <div className="group relative">
            <Link
              className="hover:opacity-60 flex items-center justify-center gap-1"
              href={"/case-study"}
            >
              Services <CaretDown size={16} weight="bold" />
            </Link>

            <ul className="transition-all duration-500 ease-in-out transform scale-y-0 origin-top group-hover:scale-y-100 group-hover:opacity-100 opacity-0 text-blackSecondary font-medium absolute bg-white border-t-[3px] border-primary w-[300px] px-2 py-4 space-y-3">
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  UI Design
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  UX Design & Research
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Web Application Development
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Mobile Application Development
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Software Testing as a Service
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Software Project Management as a Service
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Ecommerce Solution
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  ML & AI
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Open AI
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Facebook Meta
                </Link>
              </div>
            </ul>
          </div>
          <div className="group relative">
            <Link
              className="hover:opacity-60 flex items-center justify-center gap-1"
              href={"/case-study"}
            >
              Case Studies <CaretDown size={16} weight="bold" />
            </Link>

            <ul className="transition-all duration-500 ease-in-out transform scale-y-0 origin-top group-hover:scale-y-100 group-hover:opacity-100 opacity-0 text-blackSecondary font-medium absolute bg-white border-t-[3px] border-primary w-[240px] h-[200px] px-2 py-4 space-y-2">
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Charge Onsite
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Pattern50
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Quran Touch
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Impromek
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Itcan
                </Link>
              </div>
            </ul>
          </div>

          <div className="group relative">
            <Link
              className="hover:opacity-60 flex items-center justify-center gap-1"
              href={"/case-study"}
            >
              About Us <CaretDown size={16} weight="bold" />
            </Link>

            <ul className="transition-all duration-500 ease-in-out transform scale-y-0 origin-top group-hover:scale-y-100 group-hover:opacity-100 opacity-0 text-blackSecondary font-medium absolute bg-white border-t-[3px] border-primary w-[240px] px-2 py-4 space-y-2">
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Values
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Team
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Clients
                </Link>
              </div>
              <div className="px-4">
                <Link className="hover:opacity-60" href={"/case-study"}>
                  Partners
                </Link>
              </div>
            </ul>
          </div>

          <Link className="hover:opacity-60" href={"/case-study"}>
            Blog
          </Link>
          <Link className="hover:opacity-60" href={"/case-study"}>
            Contact
          </Link>
          <Button
            text="Schedule a Free Consultation"
            className="w-full lg:w-[300px] bg-secondary text-white font-bold py-4 text-sm"
          />

          <div className="cursor-pointer">
            <img src="/images/menuIcon.svg" alt="Menu Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
