import React from "react";
import styled from "styled-components";
import {
  StyledSubHeader,
  StyledParagraph,
  StyledLink,
} from "../general/TextHolding";
import ViewProject from "./ViewProject";

const StyeldProjectInfo = styled.div<{ floatSide: string }>`
  background-color: ${(props) => props.theme.secondary};
  width: 60vw;
  border-radius: 1.5em;
  padding: 1em 0.5em;
  margin: 2em 0;
  float: ${(props) => props.floatSide};
  text-align: ${(props) => props.floatSide};
  @media (max-width: 768px) {
    margin: 4em auto;
    display: block;
    width: 75vw;
  }
`;

const StyledLanguageLabel = styled.div<{ floatSide: string }>`
  display: inline-block;
  max-width: 20vw;
  padding: 0 1em;
  color: ${(props) => props.theme.text};
  border-radius: 1.5em;
  background-color: ${(props) => props.theme.background};
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
  const projectNames = [
    "GoDiffX",
    "SONiC On Demand",
    "WeNote",
    "Connect Four AI",
  ];
  const projectLanguageOne = ["GO", "GO", "REACT", "C++"];
  const projectLanguageTwo = ["PYTHON", "DOCKER", "TYPESCRIPT", "ARDUINO"];
  const projectMemo = [
    <StyledParagraph width={"58vw"}>
      DiffX is a format for diff files that was proposed by an open source
      company called Beanbag Inc. GoDiffX is a go library I created that would
      write and parse these DiffX files. As part of development, I wrote GoDocs
      and unit tests to ensure the library would work properly. While working on
      this project, I also found a bug in their python implementation which I
      then patched in a fix for.{" "}
      <StyledLink
        href="https://www.youtube.com/watch?v=YZCC9LAqcJg&list=PL-4cOKCxg2Mr7z9kPGVUEQmGJozs7sNkL&index=3"
        target="_blank"
        rel="noopener noreferrer"
      >
        You can find a demo of my code here!
      </StyledLink>
    </StyledParagraph>,
    <StyledParagraph width={"58vw"}>
      SONiC 102.9 is a radio station that plays lots of music I enjoy, and a lot
      of ads I don't. To get around this, I wrote a simple Go script using the
      spotify API and web player for the radio station. I built the script in a
      docker image and then ran that on a raspberry pi in my basement for a few
      weeks to create a playlist that offered an ad free listening experience.
    </StyledParagraph>,
    <StyledParagraph width={"58vw"}>
      As my first year of university came to a close, a pandemic swept the
      nation and left me unsure of what a summer internship would look like.
      Since I thought this would be a temporary situation, I spent my summer in
      the Startup Edmonton Preflight program to learn about creating a Startup.
      I worked with a high school friend on a product called 'WeNote', a note
      sharing system designed for students. While the actual development was a
      basic landing page and a simple prototype, I learned about
      solution-oriented design and how to ask clients what they really want.
    </StyledParagraph>,
    <StyledParagraph width={"58vw"}>
      As a final project for my intro computing science course, I was given an
      open ended assignment to create whatever I wanted with C++, Python, and/or
      Arduino's. I saw this as a great opportunity to apply some of the concepts
      I was learning in an intro to AI course to build a Monte Carlo Tree Search
      algorithm for a connect four agent. Since I used C++, I had to implement
      all the steps for the algorithm within my own version of a connect four
      game. I ended up with an AI that could usually beat me and my friends at
      the game. The game ran in a terminal or on an Arduino with a touch screen.
    </StyledParagraph>,
  ];
  const projectRepos = [
    "https://github.com/beanbaginc/diffx",
    "https://github.com/Jdvdb/SONiC-On-Demand",
    "https://github.com/Jdvdb/weNote",
    "https://github.com/Jdvdb/Connect4MCTS",
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
      {projectMemo[projectNumber]}
      <ViewProject repo={projectRepos[projectNumber]} floatSide={floatSide} />
    </StyeldProjectInfo>
  );
};

export default ProjectInfo;
