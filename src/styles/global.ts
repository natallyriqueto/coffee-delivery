import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['purple']};
    }
    
    body, input, textarea, button {
        font: 400 1rem 'Roboto';
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