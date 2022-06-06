import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ${({ theme }) => css`
    html {
      font-size: 92.5%;
    }
    body {
      background: ${theme.colors.background};
    }
    body,
    input,
    button,
    textarea {
      border: none;
      outline: inherit;
      color: ${theme.colors.text};
      font-family: ${theme.fonts.family};
    }
    button,
    a {
      cursor: pointer;
      color: inherit;
      text-decoration: none;
    }
  `}
`;
