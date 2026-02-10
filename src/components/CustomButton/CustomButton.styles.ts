import styled, { css } from 'styled-components';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline-white'
  | 'lightPrimary'
  | 'headerMain'
  | 'cta';

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
}>`
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

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
          border-radius: 10px;
          font-weight: bold;
          padding: 0.8rem 1.4rem;

          &:hover {
            background: ${theme.colors.primaryDark};
            color: ${theme.colors.darkGray};
          }

          &:active {
            background-color: ${theme.colors.secondary};
            transform: scale(0.98);
          }
        `;
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.white};
          padding: 0.8rem;
          border: none;
          border-radius: 10px;
          font-weight: bold;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: ${theme.hexToRgba(theme.colors.secondary, 0.8)};
          }

          &:active {
            background-color: ${theme.colors.secondary};
            transform: scale(0.98);
          }
        `;
      case 'outline-white':
        return css`
          background-color: transparent;
          color: ${theme.colors.white};
          border-radius: 10px;
          font-weight: bold;
          border: 2px solid ${theme.colors.white};
          padding: 0.8rem 1.4rem;

          &:hover {
            background-color: ${theme.hexToRgba(theme.colors.white, 0.2)};
          }

          &:active {
            background-color: ${theme.colors.secondary};
            transform: scale(0.98);
          }
        `;
      case 'lightPrimary':
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

          &:active {
            background-color: ${theme.colors.secondary};
            transform: scale(0.98);
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
          border-radius: 15px;
          border: none;
          transition: all 0.3s ease;

          &:hover {
            color: ${theme.colors.darkGray};
          }

          &:active {
            background-color: ${theme.colors.secondary};
            transform: scale(0.98);
          }

          @media (max-width: ${theme.breakpoints.smallMobile}) {
            display: none;
          }
        `;

      case 'cta':
        return css`
          background-color: ${({ theme }) => theme.colors.ctaGreen};
          color: ${({ theme }) => theme.colors.white};
          border: none;
          padding: 0.9rem ${({ theme }) => theme.spacing.large};
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;

          &:hover {
            background-color: ${({ theme }) => theme.colors.ctaGreenDark};
            transform: translateY(-2px);
          }

          &:active {
            background-color: ${theme.colors.secondary};
            transform: scale(0.98);
          }
        `;

      default:
        return css``;
    }
  }}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-weight: normal;
    font-size: 1.1rem;
    padding: 0.6rem 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmallMobile}) {
    font-weight: normal;
    font-size: 0.9rem;
  }
`;
