import React from 'react';
import styled from 'styled-components';

import image from '../../assets/about.png';

import { below } from '../../utilities';

const AboutImage = () => (
  <>
    <StyledImg src={image} alt="" />
  </>
);

export default AboutImage;

const StyledImg = styled.img`
  position: absolute;
  top: 20px;
  left: 0;

  ${below.xxl`
    top: 40px;
    width: 48%;
  `}
`;
