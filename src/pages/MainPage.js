import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar/NavBar';
import CalltoAction from '../components/CalltoAction/CalltoAction';
import About from '../components/About/About';
import Provide from '../components/Provide/Provide';
import Contacts from '../components/Contacts/Contacts';
import Footer from '../components/Footer/Footer';

import StyleSwitch from '../elements/StyleSwitch';

import { ThemeLight, ThemeDark } from '../themes';

const MainPage = ({ darkmode }) => (
  <ThemeProvider theme={darkmode ? ThemeDark : ThemeLight}>
    <Wrapper>
      <NavBar />
      <CalltoAction />
      <About />
      <Provide />
      <Contacts />
      <Footer />
      <StyleSwitch />
    </Wrapper>
  </ThemeProvider>
);

const mapStateToProps = state => ({
  darkmode: state.darkmode.darkmode,
});

export default connect(mapStateToProps)(MainPage);

const Wrapper = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.background};
  transition: 0.3s ease all;
  z-index: -5;
`;
