import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }

    body {
        color: ${props => props.theme.text['primary']};
        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;