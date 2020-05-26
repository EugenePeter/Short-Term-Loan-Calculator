import styled from "styled-components";

export const mainColorGreen = "#3BC453";
export const subColorGrey = "grey";
export const mainColorBlack = "black";

export const CheckBoxStyle = styled.input`


  border-radius: 2px;
  margin-right: 18px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 1rem;
  height: 1rem;
  border: solid 1px #cccccc;

  position: relative;

  cursor: pointer;
    user-select: none;
    outline: none;

    transition-duration: 0.2s;


  {CheckBoxStyle}:checked::before {
    content: '';
    width: 1rem;
  height: 1rem;
  background-color: ${mainColorGreen};
  position: absolute;

  }

  {CheckBoxStyle}:checked {
    transform: scale(1.1);
    border: none;
  }


  /* {CheckBoxStyle}:checked::before {
    content: '';
  width: 14px;
  height: 14px;
  background-color: ${mainColorGreen};
  position: absolute;
  top: 2px;
  left: 2px;

  } */


  
  {CheckBoxStyle}:hover {
    background-color: #05e1a4;
  }

  label {
    font-size: smaller!important:
  }


`;

export const CheckBoxBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: solid 0.5px grey;
  height: 70px;
  padding-left: 12px;
  box-sizing: border-box;

  {CheckBoxBlock}:nth-of-type(n+2) {
    /* background-color: red; */
    border-top: none;
  }

  {CheckBoxBlock}:hover {
    background-color: #f9f9f9;
  }
`;
