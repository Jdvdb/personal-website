import React from "react";
import styled from "styled-components";
import { StyledContentWrapper, StyledParagraph } from "../general/TextHolding";

const AboutCopy = () => {
  return (
    <StyledContentWrapper>
      <StyledParagraph width="35vw">
        My identity as a developer is as certain as a dice roll. I was pulled
        into coding because it seemed like a limitless tool that could somehow
        do anything.
        <br />
        <br />
        There is always something new to learn, another project waiting to be
        created, and more bugs looking to be squashed.
      </StyledParagraph>
      <StyledParagraph width="35vw">
        I’ve jumped around app and web development, machine learning, and data
        science to see what computers are capable of. However, I’m still not
        certain of where my career will end up being.
        <br /> <br />
        Until I can figure that out, I am ready to take on whatever challenges
        are thrown my way to keep learning something new!
      </StyledParagraph>
    </StyledContentWrapper>
  );
};

export default AboutCopy;
