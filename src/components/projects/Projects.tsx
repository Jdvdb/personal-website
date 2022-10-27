import React from "react";
import styled from "styled-components";
import { StyledHeader } from "../general/TextHolding";
import ProjectInfo from "./ProjectInfo";

const StyledProjects = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  margin: 0 auto;
`;

const Projects = () => {
  return (
    <StyledProjects>
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
