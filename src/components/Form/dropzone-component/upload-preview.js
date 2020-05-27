import React from "react";

import {
  DropzonePreview,
  ImageContainer,
  ImageWrapper,
} from "./dropzone.styles";

// Rendering individual images

// ImageList Component
const ImageList = ({ images }) => {
  // render each image by calling Image component

  // Return the list of files
  return (
    <DropzonePreview className="file-list">
      <h3>{images[0] ? "Uploaded Documents" : ""} </h3>

      {images.map((images, index) => {
        return (
          <ImageWrapper className="file-item" key={images.id}>
            <span>{images.filename}</span>
          </ImageWrapper>
        );
      })}
    </DropzonePreview>
  );
};

export default ImageList;
