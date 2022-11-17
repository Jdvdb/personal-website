import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { lightTheme } from "../../styles/globalStyles";
import GithubDark from "../../images/GithubDark.png";
import GithubLight from "../../images/GithubLight.png";
import InstagramDark from "../../images/InstagramDark.png";
import InstagramLight from "../../images/InstagramLight.png";
import LinkedInDark from "../../images/LinkedInDark.png";
import LinkedinLight from "../../images/LinkedInLight.png";
import StravaDark from "../../images/StravaDark.png";
import StravaLight from "../../images/StravaLight.png";

const StyledFooterSocials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 10em;
  margin: 0 auto;
`;

const StyledSocial = styled.img`
  width: 3em;
  height: 3em;
  margin: 2em;
  @media (max-width: 768px) {
    width: 2em;
    height: 2em;
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
