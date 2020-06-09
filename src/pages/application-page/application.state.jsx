import React, {
  Component,
  Fragment,
  useState,
  useEffect,
  useContext,
} from "react";

import { withRouter } from "react-router-dom";

import Axios from "axios";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { useImmerReducer } from "use-immer";

import { Container } from "../../global-styles/global.styles";
import CustomButton from "../../components/custom-button/custom-button.component";

import {
  FormContainer,
  ButtonsBarContainer,
  ButtonWrapper,
} from "../../components/Form/form-input/form-input.styles";

import FormInput from "../../components/Form/form-input/form-input.component";

import MainApplication from "./main-application.component";

// dependencies and components for loan related data
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { amount } from "../../components/redux/calculator/loan-amount/loan-amount.selectors";
import { durationOfLoan } from "../../components/redux/calculator/repayment-amount/repayment-amount.selector";
import { schedule } from "../../components/redux/calculator/repayment-amount/repayment-amount.selector";
import { repayment } from "../../components/redux/calculator/repayment-amount/repayment-amount.selector";
import { total } from "../../components/redux/calculator/repayment-amount/repayment-amount.selector";

import LoanIndicator from "./loan-indicator";

function ApplicationState(props) {
  const { amount, durationOfLoan, schedule, repayment, total } = props;

  const initialState = {
    warningModal: false,
    step: 1,
    loanPurpose: "",
    personalDetails: {
      gender: "",
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      birthDay: "date",
      age: "",
      address: {
        suburb: "",
        town: "",
        city: "",
        country: "",
      },
    },
    employmentDetails: {
      companyName: "",
      employerContactNumber: "",
      jobTitle: "",
      employmentDate: "date",
      jobType: "",
      paySchedule: "",
      salary: "",
    },

    expenses: {
      rentOrMortageSchedule: "Week",
      totalBills: "",
      totalLivingExpenseSchedule: "",
      totalLivingExpenses: "",
    },
    nextOfKin: {
      relationship: "",
      firstName: "",
      lastName: "",
      contactNumber: "",
    },
    proofOfIdentity: {
      driversLicense: false,
      passport: false,
    },

    disclosure: {
      disclosureStatement: false,
      cancellationStatement: false,
      privacyWaiver: false,
      creditCheck: false,
      hasClicked: false,
    },
    bankDetails: {
      bankAccountNumber: "bnk - brnch - acnt - sfx",
    },
    loanDetails: {},
    submitting: "",
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "loanPurpose":
        draft.loanPurpose = action.value;
      case "warning":
        draft.warningModal = !draft.warningModal;
        return;
      case "nxtStep":
        draft.step++;
        return;
      case "back":
        draft.step--;
        return;
      case "gender":
        draft.personalDetails.gender = action.value;
        return;
      case "fName":
        draft.personalDetails.firstName = action.value;
        return;
      case "lName":
        draft.personalDetails.lastName = action.value;
        return;
      case "mobileNumber":
        draft.personalDetails.mobileNumber = action.value;
        return;
      case "birthday":
        draft.personalDetails.birthDay = action.value;
        return;
      case "suburb":
        draft.personalDetails.address.suburb = action.value;
        return;
      case "town":
        draft.personalDetails.address.town = action.value;
        return;
      case "city":
        draft.personalDetails.address.city = action.value;
        return;
      case "country":
        draft.personalDetails.address.country = action.value;
        return;
      case "companyName":
        draft.employmentDetails.companyName = action.value;
        return;
      case "jobTitle":
        draft.employmentDetails.jobTitle = action.value;
        return;
      case "jobType":
        draft.employmentDetails.jobType = action.value;
        return;
      case "salary":
        draft.employmentDetails.salary = action.value;
        return;
      case "employerContactNumber":
        draft.employmentDetails.employerContactNumber = action.value;
        return;
      case "employmentDate":
        draft.employmentDetails.employmentDate = action.value;
        return;
      case "paySchedule":
        draft.employmentDetails.paySchedule = action.value;
        return;
      case "rentOrMortageSchedule":
        draft.expenses.rentOrMortageSchedule = action.value;
        return;
      case "totalBills":
        draft.expenses.totalBills = action.value;
        return;
      case "totalLivingExpenseSchedule":
        draft.expenses.totalLivingExpenseSchedule = action.value;
        return;
      case "totalLivingExpenses":
        draft.expenses.totalLivingExpenses = action.value;
        return;
      case "kinRelationship":
        draft.nextOfKin.relationship = action.value;
        return;
      case "kinFName":
        draft.nextOfKin.firstName = action.value;
        return;
      case "kinLName":
        draft.nextOfKin.lastName = action.value;
        return;
      case "kinContactNumber":
        draft.nextOfKin.contactNumber = action.value;
        return;
      case "bankDetails":
        draft.bankDetails.bankAccountNumber = action.value;
        return;

      case "disclosureStatement":
        draft.disclosure.disclosureStatement = !draft.disclosure
          .disclosureStatement;
        return;
      case "cancellationStatement":
        draft.disclosure.cancellationStatement = !draft.disclosure
          .cancellationStatement;
        return;
      case "privacyWaiver":
        draft.disclosure.privacyWaiver = !draft.disclosure.privacyWaiver;
        return;
      case "creditCheck":
        draft.disclosure.creditCheck = !draft.disclosure.creditCheck;
        return;

      case "submit":
        draft.submitting++;
        draft.loanDetails = {
          amount,
          durationOfLoan,
          schedule,
          repayment,
          total,
        };
        return;
    }
  }
  const nextStep = () => {
    dispatch({ type: "nxtStep" });
  };

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);
  console.log("submitting is " + state.submitting);

  useEffect(() => {
    if (state.submitting) {
      async function submitApplication() {
        alert("submitting is " + state.submitting);
        try {
          const response = await Axios.post(
            "http://localhost:8080/submit-application",
            {
              loanPurpose: state.loanPurpose,
              personalDetails: {
                gender: state.personalDetails.gender,
                firstName: state.personalDetails.firstName,
                lastName: state.personalDetails.lastName,
                email: state.personalDetails.email,
                mobileNumber: state.personalDetails.mobileNumber,
                birthDay: state.personalDetails.birthDay,
                age: state.personalDetails.age,
                address: {
                  suburb: state.personalDetails.address.suburb,
                  town: state.personalDetails.address.town,
                  city: state.personalDetails.address.city,
                  country: state.personalDetails.address.country,
                },
              },
              employmentDetails: {
                companyName: state.employmentDetails.companyName,
                employerContactNumber:
                  state.employmentDetails.employerContactNumber,
                jobTitle: state.employmentDetails.jobTitle,
                employmentDate: state.employmentDetails.employerContactNumber,
                jobType: state.employmentDetails.jobType,
                paySchedule: state.employmentDetails.paySchedule,
                salary: state.employmentDetails.salary,
              },

              expenses: {
                rentOrMortageSchedule: state.expenses.rentOrMortageSchedule,
                totalBills: state.expenses.totalBills,
                totalLivingExpenseSchedule:
                  state.expenses.totalLivingExpenseSchedule,
                totalLivingExpenses: state.expenses.totalLivingExpenses,
              },
              nextOfKin: {
                relationship: state.nextOfKin.relationship,
                firstName: state.nextOfKin.firstName,
                lastName: state.nextOfKin.lastName,
                contactNumber: state.nextOfKin.contactNumber,
              },
              bankDetails: {
                bankAccountNumber: state.bankDetails.bankAccountNumber,
              },

              loanDetails: {
                amount: state.loanDetails.amount,
                durationOfLoan: state.loanDetails.durationOfLoan,
                schedule: state.loanDetails.schedule,
                repayment: state.loanDetails.repayment,
                total: state.loanDetails.total,
              },

              token: localStorage.appToken,
            }
          );

          console.log(response.data);
          // Redirect to new post url
          // props.history.push(`/profile/${localStorage.appUsername}`);
          props.history.push(`/s/${response.data}`);
          console.log("New post was created.");
        } catch (e) {
          console.log(e + "There was a problem.");
        }
      }
      submitApplication();
    }
  }, [state.submitting]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Fragment>
          <LoanIndicator />
          <MainApplication />
        </Fragment>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

const mapStateToProps = createStructuredSelector({
  amount,
  durationOfLoan,
  schedule,
  repayment,
  total,
});

export default connect(mapStateToProps)(withRouter(ApplicationState));
