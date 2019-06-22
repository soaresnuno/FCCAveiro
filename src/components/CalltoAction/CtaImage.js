import React from 'react';
import styled from 'styled-components';

import image from '../../assets/banner_bg_alt.png';

import { below } from '../../utilities';

const CtaImage = () => (
  <>
    <StyledImg src={image} alt="" />
  </>
);

export default CtaImage;

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  ${below.xxl`
    width: 50%;
  `}
`;
