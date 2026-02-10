import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

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
  font-family: ${({ theme }) => theme.fonts.body};
  background-color: ${({ theme }) => theme.colors.background.global};
  background: linear-gradient(
    180deg,
    ${props => (props.theme as any).colors.lightGray} 0%,
    ${props => (props.theme as any).colors.mediumGray} 100%

);

  color: ${({ theme }) => theme.colors.darkGray};
  overflow-x: hidden;
  }
`;
