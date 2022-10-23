import React from "react";
import styled from "styled-components";
import AboutCopy from "./AboutCopy";
import { StyledHeader } from "../general/TextHolding";

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
`;

const About = () => {
  return (
    <StyledAbout>
      <StyledHeader>Who Are You Reading About?</StyledHeader>
      <AboutCopy />
    </StyledAbout>
  );
};

export default About;
