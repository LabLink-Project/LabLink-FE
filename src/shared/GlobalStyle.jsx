import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: Pretendard, sans-serif
    }

    h1, h2, p, ul {
        margin: 0;

    }

    ul {
        padding: 0;
        list-style-type: none
    }

    input {
        border: 0;
        padding: 0;
        background-color: inherit;
    }

    input:focus {
        outline: none
    }
`;
