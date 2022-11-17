import React from "react";
import styled from "styled-components";
import {
  StyledSubHeader,
  StyledContentWrapper,
  StyledParagraph,
} from "../general/TextHolding";

const StyeldExperienceInfo = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.secondary};
  top: -3em;
  max-width: 80vw;
  padding: 0.5em;
  border-radius: 1.5em;
`;

interface ExperienceInfoProps {
  activeButton: number;
}

const ExperienceInfo = ({ activeButton }: ExperienceInfoProps) => {
  const headers = ["Telus", "Brightside", "University of Alberta", "Metro"];
  const subheaders = [
    "January 2022 - December 2022",
    "May 2021 - August 2021",
    "September 2020 - Present",
    "July 2019 - August 2019",
  ];
  const copyArrayOne = [
    "Over the course of 12 months, I primarily worked on two projects under the Reliability and Data Analytics team. The first project saw me take ownership of some NiFi data flows and bash scripts designed to load data into a SQL oracle database.",
    "Brightside was a canadian fintech powered by ATB Financial that hoped to capitalize on a new digital banking market. While the app may no longer be around, it had an exciting journey where it reached number one on the App Store in Alberta over the course of my internship.",
    "CMPUT 274 and 275 are advanced introduction courses for computing science offered to first year honours CS students and second year engineering students. The courses use Python and C++ to cover many basics of object oriented programming along with other miscellaneous topics like pointers, data types, and algorithms. After finishing both of these courses near the top of the class, I was brought on to be a teaching assistant the following semester.",
    "Metro Continuing Education is a part of Edmonton Public Schools and looks to provide additional learning opportunities to people of all ages. Following my high school graduation, my first job related to coding was as a summer camp instructor with Metro for elementary kids.",
  ];
  const copyArrayTwo = [
    "The second centered around Google's Cloud Platform and setting up BigQuery and Looker. 95% of my time was spent on the first project where I multithreaded and modified bash scripts, redesigned our database schema, and onboarded new team members to the project.",
    "As an intern, I got to try developing in almost all parts of the app. I worked on frontend screen updates, backend referral code logic, and unit/UI automation testing. The app was written in React so I got plenty of experience using javascript. I also gained experience with agile environments and reviewing pull requests.",
    "My primary role has been providing office hours where I help students debug their coding assignments and explain concepts they may not have initially grasped from class. This has improved my debugging abilities and helped grow my communication skills, specifically with explaining programming concepts effectively to people with varying understandings of computing concepts.",
    "I taught 2 different programs; one was about creating basic games with javascript and another was using lua to create things in Roblox. This opportunity was a great way to get my foot in the door as a developer and introduce the world of computing science to possible future developers!",
  ];
  return (
    <StyeldExperienceInfo>
      <StyledSubHeader>{headers[activeButton]}</StyledSubHeader>
      <br />
      <StyledSubHeader>{subheaders[activeButton]}</StyledSubHeader>
      <StyledContentWrapper>
        <StyledParagraph width="38vw">
          {copyArrayOne[activeButton]}
        </StyledParagraph>
        <StyledParagraph width="38vw">
          {copyArrayTwo[activeButton]}
        </StyledParagraph>
      </StyledContentWrapper>
    </StyeldExperienceInfo>
  );
};

export default ExperienceInfo;
