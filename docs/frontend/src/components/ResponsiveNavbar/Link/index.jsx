import React from 'react';
import StyledLink from './Link';
import logo from '../../../assets/icon-left-font-monochrome-white.svg';

function Home() {
  return (
    <StyledLink to="/">
      <img src={logo} style={{ width: '10em' }} alt="Groupomania" />
    </StyledLink>
  );
}

function About() {
  return (
    <StyledLink to="/about" activeStyle>
      About
    </StyledLink>
  );
}

function Prout() {
  return (
    <StyledLink to="/prout" activeStyle>
      Prout
    </StyledLink>
  );
}

function Signup() {
  return (
    <StyledLink to="/signup" activeStyle>
      Sign up
    </StyledLink>
  );
}

function Login() {
  return (
    <StyledLink to="/login" focusStyle>
      Login
    </StyledLink>
  );
}

export { Home, About, Prout, Signup, Login };
