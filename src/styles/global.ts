import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    /* body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    } */

    body {
        font: 400 1rem;
        padding: 0 160px 0 160px;
        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;