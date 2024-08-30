import React, { ReactNode } from "react";

const Button = ({
  text,
  className,
  icon,
}: {
  text: string;
  className?: string;
  icon?: ReactNode;
}) => {
  return (
    <button className={`flex items-center justify-center gap-2 ${className}`}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
