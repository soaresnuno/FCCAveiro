import React from 'react';
import styled from 'styled-components';

import AboutImage from './AboutImage';
import AboutText from './AboutText';

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
  grid-template-rows: 700px;
  position: relative;
`;
