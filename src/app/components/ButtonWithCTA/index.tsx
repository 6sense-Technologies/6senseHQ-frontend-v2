"use client";
import React from "react";
import Button from "../Button";
import { CalendarDots } from "@phosphor-icons/react";

const ButtonWithCTA = () => {
  return (
    <>
      <Button />
      <div className="mt-2 flex gap-2 justify-center lg:justify-normal items-center">
        <div className="flex gap-1 items-center justify-center">
          <CalendarDots size={22} weight="duotone" />
          <span className="text-lg text-primary font-medium">Or,</span>
          <h4 className="text-primary font-bold underline text-lg text-center">
            Schedule a Free Consultation
          </h4>
        </div>
      </div>
    </>
  );
};

export default ButtonWithCTA;
