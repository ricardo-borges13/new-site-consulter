import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline-white';
type HeightVariant = 'small' | 'large';

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $heightVariant?: HeightVariant; // Props do componente styled
}>`
  border: none;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ $heightVariant }) =>
    $heightVariant === 'small'
      ? css`
          padding: 0.2rem 1.8rem;
        `
      : css`
          padding: 0.8rem 1.4rem;
        `}

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background: linear-gradient(
            32deg,
            ${theme.colors.primary} 0%,
            ${theme.hexToRgba(theme.colors.primary, 0.7)} 100%
          ) !important;
          color: ${theme.colors.white};

          &:hover {
            background: ${theme.colors.primaryDark};
            color: ${theme.colors.darkGray};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.white};

          &:hover {
            background-color: ${theme.hexToRgba(theme.colors.secondary, 0.8)};
          }
        `;
      case 'outline-white': // New variant
        return css`
          background-color: transparent;
          color: ${theme.colors.white};
          border: 2px solid ${theme.colors.white};

          &:hover {
            background-color: ${theme.hexToRgba(theme.colors.white, 0.1)};
          }
        `;
      default:
        return css``;
    }
  }}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-weight: normal;
    font-size: 1.1rem;
    ${({ $heightVariant }) =>
      $heightVariant === 'small'
        ? css`
            padding: 0.1rem 1rem;
          `
        : css`
            padding: 0.6rem 1.2rem;
          `}
  }

  @media (max-width: 490px) {
    /* This breakpoint is not in theme, keeping as is for now */
    font-weight: normal;
    font-size: 0.9rem;
    ${({ $heightVariant }) =>
      $heightVariant === 'small'
        ? css`
            padding: 0.1rem 1rem;
          `
        : css`
            padding: 0.6rem 1.2rem;
          `}
  }
`;
