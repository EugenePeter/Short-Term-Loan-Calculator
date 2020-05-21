import styled from "styled-components";

export const mainColorGreen = "#3BC453";
export const subColorGrey = "grey";
export const mainColorBlack = "black";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ContainerRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
`;

export const ContainerMid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;

  @media screen and (min-width: 992px) {
    max-width: 100rem;
  }
`;

export const ContainerNarrow = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;

  @media screen and (min-width: 992px) {
    max-width: 50rem;
  }
`;

export const ContainerNarrower = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media screen and (min-width: 992px) {
    max-width: 50rem;
  }
`;

export const Small = styled.small`
  text-align: center;

  &.margin-top {
    margin-top: 8%;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
