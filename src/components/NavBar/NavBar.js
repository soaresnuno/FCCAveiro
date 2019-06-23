/* eslint-disable import/prefer-default-export */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { darkGreen, gray00, elevation } from '../../utilities';

import Logo from './Logo';
import LogoGreen from './LogoGreen';
import BurgerMenu from './Burgermenu';
import Menu from './Menu';

const NavBar = ({ dropdownVisibility }) => (
  <NavWrapper>
    <StyledNavbar>
      { !dropdownVisibility ? (
        <>
          <Logo />
          <BurgerMenu />
        </>
      ) : (
        <>
          <LogoGreen />
          <BurgerMenu />
        </>
      )}
      <Menu />
    </StyledNavbar>
  </NavWrapper>
);

const mapStateToProps = state => ({
  dropdownVisibility: state.navbar.dropdownVisibility,
});

export default connect(mapStateToProps)(NavBar);

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  ${elevation[2]};
`;

const StyledNavbar = styled.div` 
  display: flex;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: ${gray00};
  background-color: ${darkGreen};
  padding: 13px 5%;
`;
