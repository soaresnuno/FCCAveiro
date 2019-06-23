import React from 'react';
import styled from 'styled-components';

import { Button } from '../../elements';

import { darkGreen, below } from '../../utilities';

const CtaText = () => (
  <TextWrapper>
    <h1>Lead From Front In Business Innovation</h1>
    <h3>Male bring land dominion over can yielding his moveth under of depend brought him is. Multiply which firmament deep make.</h3>
    <Button>Learn More</Button>
  </TextWrapper>
);

export default CtaText;

const TextWrapper = styled.div`
  grid-column: 1 / 2;
  align-self: center;
  padding-left: 90px;

  ${below.xxl`
    padding-left: 70px;
  `}

  & h1 {
    font-size: 40px;
    font-weight: 800;
    color: ${darkGreen};
    padding-bottom: 40px;
  }

  & h3 {
    padding-bottom: 60px;
    color: ${props => props.theme.colors.primary}
  }
`;
