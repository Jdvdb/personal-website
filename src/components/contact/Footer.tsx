import React from "react";
import styled from "styled-components";
import { StyledHeader } from "../general/TextHolding";
import FooterContent from "./FooterContent";
import FooterSocials from "./FooterSocials";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  min-height: 100vh;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-top: 3em;
  }
`;

const StyledSubtext = styled.p`
  font-size: 0.75em;
  color: ${(props) => props.theme.text};
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <StyledFooter id="contact">
      <StyledHeader>Thanks For Stopping By!</StyledHeader>
      <FooterContent />
      <FooterSocials />
      <StyledSubtext>Made with Gatsby!</StyledSubtext>
    </StyledFooter>
  );
};

export default Footer;
