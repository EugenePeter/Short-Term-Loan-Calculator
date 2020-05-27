import styled from "styled-components";

export const mainColorGreen = "#3BC453";
export const subColorGrey = "grey";
export const mainColorBlack = "black";

export const RequiredDocs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  background-color: yellow;
  margin-top: 1.764705882352941rem;

  @media and screen (min-width: 998px) {
    width: 60%;
  }
`;

export const RequiredDocsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  height: 4.705882352941176rem;
  box-sizing: border-box;
  background-color: #E9E9E9;
  color: #989898;
  text-align: center;
  padding-top: 0.7058823529411765rem
  border: solid 0.11rem #D5D5D5;

  
  {RequiredDocsColumn}:nth-of-type(2) {
    border-left: none;
  }

`;

export const DropzoneContainer = styled.div`
  position: relative;
  border: dotted 0.11rem ${mainColorGreen};
  height: 11.764rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;

  box-sizing: border-box;
`;

export const DropzonePreview = styled.div`
  position: relative;
  /* height: 150px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  /* background-color: blue; */

  h3 {
    text-align: center;
    margin-bottom: 16px;
  }
`;

export const ImageWrapper = styled.div`
  border: solid 2px ${mainColorGreen};
  position: relative;
  display: flex;

  height: 40px;
  margin-bottom: 10px;
  span {
    padding: 10px;
    box-sizing: border-box;
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
`;
