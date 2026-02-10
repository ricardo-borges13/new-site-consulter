import styled, { css } from 'styled-components';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline-white'
  | 'lightPrimary'
  | 'headerMain';
type HeightVariant = 'small' | 'large';

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $heightVariant?: HeightVariant; // Props do componente styled
}>`
  border: none;
  /* border-radius: 10px; */
  /* font-size: 1.3rem; */
  /* font-weight: bold; */
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
      case 'lightPrimary': // New variant
        return css`
          background-color: ${({ theme }) => theme.colors.lightPrimary};
          color: ${theme.colors.black};
          font-size: ${({ theme }) => theme.spacing.medium};
          font-weight: 600;
          border: none;
          border-radius: 30px;
          padding: 0.9rem 2.2rem;
          transition: all 0.25s ease;
          &:hover {
            background-color: ${({ theme }) => theme.colors.primaryDark};
            transform: translateY(-2px);
          }
        `;
      case 'headerMain':
        return css`
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          background: linear-gradient(
            32deg,
            ${theme.colors.primary} 0%,
            ${theme.hexToRgba(theme.colors.primary, 0.7)} 100%
          );
          color: ${theme.colors.white};

          font-weight: 600;
          padding: 0.4rem 1.4rem;
          min-width: 120px;
          border-radius: 3px;
          border: none;
          transition: all 0.3s ease;

         &:hover {

            color: ${theme.colors.darkGray};
          }

          @media (max-width: ${theme.breakpoints.smallMobile}) {
            display: none;
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
