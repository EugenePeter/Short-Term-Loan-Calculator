import styled, { css } from "styled-components";

export const CheckBoxContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(to bottom right, #55d251, #4ac76c, #31b3c2);
  padding: 2rem 1rem 2rem 1rem;
  margin-top: 1rem;
  box-sizing: border-box;

  h4 {
    margin-bottom: 2rem;
  }

  -webkit-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  -moz-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);

  @media screen and (min-width: 992px) {
    padding: 2rem 4.11rem 2rem 4.11rem;
    margin-top: 1rem;
  }
`;

export const CheckBoxInput = styled.input`
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
  width: 16px;
  height: 16px;
  border: solid 2px;
  /* border-radius: 50%; */
  box-sizing: border-box;
`;

export const CheckBoxBlock = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
 align-content: center;
  position: relative;
  /* padding-left: 35px; */
  /* margin-right: 1.625rem; */
  cursor: pointer;
  /* font-size: 22px; */
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* background-color: yellow; */

  &:hover {
    ${CheckBoxInput} ~ ${CheckMark} {
      background-color: #F2F2F2;
    }
  }

  ${CheckBoxInput}:checked ~ ${CheckMark} {
      background-color: #84DE40;
      border: none;
  }
  

  ${CheckMark}:after {
    content: "";
    position: absolute;
    display: none;
  }

  ${CheckBoxInput}:checked ~ ${CheckMark}:after {
    display: block;
  }
  ${CheckMark}:after {
    left: 5px;
    top: 1px;
    width: 4px;
    height: 9px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }



`;

export const CheckBoxBlock__wrapper = styled.div`
   {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.625rem;
    /* width: 100%; */
    /* background-color: pink; */
  }
`;

const isNotClicked = css`
  border: solid 2px #ff9300;
`;

const getCheckboxStyles = (props) => {
  if (props.isNotClicked == true) {
    return isNotClicked;
  }
};

export const CheckBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;

  width: 100%;
  background-color: #f6fff9;

  height: 14.11rem;
  margin-bottom: 0.625rem;

  -webkit-box-shadow: 0px 13px 59px -25px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 13px 59px -25px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 13px 59px -45px rgba(0, 0, 0, 0.8);

  transition: 0.3s;

  &:hover {
    background-color: #fff;
    color: #84de40;
  }

  &:checked {
    background-color: #fff;
    color: #84de40;
  }
  transition: width 1s cubic-bezier(0.35, 0, 0.1, 1) 0.2s;
  ${getCheckboxStyles}

  @media screen and (min-width: 992px) {
    height: 10.11rem;
  }
`;

export const CheckBoxDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.625rem;

  a {
    text-decoration: none;
  }
  a small {
    color: #84de40 !important;
  }
`;
