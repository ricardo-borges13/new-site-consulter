import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary';
type HeightVariant = 'small' | 'large';

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $heightVariant?: HeightVariant;
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

  ${({ $variant }) =>
    $variant === 'primary'
      ? css`
          background: linear-gradient(
            32deg,
            rgb(148, 193, 31) 0%,
            rgba(175, 197, 119, 1) 100%
          ) !important;
          color: #fff;

          &:hover {
            background: #f4c27b;
            color: #121212;
          }
        `
      : css`
          background-color: #001837;
          color: #fffbfb;

          &:hover {
            background-color: #064391;
          }
        `}

        @media (max-width: 550px) {
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
