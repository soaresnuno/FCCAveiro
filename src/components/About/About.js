import React from "react";
import styled from "styled-components";

import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

import { below } from "../../utilities";

const About = props => (
  <Grid>
    <AboutImage data={props.data ? props.data.first_block_content : ""} />
    <AboutText data={props.data ? props.data.first_block_content : ""} />
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
