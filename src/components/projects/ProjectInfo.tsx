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
    "Go DiffX",
    "SONiC On Demand",
    "WeNote",
    "Connect Four AI",
  ];
  const projectLanguageOne = ["Go", "Go", "React", "C++"];
  const projectLanguageTwo = ["Python", "Docker", "Typescript", "Arduino"];
  const projectMemo = [
    "Metro Continuing Education is a part of Edmonton Public Schools and looks to provide additional learning opportunities to people of all ages. Following my high school graduation, my first job related to coding was as a summer camp instructor with Metro for elementary kids.",
    "sonic",
    "web",
    "ai",
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
