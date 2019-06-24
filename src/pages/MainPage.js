import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { connect } from "react-redux";

import { getAllData } from "../store/Content/actions";

import { bindActionCreators } from "redux";

import NavBar from "../components/NavBar/NavBar";
import CalltoAction from "../components/CalltoAction/CalltoAction";
import About from "../components/About/About";
import Provide from "../components/Provide/Provide";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";

import StyleSwitch from "../elements/StyleSwitch";

import { ThemeLight, ThemeDark } from "../themes";

class MainPage extends Component {
  componentDidMount() {
    const { getAllData } = this.props;
    getAllData();
  }
  render() {
    const { darkmode } = this.props;
    return (
      <ThemeProvider theme={darkmode ? ThemeDark : ThemeLight}>
        <Wrapper>
          <NavBar />
          <CalltoAction data={this.props.content} />
          <About data={this.props.content} />
          <Provide data={this.props.content} />
          <Contacts />
          <Footer />
          <StyleSwitch />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllData }, dispatch);

const mapStateToProps = state => ({
  darkmode: state.darkmode.darkmode,
  content: state.content.content
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

const Wrapper = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.background};
  transition: 0.3s ease all;
  z-index: -5;
`;
