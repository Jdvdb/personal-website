import React from "react";
import styled, { useTheme } from "styled-components";
import { StyledParagraph } from "../general/TextHolding";
import { lightTheme } from "../../styles/globalStyles";
import GithubDark from "../../images/GithubDark.png";
import GithubLight from "../../images/GithubLight.png";

const StyledViewProjectDiv = styled.div<{ floatSide: string }>`
  float: ${(props) => props.floatSide};
  background-color: ${(props) => props.theme.highlight};
  border-radius: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 15em;
`;

const StyledIcon = styled.img`
  width: 48px;
  height: 48px;
  margin: auto 0;
`;

const StyledLinkWrapper = styled.a`
  text-decoration: none;
  width: 15em;
  height: 5em;
  float: inherit;
  display: block;
`;

interface ViewProjectProps {
  repo: string;
  floatSide: string;
}

const ViewProject = ({ repo, floatSide }: ViewProjectProps) => {
  const theme = useTheme();
  return (
    <StyledLinkWrapper href={repo} target="_blank" rel="noopener noreferrer">
      <StyledViewProjectDiv floatSide={floatSide}>
        <StyledIcon
          src={theme === lightTheme ? GithubLight : GithubDark}
          alt="Github Icon"
        />
        <StyledParagraph width="6em">View Project</StyledParagraph>
      </StyledViewProjectDiv>
    </StyledLinkWrapper>
  );
};

export default ViewProject;
