import React, { Component } from 'react'
import styled from "styled-components";

import { darkGreen, gray00 } from "../../utilities";

import Logo from "./Logo";
import LogoGreen from "./LogoGreen";
import OpenIcon from './OpenIcon';
import CloseIcon from "./CloseIcon";
import Menu from "./Menu";

class NavBar extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen})
  }

  render() {
    return (
      <NavWrapper>
        <StyledNavbar>
          { !this.state.navbarOpen ? 
          <>
            <Logo />
            <OpenIcon toggle={this.handleNavbar} color={this.state.navbarOpen} /> 
          </> : <>
            <LogoGreen />
            <CloseIcon toggle={this.handleNavbar} color={this.state.navbarOpen} />
          </>
          }
          <Menu toggle={this.state} />
        </StyledNavbar>
      </NavWrapper>
    )
  }
}

export default NavBar;

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const StyledNavbar = styled.div` 
  display: flex;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: ${gray00};
  background-color: ${darkGreen};
  padding: 13px 5%;
`;