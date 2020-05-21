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
`;

const defaultButton = css`
  background-color: #3bc453;
`;

const applicationFrmBtn = css`
  border-radius: 4px;
  background-color: ${mainColorGreen};
`;

const goBack = css`
  width: 4.705882352941176rem;
  background-color: #ffd76a;
  border-radius: 4px;
`;

const getButtonStyles = (props) => {
  if (props.filterApplicants) {
    return applicationFrmBtn;
  }

  if (props.back) {
    return goBack;
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
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid #3bc453;
  }

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
