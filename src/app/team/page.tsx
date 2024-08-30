import React from "react";
import Hero from "../components/Hero";
import { achievements, partnersAchievements } from "@/data/propsData";
import OurStory from "../components/OurStory";
import OurGoal from "../components/OurGoal";
import Story from "../components/Story";
import StoriesInformation from "../components/StoriesInformation";
import LeaderShip from "../components/LeaderShip";
import JoinTeam from "../components/JoinTeam";

const Team = () => {
  return (
    <>
      <div>
        <Hero
          titlePrimary="About"
          titleSecondary=" Us"
          achievements={achievements}
          imageSrc="/images/team/team.png"
          imageWidth={640}
          imageHeight={427}
          imageAlt="6sense Team"
          justify="between"
          pageName="team"
        />
      </div>

      <div>
        <OurStory
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold px-[17px]"
            >
              Our Story
              <span className="text-secondary"> In Numbers</span>
            </h1>
          }
          paragraph="We've always valued data's ability to tell a story, so here's ours."
        />
      </div>

      <div>
        <OurGoal
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold px-[17px]"
            >
              Our
              <span className="text-secondary"> Goal</span>
            </h1>
          }
          paragraph="We've always valued data's ability to tell a story, so here's ours."
        />
      </div>

      <div>
        <Story
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold px-[17px]"
            >
              Our
              <span className="text-secondary"> Stories</span>
            </h1>
          }
        />
      </div>

      <div>
        <StoriesInformation />
      </div>

      <div>
        <LeaderShip
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold px-[17px]"
            >
              Our
              <span className="text-secondary"> Leadership </span>
              Speech
            </h1>
          }
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
        />
      </div>

      <div>
        <JoinTeam />
      </div>
    </>
  );
};

export default Team;
