import React from 'react';
import styled from 'styled-components';

import logoWhite from '../../assets/fcc.png';

export default function Logo() {
  return (
    <>
      <StyledLogo src={logoWhite} alt="FCC Logo" />
    </>
  );
}

const StyledLogo = styled.img`
  height: 20px;
  align-self: center;
`;
