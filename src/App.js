import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import GlobalStyle from "./styles/Global"

import NavBar from './components/NavBar/NavBar';
import CalltoAction from "./components/CalltoAction/CalltoAction"
import About from "./components/About/About";
import Provide from "./components/Provide/Provide"
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer";

import StyleSwitch from "./elements/StyleSwitch";

import { ThemeLight, ThemeDark } from './themes';

class App extends Component {
  
  state = {
    darkmode: false,
    darkicon: true,
  }

  toggleDarkMode = () => {
    this.setState({
      darkmode: !this.state.darkmode,
      darkicon: !this.state.darkicon,
    })
  }

  render() {
    return (
      <>
      <ThemeProvider theme={ this.state.darkmode ? ThemeDark : ThemeLight }>
        <Wrapper>
          <NavBar />
          <CalltoAction />
          <About />
          <Provide />
          <Contacts />
          <Footer />
        </Wrapper>
      </ThemeProvider>
      <GlobalStyle />
      <div onClick={this.toggleDarkMode}>
        <StyleSwitch icon={this.state.darkicon}/>
      </div>
      </>
    );
  }
};

export default App;

const Wrapper = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.background};
  transition: 0.3s ease all;
  z-index: -5;
`;