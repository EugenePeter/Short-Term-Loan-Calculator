import React, { useContext } from "react";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { useImmerReducer } from "use-immer";

import {
  Container,
  ContainerNarrower,
  TitleContainer,
  ContainerRow,
} from "../../global-styles/global.styles";

import { GlobalButton } from "../../global-styles/GlobalButton.styles";

import {
  FormContainer,
  FormInputContainer,
  ButtonWrapper,
  FormInputSpan,
  GroupContainer,
} from "../../components/Form/form-input/form-input.styles";

import RadioBlockComponent from "../../components/Form/tabs-component/RadioBlock.component";
import { JobType } from "../../components/Form/job-type/job-type.styles";

function EmploymentDetails() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const companyName = appState.employmentDetails.companyName;
  const jobTitle = appState.employmentDetails.jobTitle;
  const jobType = appState.employmentDetails.jobType;
  const salary = appState.employmentDetails.salary;

  const handleSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: "nxtStep" });
  };

  const handleBack = (e) => {
    e.preventDefault();
    appDispatch({ type: "back" });
  };

  return (
    <Container>
      <ContainerNarrower>
        <TitleContainer>
          <h2>Employment Details</h2> {""}
          <small>Tell us about your work history</small>
        </TitleContainer>
        <FormContainer onSubmit={handleSubmit}>
          <GroupContainer>
            <FormInputContainer
              onChange={(e) =>
                appDispatch({ type: "companyName", value: e.target.value })
              }
              name="CompanyName"
              type="text"
              value={companyName}
              label="Company Name"
            />
            <FormInputSpan value={jobTitle} value={companyName}>
              Company Name
            </FormInputSpan>
          </GroupContainer>
          <GroupContainer>
            <FormInputContainer
              onChange={(e) =>
                appDispatch({ type: "jobTitle", value: e.target.value })
              }
              name="jobTitle"
              type="text"
              value={jobTitle}
              label="Company Name"
            />
            <FormInputSpan value={jobTitle} value={jobTitle}>
              Job Title
            </FormInputSpan>
          </GroupContainer>

          <JobType>
            <h4>Employment Type</h4>
            <RadioBlockComponent
              label="Full Time"
              value="Full Time"
              name="radio"
            />
            <RadioBlockComponent
              label="Part Time"
              value="Part Time"
              name="radio"
            />
          </JobType>

          <GroupContainer>
            <FormInputContainer
              onChange={(e) =>
                appDispatch({ type: "salary", value: e.target.value })
              }
              name="salary"
              type="number"
              value={salary}
              label="Income"
            />
            <FormInputSpan value={salary} value={salary}>
              Income
            </FormInputSpan>
          </GroupContainer>

          <ButtonWrapper>
            <GlobalButton filterApplicants>Save And Continue</GlobalButton>
            <GlobalButton onClick={handleBack}>Back</GlobalButton>
          </ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}
export default EmploymentDetails;
