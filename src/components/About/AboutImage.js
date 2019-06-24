import React from "react";
import styled from "styled-components";

import { below } from "../../utilities";

const AboutImage = props => (
  <>
    <StyledImg src={props.data.imagem ? props.data.imagem.url : ""} alt="" />
  </>
);

export default AboutImage;

const StyledImg = styled.img`
  position: absolute;
  top: 20px;
  left: 0;

  ${below.xxl`
    top: 40px;
    width: 48%;
  `}
`;
