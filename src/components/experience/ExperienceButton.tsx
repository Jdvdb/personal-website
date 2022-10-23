import React, { HTMLAttributes } from "react";
import styled from "styled-components";

// needed so components bellow don't start shaking
const ButtonBackdrop = styled.div`
  height: 110px;
  width: 16vw;
`;

const Button = styled.div<{ activeButton: number; buttonId: number }>`
  background-color: ${(props) =>
    props.activeButton === props.buttonId
      ? props.theme.secondary
      : props.theme.highlight};
  height: ${(props) =>
    props.activeButton === props.buttonId ? "7em" : "1.6em"};
  color: ${(props) => props.theme.text};
  display: flex;
  width: 16vw;
  border-radius: 1em;
  outline: none;
  border: none;
  padding-top: 0.4em;
  font-size: 1.5em;
  transition: margin 0.2s ease-in-out;
  justify-content: center;
  &:active {
    outline: none;
    border: none;
  }
  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    margin-top: -1em;
    outline: none;
    border-bottom: 4em solid
      ${(props) =>
        props.activeButton === props.buttonId
          ? props.theme.secondary
          : props.theme.highlight};
  }
`;

interface ButtonProps extends HTMLAttributes<any> {
  activeButton: number;
  buttonId: number;
  buttonText: string;
}

const ExperienceButton = ({
  activeButton,
  buttonId,
  buttonText,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonBackdrop>
      <Button activeButton={activeButton} buttonId={buttonId} onClick={onClick}>
        {buttonText}
      </Button>
    </ButtonBackdrop>
  );
};

export default ExperienceButton;
