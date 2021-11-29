import { createGlobalStyle } from 'styled-components';
import colors from './colors/baseColors';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    border: none;
    padding: 0;
    text-align: justify;
}

body {
    background-color: ${colors.backgroundLight};
    line-height: 2.2em;
}

.content {
    background: ${colors.tertiary};
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
    text-decoration: underline ${colors.primary} 2px;
    line-height: 1.8em;
}

strong {
    color: ${colors.primary};
}

mark {
    background: ${colors.primary};
    padding: 5px;
    border-radius: 5px;
}
`;

export default GlobalStyle;
