import React from "react";
import styled from "styled-components";
import ExperienceButton from "./ExperienceButton";
import ExperienceInfo from "./ExperienceInfo";

const StyledExperienceMenu = styled.div`
  width: 80vw;
`;
const ButtonWrapper = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
`;

const ExperienceMenu = () => {
  const [activeButton, setActiveButton] = React.useState(0);
  const onClickButton = (e: any, buttonId: number) => {
    e.preventDefault();
    setActiveButton(buttonId);
  };
  return (
    <StyledExperienceMenu>
      <ButtonWrapper>
        <ExperienceButton
          activeButton={activeButton}
          buttonId={0}
          buttonText="Metro"
          onClick={(e) => onClickButton(e, 0)}
        />
        <ExperienceButton
          activeButton={activeButton}
          buttonId={1}
          buttonText="UofA"
          onClick={(e) => onClickButton(e, 1)}
        />
        <ExperienceButton
          activeButton={activeButton}
          buttonId={2}
          buttonText="Brightside"
          onClick={(e) => onClickButton(e, 2)}
        />
        <ExperienceButton
          activeButton={activeButton}
          buttonId={3}
          buttonText="Telus"
          onClick={(e) => onClickButton(e, 3)}
        />
      </ButtonWrapper>
      <ExperienceInfo activeButton={activeButton} />
    </StyledExperienceMenu>
  );
};

export default ExperienceMenu;
