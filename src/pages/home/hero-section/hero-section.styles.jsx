import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
  margin: 10% 0 8% 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  color: white;

  small {
    color: white;
  }

  h1 {
    font-weight: 900 !important;
    /* background-color: yellow; */
    text-align: center;
    /* font-size: 4.6rem; */
  }

  h1:nth-of-type(2) {
    padding-top: 2rem;
  }

  h1,
  h3 {
    margin: 0;
  }

  @media screen and (min-width: 992px) {
    margin: 3% 0 3% 0;
  }
`;
