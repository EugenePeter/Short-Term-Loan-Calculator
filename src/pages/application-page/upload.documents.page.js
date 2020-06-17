import React, { useContext, useState, useCallback } from "react";
import cuid from "cuid";

import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { Container, ContainerNarrower, TitleContainer } from "../../global-styles/global.styles";
import { GlobalButton, BackBtn } from "../../global-styles/GlobalButton.styles";
import { FormContainer, ButtonWrapper } from "../../components/Form/form-input/form-input.styles";
import { RequiredDocs, RequiredDocsColumn } from "../../components/Form/dropzone-component/dropzone.styles";

import Dropzone from "../../components/Form/dropzone-component/dropzone.component";
import ImageList from "../../components/Form/dropzone-component/upload-preview";

function UploadDocuments() {
  const appDispatch = useContext(DispatchContext);

  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too

    // Loop through accepted files
    acceptedFiles.map((file) => {
      // Initialize FileReader browser API
      const reader = new FileReader();
      // onload callback gets called after the reader reads the file data
      reader.onload = function(e) {
        // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it.
        setImages((prevState) => [...prevState, { id: cuid(), src: e.target.result, filename: file.name }]);
      };
      // Read the file as Data URL (since we accept only images)
      reader.readAsDataURL(file);
      return file;
    });
    console.log(acceptedFiles);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: "nxtStep" });
  };

  const handleBack = (e) => {
    e.preventDefault();
    appDispatch({ type: "back" });
  };

  return (
    <Container>
      <ContainerNarrower>
        <FormContainer onSubmit={handleSubmit}>
          <ButtonWrapper>
            <BackBtn onClick={handleBack} /> Back
          </ButtonWrapper>
          <TitleContainer>
            <h2>Upload Documents</h2> {""}
            <small>Please upload the following documents</small>
            <RequiredDocs>
              <RequiredDocsColumn>Tax Identification Number</RequiredDocsColumn>
              <RequiredDocsColumn>Proof of Address</RequiredDocsColumn>
            </RequiredDocs>
          </TitleContainer>
          <Dropzone onDrop={onDrop} accept={"image/*"} />

          <ImageList images={images} />

          <ButtonWrapper>
            <GlobalButton filterApplicants>Save And Continue</GlobalButton>
          </ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}
export default UploadDocuments;
