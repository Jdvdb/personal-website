import React from "react";
import styled from "styled-components";
import {
  StyledSubHeader,
  StyledContentWrapper,
  StyledParagraph,
} from "../general/TextHolding";

const StyeldExperienceInfo = styled.div`
  position: relative;
  height: 50vh;
  background-color: ${(props) => props.theme.secondary};
  top: -3em;
  max-width: 80vw;
  padding: 1em;
  border-radius: 1.5em;
`;

interface ExperienceInfoProps {
  activeButton: number;
}

const ExperienceInfo = ({ activeButton }: ExperienceInfoProps) => {
  const headers = ["Metro", "University of Alberta", "Brightside", "Telus"];
  const subheaders = [
    "July 2019 - August 2019",
    "September 2020 - Present",
    "May 2021 - August 2021",
    "January 2022 - December 2022",
  ];
  const copyArrayOne = [
    "Metro Continuing Education is a part of Edmonton Public Schools and looks to provide additional learning opportunities to people of all ages. Following my high school graduation, my first job related to coding was as a summer camp instructor with Metro for elementary kids.",
    "CMPUT 274 and 275 are advanced introduction courses for computing science offered to first year honours CS students and second year engineering students. After finishing both of these near the top of the class, I was brought on to be a teaching assistant the following semester.",
    "Brightside was a canadian fintech powered by ATB Financial that hoped to capitalize on a new market for the company. While the app may no longer be around, it had an exciting journey where it reached number one on the App Store in Alberta over the course of my internship.",
    "Over the course of 12 months, I primarily worked on two projects under the Reliability and Data Analytics team with a number of miscellaneous tasks throughout the year. The first project saw me take ownership of some NiFi data flows and bash scripts designed to load data into an oracle database.",
  ];
  const copyArrayTwo = [
    "I taught 2 different programs; one was about creating basic games with javascript and another was using lua to create things in Roblox. This opportunity improved my communication abilities and was a great way to get my foot in the door as a developer.",
    "My primary role has been providing office hours where I help students debug their coding assignments. This has improved my debugging abilities and helped grow my ability to help others with varying understandings of computing concepts.",
    "As an intern, I got to try developing in almost all parts of the app. I worked on the frontend screen updates, backend referral code logic, and unit/UI automation testing. I also gained experience with agile environments and reviewing pull requests.",
    "The second centered around Google's Cloud Platform and setting up an environment for multiple teams to use. 80% of my time was spent on the first project where I had multithread the loading scripts, redesign the database schema, and onboard new members to the project.",
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
