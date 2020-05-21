import styled, { css } from "styled-components";

export const mainColorGreen = "#3BC453";
export const subColorGrey = "grey";
export const mainColorBlack = "black";

export const Label = styled.label`
  position: absolute;
  /* border: solid 2px yellow; */
  box-sizing: border-box;

  text-align: center;

  {Label}:hover  {
    color: green;
  }


  cursor: pointer;

  &::before {
    /* content: 'test' */
  }
z-index: -1;

  /* transition-duration: 0.5s;
  transform-origin: 2px 12px; */
`;
export const TabInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: solid 0.5px;
  width: 100%;
  height: 4rem;
  margin-right: 8px;

  transition: 0.5s;

  z-index: 100;

  &:nth-last-of-type(1) {
    margin-right: 0;
  }

  /* &:hover {
    border-color: ${mainColorGreen};
    background-color: pink;
  } */

 /* &:hover{
    background-color: ${mainColorGreen};
  } */

&:hover {
    background-color: ${mainColorGreen};
  }



`;

export const TabInput = styled.input`
  border-radius: 2px;
  opacity: 0;
  width: 100%;
  height: 4.11rem;

  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none!important; */

  border: solid 1px;

  position: relative;

  cursor: pointer;
  user-select: none;
  outline: none;

  transition-duration: 0.2s;

  &:hover {
    border-color: blue;
  }

  {TabInput}:hover ~ ${TabInputWrapper} {
    background-color: pink;
  }
`;
