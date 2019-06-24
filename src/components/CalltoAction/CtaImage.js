import React from "react";
import styled from "styled-components";

import { below } from "../../utilities";

const CtaImage = props => (
  <>
    <StyledImg src={props.data.imagem ? props.data.imagem.url : ""} alt="" />
  </>
);

export default CtaImage;

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  ${below.xxl`
    width: 46%;
  `}
`;
