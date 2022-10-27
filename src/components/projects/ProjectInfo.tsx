import React from "react";
import styled from "styled-components";
import {
  StyledSubHeader,
  StyledContentWrapper,
  StyledParagraph,
  StyledHeader,
} from "../general/TextHolding";

const StyeldProjectInfo = styled.div<{ floatSide: string }>`
  height: 40vh;
  background-color: ${(props) => props.theme.secondary};
  width: 60vw;
  border-radius: 1.5em;
  padding: 1em;
  margin: 2em 0;
  float: ${(props) => props.floatSide};
  text-align: ${(props) => props.floatSide};
  @media (max-width: 768px) {
    margin: 4em auto;
    display: block;
    float: none;
    width: 80vw;
  }
`;

const StyledLanguageLabel = styled.div<{ floatSide: string }>`
  display: inline-block;
  max-width: 20vw;
  padding: 0 1em;
  color: ${(props) => props.theme.text};
  border-radius: 1.5em;
  background-color: ${(props) => props.theme.background};
  border: black 2px solid;
  font-size: 1.5em;
  margin: 0.2em 0;
  ${(props) =>
    props.floatSide === "left" ? "margin-right: 1em;" : "margin-left: 1em;"}
`;

interface ProjectInfoProps {
  projectNumber: number;
}

const ProjectInfo = ({ projectNumber }: ProjectInfoProps) => {
  const floatSide = projectNumber % 2 === 0 ? "left" : "right";
  console.log(projectNumber % 2);
  const projectNames = [
    "GoDiffX",
    "SONiC On Demand",
    "WeNote",
    "Connect Four AI",
  ];
  const projectLanguageOne = ["Go", "Go", "React", "C++"];
  const projectLanguageTwo = ["Python", "Docker", "Typescript", "Arduino"];
  const projectMemo = [
    "DiffX is a format for diff files that was proposed by an open source company called Beanbag Inc. GoDiffX is a go library I created that would write and parse these diffx files. As part of development, I wrote GoDocs and unit tests to ensure the library would work properly. While working on this project, I also found a bug in their python implementation which I then patched in a fix for.",
    "SONiC 102.9 is a radio station that plays lots of music I enjoy, and a lot of ads I don't. To get around this, I wrote a simple Go script using the spotify API and web player for the radio station. I built the script in a docker image and then ran that on a raspberry pi in my basement for a few weeks to create a playlist I could use anytime of all their songs. You can find the spotify playlist at this link.",
    "After my first year of university came to a close, a pandemic swept the nation and left me unsure of what a summer internship would look like. Since I thought this would be a temporary situation, I spent my summer in the Startup Edmonton Preflight program to learn about creating a Startup. I worked with a high school friend on a product called 'WeNote', a note sharing system designed for students. While the actual development was a basic landing page and a simple prototype, I learned about solution-oriented design and how to ask clients what they really want.",
    "As a final project for my intro computing science course, I was given an open ended project to create whatever we wanted with C++, Python, and/or Arduino's. I saw this as a great opportunity to apply some of the concepts I was learning in an intro to AI course and I decided to build a Monte Carlo Tree Search algorithm for a connect four agent. Since I used C++, I had to implement all the steps alongside a connect four agent. I ended up with an AI that could sometimes beat me and my friends at the game that ran in a terminal or on an Arduino with a touch screen.",
  ];
  return (
    <StyeldProjectInfo floatSide={floatSide}>
      <StyledSubHeader>{projectNames[projectNumber]}</StyledSubHeader>
      <br />
      <StyledLanguageLabel floatSide={floatSide}>
        {projectLanguageOne[projectNumber]}
      </StyledLanguageLabel>
      <StyledLanguageLabel floatSide={floatSide}>
        {projectLanguageTwo[projectNumber]}
      </StyledLanguageLabel>
      <StyledParagraph width={"58vw"}>
        {projectMemo[projectNumber]}
      </StyledParagraph>
    </StyeldProjectInfo>
  );
};

export default ProjectInfo;
