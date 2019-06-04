import React from 'react';
import styled from 'styled-components';

import logoWhite from '../../assets/fcca.png';

export default function Logo() {
  return (
    <>
      <StyledLogo src={logoWhite} alt="FCC Logo" />
    </>
  );
}

const StyledLogo = styled.img`
  height: 35px;
  align-self: center;
`;
