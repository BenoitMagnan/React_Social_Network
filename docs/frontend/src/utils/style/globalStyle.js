import { createGlobalStyle } from 'styled-components';
import {
  mediumColors,
  darkestColors,
  darkerColors,
  lighterColors,
  lightestColors,
} from './colors/';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    border: none;
    padding: 0;
    text-align: justify;
}

body {
    background-color: ${darkerColors.grey};
    line-height: 2.2em;
}

.content {
    background: ${mediumColors.grey};
    color: #fff;
    border-radius: 5px;
    width: 70vw;
    margin: 5vh auto;
    padding: 10px 20px;
}

h1, h2, h3, h4, h5, h6{
    text-align: left;
    color: #fff;
    margin: 20px 0px;
    font-weight: 700;
    text-decoration: underline ${mediumColors.secondary} 2px;
    line-height: 1.8em;
}

strong {
    color: ${mediumColors.secondary};
}

mark {
    background: ${lightestColors.primary};
    padding: 5px;
    border-radius: 5px;
}
`;

export default GlobalStyle;
