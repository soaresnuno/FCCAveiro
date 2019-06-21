import React from 'react';
import styled from 'styled-components';

import { gray10 } from '../../utilities';

const Card = () => (
  <Wrapper />
);

export default Card;

const Wrapper = styled.div`
  grid-column: 3 / 4;
  align-self: center;
  background-color: ${gray10};
  height: 90%;
  width: 90%;
`;
