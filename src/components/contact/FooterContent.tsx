import React from "react";
import styled, { useTheme } from "styled-components";
import { lightTheme } from "../../styles/globalStyles";
import { StyledParagraph, StyledLink } from "../general/TextHolding";
import LightSketch from "../../images/LightSketch.svg";
import DarkSketch from "../../images/DarkSketch.svg";

const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  max-height: 100vh;
  max-width: 40vw;
  @media (max-width: 768px) {
    margin: auto;
    width: 60vw;
    height: auto;
  }
`;

const StyledTextHolder = styled.div`
  width: 40vw;
`;

const FooterContent = () => {
  const theme = useTheme();
  return (
    <StyledFooterContent>
      <Image
        src={theme === lightTheme ? LightSketch : DarkSketch}
        alt="Sketch of me"
      />
      <StyledParagraph width="38vw">
        I’m always looking for new opportunities to join and people to meet up
        with! If you’d like to connect, feel free to find me on any of the
        social medias shown bellow or send me an{" "}
        <StyledLink href="mailto:jdvandenbruel@gmail.com">
          email at jdvandenbruel@gmail.com!
        </StyledLink>
      </StyledParagraph>
    </StyledFooterContent>
  );
};

export default FooterContent;
