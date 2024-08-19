import React from "react";
import SectionTitle from "../SectionTitle";
import TwoColumnLayout from "./TwoCoumnLayout";

const Features = () => {
  const title = (
    <>
      <h1 className="text-primary text-5xl font-bold">
        Setting
        <span className="text-secondary"> 6sense </span>
        Apart From The Competition
      </h1>
    </>
  );
  const paragraph = (
    <>
      <p className="py-5 text-textSecondary">
        We go above and beyond to ensure your satisfaction and success. Don’t
        just take our word for it – check out our track record and see for
        yourself why <br />
        we stand out from the competition.
      </p>
    </>
  );

  const features = [
    {
      item: [
        {
          title: "Transparency and Communication",
          items: [
            {
              text: "At our company, transparency is a top priority. Our Jira board allows you to easily track the progress of each team member’s work, ensuring open communication and a clear understanding of the development process.",
            },
            {
              text: "We work closely with our partners to create and roll out custom software solutions that drive their business forward. Our team excels at clear and effective communication, ensuring a smooth and successful development process.",
            },
          ],
        },
        {
          title: "On-Time Delivery Guaranteed",
          items: [
            {
              text: "We use Jira to track our releases.",
            },
            {
              text: "Our forecasting accuracy allows us to confidently provide reliable and accurate deadlines for projects, even up to 6 months in advance. You can trust us to deliver on time, every time.",
            },
          ],
        },
      ],
      imageSrc: "/images/Transparency-Communication.webp",
      imageAlt: "Transparency and Communication",
    },
    {
      item: [
        {
          title: "Flexible and Scalable Team Options",
          items: [
            {
              text: "Our team has a strong track record of delivering top-quality software solutions, with over 100+ successful projects under our belt. In the unlikely event that a team member leaves, we have a robust staffing process in place to ensure that there is minimal disruption to your project.",
            },
            {
              text: "Our diverse talent pool allows us to quickly assemble a team with the specific skill sets required to meet your project needs. With our comprehensive range of expertise, we can ensure timely delivery of top-quality solutions.",
            },
          ],
        },
        {
          title: "Affordable Custom Software Solutions",
          items: [
            {
              text: "Flexible pricing based on the skills and resources needed for your project.",
            },
            {
              text: "Our team is flexible and able to adjust to your changing business needs, offering scalable solutions without any long-term commitments.",
            },
          ],
        },
      ],
      imageSrc: "/images/Scalable-Team-Options.webp",
      imageAlt: "Scalable-Team-Options",
    },
    {
      item: [
        {
          title: "Satisfaction Guaranteed",
          items: [
            {
              text: "At 6sense, we follow a Scrum approach to ensure efficient and transparent project management. As a client, you’ll have the opportunity to participate in our daily standup meetings and stay up-to-date on the progress of your project.",
            },
            {
              text: "Transparent and collaborative project management with client input and feedback for a satisfying outcome.",
            },
          ],
        },
        {
          title: "Clear and Efficient Contract Process",
          items: [
            {
              text: "At 6sense, we take great pride in honoring our agreements and delivering top-quality results for our clients. Read our rave reviews on Clutch to see for yourself how we consistently meet and exceed expectations.",
            },
            {
              text: "At 6sense, we understand the importance of confidentiality and are happy to sign non-disclosure agreements (NDA) or non-circumvent non-disclosure agreements (NCNDA) to protect your sensitive information.",
            },
          ],
        },
      ],
      imageSrc: "/images/Satisfaction-Guaranteed.webp",
      imageAlt: "Satisfaction-Guaranteed",
    },
  ];

  return (
    <div className="mt-12 lg:mt-28">
      <div className="px-5 text-center">
        <SectionTitle title={title} paragraph={paragraph} />
      </div>

      {features.map((feature, index) => (
        <div className={`${index === 2 ? "pb-28 gradient" : ""}`}>
          <div className="px-5">
            <TwoColumnLayout
              features={feature.item}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              imageOnLeft={index === 1 ? true : false}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
