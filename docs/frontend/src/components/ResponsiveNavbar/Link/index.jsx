import React from 'react';
import { StyledNavLink } from './Link';
import logo from '../../../assets/icon-left-font-monochrome-white.svg';

function Home() {
  return (
    <StyledNavLink to="/" aria-label="Se rendre à la page d'accueil" logo focus>
      <img src={logo} style={{ width: '10em' }} alt="Logo de Groupomania" />
    </StyledNavLink>
  );
}

function About() {
  return (
    <StyledNavLink to="/about" aria-label="Se rendre à la page About" focus>
      About
    </StyledNavLink>
  );
}

function Prout() {
  return (
    <StyledNavLink to="/prout" aria-label="Se rendre à la page Prout" focus>
      Prout
    </StyledNavLink>
  );
}

function Signup() {
  return (
    <StyledNavLink to="/signup" aria-label="Se rendre à la page Signup" focus>
      Sign up
    </StyledNavLink>
  );
}

function Login() {
  return (
    <StyledNavLink
      to="/login"
      aria-label="Se rendre à la page Login"
      hightLightStyle
      focus
    >
      Login
    </StyledNavLink>
  );
}

export { Home, About, Prout, Signup, Login };
