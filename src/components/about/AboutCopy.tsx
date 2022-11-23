import React from "react";
import { StyledContentWrapper, StyledParagraph } from "../general/TextHolding";

const AboutCopy = () => {
  return (
    <StyledContentWrapper>
      <StyledParagraph width="35vw">
        My identity as a developer is as certain as a dice roll. I was pulled
        into coding because it seemed like a tool with unlimited potential. I’ve
        jumped around app and web development, machine learning, and data
        science to see what computers are capable of. There is so much to learn
        about in all of these fields and I don't know which would be the best
        for me. So, I'm taking my time exploring each of them to decide which I
        will make a career in.
      </StyledParagraph>
      <StyledParagraph width="35vw">
        When I'm not developing, you'll usually see new activities being
        uploaded to my Strava account. My usual activities are running and
        cycling because I love seeing how far I can push myself to get a new
        personal record. However, you'll occasionally see activities for
        volleyball, swimming, snowboarding, and wake surfing! Most of my
        remaining free time is spent learning and playing too many games of
        chess. My favourite openings at the moment are the Vienna and Caro Kann!
      </StyledParagraph>
    </StyledContentWrapper>
  );
};

export default AboutCopy;
