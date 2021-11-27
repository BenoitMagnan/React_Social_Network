import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    border: none;
    padding: 0;
}

body {
    background-color: ${colors.backgroundLight};
    line-height: 1.8em;
}

h1, h2, h3, h4, h5, h6{
    margin: 20px 0px;
    font-weight: 700;
    text-decoration: underline ${colors.primary} 2px;
}

strong {
    color: ${colors.secondary}
}

@media(min-width: 375px) {
    // body {background-color: lightblue} 
}
`;

export default GlobalStyle;
