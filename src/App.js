import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import GlobalStyle from './Global';

import NavBar from './components/NavBar/NavBar';
import CalltoAction from "./components/CalltoAction/CalltoAction"
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

import StyleSwitch from "./elements/StyleSwitch";

import { gray00, gray85 } from "./utilities/colors"

const themeLight = {
  colors: {
    primary: `${gray00}`,
  }
}

const themeDark = {
  colors: {
    primary: `${gray85}`,
  }
}

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
      <ThemeProvider theme={ this.state.darkmode ? themeDark : themeLight }>
        <Wrapper>
          <NavBar />
          <CalltoAction />
          <About />
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
  background-color: ${props => props.theme.colors.primary};
  transition: 0.3s ease all;
  z-index: -5;
`;