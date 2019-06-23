import React, { Component } from 'react';
import styled from 'styled-components';

import { gray00, darkGreen, below } from '../../utilities';

class Contacts extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  formUpdate = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <ContactsWrapper>
          <FormWrapper>
            <form onSubmit={this.handleSubmit}>
              <StyledDiv>
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" placeholder="Your Name" name="name" value={this.state.name} onChange={this.formUpdate}/>
              </StyledDiv>
              <StyledDiv>
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" placeholder="Your Email Adress" name="email" value={this.state.email} onChange={this.formUpdate}/>
              </StyledDiv>
              <StyledDiv>
                <label htmlFor="message">Message :</label>
                <input type="text" id="message" placeholder="Your Message" name="message" value={this.state.message} onChange={this.formUpdate}/>
              </StyledDiv>
              <button type="submit">Send</button>
            </form>
          </FormWrapper>
        </ContactsWrapper>
      </>
    );
  }
}

export default Contacts;

const ContactsWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%; 
  grid-template-rows: auto;
  padding-left: 40px;
  padding: 50px 90px;
  background-color: ${props => props.theme.colors.backgroundAlt};

  ${below.xxl`
    padding: 50px 70px;
  `}
`;

const FormWrapper = styled.div`
  grid-row: 1, 2;
  position: relative;

  & input {
    padding-left: 10px;
    border: none;
    outline: none;
    background: none;
    width: 80%;
    font-family: "Poppins", sans-serif;
  }

  & input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
  }

  & input {
    font-size: 14px;
  }

  & button {
    margin-top: 20px;
    background: none;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    width: 100%;
    transition: all 300ms linear 0s;
    font-family: "Poppins", sans-serif;
    padding: 5px;
  }

  & button:hover {
    color: ${gray00};
    background-color: ${darkGreen};
    border: 1px solid ${gray00};
  }
`;

const StyledDiv = styled.div`
  padding: 5px 0;
  overflow: hidden;
  font-size: 16px;
  border-bottom: 1px solid black;
  color: black;
`;
