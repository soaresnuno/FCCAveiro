import React from 'react';
import styled from 'styled-components';

import logoGreen from '../../assets/fccaGreen.png';

export default function Logo() {
  return (
    <>
      <StyledLogo src={logoGreen} alt="FCC Logo" />
    </>
  );
}

const StyledLogo = styled.img`
  height: 30px;
  align-self: center;
  z-index: 15;
`;
