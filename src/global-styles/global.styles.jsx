import styled from "styled-components";

export const mainColorGreen = "#3BC453";
export const subColorGrey = "grey";
export const mainColorBlack = "black";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
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
  position: relative;
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
  box-sizing: border-box;

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
  /* margin-top: 2rem; */

  &__margin-top {
    margin-top: 2rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 1.705882352941176rem;
  margin-bottom: 1.705882352941176rem;

  small {
    text-align: center;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 1.705882352941176rem;
  margin-bottom: 1.705882352941176rem;

  h3,
  p,
  small {
    text-align: center;
  }
`;
