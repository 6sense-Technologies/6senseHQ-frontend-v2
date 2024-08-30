import React from "react";
import Hero from "../components/Hero";
import { partnersAchievements } from "@/data/propsData";

const Partners = () => {
  return (
    <>
      <div>
        <Hero
          titlePrimary="Partner with"
          titleSecondary="6sense Technologies"
          breakBetweenTitle={true}
          subtitle="Your Gateway to Top Talent and Expertise"
          achievements={partnersAchievements}
          imageSrc="/images/6sense.png"
          imageWidth={640}
          imageHeight={427}
          imageAlt="6sense Team"
          justify="between"
          pageName="partners"
        />
      </div>
    </>
  );
};

export default Partners;
