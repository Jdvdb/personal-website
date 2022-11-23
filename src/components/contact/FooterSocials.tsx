import React from "react";
import styled, {useTheme} from "styled-components";
=import { lightTheme } from "../../styles/globalStyles";
import GithubDark from "../../images/GithubDark.png";
import GithubLight from "../../images/GithubLight.png";
import InstagramDark from "../../images/InstagramDark.png";
import InstagramLight from "../../images/InstagramLight.png";
import LinkedInDark from "../../images/LinkedInDark.png";
import LinkedinLight from "../../images/LinkedInLight.png";
import StravaDark from "../../images/StravaDark.png";
import StravaLight from "../../images/StravaLight.png";
import ChessDark from "../../images/ChessDark.svg";
import ChessLight from "../../images/ChessLight.svg";

const StyledFooterSocials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 3em 0em;
`;

const StyledSocial = styled.img`
  width: 3em;
  height: 3em;
  margin: 3em;
  @media (max-width: 768px) {
    width: 1.5em;
    height: 1.5em;
    margin: 1.5em;
  }
`;

const FooterSocials = () => {
  const theme = useTheme();
  return (
    <StyledFooterSocials>
      <a
        href="https://github.com/Jdvdb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledSocial
          src={theme === lightTheme ? GithubLight : GithubDark}
          alt="Github Logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/jordan-van-den-bruel-324431144/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledSocial
          src={theme === lightTheme ? LinkedinLight : LinkedInDark}
          alt="LinkedIn Logo"
        />
      </a>
      <a
        href="https://www.instagram.com/jordan.vdb_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledSocial
          src={theme === lightTheme ? InstagramLight : InstagramDark}
          alt="Instagram Logo"
        />
      </a>
      <a
        href="https://www.chess.com/member/surfinjordy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledSocial
          src={theme === lightTheme ? ChessLight : ChessDark}
          alt="Strava Logo"
        />
      </a>
      <a
        href="https://www.strava.com/athletes/39724994"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledSocial
          src={theme === lightTheme ? StravaLight : StravaDark}
          alt="Strava Logo"
        />
      </a>
    </StyledFooterSocials>
  );
};

export default FooterSocials;
