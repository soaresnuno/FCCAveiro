import React from 'react';
import styled from 'styled-components';

import Button from '../../elements/Button';

import { darkGreen } from '../../utilities';

const ProviderText = () => (
  <Wrapper>
    <h1>We Provide Best Services</h1>
    <p>Male bring land dominion over can't yielding. His order moveth under of dry brought him is. Multiply which firmament deep make. Male bring land. Dominion over can't yielding. His moveth under of dry brought him is. Multiply which firmament deep make.</p>
    <Button text="Load More" />
  </Wrapper>
);

export default ProviderText;

const Wrapper = styled.div`
  grid-column: 2 / 3;
  align-self: center;

  & h1 {
    color: ${darkGreen};
    padding-bottom: 40px;
  }

  & p {
    padding-bottom: 40px;
    color: ${props => props.theme.colors.primary}
  }
`;
