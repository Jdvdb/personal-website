import React, { ChangeEvent } from "react";
import styled, { useTheme } from "styled-components";
import { lightTheme } from "../../styles/globalStyles";

const ToggleWrapper = styled.label`
  display: inline-block;
  width: 3em;
  height: 1em;
  transform: translate(0, -1.5em);
`;

const Switch = styled.div`
  width: 2em;
  height: 1em;
  background: ${(props) => props.theme.background};
  position: relative;
  border-radius: 1em;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 0.75em;
    height: 0.75em;
    border-radius: 0.75em;
    background: ${(props) => props.theme.link};
    transform: translate(0, -50%);
    top: 50%;
    margin: 0 0.25em;
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  width: 2em;
  &:checked + ${Switch} {
    &:before {
      transform: translate(0.75em, -50%);
    }
  }
`;

interface ToggleProps {
  handler(arg: string): void;
}

const Toggle = ({ handler }: ToggleProps) => {
  const theme = useTheme();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handler(e.target.checked ? "light" : "dark");
    const newTheme = e.target.checked ? "light" : "dark";
    const root = window.document.documentElement;
    localStorage.setItem("colour-mode", newTheme);
    root.style.setProperty("--colour-mode", newTheme);
  };
  return (
    <ToggleWrapper>
      <Input
        type="checkbox"
        checked={theme === lightTheme ? true : false}
        onChange={handleChange}
      />
      <Switch />
    </ToggleWrapper>
  );
};

export default Toggle;
