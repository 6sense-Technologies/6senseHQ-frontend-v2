"use client";
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-footerBg">
      <footer className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="flex justify-center py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-4 md:gap-x-10 lg:grid-cols-4">
            <div>
              <img src="/images/6senseLogo.svg" alt="6sense Logo" />
              <div className="mb-4 mt-2 space-y-1">
                <p className="text-sm text-primary">
                  2055 Limestone Rd Ste 200C, Wilmington, Delaware 19808, US
                </p>
                <p className="text-sm text-primary">
                  House 15, Block G Rd 3/A, Banasree Dhaka, Bangladesh, 1219, BD
                </p>
              </div>

              <div className="flex items-center gap-1">
                <Image
                  src="/images/facebook.svg"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
                <Image
                  src="/images/linkedin.svg"
                  alt="Linkedin"
                  width={32}
                  height={32}
                />
                <Image
                  src="/images/twitter.svg"
                  alt="Twitter"
                  width={35}
                  height={35}
                />
              </div>
            </div>
            <div className="my-2 font-plex-sans-thai text-sm text-primary font-thin flex flex-col items-start space-y-4">
              <Link href={"/"}>Terms & Condition</Link>
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Privacy Policy</Link>
            </div>
            <div className="my-2 font-plex-sans-thai text-sm text-primary font-thin flex flex-col items-start space-y-4">
              <Link href={"/"}>Terms & Condition</Link>
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Privacy Policy</Link>
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg">Get In Touch</h3>
              <div className="mt-2 space-y-2">
                <p className="text-sm text-primary">
                  <a href="mailto:hello@6sensehq.com">hello@6sensehq.com</a>
                </p>
                <p className="text-sm text-primary">
                  House 15, Block G Rd 3/A, Banasree Dhaka, Bangladesh, 1219, BD
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="pb-4 text-primary text-sm text-center">
          Copyright 2023 © 6sense Technologies All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
