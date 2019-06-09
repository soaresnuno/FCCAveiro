import React from "react";
import styled from "styled-components";

import { gray00 } from "../../utilities";

const CloseIcon = (props) => {

  return (
    <StyledIcon onClick={props.toggle}>
      <span />
    </StyledIcon>
  )
};

export default CloseIcon;

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
    border-radius: 1px;
    height: 3px;
    width: 30px;
    background: ${gray00};
    position: absolute;
    display: block;
    content: "";
  }

  & span {
    background-color: transparent;
  }

  & span:before {
    top: 0;
    transform: rotate(45deg);
  }

  & span:after {
    top: 0;
    transform: rotate(-45deg);
  }
`;