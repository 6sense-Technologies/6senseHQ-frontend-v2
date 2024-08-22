"use client";
import React from "react";
import Button from "../Button";
import { CalendarDots } from "@phosphor-icons/react";

const ButtonWithCTA = () => {
  return (
    <>
      <Button
        text="Get In Touch"
        className="w-full lg:w-[348px] bg-secondary text-white font-bold px-5 py-4"
      />
      <div className="w-full mt-2 flex gap-2 justify-center lg:justify-normal items-center">
        <div className="flex gap-1 items-center justify-center ">
          <img src="/images/calendericon.png" alt="Calender" />
          <div className="flex gap-2 items-center">
            <h4 className="text-primary font-bold text-base md:text-lg text-center">
              <span className="font-normal">Or, </span>{" "}
              <span className="underline">Schedule a Free Consultation</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonWithCTA;
