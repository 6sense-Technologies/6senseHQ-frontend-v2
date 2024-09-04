import React, { ReactNode } from "react";

const Button = ({
  text,
  className,
  icon,
  position,
}: {
  text: string;
  className?: string;
  icon?: ReactNode;
  position?: string;
}) => {
  return (
    <button className={`flex items-center justify-center gap-2 ${className}`}>
      {position === "before" ? icon : ""}
      {text}
      {position === "after" ? icon : ""}
      {!position && icon}
    </button>
  );
};

export default Button;
