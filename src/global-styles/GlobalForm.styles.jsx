import styled, { css } from "styled-components";
import {
  mainColorGreen,
  subColorGrey,
  mainColorBlack,
} from "../global-styles/global.styles";

const shrinkLabelStyles = css`
  top: 14px;
  font-size: 12px;
  color: ${mainColorBlack};
`;

const getFormLabel = props => {
  if (props) {
    return shrinkLabelStyles
  }
}

export GlobalFormLabel = styled.label`

`;


export const GlobalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100% !important;
`;

export const GlobalInput = styled.input`
  background-color: white;
  color: ${subColorGrey};
  font-size: 18px;
  padding: 18px 10px 18px 26px;
  /* display: block; */
  width: 100%;
  height: 70px;
  border: none;
  border-radius: 4px;
  border: 1px solid ${subColorGrey};
  /* margin: 15px 0 15px 0; */

  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;
