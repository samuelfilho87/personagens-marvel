import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --red: #ED1D24;
    --dark-red: #CE0106;
    --black: #151515;
    --background: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2 {
    font-family: 'Roboto Condensed', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;