import styled, { css, keyframes } from "styled-components";

const subColor = "grey";
export const mainColorGreen = "#3BC453";

// const shrinkLabelStyles = css`
//   top: 14px;
//   font-size: 12px;
//   color: ${mainColor};
// `;

export const BackBtn = styled.div`
  width: 1rem;
  height: 1rem;
  border: solid;
  border-width: 0 0.5rem 0.5rem 0;
  border-radius: 4px;
  border-color: ${mainColorGreen};
  /* -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg); */
  transform: rotate(135deg);
  display: inline-block;
`;

const warning = css`
  background-color: white;
  color: #4bc869;
  height: 80px;
  border-radius: 4px;

  &:hover {
    background-color: #f5fff8;
  }
`;

const defaultButton = css`
  background-color: #3bc453;
  &:hover {
    background-image: linear-gradient(
      to bottom right,
      #55d251,
      #4ac76c,
      #31b3c2
    );
    color: #fff;
    border: 1px solid #3bc453;
  }
`;

const applicationFrmBtn = css`
  border-radius: 4px;
  background-color: ${mainColorGreen};
  &:hover {
    background-image: linear-gradient(
      to bottom right,
      #55d251,
      #4ac76c,
      #31b3c2
    );
    color: #fff;
    border: 1px solid #3bc453;
  }
`;

const goBack = css`
  width: 4.705882352941176rem;
  background-color: #ffd76a;
  border-radius: 4px;
  &:hover {
    background-image: linear-gradient(
      to bottom right,
      #55d251,
      #4ac76c,
      #31b3c2
    );
    color: #fff;
    border: 1px solid #3bc453;
  }
`;

const isDisabled = css`
  background-color: #e0ece4;
`;

const getButtonStyles = (props) => {
  if (props.filterApplicants) {
    return applicationFrmBtn;
  }

  if (props.back) {
    return goBack;
  }

  if (props.warning) {
    return warning;
  }

  if (props.isDisabled) {
    return isDisabled;
  } else {
    return applicationFrmBtn;
  }
};

export const GlobalButton = styled.button`
  width: 100%;
  height: 60px;
  letter-spacing: 0.5px;
  line-height: 50px;
  /* padding: 0 35px 0 35px; */
  font-size: 15px;
  margin-bottom: 8%;

  /* border-radius: 50px; */
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: ${({ isActive }) => (isActive ? "none" : "inline-block")};

  justify-content: center;
  align-items: center;

  -webkit-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  -moz-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);

  &.inverted {
    background-color: #3bc453;
    color: black;
    border: 4px solid black;
    &:hover {
      background-color: #3bc453;
      color: white;
      border: none;
    }
  }

  ${getButtonStyles}
`;
