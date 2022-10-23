import React from "react";
import styled from "styled-components";
import Intro from "./Intro";
import HeroImage from "./HeroImage";

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
  }
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
