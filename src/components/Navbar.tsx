import React from "react";
import styled from "styled-components";
import logo from "../images/Logo.svg";

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.highlight};
  width: 100vw;
  height: 70px;
  z-index: 100;
`;

const StyledNav = styled.ul`
  float: right;
  list-style-type: none;
  flex-direction: row;
  padding-left: 0;
  justify-content: flex-end;
  color: ${(props) => props.theme.highlight};
  width: 75%;
`;

const StyledNavItem = styled.li`
  float: right;
  list-style-type: none;
  margin: 0 2.5vw;
  text-align: center;
`;

const StyledNavLink = styled.a`
  display: block;
  list-style-type: none;
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;

const StyledLogo = styled.img`
  height: 60%;
  width: auto;
  margin: 14px;
  margin-left: 20px;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <StyledLogo src={logo} />
      <StyledNav>
        <StyledNavItem>
          <StyledNavLink>contact</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink>projects</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink>experience</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink>about</StyledNavLink>
        </StyledNavItem>
      </StyledNav>
    </NavbarWrapper>
  );
};

export default Navbar;
