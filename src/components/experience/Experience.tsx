import React from "react";
import styled from "styled-components";
import ExperienceMenu from "./ExperienceMenu";
import { StyledHeader } from "../general/TextHolding";

const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  min-height: 100vh;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-top: 5em;
  }
`;

const Experience = () => {
  return (
    <StyledExperience id="experience">
      <StyledHeader>Experience</StyledHeader>
      <ExperienceMenu />
    </StyledExperience>
  );
};

export default Experience;
