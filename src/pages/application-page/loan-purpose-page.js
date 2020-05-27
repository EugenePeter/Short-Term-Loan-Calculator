import React, { useContext, useState, useEffect } from "react";
import { useImmerReducer, useImmer } from "use-immer";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";

import {
  Container,
  ContainerNarrower,
  TitleContainer,
  ContainerRow,
} from "../../global-styles/global.styles";

import {
  FormContainer,
  FormInputContainer,
  ButtonWrapper,
  FormInputSpan,
  GroupContainer,
} from "../../components/Form/form-input/form-input.styles";

import {
  RadioContainer,
  IconContainer,
  IconRow,
  RadioInput,
  IconsWrapper,
} from "../../components/Form/radio-button/radio-button-styles";

import Education from "../../assets/icons/education-cashified";
import { ReactComponent as Emergency } from "../../assets/icons/emergency.svg";
import { ReactComponent as HomeImprovements } from "../../assets/icons/home-improvements-cashified.svg";
import { ReactComponent as Leisure } from "../../assets/icons/leisure-cashified.svg";
import { ReactComponent as LifeEvents } from "../../assets/icons/life-events-cashified.svg";
import { ReactComponent as Purchases } from "../../assets/icons/purchases-cashified.svg";
import { ReactComponent as Travel } from "../../assets/icons/travel-cashified.svg";
import { ReactComponent as Utilities } from "../../assets/icons/utilities-and-bills-cashified.svg";
import { ReactComponent as VehicleRepairs } from "../../assets/icons/vehicle-repairs.svg";

function LoanPurpose() {
  const [state, setState] = useImmer({
    icons: {
      url: [
        "../../assets/icons/education-cashified.svg",
        "../../assets/icons/emergencies-cashified.svg",
        "../../assets/icons/home-improvements-cashified.svg",
        "../../assets/icons/leisure-cashified.svg",
        "../../assets/icons/life-events-cashified.svg",
        "../../assets/icons/purchases-cashified.svg",
        "../../assets/icons/travel-cashified.svg",
        "../../assets/icons/utilities-and-bills-cashified.svg",
        "../../assets/icons/vehicle-expenses-cashified.svg",
        ,
      ],
    },
  });

  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: "nxtStep" });

    console.log(appState);
  };

  const handleBack = (e) => {
    e.preventDefault();
    appDispatch({ type: "back" });
  };

  return (
    <Container>
      <ContainerNarrower>
        <FormContainer onSubmit={handleSubmit}>
          <ButtonWrapper onClick={handleBack}>
            <BackBtn /> Back
          </ButtonWrapper>
          <TitleContainer>
            <h3>What is the purpose of your loan?</h3>
            <small>Please pick one below</small>
            <h2>{appState.loanPurpose}</h2> {""}
          </TitleContainer>

          <IconsWrapper>
            <IconRow>
              <IconContainer>
                <RadioInput
                  onClick={(e) => {
                    appDispatch({
                      type: "loanPurpose",
                      value: e.target.value,
                    });
                  }}
                  type="radio"
                  value="emergencies"
                />
                <Emergency />
              </IconContainer>
              <IconContainer>
                <RadioInput
                  onClick={(e) =>
                    appDispatch({
                      type: "loanPurpose",
                      value: e.target.value,
                    })
                  }
                  type="radio"
                  value="education"
                />
                <Education />
              </IconContainer>
              <IconContainer>
                <RadioInput
                  onClick={(e) =>
                    appDispatch({
                      type: "loanPurpose",
                      value: e.target.value,
                    })
                  }
                  type="radio"
                  value="home-improvements"
                />
                <HomeImprovements />
              </IconContainer>
            </IconRow>
            <IconRow>
              <IconContainer>
                <RadioInput
                  onClick={(e) =>
                    appDispatch({
                      type: "loanPurpose",
                      value: e.target.value,
                    })
                  }
                  type="radio"
                  value="leisure"
                />
                <Leisure />
              </IconContainer>
              <IconContainer>
                <RadioInput
                  onClick={(e) =>
                    appDispatch({
                      type: "loanPurpose",
                      value: e.target.value,
                    })
                  }
                  type="radio"
                  value="life-events"
                />
                <LifeEvents />
              </IconContainer>
              <IconContainer>
                <RadioInput
                  onClick={(e) =>
                    appDispatch({
                      type: "loanPurpose",
                      value: e.target.value,
                    })
                  }
                  type="radio"
                  value="purchases"
                />
                <Purchases />
              </IconContainer>
            </IconRow>

            <IconRow>
              <IconContainer>
                <RadioInput
                  onClick={(e) =>
                    appDispatch({
                      type: "loanPurpose",
                      value: e.target.value,
                    })
                  }
                  type="radio"
                  value="vehicle-repairs"
                />
                <VehicleRepairs />
              </IconContainer>
              <IconContainer>
                <RadioInput
                  onClick={(e) =>
                    appDispatch({
                      type: "loanPurpose",
                      value: e.target.value,
                    })
                  }
                  type="radio"
                  value="travel"
                />
                <Travel />
              </IconContainer>
              <IconContainer>
                <RadioInput
                  onClick={(e) =>
                    appDispatch({
                      type: "loanPurpose",
                      value: e.target.value,
                    })
                  }
                  type="radio"
                  value="utilities"
                />
                <Utilities />
              </IconContainer>
            </IconRow>

            <IconContainer />
          </IconsWrapper>
          <ButtonWrapper>
            <GlobalButton filterApplicants>Save And Continue</GlobalButton>
          </ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}
export default LoanPurpose;
