import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100dvw;
    height: 100dvh;
    
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.white};
    font-family: 'Open sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    > div#root {
      width: 100%;
      height: 100%;
    }
  }

  button, input {
    border: none;
    outline: none;
    background: none;
  }

  button {
    transition: all 0.2s;
    cursor: pointer;
    line-height: 0;
  }

  a {
    transition: all 0.2s;
    text-decoration: none;
    cursor: pointer;
  }
`
