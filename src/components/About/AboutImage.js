import React from "react";
import styled from "styled-components";

import image from "../../assets/about.png"

const AboutImage = () => (
  <>
    <StyledImg src={image} alt="" />
  </>
);

export default AboutImage;

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;