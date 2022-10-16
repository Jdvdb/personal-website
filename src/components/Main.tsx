import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.background};
`;

const StyledMain = styled.div`
  display: block;
  width: 80vw;
  margin: 0 auto;
  background: ${(props) => props.theme.background};
`;

const Main = ({ children }: any) => {
  return (
    <StyledWrapper>
      <StyledMain>{children}</StyledMain>
    </StyledWrapper>
  );
};

export default Main;
