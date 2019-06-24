import React from "react";
import styled from "styled-components";

import { Button } from "../../elements";

import { darkGreen } from "../../utilities";

const AboutText = props => (
  <Wrapper>
    <h1>{props.data.title && props.data.title}</h1>
    <h3>{props.data.bold_sub_title && props.data.bold_sub_title}</h3>
    <h5>{props.data.description && props.data.description}</h5>
    <Button href={props.data.saber ? props.data.saber : ""}>Read More</Button>
  </Wrapper>
);

export default AboutText;

const Wrapper = styled.div`
  grid-column: 2 / 3;
  align-self: center;
  padding-right: 30px;

  & h1 {
    padding-bottom: 30px;
    color: ${darkGreen};
  }

  & h3 {
    padding-bottom: 30px;
    color: ${props => props.theme.colors.primary};
  }

  & h5 {
    padding-bottom: 40px;
    color: ${props => props.theme.colors.primary};
  }
`;
