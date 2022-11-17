import React from "react";
import styled, { useTheme } from "styled-components";
import logo from "../../images/Logo.svg";
import GithubDark from "../../images/GithubDark.png";
import GithubLight from "../../images/GithubLight.png";
import { lightTheme } from "../../styles/globalStyles";

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.highlight};
  width: 100vw;
  height: 4.5em;
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
  height: 4.5em;
  margin: 0;
`;

const StyledNavItem = styled.li`
  float: right;
  list-style-type: none;
  margin: 0 0.5em;
  justify-content: center;
  width: 6em;
  margin-top: 1.5em;
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
  height: 2.5em;
  width: auto;
  margin: 1em;
  transition: height 0.2s;
  &:hover {
    height: 2.8em;
    width: auto;
  }
`;

const StyledGithub = styled(StyledLogo)`
  margin-top: -0.75em;
`;

const Navbar = () => {
  const theme = useTheme();
  return (
    <NavbarWrapper>
      <a href="/#hero">
        <StyledLogo src={logo} alt="My Logo" />
      </a>
      <StyledNav>
        <StyledNavItem>
          <a
            href="https://github.com/Jdvdb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledGithub
              src={theme === lightTheme ? GithubLight : GithubDark}
              alt="Github Link"
            />
          </a>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="/#contact">Contact</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="/#projects">Projects</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="/#experience">Experience</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="/#about">About</StyledNavLink>
        </StyledNavItem>
      </StyledNav>
    </NavbarWrapper>
  );
};

export default Navbar;
