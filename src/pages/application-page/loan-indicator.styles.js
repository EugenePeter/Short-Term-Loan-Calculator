import styled, { css, createGlobalStyle } from "styled-components";

export const mainColorGreen = "#3BC453";
export const subColorGrey = "grey";
export const mainColorBlack = "black";

export const Modifier = createGlobalStyle`
  .loan-indicator__shadow-b {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 80px;

  }
`;

// Parent conrtainer
export const LoanIndicatorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  /* background-color: blue; */

  box-shadow: 0px 12px 30px -10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const stepOne = css`
  width: 9.09%;
`;

const stepTwo = css`
  width: 18.18%;
`;

const stepThree = css`
  width: 27.27%;
`;

const stepFour = css`
  width: 36.36%;
`;

const stepFive = css`
  width: 45.45%;
`;

const stepSix = css`
  width: 54.54%;
`;

const stepSeven = css`
  width: 63.63%;
`;

const stepEight = css`
  width: 72.72%;
`;

const stepNine = css`
  width: 81.81%;
`;

const stepTen = css`
  width: 90.9%;
`;

const stepEleven = css`
  width: 100%;
`;

const getWidth = (props) => {
  if (props.step == 1) {
    return stepOne;
  }

  if (props.step == 2) {
    return stepTwo;
  }

  if (props.step == 3) {
    return stepThree;
  }

  if (props.step == 4) {
    return stepFour;
  }

  if (props.step == 5) {
    return stepFive;
  }

  if (props.step == 6) {
    return stepSix;
  }

  if (props.step == 7) {
    return stepSeven;
  }

  if (props.step == 8) {
    return stepEight;
  }

  if (props.step == 9) {
    return stepNine;
  }
  if (props.step == 10) {
    return stepTen;
  }

  if (props.step == 11) {
    return stepEleven;
  }
};

// Ajust the width of the loan indicator
export const LoanIndicatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;

  transition: width 1s cubic-bezier(0.35, 0, 0.1, 1) 0.2s;

  ${getWidth}
`;

// actual progress bar
export const LoanIndicatorProgressBar = styled.div`
  width: 100%;
  height: 16px;
  border-radius: 50px;
  background-color: ${mainColorGreen};
`;
