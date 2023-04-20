import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* global style */

    body {
        font-family: Pretendard, sans-serif
    }

    .App {
        width: 375px;
        margin: 0 auto;
    }

    /* reset css */

    h1, h2, p, ul, body, input {
        margin: 0;

    }

    ul {
        padding: 0;
    }

    li {
        list-style-type: none;
    }

    input {
        border: 0;
        padding: 0;
        background-color: inherit;
    }

    input:focus {
        outline: none
    }

    button {
        background-color: inherit;
        border: none;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
