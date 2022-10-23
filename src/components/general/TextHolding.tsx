import styled from "styled-components";

const StyledHeader = styled.h1`
  font-size: 4em;
  color: ${(props) => props.theme.text};
  display: inline;
`;

const StyledSubHeader = styled.h2`
  font-size: 2em;
  color: ${(props) => props.theme.text};
  display: inline;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 55vw;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledParagraph = styled.p<{ width: string }>`
  font-size: 1.5em;
  color: ${(props) => props.theme.text};
  max-width: ${(props) => props.width};
  @media (max-width: 768px) {
    max-width: 90vw;
  }
`;

export { StyledHeader, StyledSubHeader, StyledParagraph, StyledContentWrapper };
