import Link from "next/link";
import React from "react";
import Button from "../Button";

const Navbar = () => {
  return (
    <div className="bg-white drop-shadow-md h-20 py-5">
      <div className="px-5 lg:px-0 max-w-7xl mx-auto flex justify-between items-center h-full">
        <div>
          <Link href="/">
            <img src="/images/logo.png" alt="6sense Logo" />
          </Link>
        </div>
        <div className="text-blackSecondary text-lg font-medium flex items-center justify-center gap-6">
          <Link className="hover:opacity-60" href={"/case-study"}>
            Case Study
          </Link>
          <Link className="hover:opacity-60" href={"/case-study"}>
            Our Services
          </Link>

          {/* <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Dropdown hover{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownHover"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div> */}

          <Link className="hover:opacity-60" href={"/case-study"}>
            Our Process
          </Link>
          <Button
            text="Schedule a Free Consultation"
            className="w-full lg:w-[300px] bg-secondary text-white font-bold py-4 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
