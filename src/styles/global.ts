import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    body {
        font: 400 1rem;
        -webkit-font-smoothing: antialiased;
        line-height: 1.3;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 800px) {
        html {
            font-size: 87%;
        }
    }
`;