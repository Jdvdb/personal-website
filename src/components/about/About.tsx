import React from "react";
import styled from "styled-components";
import AboutCopy from "./AboutCopy";
import { StyledHeader } from "../general/TextHolding";

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  min-height: 100vh;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-top: 3em;
  }
`;

const About = () => {
  return (
    <StyledAbout id="about">
      <StyledHeader>Who Are You Reading About?</StyledHeader>
      <AboutCopy />
    </StyledAbout>
  );
};

export default About;
