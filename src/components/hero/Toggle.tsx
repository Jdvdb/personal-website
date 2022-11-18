import React, { ChangeEvent } from "react";
import styled, { useTheme } from "styled-components";
import { lightTheme } from "../../styles/globalStyles";

const ToggleWrapper = styled.label`
  margin-top: 2em;
  width: 12em;
  display: flex;
  height: 3em;
  font-size: 2em;
  color: ${(props) => props.theme.text};
  transform: translate(0, -1.5em);
  // background-color: red;
`;

const Switch = styled.div`
  margin-left: 2em;
  width: 4em;
  height: 2em;
  background: ${(props) => props.theme.text};
  position: relative;
  border-radius: 3em;
  transform: translate(0, -0.25em);

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    border-radius: 1.5em;
    background: ${(props) => props.theme.background};
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
      transform: translate(2em, -50%);
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
    root.style.setProperty(
      "--colour-background",
      e.target.checked ? "#E9E6FF" : "#0A0903"
    );
  };
  return (
    <ToggleWrapper>
      {theme == lightTheme ? "Light Mode" : "Dark Mode"}
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
