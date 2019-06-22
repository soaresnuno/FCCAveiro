import React from 'react';
import styled from 'styled-components';

import AboutImage from './AboutImage';
import AboutText from './AboutText';

import { below } from '../../utilities';

const About = () => (
  <Grid>
    <AboutImage />
    <AboutText />
  </Grid>
);

export default About;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: minmax(670px, 1fr);
  position: relative;
  background-color: ${props => props.theme.colors.backgroundAlt};

  ${below.xxl`
    grid-template-rows: minmax(570px, 1fr);
  `}
`;
