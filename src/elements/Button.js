import React from 'react';
import styled from 'styled-components';

import {
  elevation, darkGreen, lightGreen, gray00, gray90,
} from '../utilities';

const Button = props => (
  <>
    <StyledButton>{props.text}</StyledButton>
  </>
);

export default Button;

const StyledButton = styled.a`
  color: ${gray00};
  background-color: ${darkGreen};
  cursor: pointer;
  font-size: 14px;
  padding: 14px 40px;
  border-radius: 50px;
  transition: all .4s ease-in-out;

  &:hover{
    ${elevation[2]};
    background-color: ${lightGreen};
    color: ${gray90};
}
`;
