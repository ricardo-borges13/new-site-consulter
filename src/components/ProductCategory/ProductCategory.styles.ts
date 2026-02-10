import styled from 'styled-components';

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all 0.3s ease;
  caret-color: transparent;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 32px
      ${({ theme }) => theme.hexToRgba(theme.colors.black, 0.12)};
  }
`;

export const Header = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  align-items: center;
  gap: 14px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.hexToRgba(theme.colors.darkGray, 0.9)},
    /* #1e1e1e */ ${({ theme }) => theme.colors.primary}
      /* #7fae1b is close to primary */
  );

  img {
    width: 46px;
    height: 46px;
    object-fit: contain;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    padding: 6px;
  }
`;

export const CardHeader = styled.div`
  border-radius: 30px;
  padding: 10px 18px;
  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: ${({ theme }) => theme.spacing.medium}; /* 20px */
  margin: 0;
  flex: 1;

  li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 10px;
    font-size: 0.95rem;
    color: ${({ theme }) =>
      theme.hexToRgba(theme.colors.black, 0.8)}; /* #333 */

    &::before {
      content: '›';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
    }
  }
`;

export const Action = styled.button`
  display: flex;
  align-items: center;
  background-color: ${props =>
    (props.theme as any).colors
      .mediumGray}; /* #e0dede is close to mediumGray */
  gap: 6px;
  padding: 14px 20px;
  font-weight: 600;
  color: ${props => (props.theme as any).colors.success}; /* #1e7f4f */
  cursor: pointer;
  border-top: 1px solid
    ${props =>
      (props.theme as any).hexToRgba(
        (props.theme as any).colors.mediumGray,
        0.5
      )}; /* #eee is close to mediumGray */
  transition: all 0.2s ease;
  border: none;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    color: ${props => (props.theme as any).colors.primary};

    svg {
      transform: translateX(4px);
    }
  }
`;
