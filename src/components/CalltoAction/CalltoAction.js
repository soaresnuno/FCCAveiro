import React from "react";
import styled from "styled-components";

import CtaText from "./CtaText";
import CtaImage from "./CtaImage"

const CalltoAction = () => (
  <>
    <Grid>
      <CtaText />
    </Grid>
    <CtaImage />
  </>
);

export default CalltoAction;

const Grid = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 700px;
`;