"use client";
import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState(0); // Default open first tab

  const toggleAccordion = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index); // Close if same index, else open new
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md px-2 border-t border-black"
        >
          <button
            className="font-plex-sans-thai text-left flex justify-between items-center w-full p-4 font-bold text-lg text-blackSecondary transition-shadow duration-300"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            {openIndex !== index && (
              <div>
                <CaretDown
                  color="black"
                  weight="bold"
                  className={`transition-transform duration-300 transform`}
                />
              </div>
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-screen p-4 mb-3" : "max-h-0 p-0"
            }`}
          >
            <div className="font-helvetica text-textSecondary text-justify">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
