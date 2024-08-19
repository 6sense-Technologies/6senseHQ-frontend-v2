import React from "react";
import Button from "../Button";
import { CalendarDots } from "@phosphor-icons/react";

const ButtonWithCTA = () => {
  return (
    <>
      <Button />
      <div className="mt-5 flex gap-2 justify-center lg:justify-normal items-center">
        <CalendarDots size={22} weight="duotone" />
        <span className="text-lg text-primary font-medium">Or,</span>
        <h4 className="text-primary font-bold underline text-lg">
          Schedule a Free Consultation
        </h4>
      </div>
    </>
  );
};

export default ButtonWithCTA;
