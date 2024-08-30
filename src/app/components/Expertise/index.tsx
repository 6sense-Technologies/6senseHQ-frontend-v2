import React, { ReactNode } from "react";
import SectionTitle from "../SectionTitle";
import Link from "next/link";

const Expertise = ({ title }: { title: ReactNode }) => {
  const ourServices = [
    {
      id: 1,
      icon: "/images/verified.webp",
      serviceName: "UI Design",
      src: "/services/ui-design",
    },
    {
      id: 2,
      icon: "/images/verified.webp",
      serviceName: "UX Design & Research",
      src: "/services/ux-design-research",
    },
    {
      id: 3,
      icon: "/images/verified.webp",
      serviceName: "Web Application Development",
      src: "/services/web-application",
    },
    {
      id: 4,
      icon: "/images/verified.webp",
      serviceName: "Mobile Application Development",
      src: "/services/mobile-application",
    },
    {
      id: 5,
      icon: "/images/verified.webp",
      serviceName: "Software Testing as a Service",
      src: "/services/software-testing",
    },
    {
      id: 6,
      icon: "/images/verified.webp",
      serviceName: "Software Project Management as a Service",
      src: "/services/software-project-management",
    },
    {
      id: 7,
      icon: "/images/verified.webp",
      serviceName: "Ecommerce Solution",
      src: "/services/ecommerce",
    },
    {
      id: 8,
      icon: "/images/verified.webp",
      serviceName: "ML & AI",
      src: "/services/ai",
    },
    {
      id: 9,
      icon: "/images/verified.webp",
      serviceName: "Open AI",
      src: "/services/openai",
    },
    {
      id: 10,
      icon: "/images/verified.webp",
      serviceName: "Facebook Meta",
      src: "/services/facebook-meta",
    },
  ];
  return (
    <div className="my-16">
      <div className="px-4 text-center">
        <SectionTitle title={title} />
      </div>

      <div className="px-4 my-10 max-w-7xl mx-auto flex justify-center items-center">
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="grid space-y-2">
            {ourServices.map((service) => (
              <Link href={`${service.src}`}>
                <div key={service.id} className="flex gap-2">
                  <img
                    className="w-[22px] h-[22px]"
                    src={service.icon}
                    alt="Verfified"
                  />
                  <p>{service.serviceName}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid space-y-2">
            {ourServices.map((service) => (
              <Link href={`${service.src}`}>
                <div key={service.id} className="flex gap-2">
                  <img
                    className="w-[22px] h-[22px]"
                    src={service.icon}
                    alt="Verfified"
                  />
                  <p>{service.serviceName}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
