import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #1a1a1a; //0a0a0af5 666565f5

   border-bottom: 3px solid #94c11f;

  color: #f1f1efff;
  font-size: 1.02rem;
  z-index: 1100; /* acima do HeaderMain */
  caret-color: transparent;
`;

export const Container = styled.div`
  max-width: 1200px;
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
      color: #94C11F; /* cor de destaque */
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.5rem;
      color: #94C11F;
    }
  }

  /* o texto à esquerda ocupa o máximo possível */
  > div:first-child {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0;
    font-size: 0.7rem;

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

  @media (max-width: 770px) {
    font-size: 0.6rem;

    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 550px) {
    font-size: 0.8rem;

    a {
      font-size: 1.1rem;
    }
  }
`;
