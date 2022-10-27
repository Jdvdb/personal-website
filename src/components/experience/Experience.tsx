import React from "react";
import styled from "styled-components";
import ExperienceMenu from "./ExperienceMenu";
import { StyledHeader } from "../general/TextHolding";

const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
`;

const Experience = () => {
  return (
    <StyledExperience>
      <StyledHeader>Experience</StyledHeader>
      <ExperienceMenu />
    </StyledExperience>
  );
};

export default Experience;