import React from "react";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0 auto;
  background: ${(props) => props.theme.background};
  justify-content: center;
`;

const Main = ({ children }: any) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
