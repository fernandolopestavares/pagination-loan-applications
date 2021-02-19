import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F2F6F6;
    -webkit-font-smoothing: antialiased;
    font-family: Montserrat;
    font-weight: normal;
    font-size: 1.3rem;
  }

  html, body, #root {
    height: 100vh;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
