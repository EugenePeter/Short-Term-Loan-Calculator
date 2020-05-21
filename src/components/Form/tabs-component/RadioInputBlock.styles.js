import styled, { css } from "styled-components";

export const RadioContainer = styled.div`
  width: 100%;
  background-color: #fcfcfc;
  padding: 2rem 1rem 2rem 1rem;
  margin-top: 1rem;
  box-sizing: border-box;

  h4 {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 992px) {
    padding: 2rem 4.11rem 2rem 4.11rem;
    margin-top: 1rem;
  }
`;

export const RadioInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  height: 25px;
  width: 25px;
  background-color: blue;

  z-index: 100;

  /* outline: none; */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
  border: solid 2px;
  border-radius: 50%;
  box-sizing: border-box;
`;

export const RadioBlock = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
 align-content: center;
  position: relative;
  /* padding-left: 35px; */
  margin-right: 1.625rem;
  cursor: pointer;
  /* font-size: 22px; */
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* background-color: yellow; */

  &:hover {
    ${RadioInput} ~ ${CheckMark} {
      background-color: #F2F2F2;
    }
  }

  ${RadioInput}:checked ~ ${CheckMark} {
      background-color: #84DE40;
      border: none;
  }
  

  ${CheckMark}:after {
    content: "";
    position: absolute;
    display: none;
  }

  ${RadioInput}:checked ~ ${CheckMark}:after {
    display: block;
  }
  ${CheckMark}:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }



`;

export const RadioBlock__wrapper = styled.div`
   {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.625rem;
    /* width: 100%; */
    /* background-color: pink; */
  }
`;

export const Radio = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  background-color: #fff;

  height: 4.11rem;
  margin-bottom: 0.625rem;

  box-shadow: 2px 2px 20px 10px rgba(0, 0, 0, 0.02);

  transition: 0.3s;

  &:hover {
    background-color: #84de40;
    color: #fff;
  }
`;
