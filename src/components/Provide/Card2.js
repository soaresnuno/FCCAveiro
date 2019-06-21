import React from 'react';
import styled from 'styled-components';

import { gray10 } from '../../utilities';

const Card2 = () => (
  <Wrapper />
);

export default Card2;

const Wrapper = styled.div`
  grid-column: 4 / 5;
  align-self: center;
  background-color: ${gray10};
  height: 90%;
  width: 90%;
`;
