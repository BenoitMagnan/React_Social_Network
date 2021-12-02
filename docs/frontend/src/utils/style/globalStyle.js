import { createGlobalStyle } from 'styled-components';
import { useTheme } from '../hooks';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  mediumColors,
  darkestColors,
  darkerColors,
  lighterColors,
  lightestColors,
} from './colors/';

function GlobalStyle() {
  const { theme } = useTheme();
  return <StyledGlobalStyle theme={theme} />;
}

const StyledGlobalStyle = createGlobalStyle`
* {
    margin: 0;
    border: none;
    padding: 0;
    text-align: justify;
    transition: 0.33s;
}

body {
    background-color: ${({ theme }) =>
      theme === 'light' ? `${darkerColors.grey}` : `${lightestColors.grey}`};
    line-height: 2.2em;
}

.content {
    background: ${({ theme }) =>
      theme === 'light' ? `${mediumColors.grey}` : `${lightestColors.grey}`};
    color: ${({ theme }) =>
      theme === 'light' ? `${lightestColors.grey}` : `${darkestColors.grey}`};
    border-radius: 5px;
    width: 70vw;
    margin: 5vh auto;
    padding: 10px 20px;
    box-shadow: ${({ theme }) =>
      theme === 'light'
        ? `0px 0px 15px ${darkestColors.grey}`
        : `0px 0px 15px ${lighterColors.grey}`};
}

h1, h2, h3, h4, h5, h6{
    text-align: left;
    color: ${({ theme }) =>
      theme === 'light' ? `${lightestColors.grey}` : `${darkestColors.grey}`};
    margin: 20px 0px;
    font-weight: 700;
    text-decoration: ${({ theme }) =>
      theme === 'light'
        ? `underline ${lightestColors.primary} 2px`
        : `underline ${darkerColors.secondary} 2px`};
    line-height: 1.8em;
}

strong {
    color: ${({ theme }) =>
      theme === 'light'
        ? ` ${lightestColors.primary}`
        : ` ${darkerColors.secondary}`};
    font-weight: 700;
}

mark {
    color: ${({ theme }) =>
      theme === 'light' ? `${darkestColors.grey}` : `${lightestColors.grey}`};
    background: ${({ theme }) =>
      theme === 'light'
        ? `${lightestColors.primary}`
        : `${darkerColors.secondary}`};
    padding: 5px;
    border-radius: 5px;
}
`;

export const StyledLink = styled(Link)`
  font-weight: 700;
  margin: 0 0.5rem;
  color: ${({ theme }) =>
    theme === 'light'
      ? ` ${mediumColors.secondary}`
      : ` ${darkerColors.secondary}`};
  &:hover {
    text-decoration: none;
  }

  &:focus {
    text-decoration: underline;
    outline-offset: 0.5em;
    outline-style: solid;
    border-radius: 5px;
  }
`;

export default GlobalStyle;
