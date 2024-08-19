import Accordion from "../Accordion";

const FAQ = () => {
  const accordionItems = [
    {
      title:
        "What sets your software development company apart from competitors?",
      content:
        "Our team has extensive experience in custom software development and a strong track record of successfully delivering projects for businesses of all sizes. We also offer a range of services including web development, managed delivery, dedicated team options, and UX design, allowing us to be a one-stop shop for all of your software development needs.",
    },
    {
      title: "Do you offer any guarantees for the quality of your work?",
      content:
        "Yes, we stand behind the quality of our work and offer a satisfaction guarantee for all of our projects. If you are not completely satisfied with the final product, we will work with you to make any necessary revisions until you are happy with the results.",
    },
    {
      title: "Can you accommodate businesses of any size?",
      content:
        "Yes, we work with businesses of all sizes and have the resources and experience to handle projects of any scope. Whether you are a small startup or a large enterprise, we have the expertise to deliver custom software solutions that meet your specific needs.",
    },
    {
      title:
        "Do you offer ongoing support and maintenance for your software products?",
      content:
        "Yes, we offer ongoing support and maintenance for all of our software products to ensure that they are running smoothly and meeting the needs of your business. We also offer managed delivery services to handle the ongoing maintenance and updates for your software, allowing you to focus on running your business.",
    },
    {
      title: "How do you ensure the security and confidentiality of my data?",
      content:
        "We take the security and confidentiality of our clients’ data very seriously. We use industry-standard security protocols and technologies to ensure the protection of your data, and we are happy to discuss any specific concerns you may have about the security of your information.",
    },
  ];
  return (
    <div className="mt-12 upperGradient">
      <div className="max-w-5xl px-5 lg:px-0 mx-auto py-24">
        <h1 className="text-primary text-5xl font-bold text-center">
          Frequently Asked
          <span className="text-secondary"> Question</span>
        </h1>
        <div className="mt-10">
          <Accordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
