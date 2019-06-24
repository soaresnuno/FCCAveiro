import React from "react";
import styled from "styled-components";

import { Button } from "../../elements";

import { darkGreen } from "../../utilities";

const ProviderText = props => (
  <Wrapper>
    <h1>{props.data.title && props.data.title}</h1>
    <p>{props.data.description && props.data.description}</p>
    <Button href={props.data.link ? props.data.link : ""}>Load More</Button>
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
    color: ${props => props.theme.colors.primary};
  }
`;
