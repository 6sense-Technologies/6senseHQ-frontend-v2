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
      <div className="mt-2 flex gap-2 justify-center lg:justify-normal items-center">
        <div className="flex gap-1 items-center justify-center">
          <img src="/images/calenderIcon.png" alt="Calender" />
          <div className="flex gap-2 items-center">
            <span className="text-lg text-primary font-medium">Or,</span>
            <h4 className="text-primary font-bold underline text-lg text-center">
              Schedule a Free Consultation
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonWithCTA;
