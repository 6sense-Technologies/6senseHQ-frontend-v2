import Accordion from "../Accordion";
import SectionTitle from "../SectionTitle";

const Advantages = () => {
  const accordionItems = [
    {
      title: "Cost Savings By 50%",
      content:
        "By working with our custom software company, our clients can save at least 50% on their software development costs. Our personalized solutions are designed specifically for the needs and goals of each client, ensuring that they get the most value for their investment. We work closely with our clients to understand their unique needs and create software that fits their workflow and processes, helping to streamline operations and improve efficiency.",
    },
    {
      title: "Ability to integrate with existing systems and processes",
      content:
        "We have the ability to seamlessly integrate with our clients’ existing systems and processes. This means that our software can work alongside their current technology and platforms, rather than requiring them to completely overhaul their systems. This not only saves time and resources, but also helps to minimize disruptions to their business operations.",
    },
    {
      title: "Improved data management",
      content:
        "By designing software that fits the specific workflow and processes of the client, we can help streamline data entry and organization, making it easier to access and use. In addition, our custom software can be designed with robust security measures in place to protect sensitive data and prevent unauthorized access.",
    },
  ];

  const title = (
    <>
      <h1 className="text-primary text-5xl font-bold">
        Advantages Of Choosing
        <span className="text-secondary"> 6sense </span>
      </h1>
    </>
  );
  const paragraph = (
    <>
      <p className="py-5 text-textSecondary">
        By utilizing our full off-shore team of experienced software developers,
        responsible American companies are <br /> enjoying an impressive range
        of benefits.
      </p>
    </>
  );
  return (
    <div className="mt-16">
      <div className="px-5 text-center">
        <SectionTitle title={title} paragraph={paragraph} />
      </div>
      <div className="mt-10 px-5 max-w-7xl mx-auto">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-start lg:justify-center">
          <div className="lg:w-1/2">
            <Accordion items={accordionItems} />
          </div>
          <div className="lg:w-1/2">
            <img src="/images/Choosing-6sense.png" alt="Choose 6sense" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
