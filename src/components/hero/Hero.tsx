import React from "react";
import styled from "styled-components";
import Intro from "./Intro";
import HeroImage from "./HeroImage";

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Hero = () => {
  return (
    <StyledHero>
      <Intro />
      <HeroImage />
    </StyledHero>
  );
};

export default Hero;
