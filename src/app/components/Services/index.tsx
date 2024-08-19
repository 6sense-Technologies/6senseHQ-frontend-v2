import React from "react";
import SectionTitle from "../SectionTitle";

const Services = () => {
  const ourServices = [
    {
      id: 1,
      name: "Web Development",
      icon: "/images/web.png",
      description:
        "Web development tailored to your business needs. From simple websites to complex platforms, we’ve got you covered.",
    },
    {
      id: 2,
      name: "Custom Software Development",
      icon: "/images/software.png",
      description:
        "Expertly crafted custom software solutions for your unique business needs.",
    },
    {
      id: 3,
      name: "Managed Delivery",
      icon: "/images/delivery.jpg",
      description:
        "Streamline your project with our managed delivery service, including expert project management and regular progress updates.",
    },
    {
      id: 4,
      name: "Dedicated Team",
      icon: "/images/team.png",
      description:
        "Dedicate a team of expert developers to your project for personalized service and efficient delivery.",
    },
    {
      id: 5,
      name: "UI/UX Design",
      icon: "/images/uiux.png",
      description:
        "Dedicate a team of expert developers to your project for personalized service and efficient delivery.",
    },
    {
      id: 6,
      name: "SaaS",
      icon: "/images/saas.png",
      description:
        "Streamline your business operations with our custom software as a service development solutions.",
    },
  ];

  const title = (
    <>
      <h1 className="text-primary text-5xl font-medium">
        Full-Service{" "}
        <span className="text-secondary">Software Development</span>
      </h1>
    </>
  );

  const paragraph = (
    <>
      <p className="py-5 text-textSecondary">
        Expert custom software development for your business needs. From design
        to <br /> deployment, we’ve got you covered.
      </p>
    </>
  );

  return (
    <div className="px-5 mt-12 lg:my-28">
      <div className="text-center">
        <SectionTitle title={title} paragraph={paragraph} />
      </div>

      <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center">
        {ourServices.map((item) => (
          <div
            className="bg-white w-full h-full drop-shadow-2xl px-5 py-8 rounded-md"
            key={item.id}
          >
            <img src={item.icon} alt={item.name} />
            <h3 className="text-primary font-semibold text-xl my-4">
              {item.name}
            </h3>
            <p className="text-justify">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
