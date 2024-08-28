import React from "react";

const Button = ({
  text,
  className,
  type,
}: {
  text: string;
  className?: string;
  type?: string;
}) => {
  return <button className={`${className}`}>{text}</button>;
};

export default Button;
