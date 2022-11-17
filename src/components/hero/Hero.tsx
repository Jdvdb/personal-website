import React from "react";
import styled from "styled-components";
import Intro from "./Intro";
import HeroImage from "./HeroImage";

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
  }
`;

interface HeroProps {
  handler(arg: string): void;
}

const Hero = ({ handler }: HeroProps) => {
  return (
    <StyledHero id="hero">
      <Intro handler={handler} />
      <HeroImage />
    </StyledHero>
  );
};

export default Hero;
