import React from "react";
import styled from "styled-components";
import HalfDiv from "../halfdiv";

const Header = styled.h1`
  color: ${(props) => props.theme.text};
`;

const Intro = () => {
  return (
    <HalfDiv>
      <Header>
        Hello! I'm Jordan
        <br />
        Van Den Bruel!
      </Header>
    </HalfDiv>
  );
};

export default Intro;