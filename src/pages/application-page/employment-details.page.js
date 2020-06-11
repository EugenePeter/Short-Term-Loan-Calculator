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
// import { JobType } from "../../components/Form/job-type/radioBtnContainer";

import { RadioContainer } from "../../components/Form/tabs-component/RadioInputBlock.styles";

function EmploymentDetails() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const companyName = appState.employmentDetails.companyName;
  const jobTitle = appState.employmentDetails.jobTitle;
  const jobType = appState.employmentDetails.jobType;
  const salary = appState.employmentDetails.salary;
  const employerContactNumber =
    appState.employmentDetails.employerContactNumber;
  const employmentDate = appState.employmentDetails.employmentDate;
  const paySchedule = appState.employmentDetails.paySchedule;

  const [dispatchType, setDispatchType] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: "nxtStep" });
  };

  const handleBack = (e) => {
    e.preventDefault();
    appDispatch({ type: "back" });
  };

  const handleRadioInput = (e) => {
    // setDispatchType(e.target.value)}
    alert(e.target.label);
  };

  return (
    <Container>
      <ContainerNarrower>
        <FormContainer onSubmit={handleSubmit}>
          <ButtonWrapper>
            <BackBtn onClick={handleBack} /> Back
          </ButtonWrapper>
          <TitleContainer>
            <h2>Employment Details</h2> {""}
            <small>Tell us about your work history</small>
          </TitleContainer>
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
            <FormInputSpan value={companyName}>Company Name</FormInputSpan>
          </GroupContainer>

          <GroupContainer>
            <FormInputContainer
              onChange={(e) =>
                appDispatch({
                  type: "employerContactNumber",
                  value: e.target.value,
                })
              }
              name="employerContactNumber"
              type="number"
              value={employerContactNumber}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              label="mobile number: 123-456-7890"
            />
            <FormInputSpan value={employerContactNumber}>
              Contact Number: 123-456-7890
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
            <FormInputSpan value={jobTitle}>Job Title</FormInputSpan>
          </GroupContainer>

          <GroupContainer>
            <FormInputContainer
              onChange={(e) =>
                appDispatch({ type: "employmentDate", value: e.target.value })
              }
              type="date"
              value={employmentDate}
              label="Company Name"
            />
            <FormInputSpan value={employmentDate}>
              Employment Date
            </FormInputSpan>
          </GroupContainer>

          <RadioContainer
            onClick={(e) =>
              appDispatch({ type: "jobType", value: e.target.value })
            }
          >
            <h5>Employment Type</h5>
            <RadioBlockComponent
              label="Full Time"
              value="Full Time"
              name="jobType"
            />
            <RadioBlockComponent
              label="Part Time"
              value="Part Time"
              name="jobType"
            />
          </RadioContainer>

          <RadioContainer
            onClick={(e) =>
              appDispatch({ type: "paySchedule", value: e.target.value })
            }
          >
            <h5>Your are paid</h5>
            <RadioBlockComponent
              label="Week"
              value="Week"
              name="paySchedule"
              paySchedule
            />
            <RadioBlockComponent
              label="Fornight"
              value="Fornight"
              name="paySchedule"
            />
            <RadioBlockComponent
              label="Month"
              value="Month"
              name="paySchedule"
            />
          </RadioContainer>

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
              Income per {paySchedule}
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
export default EmploymentDetails;
