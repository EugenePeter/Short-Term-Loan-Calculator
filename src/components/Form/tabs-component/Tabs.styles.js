import styled, { css } from "styled-components";

export const TabsContainer = styled.div`
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

export const TabsBlock = styled.div`
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
    background-color: #f2f2f2;
  }
`;

export const TabsBlock__wrapper = styled.div`
   {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.625rem;
    width: 100%;
    background-color: pink;
    box-sizing: border-box;
  }
`;

const isNotClicked = css`
  border: solid 2px #ff9300;
`;

const getTabsStyles = (props) => {
  if (props.isNotClicked == true) {
    return isNotClicked;
  }
};

export const Tabs = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  background-color: #f6fff9;

  height: 6.11rem;
  margin-bottom: 0.625rem;

  padding: 0 1.625rem 0 1.625rem;
  box-sizing: border-box;

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
  ${getTabsStyles}

  @media screen and (min-width: 992px) {
    height: 6.11rem;
  }
`;

export const TabsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h3 {
    color: #84de40 !important;
  }

  h3,
  small {
    position: relative;
    display: inline-block;
    margin: 2px;
  }
`;
