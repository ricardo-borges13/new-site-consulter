import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
  font-size: 16px;
  min-height: 100%;
}

  body {
  margin: 0;
  min-height: 100%;
  font-family: 'Poppins', sans-serif;
  background-color: #F9FAFB;
  background: linear-gradient(
    180deg,
    #f6f6f6 0%,
    #eeeeee 100%,
);

  color: #1A1A1A;
  overflow-x: hidden;
  }
`

