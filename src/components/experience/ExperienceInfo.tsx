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
  const headers = ["ATB", "Telus", "Brightside", "University of Alberta"];
  const subheaders = [
    "May 2023 - August 2023",
    "January 2022 - December 2022",
    "May 2021 - August 2021",
    "September 2020 - Present",
  ];
  const copyArrayOne = [
    "I returned to ATB Financial as a Client Experience Metrics Data Analyst/Developer. All of the projects I worked on were related to understanding how to improve client experience using data pulled from various sources such as customer surveys, MixPanel, and financial transactions.",
    "Over the course of 12 months, I primarily worked on two projects under the Reliability and Data Analytics team. The first project saw me take ownership of some NiFi data flows and bash scripts designed to load data into a SQL oracle database. The second centered around Google's Cloud Platform and setting up BigQuery and Looker.",
    "Brightside was a Canadian fintech powered by ATB Financial that hoped to capitalize on a new digital banking market. While the app may no longer be around, it had an exciting journey where it reached number one on the App Store in Alberta over the course of my internship.",
    "CMPUT 274 and 275 are advanced introduction courses to CS offered to first year honours computing science students and second year engineering students. The courses use Python and C++ to cover many basics of object oriented programming along with other miscellaneous topics like pointers, data types, and algorithms. After finishing both of these courses near the top of the class, I was brought on to be a teaching assistant the following semester.",
  ];
  const copyArrayTwo = [
    "The main project I worked on was about understanding what steps ATB could take in onboarding new customers to improve their experience. I was responsible for preparing a dataset in Big Query that pulled data from various sources and organized it under one schema to make it easy to query. I also acted as a mentor for other interns doing a capstone project during their internship and helped advise on solutions related to website creation and database design.",
    "95% of my time was spent on the first project where I multithreaded and modified bash scripts, redesigned our database schema, and onboarded new team members to the project. This job has given me a great opportunity to develop responsibility from the amount of ownership I got with the NiFi data flows and data loading scripts.",
    "As an intern, I got to try developing in almost all parts of the app. I worked on frontend screen updates, backend referral code logic, and unit/UI automation testing. The app was written in React so I got plenty of experience using javascript. I also gained experience with agile environments and reviewing pull requests.",
    "My primary role has been providing office hours where I help students debug their coding assignments and explain concepts they may not have initially grasped from class. This has improved my debugging abilities and helped grow my communication skills, specifically with explaining programming concepts effectively to people with varying understandings of computing concepts.",
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
