"use client";
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-footerBg">
      <footer className="max-w-7xl mx-auto py-20 px-5 lg:px-0">
        <div className="flex flex-col md:flex-row justify-evenly space-y-4">
          <div className="space-y-2 flex flex-col items-center md:items-start">
            <img src="/images/6senseLogo.svg" alt="6sense Logo" />
            <p className="text-primary text-sm font-thin text-center md:text-left">
              Copyright 2023 ©6sense Technologies All rights reserved.
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-32">
            <div className="text-sm text-primary font-thin flex flex-col items-center md:items-start space-y-4">
              <Link href={"/"}>Terms & Condition</Link>
              <Link href={"/"}>Privacy Policy</Link>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FacebookLogo weight="fill" size={36} color="#17494D" />
              <LinkedinLogo weight="fill" size={32} color="#17494D" />
              <TwitterLogo weight="fill" size={32} color="#17494D" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
