import React from "react";
import styled from "styled-components";
import Headshot from "../../images/Headshot.png";
import HalfDiv from "../HalfDiv";

const Image = styled.img`
  width: 25%;
  height: auto;
`;

const HeroImage = () => {
  return (
    <HalfDiv>
      <Image src={Headshot} />
    </HalfDiv>
  );
};

export default HeroImage;
