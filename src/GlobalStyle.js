import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  html, body {
    background: var(--color-8);
    height: 100vh;
  }

  :root {
    --color-1: #FECACA; //opacity: 20%
    --color-2: #FDE68A; //opacity: 20%
    --color-3: #DBEDF3; //opacity: 20%
    --color-4: #000000; //opacity: 20%
    --color-5: #10B981;
    --color-6: #D1FAE5;
    --color-7: #6B7280; 
    --color-login-input: #F3F4F6;
    --color-9: #3B82F6;
    --color-10: #DBEAFE;
    --color-11: #F59E0B;
    --color-12: #FDE68A;
    --color-13: #FECACA;
    --color-main-button-hover: #85DEF2;
    --color-main-button: #009BDB;
    --color-16: #707070;
    --color-links: #575759;
    --color-login: #FFFFFF;
    --color-shadow: #FEFEFE;

    --color-error: #EF4444;

  }
`;