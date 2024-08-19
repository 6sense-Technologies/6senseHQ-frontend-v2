import React from "react";

const Button = ({ text, className }: { text: string; className?: string }) => {
  return <button className={`${className}`}>{text}</button>;
};

export default Button;
