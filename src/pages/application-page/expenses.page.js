import React, { useContext, useState } from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { useImmerReducer, useImmer } from "use-immer";

import {
  Container,
  ContainerNarrower,
  TitleContainer,
  ContainerRow,
} from "../../global-styles/global.styles";

import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";

import {
  FormContainer,
  FormInputContainer,
  ButtonWrapper,
  FormInputSpan,
  GroupContainer,
} from "../../components/Form/form-input/form-input.styles";

import RadioBlockComponent from "../../components/Form/tabs-component/RadioBlock.component";
import { JobType } from "../../components/Form/job-type/radioBtnContainer";
import { RadioContainer } from "../../components/Form/tabs-component/RadioInputBlock.styles";

function Expenses() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const rentOrMortageSchedule = appState.expenses.rentOrMortageSchedule;

  const totalBills = appState.expenses.totalBills;
  const totalLivingExpenseSchedule =
    appState.expenses.totalLivingExpenseSchedule;

  const totalLivingExpenses = appState.expenses.totalLivingExpenses;

  const handleSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: "nxtStep" });
  };

  const handleBack = (e) => {
    e.preventDefault();
    appDispatch({ type: "back" });
  };

  // console.log(rentOrMortageWeek);
  console.log(rentOrMortageSchedule[1]);

  return (
    <Container>
      <ContainerNarrower>
        <FormContainer onSubmit={handleSubmit}>
          <ButtonWrapper>
            <BackBtn onClick={handleBack} /> Back
          </ButtonWrapper>
          <TitleContainer>
            <h2>Expenses</h2> {""}
            <small>How much do you spend?</small>
          </TitleContainer>
          <RadioContainer
            onClick={(e) =>
              appDispatch({
                type: "rentOrMortageSchedule",
                value: e.target.value,
              })
            }
          >
            <h5>Rent or Mortgage</h5>
            <RadioBlockComponent
              label="Week"
              value="Week"
              name="rentOrMortageSchedule"
              clicked
            />
            <RadioBlockComponent
              label="Fornight"
              value="Fornight"
              name="rentOrMortageSchedule"
            />
            <RadioBlockComponent
              label="Month"
              value="Month"
              name="rentOrMortageSchedule"
            />
          </RadioContainer>

          <GroupContainer>
            <FormInputContainer
              onChange={(e) =>
                appDispatch({ type: "totalBills", value: e.target.value })
              }
              name="rentOrMortgage"
              type="number"
              value={totalBills}
              label=" totalBills"
            />
            <FormInputSpan value={totalBills}>
              Payment Amount per {rentOrMortageSchedule}
            </FormInputSpan>
          </GroupContainer>

          <RadioContainer
            onClick={(e) =>
              appDispatch({
                type: "totalLivingExpenseSchedule",
                value: e.target.value,
              })
            }
          >
            <h5>Total Living Expenses</h5>
            <RadioBlockComponent
              label="Week"
              value="Week"
              name="totalLivingExpenseSchedule"
            />
            <RadioBlockComponent
              label="Fornight"
              value="Fornight"
              name="totalLivingExpenseSchedule"
            />
            <RadioBlockComponent
              label="Month"
              value="Month"
              name="totalLivingExpenseSchedule"
            />
          </RadioContainer>

          <GroupContainer>
            <FormInputContainer
              onChange={(e) =>
                appDispatch({
                  type: "totalLivingExpenses",
                  value: e.target.value,
                })
              }
              name="rentOrMortgage"
              type="number"
              value={totalLivingExpenses}
              label="totalLivingExpenseSchedule"
            />
            <FormInputSpan value={totalLivingExpenses}>
              Payment Amount per {totalLivingExpenseSchedule}
            </FormInputSpan>
          </GroupContainer>

          <ButtonWrapper>
            <GlobalButton filterApplicants>Save And Continue</GlobalButton>
          </ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}
export default Expenses;
