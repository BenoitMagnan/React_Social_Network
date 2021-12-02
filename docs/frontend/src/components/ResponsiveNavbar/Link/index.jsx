import React from 'react';
import StyledNavLink from './Link';
import darkLogo from '../../../assets/icon-left-font-monochrome-white.svg';
import lightLogo from '../../../assets/icon-left-font-monochrome-black.svg';
import { useTheme } from '../../../utils/hooks';

function Home() {
  const { theme } = useTheme();
  return (
    <StyledNavLink
      to="/"
      aria-label="Se rendre à la page d'accueil"
      theme={theme}
      logo
    >
      {theme === 'light' ? (
        <img
          src={darkLogo}
          style={{ width: '10em' }}
          alt="Logo de Groupomania"
        />
      ) : (
        <img
          src={lightLogo}
          style={{ width: '10em' }}
          alt="Logo de Groupomania"
        />
      )}
    </StyledNavLink>
  );
}

function About() {
  const { theme } = useTheme();
  return (
    <StyledNavLink
      to="/about"
      aria-label="Se rendre à la page About"
      theme={theme}
    >
      About
    </StyledNavLink>
  );
}

function Prout() {
  const { theme } = useTheme();
  return (
    <StyledNavLink
      to="/prout"
      aria-label="Se rendre à la page Prout"
      theme={theme}
    >
      Prout
    </StyledNavLink>
  );
}

function Signup() {
  const { theme } = useTheme();
  return (
    <StyledNavLink
      to="/signup"
      aria-label="Se rendre à la page Signup"
      theme={theme}
    >
      Sign up
    </StyledNavLink>
  );
}

function Login() {
  const { theme } = useTheme();
  return (
    <StyledNavLink
      to="/login"
      aria-label="Se rendre à la page Login"
      className="hightLightStyle"
      theme={theme}
    >
      Login
    </StyledNavLink>
  );
}

export { Home, About, Prout, Signup, Login };
