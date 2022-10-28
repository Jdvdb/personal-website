import React from "react";
import styled from "styled-components";
import { StyledParagraph, StyledLink } from "../general/TextHolding";
import Sketch from "../../images/Sketch.png";

const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  height: 400px;
  width: 400px;
  @media (max-width: 768px) {
    height: 200px;
    width: 200px;
    margin: auto;
  }
`;

const StyledTextHolder = styled.div`
  width: 40vw;
`;

const FooterContent = () => {
  return (
    <StyledFooterContent>
      <Image src={Sketch} />
      <StyledParagraph width="38vw">
        I’m always looking for new opportunities to be a part of and people to
        meet up with! If you’d like to connect, feel free to find me on any of
        the social medias shown bellow or send me an{" "}
        <StyledLink href="mailto:jdvandenbruel@gmail.com">
          email at jdvandenbruel@gmail.com!
        </StyledLink>
      </StyledParagraph>
    </StyledFooterContent>
  );
};

export default FooterContent;
