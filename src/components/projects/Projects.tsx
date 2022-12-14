import React from "react";
import styled from "styled-components";
import { StyledHeader } from "../general/TextHolding";
import ProjectInfo from "./ProjectInfo";

const StyledProjects = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 5em;
  @media (max-width: 768px) {
    padding-top: 8em;
  }
`;

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <StyledHeader>Projects</StyledHeader>
      <br />
      <ProjectInfo projectNumber={0} />
      <ProjectInfo projectNumber={1} />
      <ProjectInfo projectNumber={2} />
      <ProjectInfo projectNumber={3} />
    </StyledProjects>
  );
};

export default Projects;
