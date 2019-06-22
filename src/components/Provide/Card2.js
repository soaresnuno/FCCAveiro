import React from 'react';
import styled from 'styled-components';

import { Button } from '../../elements';

import { gray10, darkGreen, elevation } from '../../utilities';

const Card2 = () => (
  <Wrapper>
    <h2>Commercial Approach</h2>
    <p>Show wherein form yielding whala readeat gathered wherein moved. Behold may be winged created that Won't theya are second god give</p>
    <ButtonWrapper>
      <Button modifiers="square">Modified</Button>
    </ButtonWrapper>
  </Wrapper>
);

export default Card2;

const Wrapper = styled.div`
  position: relative;
  grid-column: 4 / 5;
  align-self: center;
  justify-self: center;
  background-color: ${gray10};
  height: 90%;
  width: 90%;
  padding: 20px;
  ${elevation[2]};

  & h2 {
    color: ${darkGreen};
    padding-bottom: 40px;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
`;
