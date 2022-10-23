import React, { useContext } from "react";
import styled from "styled-components";
import HalfDiv from "../HalfDiv";

const Header = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: 5.2em;
  margin-left: 0.2em;
`;

const Intro = () => {
  return (
    <HalfDiv>
      <Header>
        Hello! I'm Jordan
        <br />
        Van Den Bruel
      </Header>
    </HalfDiv>
  );
};

export default Intro;
