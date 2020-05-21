import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: 14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* background-color: green; */
  flex-shrink:1;
  flex-grow: 1;
  align-items: center
  margin: 0;
  width: 100%;
  height: 80px;
  input[type="password"] {
    letter-spacing: 0.3em;
  }

  @media screen and (min-width: 992px) {

    max-width: 50rem;

}

`;

export const RadioInput = styled.input``;

export const Span = styled.span``;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  /* background-color: yellow; */
  width: 100% !important;

  cursor: pointer;
  position: relative;

  > ${Span} {
    color: red;
    padding: 0.5rem 0.25rem;
  }

  .titleLabel {
    /* background-color: yellow; */
    text-align: center;
    width: 100%;
    height: 32px;
  }

  .titleRadioInputContainer {
    /* background-color: pink; */
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .titleCheckboxItems {
    display: flex !important;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    border: 0.5px solid black;
    box-sizing: border-box;
    width: 33.33%;
    height: 70px;
    padding-left: 26px;

    label {
      margin-left: 26px;
    }
    &__Mr {
      background-color: pink;
    }
    &__Mrs {
      background-color: pink;
    }
    &__Miss {
      background-color: pink;
    }
    /* background-color: green; */
  }

  .titleCheckboxItems:nth-of-type(2) {
    border-right: none;
    border-left: none;
  }

  ${RadioInput} {
    height: 25px;
    width: 25px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 1px solid #34495e;
    border-radius: 4px;
    outline: none;
    transition-duration: 0.2s;
    background-color: whitesmoke;
    cursor: pointer;
    user-select: none;
  }

  ${RadioInput}:checked {
    border: 2px solid #41b883;
    background-color: #3bc453;
    outline: none;
    transform: scale(1.4);
  }
`;

export const FormTwoColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100% !important;
  /* background-color: blue; */
`;

export const FormInputContainer = styled.input`
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 18px 10px 18px 26px;
  /* display: block; */
  width: 100%;
  height: 70px;
  border: none;
  /* border-radius: 4px; */
  border-bottom: 1px solid ${subColor};
  /* margin: 15px 0 15px 0; */

  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 26px;
  top: 38px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;

const ha = (props) => {
  if (props.value) {
    return shrinkLabelStyles;
  } else {
    return;
  }
};

export const FormInputSpan = styled.label`
  display: ${({ label, value }) => (label && value ? "none" : "")};
  display: flex;
  flex-direction: column;
  color: ${subColor};
  /* background-color: red; */
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 26px;
  top: 30px;
  /* transform: translateY(200px) */
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }

  ${ha}
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 8%;
  /* width: 600px!important: */
`;

export const ButtonWrapper = styled.div`
  margin-top: 8%;
  /* margin-bottom: 8%; */
  width: 100%;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  align-self: flex-end;
`;

export const FormSelect = styled.select`
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 18px 10px 18px 26px;
  /* display: block; */
  width: 100%;
  height: 70px;
  border: none;
  /* border-radius: 4px; */
  border-bottom: 1px solid ${subColor};

  /* margin: 15px 0 15px 0; */

  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;
