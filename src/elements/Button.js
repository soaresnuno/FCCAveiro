/* eslint-disable import/prefer-default-export */

import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

import { elevation, darkGreen, lightGreen, gray00, gray90 } from "../utilities";

const BUTTON_MODIFIERS = {
  square: () => `
    border-radius: 0px;
  `
};

export const Button = styled.a`
  border: none;
  color: ${gray00};
  background-image: linear-gradient(
    131deg,
    ${lightGreen},
    ${darkGreen},
    ${darkGreen},
    ${darkGreen}
  );
  cursor: pointer;
  font-size: 14px;
  padding: 14px 40px;
  border-radius: 50px;
  transition: all 0.4s ease-in-out;
  background-size: 300% 100%;
  text-decoration: none;

  &:hover {
    ${elevation[3]};
    background-image: linear-gradient(
      131deg,
      ${lightGreen},
      ${lightGreen},
      ${darkGreen}
    );
    color: ${gray90};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
