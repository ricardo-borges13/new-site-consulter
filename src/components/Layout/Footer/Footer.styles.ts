import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #e3b021;
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  margin-top: 4rem;
  caret-color: transparent;
  padding-bottom: 0; /* reduz espaçamento geral */
  overflow-x: hidden;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.2fr;
  align-items: start;
  padding: 1rem 3rem 0rem 3rem;
  gap: 1rem;

  @media (max-width: 915px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    text-align: center;
  }

  /* mobile */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    margin-bottom: 0.5rem;

    @media (max-width: 900px) {
      width: 150px;
    }

    @media (max-width: 730px) {
      width: 120px;
    }
  }
`;

export const FooterColumn = styled.div`
  h4 {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    position: relative;
    text-shadow: 2px 2px 2px black;

    &::after {
      content: '';
      display: block;
      width: 200px;
      height: 2px;
      background-color: #fff;
      margin-top: 4px;

      @media (max-width: 1050px) {
        width: 100px;
        justify-content: center;
      }

      @media (max-width: 916px) {
        width: 220px;
        justify-content: center;
      }

      @media (max-width: 600px) {
        width: 250px;
        justify-content: center;
      }
    }
  }

  address {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-style: normal;
    line-height: 1.4;
    align-items: start;

    @media (max-width: 915px) {
      align-items: center;
    }

    a {
      color: inherit;
      text-decoration: none;
      font-size: 0.9rem;

      &:hover {
        color: #f8f5edff; /* cor de destaque */
      }
    }

    span {
      @media (max-width: 840px) {
        font-size: 12px;
      }

      span {
        @media (max-width: 725px) {
          font-size: 11px;
        }
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 0.3rem;

    li {
      margin: 0.4rem 0;

      a {
        color: #000;
        text-decoration: none;
        transition: opacity 0.2s;

        &:hover {
          color: #f8f5edff;
        }

        @media (max-width: 730px) {
          font-size: 0.85rem;
        }
      }
    }
  }
  svg {
    font-size: 1rem;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  border-top: 2px solid #fff;
  font-size: 0.85rem;
  margin-top: 0.5rem; /* ↓ estava alto, reduza aqui */
  padding-top: 0.5rem; /* ↓ reduz espaço interno */
  line-height: 1.3;

  @media (max-width: 730px) {
    font-size: 0.75rem;
    padding: 0.5rem 0.5rem;
    margin-bottom: 3rem; /* ainda mais compacto no mobile */
  }
`;

export const Icone = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    font-size: 1.2rem; /* ← aqui você controla o tamanho do ícone */
    color: #000; /* pode mudar a cor se quiser */

    @media (max-width: 840px) {
      font-size: 1rem;
    }
  }
`;
