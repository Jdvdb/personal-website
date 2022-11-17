import React, { useContext } from "react";
import styled from "styled-components";
import HalfDiv from "../HalfDiv";
import Toggle from "./Toggle";

const Header = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: 5.2em;
  margin-left: 0.2em;
`;

interface IntroProps {
  handler(arg: string): void;
}
const Intro = ({ handler }: IntroProps) => {
  return (
    <HalfDiv>
      <Header>
        Hello! I'm Jordan
        <br />
        Van Den Bruel
      </Header>
      <Toggle handler={handler} />
    </HalfDiv>
  );
};

export default Intro;
