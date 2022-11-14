import React from "react";
import styled from "styled-components";
import logo from "../../images/Logo.svg";
import Toggle from "./Toggle";

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.highlight};
  width: 100vw;
  height: 70px;
  z-index: 100;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNav = styled.ul`
  float: right;
  list-style-type: none;
  flex-direction: row;
  padding-left: 0;
  justify-content: flex-end;
  color: ${(props) => props.theme.highlight};
  width: 75%;
  text-align: center;
`;

const StyledNavItem = styled.li`
  float: right;
  list-style-type: none;
  margin: 0 2.5vw;
  text-align: center;
  justify-content: center;
  width: 10vw;
`;

const StyledNavLink = styled.a`
  display: block;
  list-style-type: none;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  transition: font-size 0.2s;
  &:hover {
    color: ${(props) => props.theme.link};
    font-size: 1.2em;
    @media (max-width: 768px) {
      font-size: 1em;
      color: ${(props) => props.theme.text};
    }
  }
`;

const StyledLogo = styled.img`
  height: 60%;
  width: auto;
  margin: 14px;
  margin-left: 20px;
`;

interface NavbarProps {
  handler(arg: string): void;
}

const Navbar = ({ handler }: NavbarProps) => {
  return (
    <NavbarWrapper>
      <a href="/#hero">
        <StyledLogo src={logo} alt="My Logo" />
      </a>
      <Toggle handler={handler} />
      <StyledNav>
        <StyledNavItem>
          <StyledNavLink href="/#contact">contact</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="/#projects">projects</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="/#experience">experience</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="/#about">about</StyledNavLink>
        </StyledNavItem>
      </StyledNav>
    </NavbarWrapper>
  );
};

export default Navbar;
