import styled from 'styled-components';

// Styled Components
export const CarouselContainer = styled.div`
  caret-color: transparent;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.hexToRgba(
      theme.colors.lightGray,
      0.96
    )}; /* #f7f7f7f7 is close to lightGray */
  padding: ${({ theme }) => theme.spacing.large} 0;
  position: relative;
  .react-multi-carousel-list {
    width: 100%;
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.2rem;
  box-shadow: 0px 4px 10px
    ${({ theme }) => theme.hexToRgba(theme.colors.error, 0.08)}; /* rgba(131, 18, 18, 0.08) - using error color for approximation */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin: ${({ theme }) => theme.spacing.small};
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 6px 14px
      ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.1)};
  }

  img {
    max-height: 60px;
    max-width: 90%;
    object-fit: contain;
  }
`;

export const ArrowButton = styled.button<{ $side: 'left' | 'right' }>`
  background: none;
  border: none;
  color: ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.8)}; /* #333 */
  font-size: ${({ theme }) => theme.spacing.large}; /* 2rem */
  cursor: pointer;
  position: absolute !important;
  top: 50%;
  ${({ $side }) => ($side === 'left' ? 'left: 0;' : 'right: 0;')}
  transform: translateY(-50%);
  z-index: 10;
  padding: ${({ theme }) => theme.spacing.small};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    transform: translateY(-50%) scale(1.1);
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 4px;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.94)},
    transparent
  ); /* #0f0f0f */
  margin: ${({ theme }) => theme.spacing.medium} auto;
  width: 80%;
  border-radius: 2px;
`;
