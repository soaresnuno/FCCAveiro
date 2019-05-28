import React from 'react';
import styled from 'styled-components';

import { green, white } from "../../utilities";

const OpenIcon = (props) => {

  return (
    <StyledIcon onClick={props.toggle}>
      <span />
    </StyledIcon>
  );
}

export default OpenIcon;

const StyledIcon = styled.div`
  align-self: center;
  justify-self: right;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
  z-index: 15;
  animation: fadein 1s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  
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
