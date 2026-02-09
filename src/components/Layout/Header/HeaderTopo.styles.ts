import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({theme}) => theme.colors.darkGray};
  border-bottom: 3px solid ${({theme}) => theme.colors.primary};
  color: #f1f1efff;
  font-size: 1.02rem;
  z-index: 1100;
  caret-color: transparent;
`;

export const Container = styled.div`
  max-width: ${({theme}) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;


  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${({theme}) => theme.colors.primary};
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.spacing.small};

    svg {
      font-size: 1.5rem;
      color: ${({theme}) => theme.colors.primary};
    }
  }

  /* o texto à esquerda ocupa o máximo possível */
  > div:first-child {
    flex: 1;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.extraSmallTablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0;

    > div {
      justify-content: center;
    }

    > div:first-child {
      flex: unset;
    }
    span {
      display: none;
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.smallMobile}) {
    font-size: 0.8rem;

    a {
      font-size: 1.1rem;
    }
  }
`;
