import React from 'react';
import styled from 'styled-components';

import { Button } from '../../elements';

import { darkGreen } from '../../utilities';

const AboutText = () => (
  <Wrapper>
    <h1>We Have 24 Year Experience in consulting</h1>
    <h3>First Abundantly night you are sea great fifth year</h3>
    <h5>Lights fly above bearing brought abundantly whose. Without one may i seed void wels great face god were deep be first. Unto for third be in moveth. Bring land bearing un abundantly firmament appear whales them years. Lights fly above bearing brought bold abundantly whose without one may i seed.</h5>
    <Button>Read More</Button>
  </Wrapper>
);

export default AboutText;

const Wrapper = styled.div`
  grid-column: 2 / 3 ;
  align-self: center;
  padding-right: 30px;
  
  & h1 {
    padding-bottom: 30px;
    color: ${darkGreen};
  }

  & h3 {
    padding-bottom: 30px;
    color: ${props => props.theme.colors.primary}
  }

  & h5 {
    padding-bottom: 40px;
    color: ${props => props.theme.colors.primary}
  }
`;
