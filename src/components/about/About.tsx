import React from "react";
import styled from "styled-components";
import AboutCopy from "./AboutCopy";

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  height: 100vh;
  width: 60vw;
  margin: 0 auto;
`;

const StyledAboutHeader = styled.h1`
  font-size: 4em;
  color: ${(props) => props.theme.text};
  display: inline;
`;

const About = () => {
  return (
    <StyledAbout>
      <StyledAboutHeader>Who Are You Reading About?</StyledAboutHeader>
      <AboutCopy />
    </StyledAbout>
  );
};

export default About;
