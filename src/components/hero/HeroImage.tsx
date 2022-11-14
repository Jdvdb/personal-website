import { prependOnceListener } from "process";
import React from "react";
import styled from "styled-components";
import Headshot from "../../images/HeadshotTall.png";
import HalfDiv from "../HalfDiv";

const ImageWrapper = styled.div`
  position: relative;
  height: 30em;
  width: 35vw;
  min-height: 27em;
  display: flex;
  justify-content: left;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  height: auto;
  width: 20em;
  position: absolute;
`;

interface FloatingHighlightsProps {
  topVal: string;
  leftVal: string;
}

const FloatingHighlights = styled.div<FloatingHighlightsProps>`
  position: absolute;
  top: ${(props) => props.topVal};
  left: 16em;
  width: 15em;
  height: 4em;
  background-color: ${(props) => props.theme.highlight};
  z-index: 10;
  display: flex;
  align-items: center;
  border-radius: 1em;
  box-shadow: 2px 4px 10px ${(props) => props.theme.highlight};
  @media (max-width: 1200px) {
    transform: translate(-7.5em, 0%);
    top: 30em;
    left: ${(props) => props.leftVal};
  }
`;

const HighlightNumber = styled.p`
  font-size: 3em;
  color: ${(props) => props.theme.text};
  margin: 0;
  margin-left: 0.5em;
  display: inline;
`;

const HighlightValue = styled.p`
  font-size: 1.5em;
  color: ${(props) => props.theme.text};
  margin: 0;
  margin-left: 0.5em;
  display: inline;
`;

const HeroImage = () => {
  return (
    <HalfDiv>
      <ImageWrapper>
        <FloatingHighlights topVal={"4em"} leftVal={"-45vw"}>
          <HighlightNumber>6+</HighlightNumber>
          <HighlightValue>
            Years
            <br />
            Developing
          </HighlightValue>
        </FloatingHighlights>
        <FloatingHighlights topVal={"11em"} leftVal={"-10vw"}>
          <HighlightNumber>14</HighlightNumber>
          <HighlightValue>
            Languages
            <br />
            Learned
          </HighlightValue>
        </FloatingHighlights>
        <FloatingHighlights topVal={"18em"} leftVal={"25vw"}>
          <HighlightNumber>23</HighlightNumber>
          <HighlightValue>
            Project Ideas
            <br />
            Backlogged
          </HighlightValue>
        </FloatingHighlights>
        <Image src={Headshot} alt="My Headshot" />
      </ImageWrapper>
    </HalfDiv>
  );
};

export default HeroImage;
