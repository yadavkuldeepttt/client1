// ImageMessage.js
import React from 'react';
import styled from 'styled-components';

// Styled component for the image container
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  border-radius: 12px;
  overflow: hidden;
  max-width: 200px;
  max-height: 200px;
  border: 2px solid #a6fdb9; /* Border color */
`;

// Styled component for the image itself
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the area without distortion */
`;

const ImageMessage = ({ src, alt }) => {
  return (
    <ImageContainer>
      <StyledImage src={src} alt={alt} />
    </ImageContainer>
  );
};

export default ImageMessage;
