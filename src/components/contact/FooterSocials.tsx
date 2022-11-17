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
  width: 48px;
  height: 48px;
  margin: 2em;
  // @media (max-width: 768px) {
  //   width: 24px;
  //   height: 24px;
  // }
`;

const FooterSocials = () => {
  const theme = useTheme();
  return (
    <StyledFooterSocials>
      <a href="https://github.com/Jdvdb">
        <StyledSocial
          src={theme === lightTheme ? GithubLight : GithubDark}
          alt="Github Logo"
        />
      </a>
      <a href="https://www.linkedin.com/in/jordan-van-den-bruel-324431144/">
        <StyledSocial
          src={theme === lightTheme ? LinkedinLight : LinkedInDark}
          alt="LinkedIn Logo"
        />
      </a>
      <a href="https://www.instagram.com/jordan.vdb_/">
        <StyledSocial
          src={theme === lightTheme ? InstagramLight : InstagramDark}
          alt="Instagram Logo"
        />
      </a>
      <a href="https://www.strava.com/athletes/39724994">
        <StyledSocial
          src={theme === lightTheme ? StravaLight : StravaDark}
          alt="Strava Logo"
        />
      </a>
    </StyledFooterSocials>
  );
};

export default FooterSocials;
