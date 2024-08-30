import React, { ReactNode } from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

const OurGoal = ({
  title,
  paragraph,
}: {
  title: ReactNode;
  paragraph: string;
}) => {
  const text = (
    <>
      <p className="max-w-3xl mx-auto font-helvetica py-5 text-blackSecondary">
        {paragraph}
      </p>
    </>
  );

  const goalInfo = [
    {
      id: 1,
      title: "Vision",
      icon: "/images/team/vision.svg",
      text: "6sense envisions a future where businesses use AI to transform their strategies, enabling precise targeting and sustainable growth through actionable insights.",
    },
    {
      id: 2,
      title: "Mission",
      icon: "/images/team/mission.svg",
      text: "6sense's mission is to empower businesses with AI-driven insights that accelerate revenue growth by helping them identify and engage the right accounts at the right time.",
    },
    {
      id: 3,
      title: "Goal",
      icon: "/images/team/goal.svg",
      text: "6sense's goal is to innovate continuously, refining their platform to meet evolving customer needs, ensuring they lead in AI-driven marketing technology.",
    },
  ];
  return (
    <div className="mt-12 bg-lightGray py-20">
      <div className="px-4 text-center">
        <SectionTitle title={title} paragraph={text} />
      </div>

      <div className="px-4 md:px-0 my-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className="flex-1 flex-grow">
            <Image
              src={"/images/team/team2.png"}
              alt="Team"
              width={400}
              height={400}
            />
          </div>
          <div className="flex-1 flex-grow">
            {goalInfo.map((goal) => (
              <div className="flex space-y-4 gap-4" key={goal.id}>
                <div>
                  <Image
                    className="mt-4"
                    src={goal.icon}
                    alt="Goal"
                    width={80}
                    height={80}
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-primary font-bold text-2xl">
                    {goal.title}
                  </h3>
                  <p className="text-blackSecondary">{goal.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
