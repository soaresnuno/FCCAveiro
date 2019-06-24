import React from "react";
import styled from "styled-components";

import { Button } from "../../elements";

import { gray10, darkGreen, elevation } from "../../utilities";

const Card = props => (
  <>
    {console.log(props.data.cards)}
    {props.data &&
      props.data.cards.map(d => (
        <Wrapper>
          <h2>{d.title}</h2>
          <p>{d.description}</p>
          <ButtonWrapper>
            <Button modifiers="square" href={d.link}>
              Modified
            </Button>
          </ButtonWrapper>
        </Wrapper>
      ))}
  </>
);

export default Card;

const Wrapper = styled.div`
  position: relative;
  align-self: center;
  // grid-column: 3 / 4;
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
