import React from 'react';
import styled from 'styled-components';

import { green, white } from "../../utilities";

export default function BurgerMenu(props) {

  return (
    <BurgerIcon onClick={props.toggle}>
      <span />
    </BurgerIcon>
  );
}

const BurgerIcon = styled.div`
  align-self: center;
  justify-self: right;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
  z-index: 15;
  
  & span,
  & span:before,
  & span:after {
    cursor: pointer;
    border-radius: 20px;
    height: 4px;
    width: 35px;
    background: ${white};
    position: absolute;
    display: block;
    content: "";
  }
  & span:before {
    top: -10px;
  }
  & span:after {
    bottom: -10px;
  }

  @media all and (max-width: 768px) {
    display: inline;
  }
`;
